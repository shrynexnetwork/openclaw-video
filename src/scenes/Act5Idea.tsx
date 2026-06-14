import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS } from "../theme/colors";
import { fadeIn } from "../theme/animations";
import { ChunkTiming } from "../data/timeline";
import { FlashText, KeyPhrase } from "../components/Typography";
import { PhoneMockup } from "../components/PhoneMockup";
import { Terminal } from "../components/Terminal";

const Act5Idea: React.FC<{ chunks: ChunkTiming[] }> = ({ chunks }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      {chunks.map((chunk) => {
        switch (chunk.id) {
          case "s084":
            return <FlashText key={chunk.id} text="An AI assistant he could text. Like a friend." delay={0} fontSize={40} />;
          case "s085":
            return <FlashText key={chunk.id} text="Not a website." delay={0} color={COLORS.red} />;
          case "s086":
            return <FlashText key={chunk.id} text="Not a separate app." delay={0} color={COLORS.red} />;
          case "s087":
            return (
              <React.Fragment key={chunk.id}>
                <PhoneMockup
                  messages={[
                    { text: "Hey can you book a flight?", isMine: true },
                    { text: "Sure! Where to and when?", isMine: false },
                  ]}
                  style={{ position: "absolute", left: 800, top: 200 }}
                />
                <FlashText key={chunk.id} text="Just text his AI." delay={0} fontSize={42} />
              </React.Fragment>
            );
          case "s088":
            return <FlashText key={chunk.id} text="Nothing like that existed." delay={0} color={COLORS.red} />;
          case "s089":
            return <FlashText key={chunk.id} text="So he built it." delay={0} fontSize={64} color={COLORS.accent} />;
          case "s090":
            return (
              <React.Fragment key={chunk.id}>
                <Terminal
                  typingCommand="vim relay.go"
                  typingDelay={0}
                  style={{ position: "absolute", left: 610, top: 250 }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 560,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontFamily: "Helvetica, sans-serif",
                    fontSize: 20,
                    color: COLORS.grayLight,
                    opacity: fadeIn(frame, 20, 30),
                  }}
                >
                  One hour. A "V Relay."
                </div>
              </React.Fragment>
            );
          case "s091":
            return <FlashText key={chunk.id} text="That's it." delay={0} fontSize={48} />;
          case "s092":
            return <FlashText key={chunk.id} text="A piece of glue code." delay={0} color={COLORS.accentAlt} />;
          case "s093":
            return (
              <React.Fragment key={chunk.id}>
                <div
                  style={{
                    position: "absolute",
                    top: "45%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    alignItems: "center",
                    gap: 40,
                    opacity: fadeIn(frame, 20),
                  }}
                >
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 28, fontWeight: 700, color: COLORS.accent, padding: "16px 32px", backgroundColor: COLORS.cardBg, borderRadius: 12, border: "1px solid #333" }}>
                    WhatsApp
                  </div>
                  <div style={{ fontSize: 32, color: COLORS.grayDark }}>→</div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 28, fontWeight: 700, color: COLORS.purple, padding: "16px 32px", backgroundColor: COLORS.cardBg, borderRadius: 12, border: "1px solid #333" }}>
                    V Relay
                  </div>
                  <div style={{ fontSize: 32, color: COLORS.grayDark }}>→</div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 28, fontWeight: 700, color: COLORS.accentAlt, padding: "16px 32px", backgroundColor: COLORS.cardBg, borderRadius: 12, border: "1px solid #333" }}>
                    Claude CLI
                  </div>
                </div>
                <div style={{ position: "absolute", bottom: 120, left: "50%", transform: "translateX(-50%)", fontFamily: "Helvetica, sans-serif", fontSize: 18, color: COLORS.grayLight, opacity: fadeIn(frame, 20, 20) }}>
                  WhatsApp → V Relay → Claude CLI
                </div>
              </React.Fragment>
            );
          default:
            return null;
        }
      })}
    </AbsoluteFill>
  );
};

export default Act5Idea;
