import React from "react";
import { AbsoluteFill, useCurrentFrame, Img, staticFile } from "remotion";
import { COLORS } from "../theme/colors";
import { fadeIn } from "../theme/animations";
import { ChunkTiming } from "../data/timeline";
import { FlashText, KeyPhrase } from "../components/Typography";
import { GitHubStarCounter } from "../components/GitHubStars";

const Act8Architecture: React.FC<{ chunks: ChunkTiming[] }> = ({ chunks }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      {chunks.map((chunk) => {
        switch (chunk.id) {
          case "s140":
            return <KeyPhrase key={chunk.id} text="What made it take off?" delay={0} color={COLORS.accent} />;
          case "s141":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translateX(-50%)", fontSize: 120, fontWeight: 900, color: COLORS.accent, opacity: fadeIn(frame, 20) }}>3</div>
                <div style={{ position: "absolute", top: "55%", left: "50%", transform: "translateX(-50%)", display: "flex", gap: 120, opacity: fadeIn(frame, 20, 15) }}>
                  {["Simple", "Open", "Powerful"].map((item, i) => (
                    <div key={i} style={{ width: 100, height: 100, borderRadius: "50%", border: `3px solid ${COLORS.accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Helvetica, sans-serif", fontSize: 14, fontWeight: 600, color: COLORS.accent }}>
                      {item}
                    </div>
                  ))}
                </div>
              </React.Fragment>
            );
          case "s142":
            return <FlashText key={chunk.id} text="OpenClaw is not a framework." delay={0} color={COLORS.grayLight} />;
          case "s143":
            return <FlashText key={chunk.id} text="It is a gateway." delay={0} color={COLORS.accent} />;
          case "s144":
            return <KeyPhrase key={chunk.id} text="A central switchboard." delay={0} color={COLORS.accent} />;
          case "s145":
          case "s146":
          case "s147":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "35%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", alignItems: "center", gap: 30, opacity: fadeIn(frame, 20) }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {["WhatsApp", "Telegram", "Discord", "SMS"].map((app, i) => (
                      <div key={i} style={{ fontFamily: "Helvetica, sans-serif", fontSize: 18, fontWeight: 600, color: COLORS.white, padding: "8px 16px", backgroundColor: COLORS.cardBg, borderRadius: 6, border: "1px solid #333", opacity: fadeIn(frame, 10, i * 5) }}>
                        {app}
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: 32, color: COLORS.grayDark, opacity: fadeIn(frame, 20, 20) }}>→</div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 24, fontWeight: 800, color: COLORS.accent, padding: "24px 40px", backgroundColor: "rgba(0,212,170,0.1)", border: `2px solid ${COLORS.accent}`, borderRadius: 16 }}>
                    OpenClaw
                  </div>
                  <div style={{ fontSize: 32, color: COLORS.grayDark, opacity: fadeIn(frame, 20, 25) }}>→</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {["Claude", "GPT", "Gemini"].map((model, i) => (
                      <div key={i} style={{ fontFamily: "Helvetica, sans-serif", fontSize: 18, fontWeight: 600, color: COLORS.white, padding: "8px 16px", backgroundColor: COLORS.cardBg, borderRadius: 6, border: "1px solid #333", opacity: fadeIn(frame, 10, i * 5 + 30) }}>
                        {model}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ position: "absolute", bottom: 120, left: "50%", transform: "translateX(-50%)", fontFamily: "Helvetica, sans-serif", fontSize: 18, color: COLORS.grayLight, opacity: fadeIn(frame, 20, 40) }}>
                  Messages in → OpenClaw coordinates → AI models out
                </div>
              </React.Fragment>
            );
          case "s148":
            return <KeyPhrase key={chunk.id} text="Separation is the key." delay={0} color={COLORS.accent} />;
          case "s149":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "30%", left: 160, right: 160, display: "flex", gap: 40 }}>
                  <div style={{ flex: 1, padding: "24px 32px", backgroundColor: COLORS.cardBg, borderRadius: 12, border: "1px solid #444", opacity: fadeIn(frame, 20) }}>
                    <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 20, fontWeight: 700, color: COLORS.accent, marginBottom: 12 }}>Interface Layer</div>
                    <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 16, color: COLORS.grayLight }}>Where messages come from</div>
                  </div>
                  <div style={{ flex: 1, padding: "24px 32px", backgroundColor: COLORS.cardBg, borderRadius: 12, border: "1px solid #444", opacity: fadeIn(frame, 20, 15) }}>
                    <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 20, fontWeight: 700, color: COLORS.purple, marginBottom: 12 }}>Intelligence Layer</div>
                    <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 16, color: COLORS.grayLight }}>Where thinking happens</div>
                  </div>
                </div>
                <KeyPhrase key={chunk.id} text="Separate. Independent." delay={25} color={COLORS.accent} />
              </React.Fragment>
            );
          case "s150":
            return <FlashText key={chunk.id} text="Change your AI model without changing how you talk to it." delay={0} fontSize={36} />;
          case "s151":
            return <FlashText key={chunk.id} text="Claude. GPT. Gemini. Local models. Same way." delay={0} fontSize={36} />;
          case "s152":
            return <FlashText key={chunk.id} text="It just works." delay={0} fontSize={56} color={COLORS.accent} />;
          case "s153":
            return <FlashText key={chunk.id} text="Skills = plugins. Plain text." delay={0} fontSize={36} color={COLORS.accent} />;
          case "s154":
            return <FlashText key={chunk.id} text="Markdown files that describe a capability." delay={0} fontSize={36} />;
          case "s155":
            return <FlashText key={chunk.id} text="Anyone can write one. Publish on ClawHub." delay={0} fontSize={36} />;
          case "s156":
            return (
              <GitHubStarCounter
                key={chunk.id}
                target={370000}
                label="GitHub Stars"
                style={{ position: "absolute", left: 460, top: 250 }}
              />
            );
          case "s157":
            return <FlashText key={chunk.id} text="Fastest-growing open-source project of all time." delay={0} fontSize={36} />;
          case "s158":
            return <KeyPhrase key={chunk.id} text="Still mostly built by one person." delay={0} color={COLORS.accent} />;
          default:
            return null;
        }
      })}
    </AbsoluteFill>
  );
};

export default Act8Architecture;
