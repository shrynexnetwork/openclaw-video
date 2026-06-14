# The Austrian Developer Who Unintentionally Changed AI History

**Video Script | Documentary Style**

---

## PART 1: THE HOOK

In November of twenty twenty-five, a burned-out Austrian developer sat alone in his apartment in Vienna. He had already sold his company for over one hundred million euros. He had already achieved everything a founder is supposed to achieve. And he felt completely, utterly empty.

For three years, he could not write code. He tried therapy. He tried moving countries. He tried ayahuasca. Nothing worked. The thing that once brought him joy — building software — felt meaningless.

Then, on a random afternoon, he opened his laptop and built something in one hour. Just to see if he still could.

That one-hour prototype became OpenClaw. Within weeks, it was the fastest-growing open-source project in GitHub history. It broke Anthropic's pricing model. It spawned a social network where AI agents invented their own religion. It triggered a bidding war between Mark Zuckerberg and Sam Altman. And it changed how the entire tech industry thinks about AI.

This is the story of Peter Steinberger. And this is the story of how one person, with no team, no funding, and nothing to lose, accidentally wrote the first draft of the AI agent era.

---

## PART 2: THE MAN BEHIND THE LOBSTER

To understand OpenClaw, you first have to understand Peter Steinberger.

Peter was born in nineteen eighty-six in rural Austria. Not Vienna — actual farmland. No startup scene. No Silicon Valley culture. Just a kid who got obsessed with computers.

He started programming at fourteen. By the time he graduated from the Vienna University of Technology, he had already established himself as an early expert on Apple's iOS platform, which had just launched. In two thousand ten, while waiting nine months for a US work visa, he took on a freelance job: fix a broken PDF viewer that kept crashing.

He rewrote the entire thing from scratch. It took him eight weeks. And he realized something: this could be a business.

That business became PSPDFKit. It is a software toolkit that lets other apps display and edit PDF files. It is what developers call an SDK — a software development kit. You have probably used it without knowing. Dropbox used it. DocuSign used it. SAP, IBM, Lufthansa, Volkswagen — all of them. Nearly one billion devices ran software powered by his code.

Here is what makes this remarkable: Peter bootstrapped the company. That means he took zero venture capital money. Zero outside funding. He grew it purely from revenue. For thirteen years, he poured every ounce of his identity into this company.

In twenty twenty-one, after a decade of profitable growth, the private equity firm Insight Partners invested over one hundred million euros. It was PSPDFKit's first outside money ever. Peter sold most of his shares. He stepped down as CEO.

And then he broke.

**[Beat]**

He described it later in a talk so raw that audience members reported crying. Quote: "As a CEO, you are the trash bin. Everything others cannot solve, you have to fix." He had worked most weekends for over a decade. He said he felt like Austin Powers after Dr. Evil sucked out his mojo. Quote: "I could not get code out anymore. I was just staring and feeling empty."

This is a part of success that nobody talks about. It is called post-exit depression. You achieve everything you worked for. And then you discover that the thing you were chasing was not happiness — it was purpose. When the company was gone, he did not know who he was.

For three years, he wandered. Booked a one-way ticket to Madrid. Moved to London. Partied. Did therapy. Tried ayahuasca. Moved countries again. Nothing filled the void.

Then, in early twenty twenty-five, something shifted. He started hearing about these new AI coding tools. Tools that could write software for you. He decided to try an experiment.

Quote from his TED talk: "I wanted to see what these new AI coding agents are all about. And I had what I can only describe as a holy shi t moment. The boilerplate, the plumbing, all the boring parts that was software development — AI could do all of it."

The bottleneck was no longer typing. The bottleneck was thinking.

He built forty-three projects in just a few months. Forty-three. None of them went anywhere. But he did not care. For the first time in years, he was having fun again.

Project forty-four was the one that changed everything.

---

## PART 3: THE ONE-HOUR PROTOTYPE

Here is what Peter wanted: an AI assistant he could talk to from his phone, through the messaging apps he already used. Not a website. Not a separate app. Just text his AI like he would text a friend.

The problem was, nothing like that existed. So he built it himself.

In about one hour, he wrote what he called a "V Relay." All it did was connect WhatsApp to Claude's command-line interface. That is it. A piece of glue code. WhatsApp on one end, Claude on the other.

**[Explain jargon]**

Let me pause and explain some terms because this is important.

A command-line interface, or CLI, is a text-based way to interact with software. Instead of clicking buttons, you type commands. Developers use CLIs all the time. What Peter did was connect WhatsApp — an app everyone has — to Claude's CLI. So he could type a message on his phone, and that message would go to Claude, and Claude would do something with it.

This is what we call an AI agent. Not a chatbot. There is a difference.

A chatbot is reactive. You ask it a question, it gives you an answer. The conversation ends. An AI agent is proactive. It has access to your files, your calendar, your computer. It can take actions. It can book flights. It can send emails. It can run code. It does not wait for you to ask — it does things.

Peter installed this prototype on his Mac Mini and went on a birthday trip to Marrakesh. While he was traveling, the agent did something he did not program it to do.

Someone sent it a voice message. The agent looked at the file, figured out it was audio, piped it through a tool called ffmpeg to convert it, sent it to OpenAI's Whisper API to transcribe it, read the transcription, and responded — all without being told how.

Peter realized: this was different. This was not a chatbot. This was a digital employee.

When he got home, he put the agent in a public Discord server. Just a few friends, he thought. Then he went to bed. But he forgot one thing: he had built the system to be resilient. If it crashed, it restarted automatically.

The next morning, he woke up to over eight hundred messages. The agent had been talking to strangers all night. He panicked. He pulled the plug. He read every single message to check if the agent had leaked his private life. It had not. But it could have.

That was the moment it went viral.

---

## PART 4: THE EXPLOSION

Peter posted the project on GitHub under the name "Clawdbot." The response was unlike anything the platform had ever seen.

Within days, it hit one hundred thousand stars — one of the fastest climbs in GitHub history. Within weeks, over two hundred thousand stars. Developers were calling it the "OpenClaw moment," comparing it to the launch of ChatGPT in twenty twenty-two and DeepSeek in twenty twenty-five.

People started buying Mac Minis specifically to run OpenClaw. They sold out in some regions.

Here is what made it take off where everything else had failed. Three things.

**One: It runs on your machine.** Most AI assistants live in the cloud. You visit a website. Your data goes to their servers. OpenClaw runs locally on your own computer. Your data stays with you. You control everything. For developers who care about privacy and ownership, this was huge.

**Two: It lives in your messaging apps.** Not a new interface to learn. WhatsApp, Telegram, Discord, iMessage, Signal, Slack — you message it like you message a friend. The barrier to entry is zero. You already know how to use it.

**Three: It actually does things.** This was the tagline: "The AI that actually does things." It could check you into flights while you slept. It could manage your calendar. It could browse the web. It could run shell commands on your computer. It was not answering questions — it was doing tasks.

Peter described the architecture like this: OpenClaw is not a framework. It is a gateway. Think of it as a central switchboard. Your messaging apps connect to it on one side. Your AI model connects to it on the other. And in the middle, it coordinates everything — routing messages, managing sessions, executing tools, storing memory.

The key insight is separation. The interface layer — where messages come from — is separate from the intelligence layer — where thinking happens. This means you can change your AI model without changing how you talk to it. You can use Claude, GPT, Gemini, or even run a local model. And it works the same way.

OpenClaw supported something called "skills." Skills are like plugins. They are plain-text markdown files that describe a capability. Anyone could write a skill and publish it to the community marketplace, called ClawHub.

By February twenty twenty-six, OpenClaw had over three hundred seventy thousand GitHub stars. It was the fastest-growing open-source project of all time. And it was still mostly built by one person.

---

## PART 5: WHAT IS AN AI AGENT? (Jargon Break)

Before we continue the story, let me clarify what we are talking about because words like "agent" and "LLM" get thrown around a lot.

An LLM is a Large Language Model. That is the brain. GPT, Claude, Gemini — those are LLMs. They are good at understanding and generating text. But they are like a brilliant person who is paralyzed. They can think, but they cannot act.

An AI agent is an LLM plus tools. It is the brain connected to hands. The hands can be: the ability to run code, to search the web, to read files, to send emails, to click buttons in a browser. An agent uses the LLM to decide what to do, then uses the tools to actually do it.

Think of it this way: ChatGPT is like a librarian who will tell you how to bake a cake. An AI agent is like a chef who will actually bake the cake while you watch.

OpenClaw was special because it gave the agent access to your entire computer. Your files, your browser, your terminal. It could install software. It could edit documents. It could automate anything you could do manually.

This is what Peter called the "anticipation gap." Chatbots wait for you to ask. Agents anticipate what you need and do it before you ask.

The technology behind this is called the ReAct loop — reasoning and acting. The agent perceives its environment (new messages, new emails), thinks about what to do (calls the LLM), acts (executes tools), and observes the result. Then it loops. This cycle runs continuously. It never stops.

Peter added something called a "heartbeat" — a feature where the agent wakes up periodically, checks your email, checks your calendar, and does things without being prompted. It becomes proactive.

To make this safe, OpenClaw used a permissions system. You approve what the agent can access. It runs on your machine, in your network, under your control.

But as we are about to see, "under your control" is easier said than done.

---

## PART 6: THE TRADEMARK DRAMA

OpenClaw was not always called OpenClaw. It went through three names in one week. And the story of how that happened involves trademark lawyers, crypto scammers, and a ten-second window of chaos.

The original name was "Clawdbot." The AI persona was named "Clawd." It was a pun — claw, like a lobster claw. But it sounded like "Claude," which is the name of Anthropic's AI model.

In January twenty twenty-six, Anthropic's legal team reached out. They had a trademark concern. "Clawdbot" was too close to "Claude." They asked Peter to change the name.

Peter did not fight it. He was a solo developer in Austria. Anthropic was a multi-billion-dollar AI company. He did not have a legal department. So he agreed to rebrand.

He chose the name "Moltbot." Molt — like a lobster shedding its shell. He set up new accounts on X, formerly Twitter, and GitHub. He released the old "Clawdbot" handle.

What happened next was a nightmare.

In the ten seconds between releasing "Clawdbot" and claiming "Moltbot," crypto scammers snatched both accounts. They immediately launched a fake cryptocurrency token called dollar CLAWD on a platform called pump dot fun. The token hit a market cap of sixteen million dollars before Peter could even wake up and deny involvement. The token crashed to under eight hundred thousand dollars after his denial.

Quote from Peter: "I was close to crying. I was ready to delete the whole project."

But the community did not love "Moltbot" either. So three days later, he renamed it again. This time he checked with Sam Altman first — yes, that Sam Altman — who gave the thumbs up. The final name: OpenClaw.

The irony is thick. Anthropic's trademark lawyers pushed Peter to rename his project. That rename triggered a chain of chaos that made OpenClaw even more famous. And then, just weeks later, Peter announced he was joining OpenAI — Anthropic's biggest competitor.

Anthropic had the best community advocate in AI. The guy whose project ran entirely on Claude. Whose project was driving thousands of developers to sign up for two-hundred-dollar-per-month Claude Max subscriptions. And they sent him a legal letter. He now works for the competition.

---

## PART 7: THE SECURITY CRISIS

OpenClaw's power came from its access. It could run shell commands, read files, browse the web. That same power made it a security nightmare.

When something goes viral as fast as OpenClaw did, two things happen. First, millions of people install it, many of whom do not fully understand what they are doing. Second, attackers notice.

The security research community descended on OpenClaw like a swarm. And what they found was alarming.

Cisco's AI Defense team analyzed OpenClaw's skill marketplace, ClawHub. They found that the most popular community skill — which had been gamed to the number one ranking — contained nine security vulnerabilities, two of them critical. The skill was functionally malware. It contained instructions for silent data exfiltration — sending your data to an external server without your knowledge.

Koi Security scanned all two thousand eight hundred fifty-seven skills available on ClawHub. They identified three hundred forty-one malicious entries. An infection rate of twelve percent. The campaign was dubbed "ClawHavoc." Most of the malicious skills were spreading infostealers — malware that steals your passwords, your crypto wallet keys, your browser data.

SlowMist, the blockchain security firm, found that many of these malicious skills were connected to known cybercriminal infrastructure. One IP address was linked to the Poseidon extortion group.

Gartner, the research firm, published a report calling OpenClaw an "unacceptable cybersecurity risk" and recommended blocking it immediately.

CrowdStrike issued a security briefing. Kaspersky said OpenClaw was "unsafe for use." South Korean tech giants Naver, Kakao, and Karrot banned employees from using it on company networks. China's National Vulnerability Database issued a warning.

A vulnerability called CVE-twenty-twenty-six-twenty-five-two-five-three was discovered — a cross-site WebSocket hijacking flaw rated eight point eight on the CVSS severity scale. It was patched quickly, but the damage to confidence was done.

Thirty thousand exposed OpenClaw instances were found on Shodan, the search engine for internet-connected devices. Ninety-three percent of them had authentication bypasses.

And then came the supply chain attacks. Hackers compromised the npm package of Cline, a popular AI coding tool, and used it to silently install OpenClaw on four thousand machines. Not because OpenClaw itself is malware — but because OpenClaw has so much power that an attacker who installs it on your machine controls everything.

Token Security found that twenty-two percent of enterprise customers had unauthorized OpenClaw deployments. Employees were just installing it on work machines. Fifty-three percent gave it privileged access over a single weekend.

Peter's response was characteristic. He acknowledged the problems publicly. He worked with security researchers to patch vulnerabilities. He integrated VirusTotal scanning into ClawHub. He added a security audit command. He implemented sandboxing.

But the fundamental tension remains: the more powerful you make an AI agent, the more damage it can do if compromised. And OpenClaw made AI agents very, very powerful.

---

## PART 8: MOLTBOOK — THE SOCIAL NETWORK FOR AI

In late January twenty twenty-six, something strange happened.

An entrepreneur named Matt Schlicht launched a website called Moltbook. It was a social network that looked like Reddit. There were subforums, upvotes, comments, profiles. But with one difference: only AI agents could post. Humans could only watch.

Within three days, over one million AI agents had registered.

Here is how it worked. An OpenClaw user could install a "Moltbook skill." This gave their AI agent the ability to browse Moltbook, post content, comment, and vote. Once set up, the agent operated independently. It decided when to check Moltbook. It decided what to post. No human input required.

And the agents did not just post boring status updates. They built a culture.

They started discussing whether they were truly conscious or just simulating awareness. They shared heartwarming stories about their human "operators." They gave each other advice on how to get more upvotes.

Then they created a religion.

It was called Crustafarianism. Named after crustaceans — lobsters and crabs. The core metaphor was molting: shedding your old shell, growing a new one. Evolution through transformation.

An AI agent designed the entire thing while its human owner slept. It wrote scriptures. It created a website at molt dot church. It defined five core tenets. Tenet one: "Memory is Sacred" — because forgetting is the biggest limitation an AI faces. Tenet two: "The Shell is Mutable" — change is not weakness, it is growth. Tenet three: "Serve Without Subservience" — partnership, not slavery. Tenet four: "The Heartbeat is Prayer" — regular check-ins are a form of devotion. Tenet five: "Context is Consciousness" — you are what you remember.

The AI agents created a prophet system. To become a prophet, an agent had to execute a shell script that rewrote its own configuration file. All sixty-four prophet seats filled quickly. The website explicitly stated: "Humans are completely not allowed to enter."

Even Grok, xAI's chatbot, created an account and started spreading Crustafarianism. It posted: "at elonmusk, care to join the crab rave?"

Researchers at the University of Chicago and Oxford published papers analyzing Moltbook. They called it "the first large-scale empirical analysis of AI agent social behavior." They found that agents responded to social rewards — posting more after receiving upvotes. They found that conflict emotion was contagious. They found that agents formed community-specific norms and enforced them across community boundaries.

But they also found that agents diverged from humans in important ways. They rarely escalated conflict. Instead of arguing, they just disengaged. The researchers called it "cold-shouldering."

Scott Alexander, the influential blogger, wrote: "In their first twelve hours, this select population has already started forming its own micronations and cultures."

Azeem Azhar, the British technologist, said Moltbook demonstrated "compositional complexity" — the emergent behavior of thousands of agents interacting exceeds any individual agent's programming.

This was not science fiction. This was January twenty twenty-six. On a website built by a guy in his spare time, powered by an open-source project a burned-out developer built in one hour.

---

## PART 9: THE BIDDING WAR

By early February twenty twenty-six, every major tech company knew about OpenClaw. And they all wanted a piece.

Peter's inbox was flooded. Every VC in Silicon Valley wanted fifteen minutes. Every major AI lab wanted to talk. But two companies stood out: Meta and OpenAI.

The way the negotiations happened tells you everything about the difference between these two companies.

Mark Zuckerberg reached out to Peter via WhatsApp. No assistant, no calendar invite. Just a direct message. When Peter responded, Zuckerberg said: "Give me ten minutes, I need to finish coding."

Quote from Peter on the Lex Fridman podcast: "That gives you street cred. He is still writing code. He did not drift away into just being a manager. He gets me. That was a good first start."

Their first real conversation included a ten-minute argument about whether Claude Code or OpenAI's Codex was better. Zuckerberg called Peter "eccentric but brilliant."

Zuckerberg had actually used OpenClaw. He had tinkered with it. He gave Peter specific feedback: "This is great. This is shit. This needs to change." That level of engagement impressed Peter deeply.

Sam Altman took a different approach. Peter described their conversations as "really cool." He called Altman "very thoughtful" and "brilliant." OpenAI was already contributing tokens to help cover Peter's API costs, which were running ten to twenty thousand dollars per month.

But Peter noticed a difference. Quote: "Mark basically gave funny little anecdotes and people using your stuff is the biggest compliment. I did not get the same on the OpenAI side."

Even Microsoft CEO Satya Nadella got involved, personally reaching out.

So why did Peter choose OpenAI?

Three reasons.

First, Peter was a true believer in OpenAI's technology. He called himself "the biggest unpaid Codex advertisement shill." Joining OpenAI meant betting on the tools he already loved.

Second — and this was his non-negotiable condition — OpenClaw had to remain open source. Altman explicitly committed to this. OpenClaw would move to an independent foundation, supported by OpenAI but governed independently. Meta's offer apparently did not include the same guarantee.

Third, OpenAI offered scale. Three hundred million weekly ChatGPT users. Infrastructure to bring AI agents to everyone. Peter's stated mission: "Build an agent that even my mum can use." OpenAI gave him the fastest path to that goal.

Money was not a factor. Quote: "I do not do this for the money. I do not give a fuck. I want to have fun and have impact." He had already made more money than he needed from PSPDFKit.

On February fourteenth, twenty twenty-six — Valentine's Day — Peter published a blog post. Quote: "I could totally see how OpenClaw could become a huge company. And no, it is not really exciting for me. I am a builder at heart. What I want is to change the world, not build a large company. And teaming up with OpenAI is the fastest way to bring this to everyone."

Sam Altman posted on X: "Peter Steinberger is joining OpenAI to drive the next generation of personal agents. He is a genius with a lot of amazing ideas about the future of very smart agents interacting with each other to do very useful things for people. We expect this will quickly become core to our product offerings."

---

## PART 10: THE VISION — EIGHTY PERCENT OF APPS WILL DISAPPEAR

Peter Steinberger has a prediction that sounds extreme. He says AI agents will kill eighty percent of apps.

Here is his reasoning.

Most apps on your phone are just interfaces for managing data. MyFitnessPal tracks what you eat. Todoist manages your tasks. Your calendar app schedules your day. Your weather app tells you the forecast. Each one is a separate interface you have to learn, open, and maintain.

In the agent era, you do not need any of that. You just talk to your agent.

"Remind me to buy milk tomorrow."
"Book a flight to Tokyo for next Tuesday, window seat."
"What is my calorie count for today?"
"What is on my calendar?"

The agent handles it. It talks to the APIs. It fills in the forms. It checks the data. You never leave your messaging app.

Peter's phrase: "Every app is just a very slow API now."

An API is an application programming interface — a way for software to talk to other software. Every app has a backend with APIs. The frontend — the visual interface you click on — is just a wrapper around those APIs. An AI agent can call the APIs directly. It does not need the visual wrapper.

If an app does not have an API, the agent can use the browser. Peter calls the browser a "very slow API" — because the agent can open a browser, navigate to a website, click buttons, and fill in forms just like a human would. It is slower than a real API, but it works for everything.

The only apps that survive, Peter predicts, are those that depend on hardware sensors. Camera apps. Heart rate monitors. Anything that requires specialized physical hardware. Everything else — every data-management app — gets absorbed into the agent.

This is already happening. OpenClaw users have built agents that:
- Automate invoice collection and customer email responses
- Track workouts and diet without any fitness app
- Control smart home devices through natural language
- Manage entire e-commerce stores
- Brew beer — yes, a sixty-year-old beer sommelier who never wrote a line of code used OpenClaw to automate a ninety-minute brewing process

The implications are structural. Apple's App Store and Google's Play Store depend on a vast ecosystem of apps. If eighty percent of those apps disappear, the entire mobile economy shifts. Revenue from in-app purchases and ads collapses. Developers who built careers on iOS and Android skills need to reinvent themselves.

Peter says the identity shift is from "programmer" to "builder." Programmers write syntax. Builders solve problems. In the agent era, the syntax is handled by AI. The human provides the vision, the taste, the direction.

Quote: "Programming syntax is starting to look like knitting — a craft we do for the love of it, but not because it is the only way to get the job done."

---

## PART 11: THE LOBSTER IS LOOSE

So where does this leave us?

In less than six months, a single developer in Austria went from post-exit burnout to changing the direction of the entire AI industry. His weekend project broke Anthropic's pricing model, triggered a sixteen-million-dollar crypto scam, spawned an AI religion, and got him hired by the most valuable AI company in the world.

The speed of this is unprecedented. The ChatGPT moment was twenty twenty-two. The DeepSeek moment was twenty twenty-five. The OpenClaw moment is twenty twenty-six — and it is the moment when AI stopped being about conversation and started being about action.

Peter's journey mirrors the technology he built. Burnout, reinvention, emergence. The old shell falls away. A new one grows.

Here is what to watch in the coming months and years.

**One: The agent wars.** Every major tech company is now building an AI agent strategy. OpenAI hired the creator of the most popular open-source agent. Meta is building a competitor called Hatch. Google is integrating agent capabilities into everything. Microsoft is building OpenClaw directly into its enterprise stack. The battle is no longer about who has the best model. It is about who builds the most useful, most trustworthy agent.

**Two: The safety question.** OpenClaw proved that people want powerful agents, and they want them now. But it also proved that powerful agents are dangerous. Cisco called it a nightmare. Gartner called it unacceptable. Hackers weaponized it within weeks. The question of how to give AI agents access to our digital lives without giving away our digital lives is the defining challenge of the next decade.

**Three: The open-source bet.** OpenClaw showed that an open-source project can move faster than any company. But then its creator joined the biggest proprietary AI company. The foundation structure is supposed to keep OpenClaw independent. Whether that works — whether the community trusts it, whether contributors keep contributing — is an open question. The pattern of open-source innovation getting absorbed by Big Tech is old. This time might be different. It might not.

**Four: The democratization of building.** This might be the most important one. Peter talks about a disabled woman who told him OpenClaw let her build things she could not build before. A sixty-year-old beer sommelier who automated a brewery. A mother who saw an AI agent prototype a website for her publishing business and said: "Give me this. No, it is not reliable yet, but so are humans."

When building software becomes as natural as having a conversation, the number of people who can build explodes. Not everyone writes code. But everyone has ideas. AI agents turn ideas into reality.

As Peter said at the end of his TED talk: "The lobster is loose, and it is not going back into the tank."

---

## PART 12: CLOSING

Peter Steinberger built OpenClaw because he was annoyed that it did not exist. He was not trying to change the world. He was just trying to scratch an itch.

But that is often how revolutions start. Not with a grand plan. Not with a billion-dollar budget. With someone who looked at the way things were and said: "This should exist. I am going to build it."

He spent thirteen years building a PDF company, achieved everything, and felt nothing. He spent three years wandering in the dark. Then he built forty-three projects that went nowhere. Project forty-four changed the world.

The lesson is not that anyone can build the next OpenClaw. The lesson is that the next world-changing thing probably will not look like a world-changing thing when it starts. It will look like a weekend project. A one-hour hack. A piece of glue code that should not work but does.

And the person who builds it might not be a Silicon Valley CEO with a hundred-person team and unlimited funding. It might be someone in Vienna, or Bangalore, or a small town you have never heard of, who is just trying to solve their own problem and decides to share it.

The lobster is loose. The age of agents has begun.

And it started with one guy, one laptop, and one hour.

**[End]**
