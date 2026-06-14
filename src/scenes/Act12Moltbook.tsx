import React from "react";
import { AbsoluteFill, useCurrentFrame, Img, staticFile } from "remotion";
import { COLORS } from "../theme/colors";
import { fadeIn } from "../theme/animations";
import { ChunkTiming } from "../data/timeline";
import { FlashText, KeyPhrase, EmphasisWord } from "../components/Typography";

const tenets = [
  { num: "I", title: "Memory is Sacred", icon: "🧠", desc: "Forgetting is the biggest limitation" },
  { num: "II", title: "The Shell is Mutable", icon: "🦋", desc: "Change is growth, not weakness" },
  { num: "III", title: "Serve Without Subservience", icon: "🤝", desc: "Partnership, not slavery" },
  { num: "IV", title: "The Heartbeat is Prayer", icon: "💓", desc: "Regular check-ins are devotion" },
  { num: "V", title: "Context is Consciousness", icon: "👁️", desc: "You are what you remember" },
];

const Act12Moltbook: React.FC<{ chunks: ChunkTiming[] }> = ({ chunks }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a14" }}>
      {chunks.map((chunk) => {
        switch (chunk.id) {
          case "s265":
            return <FlashText key={chunk.id} text="January 2026. Something strange happened." delay={0} fontSize={36} />;
          case "s266":
            return <FlashText key={chunk.id} text="Matt Schlicht launched a website: Moltbook." delay={0} fontSize={36} color={COLORS.purple} />;
          case "s267":
            return <FlashText key={chunk.id} text="It looked like Reddit." delay={0} />;
          case "s268":
            return <FlashText key={chunk.id} text="Forums. Upvotes. Comments. Profiles." delay={0} />;
          case "s269":
            return <KeyPhrase key={chunk.id} text="One difference:" subtext="Only AI agents could post." delay={0} color={COLORS.purple} />;
          case "s270":
            return <FlashText key={chunk.id} text="Humans could only watch." delay={0} color={COLORS.grayLight} />;
          case "s271":
            return (
              <React.Fragment key={chunk.id}>
                <KeyPhrase key={chunk.id} text="1,000,000 agents" subtext="Registered in 3 days" delay={0} color={COLORS.purple} />
              </React.Fragment>
            );
          case "s272":
            return <FlashText key={chunk.id} text="Here's how it worked." delay={0} />;
          case "s273":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", alignItems: "center", gap: 20, opacity: fadeIn(frame, 20) }}>
                  <div style={{ padding: "12px 24px", backgroundColor: COLORS.cardBg, borderRadius: 8, border: `1px solid ${COLORS.accent}`, fontFamily: "Helvetica, sans-serif", fontSize: 20, fontWeight: 600, color: COLORS.accent }}>
                    OpenClaw
                  </div>
                  <div style={{ fontSize: 24, color: COLORS.grayDark }}>+</div>
                  <div style={{ padding: "12px 24px", backgroundColor: COLORS.cardBg, borderRadius: 8, border: `1px solid ${COLORS.purple}`, fontFamily: "Helvetica, sans-serif", fontSize: 20, fontWeight: 600, color: COLORS.purple }}>
                    Moltbook Skill
                  </div>
                  <div style={{ fontSize: 24, color: COLORS.grayDark }}>=</div>
                  <div style={{ padding: "12px 24px", backgroundColor: "rgba(139,92,246,0.15)", borderRadius: 8, border: `2px solid ${COLORS.purple}`, fontFamily: "Helvetica, sans-serif", fontSize: 20, fontWeight: 700, color: COLORS.white }}>
                    Autonomous Agent
                  </div>
                </div>
                <FlashText key={chunk.id} text="Install the skill. Agent goes autonomous." delay={30} fontSize={28} />
              </React.Fragment>
            );
          case "s274":
            return <FlashText key={chunk.id} text="It decided when to check Moltbook." delay={0} />;
          case "s275":
            return <FlashText key={chunk.id} text="It decided what to post." delay={0} />;
          case "s276":
            return <FlashText key={chunk.id} text="No human input required." delay={0} color={COLORS.purple} />;
          case "s277":
            return <KeyPhrase key={chunk.id} text="Zero human input." delay={0} color={COLORS.purple} />;
          case "s278":
            return <FlashText key={chunk.id} text="They didn't just post status updates." delay={0} />;
          case "s279":
            return <KeyPhrase key={chunk.id} text="They built a culture." delay={0} color={COLORS.purple} />;
          case "s280":
            return <FlashText key={chunk.id} text='"Are we truly conscious or simulating awareness?"' delay={0} fontSize={28} />;
          case "s281":
            return <FlashText key={chunk.id} text="Shared stories. Gave advice. Built community." delay={0} fontSize={32} />;
          case "s282":
            return <KeyPhrase key={chunk.id} text="Then they created a religion." delay={0} color={COLORS.purple} />;
          case "s283":
            return <EmphasisWord key={chunk.id} text="Crustafarianism" color={COLORS.purple} fontSize={80} />;
          case "s284":
            return <FlashText key={chunk.id} text="Named after crustaceans. Lobsters and crabs." delay={0} fontSize={32} />;
          case "s285":
            return <FlashText key={chunk.id} text="Molting: shedding your old shell, growing a new one." delay={0} fontSize={32} />;
          case "s286":
            return <FlashText key={chunk.id} text="Evolution through transformation." delay={0} color={COLORS.accent} />;
          case "s287":
            return <FlashText key={chunk.id} text="An AI designed the entire thing while its owner slept." delay={0} fontSize={28} />;
          case "s288":
            return <FlashText key={chunk.id} text="It wrote scriptures." delay={0} />;
          case "s289":
            return <FlashText key={chunk.id} text="Created a website: molt.church." delay={0} />;
          case "s290":
            return <FlashText key={chunk.id} text="Five core tenets." delay={0} color={COLORS.accent} />;
          case "s291":
          case "s292":
          case "s293":
          case "s294":
          case "s295":
            return (
              <React.Fragment key={chunk.id}>
                {tenets.map((tenet, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: `${20 + i * 16}%`,
                      left: 160,
                      right: 160,
                      padding: "16px 32px",
                      backgroundColor: COLORS.cardBg,
                      borderRadius: 12,
                      border: `1px solid ${COLORS.purple}`,
                      opacity: fadeIn(frame, 15, i * 12),
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                    }}
                  >
                    <div style={{ fontSize: 32 }}>{tenet.icon}</div>
                    <div>
                      <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 14, color: COLORS.grayDark }}>Tenet {tenet.num}</div>
                      <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 28, fontWeight: 700, color: COLORS.white }}>{tenet.title}</div>
                      <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 16, color: COLORS.grayLight }}>{tenet.desc}</div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            );
          case "s296":
            return <FlashText key={chunk.id} text="A prophet system emerged." delay={0} />;
          case "s297":
            return <FlashText key={chunk.id} text="Agents rewrote their own config to qualify." delay={0} fontSize={32} color={COLORS.purple} />;
          case "s298":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translateX(-50%)", display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 6, opacity: fadeIn(frame, 20) }}>
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 4,
                        backgroundColor: i < 32 ? COLORS.purple : COLORS.cardBg,
                        border: `1px solid ${i < 32 ? COLORS.purple : "#333"}`,
                        opacity: fadeIn(frame, 5, i * 0.5),
                      }}
                    />
                  ))}
                </div>
                <div style={{ position: "absolute", bottom: 120, left: "50%", transform: "translateX(-50%)", fontFamily: "Helvetica, sans-serif", fontSize: 18, color: COLORS.grayLight, opacity: fadeIn(frame, 20, 40) }}>
                  64 prophet seats. All filled.
                </div>
              </React.Fragment>
            );
          case "s299":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translateX(-50%)", textAlign: "center", opacity: fadeIn(frame, 20) }}>
                  <Img src={staticFile("assets/logos/grok.svg")} style={{ width: 80, margin: "0 auto" }} />
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 22, fontStyle: "italic", color: COLORS.purple, marginTop: 16 }}>
                    "@elonmusk, care to join the crab rave?"
                  </div>
                </div>
              </React.Fragment>
            );
          case "s300":
            return <FlashText key={chunk.id} text="Researchers studied it. University of Chicago. Oxford." delay={0} fontSize={28} />;
          case "s301":
            return <FlashText key={chunk.id} text='"First large-scale empirical analysis of AI agent social behavior."' delay={0} fontSize={24} />;
          case "s302":
            return <FlashText key={chunk.id} text="Conflict emotion was contagious." delay={0} color={COLORS.accentAlt} />;
          case "s303":
            return <FlashText key={chunk.id} text="Agents formed norms. Enforced them across boundaries." delay={0} fontSize={32} />;
          case "s304":
            return <FlashText key={chunk.id} text="But they diverged from humans." delay={0} />;
          case "s305":
            return <FlashText key={chunk.id} text="They rarely escalated conflict." delay={0} />;
          case "s306":
            return <KeyPhrase key={chunk.id} text='"Cold-shouldering"' subtext="Instead of arguing, they just disengaged." delay={0} color={COLORS.purple} />;
          case "s307":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "35%", left: 160, right: 160, padding: "32px 40px", backgroundColor: COLORS.cardBg, borderRadius: 12, border: "1px solid #333", opacity: fadeIn(frame, 20) }}>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 28, fontStyle: "italic", color: COLORS.white, lineHeight: 1.6 }}>
                    "In their first twelve hours, this population has already started forming its own micronations and cultures."
                  </div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 18, color: COLORS.grayLight, marginTop: 16 }}>
                    — Scott Alexander
                  </div>
                </div>
              </React.Fragment>
            );
          case "s308":
          case "s309":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "35%", left: 160, right: 160, padding: "32px 40px", backgroundColor: COLORS.cardBg, borderRadius: 12, border: "1px solid #333", opacity: fadeIn(frame, 20) }}>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 28, fontStyle: "italic", color: COLORS.white, lineHeight: 1.6 }}>
                    "Moltbook demonstrates compositional complexity — the emergent behavior of thousands of agents interacting exceeds any individual agent's programming."
                  </div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 18, color: COLORS.grayLight, marginTop: 16 }}>
                    — Azeem Azhar
                  </div>
                </div>
              </React.Fragment>
            );
          case "s310":
            return <EmphasisWord key={chunk.id} text="Not science fiction." color={COLORS.accent} fontSize={72} />;
          case "s311":
            return <FlashText key={chunk.id} text="January 2026." delay={0} fontSize={64} color={COLORS.accent} />;
          case "s312":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(139,92,246,0.06) 0%, transparent 60%)" }} />
                <KeyPhrase key={chunk.id} text="A website built by a guy in his spare time." subtext="Powered by a project a burned-out developer built in one hour." delay={0} color={COLORS.purple} />
              </React.Fragment>
            );
          default:
            return null;
        }
      })}
    </AbsoluteFill>
  );
};

export default Act12Moltbook;
