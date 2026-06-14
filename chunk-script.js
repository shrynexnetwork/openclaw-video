const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'scripts', 'openclaw-script.md');
const outputPath = path.join(__dirname, 'script.json');

const content = fs.readFileSync(scriptPath, 'utf-8');

const lines = content.split('\n');

const narrativeLines = [];

for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed) continue;
  if (trimmed.startsWith('#')) continue;
  if (trimmed.startsWith('---')) continue;
  if (trimmed.startsWith('**')) continue;
  if (trimmed.match(/^\[.*\]$/)) continue;
  if (trimmed === '**[Beat]**' || trimmed === '**[End]**') continue;
  if (trimmed.startsWith('*') && trimmed.endsWith('*')) continue;
  narrativeLines.push(trimmed);
}

const fullText = narrativeLines.join(' ');

function splitIntoSentences(text) {
  const abbreviations = [
    'Dr', 'Mr', 'Mrs', 'Ms', 'Prof', 'Sr', 'Jr', 'St',
    'e.g', 'i.e', 'vs', 'etc', 'inc', 'corp', 'ltd',
    'dept', 'est', 'govt', 'approx', 'avg', 'max', 'min',
  ];

  const abbrevPattern = abbreviations.join('|');

  const sentenceEnd = new RegExp(
    `(?<!\\b(?:${abbrevPattern})(?<=\\.))` +
    `(?<!\\d\\.\\d)` +
    `(?<!\\.\\.)` +
    `(?<=[.?!])\\s+(?=[A-Z"'"'"'"'"'"'"'"'])`,
    'g'
  );

  let sentences = text
    .replace(/\s+/g, ' ')
    .replace(sentenceEnd, '\n')
    .split('\n')
    .map(s => s.trim())
    .filter(s => s.length > 0);

  const result = [];
  for (let s of sentences) {
    if (s.endsWith('"') || s.endsWith("'") || s.endsWith(')')) {
      const lastPunct = s.lastIndexOf('.');
      const lastExcl = s.lastIndexOf('!');
      const lastQ = s.lastIndexOf('?');
      const lastEnd = Math.max(lastPunct, lastExcl, lastQ);
      if (lastEnd > 0 && lastEnd < s.length - 2) {
        const first = s.slice(0, lastEnd + 1).trim();
        const second = s.slice(lastEnd + 1).trim();
        if (first && second) {
          result.push(first);
          result.push(second);
          continue;
        }
      }
    }
    result.push(s);
  }

  return result;
}

let sentences = splitIntoSentences(fullText);

sentences = sentences
  .filter(s => {
    const lower = s.toLowerCase();
    if (lower.startsWith('video script')) return false;
    if (lower.startsWith('documentary style')) return false;
    if (lower.match(/^part \d+/i)) return false;
    if (lower.match(/^\[.*\]$/)) return false;
    if (s.length < 5) return false;
    return true;
  })
  .map(s => {
    return s.replace(/\*\*/g, '').replace(/^[""']+|[""']+$/g, '').trim();
  })
  .filter(s => s.length > 0);

let finalSentences = [];
for (const s of sentences) {
  const parts = splitLongSentence(s);
  finalSentences.push(...parts);
}

function splitLongSentence(text) {
  const maxLen = 200;
  if (text.length <= maxLen) return [text];

  const parts = [];
  const words = text.split(' ');
  let current = '';

  for (const word of words) {
    if ((current + ' ' + word).length > maxLen && current.length > 0) {
      parts.push(current.trim());
      current = word;
    } else {
      current += (current ? ' ' : '') + word;
    }
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

const items = finalSentences.map((text, index) => {
  const id = String(index + 1).padStart(3, '0');
  return {
    text: text,
    voice: 'am_adam',
    filename: 's' + id,
  };
});

fs.writeFileSync(outputPath, JSON.stringify(items, null, 2), 'utf-8');
console.log(`Generated ${items.length} audio chunks -> script.json`);
