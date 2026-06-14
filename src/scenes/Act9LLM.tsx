import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS } from "../theme/colors";
import { fadeIn } from "../theme/animations";
import { ChunkTiming } from "../data/timeline";
import { FlashText, KeyPhrase, EmphasisWord } from "../components/Typography";

const Act9LLM: React.FC<{ chunks: ChunkTiming[] }> = ({ chunks }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      {chunks.map((chunk) => {
        switch (chunk.id) {
          case "s159":
            return <FlashText key={chunk.id} text="Let me clarify what we're talking about." delay={0} fontSize={36} />;
          case "s160":
            return <KeyPhrase key={chunk.id} text="LLM = Large Language Model" delay={0} color={COLORS.purple} />;
          case "s161":
            return <FlashText key={chunk.id} text="That is the brain." delay={0} color={COLORS.accent} />;
          case "s162":
            return <FlashText key={chunk.id} text="GPT. Claude. Gemini." delay={0} fontSize={48} />;
          case "s163":
            return <FlashText key={chunk.id} text="They understand and generate text." delay={0} />;
          case "s164":
            return <FlashText key={chunk.id} text="Like a brilliant person who is paralyzed." delay={0} fontSize={36} color={COLORS.grayLight} />;
          case "s165":
            return <KeyPhrase key={chunk.id} text="Can think. Cannot act." delay={0} color={COLORS.grayLight} />;
          case "s166":
            return <KeyPhrase key={chunk.id} text="Agent = LLM + Tools" delay={0} color={COLORS.accent} />;
          case "s167":
            return <FlashText key={chunk.id} text="Brain connected to hands." delay={0} fontSize={42} />;
          case "s168":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translateX(-50%)", display: "flex", gap: 16, opacity: fadeIn(frame, 20), flexWrap: "wrap", justifyContent: "center" }}>
                  {["Run Code", "Search Web", "Read Files", "Send Email", "Click Buttons"].map((tool, i) => (
                    <div key={i} style={{ padding: "12px 24px", backgroundColor: COLORS.cardBg, borderRadius: 8, border: `1px solid ${COLORS.purple}`, fontFamily: "Helvetica, sans-serif", fontSize: 18, fontWeight: 600, color: COLORS.purple, opacity: fadeIn(frame, 12, i * 8) }}>
                      {tool}
                    </div>
                  ))}
                </div>
                <KeyPhrase key={chunk.id} text="The hands can be anything." delay={30} color={COLORS.purple} />
              </React.Fragment>
            );
          case "s169":
            return <KeyPhrase key={chunk.id} text="Decides what to do. Then does it." delay={0} color={COLORS.accent} />;
          case "s170":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", left: 80, top: "35%", width: 800, textAlign: "center", opacity: fadeIn(frame, 20) }}>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 28, fontWeight: 700, color: COLORS.grayLight }}>ChatGPT</div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 80, marginTop: 20, opacity: 0.3 }}>📚</div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 22, color: COLORS.grayDark, marginTop: 16 }}>Librarian who tells you how</div>
                </div>
                <div style={{ position: "absolute", right: 80, top: "35%", width: 800, textAlign: "center", opacity: fadeIn(frame, 20, 10) }}>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 28, fontWeight: 700, color: COLORS.accent }}>AI Agent</div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 80, marginTop: 20 }}>👨‍🍳</div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 22, color: COLORS.grayLight, marginTop: 16 }}>Chef who bakes the cake</div>
                </div>
              </React.Fragment>
            );
          case "s171":
            return <KeyPhrase key={chunk.id} text="That's the difference." delay={0} color={COLORS.accent} />;
          case "s172":
            return <FlashText key={chunk.id} text="OpenClaw gave the agent access to your entire computer." delay={0} fontSize={36} />;
          case "s173":
            return <FlashText key={chunk.id} text="Files. Browser. Terminal." delay={0} color={COLORS.accent} />;
          case "s174":
            return <FlashText key={chunk.id} text="Install software." delay={0} />;
          case "s175":
            return <FlashText key={chunk.id} text="Edit documents." delay={0} />;
          case "s176":
            return <KeyPhrase key={chunk.id} text="Automate anything you can do manually." delay={0} color={COLORS.accent} />;
          case "s177":
            return <KeyPhrase key={chunk.id} text='"The Anticipation Gap"' subtext="Chatbots wait. Agents anticipate." delay={0} color={COLORS.accent} />;
          case "s178":
            return <FlashText key={chunk.id} text="They do it before you ask." delay={0} color={COLORS.accent} />;
          case "s179":
            return <KeyPhrase key={chunk.id} text="ReAct Loop" subtext="Reasoning + Acting" delay={0} color={COLORS.accent} />;
          case "s180":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", width: 500, height: 500 }}>
                  {["Perceive", "Think", "Act", "Observe"].map((step, i) => {
                    const angle = (i * 90 - 90) * (Math.PI / 180);
                    const x = 250 + 180 * Math.cos(angle) - 60;
                    const y = 250 + 180 * Math.sin(angle) - 30;
                    return (
                      <div
                        key={i}
                        style={{
                          position: "absolute",
                          left: x,
                          top: y,
                          width: 120,
                          height: 60,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "Helvetica, sans-serif",
                          fontSize: 18,
                          fontWeight: 700,
                          color: COLORS.accent,
                          backgroundColor: "rgba(0,212,170,0.1)",
                          border: `2px solid ${COLORS.accent}`,
                          borderRadius: 30,
                          opacity: fadeIn(frame, 15, i * 8),
                        }}
                      >
                        {step}
                      </div>
                    );
                  })}
                  <svg width="500" height="500" style={{ position: "absolute", top: 0, left: 0 }}>
                    <circle cx="250" cy="250" r="160" fill="none" stroke={COLORS.grayDark} strokeWidth="2" strokeDasharray="8 4" opacity={0.5} />
                  </svg>
                </div>
                <div style={{ position: "absolute", bottom: 100, left: "50%", transform: "translateX(-50%)", fontFamily: "Helvetica, sans-serif", fontSize: 20, color: COLORS.grayLight, opacity: fadeIn(frame, 20, 40) }}>
                  This cycle runs continuously. It never stops.
                </div>
              </React.Fragment>
            );
          case "s181":
            return <FlashText key={chunk.id} text="Then it loops." delay={0} />;
          case "s182":
            return <FlashText key={chunk.id} text="This cycle runs continuously." delay={0} />;
          case "s183":
            return <EmphasisWord key={chunk.id} text="It never stops." color={COLORS.accent} fontSize={64} />;
          case "s184":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", bottom: 200, left: 160, right: 160, height: 100, opacity: fadeIn(frame, 20) }}>
                  <svg width="100%" height="100%" viewBox="0 0 1600 100">
                    <path d="M0,50 L100,50 Q150,50 200,20 Q250,-10 300,50 L1600,50" fill="none" stroke={COLORS.accent} strokeWidth="3" opacity={0.6} />
                    {[400, 800, 1200].map((x, i) => (
                      <circle key={i} cx={x} cy="50" r="8" fill={COLORS.accent} opacity={fadeIn(frame, 10, i * 10 + 20)} />
                    ))}
                  </svg>
                </div>
                <KeyPhrase key={chunk.id} text='"The Heartbeat"' subtext="Wakes up. Checks email. Checks calendar. Does things." delay={0} color={COLORS.accent} />
              </React.Fragment>
            );
          case "s185":
            return <KeyPhrase key={chunk.id} text="Proactive." delay={0} color={COLORS.accent} />;
          case "s186":
            return <FlashText key={chunk.id} text="Safety? A permissions system." delay={0} />;
          case "s187":
            return <FlashText key={chunk.id} text="You approve what it can access." delay={0} />;
          case "s188":
            return <FlashText key={chunk.id} text="Your machine. Your network. Your control." delay={0} fontSize={36} color={COLORS.accent} />;
          case "s189":
            return <KeyPhrase key={chunk.id} text="Or is it?" subtext="Control is easier said than done." delay={0} color={COLORS.red} />;
          default:
            return null;
        }
      })}
    </AbsoluteFill>
  );
};

export default Act9LLM;
