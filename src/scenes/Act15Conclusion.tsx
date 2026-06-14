import React from "react";
import { AbsoluteFill, useCurrentFrame, Img, staticFile } from "remotion";
import { COLORS } from "../theme/colors";
import { fadeIn } from "../theme/animations";
import { ChunkTiming } from "../data/timeline";
import { FlashText, KeyPhrase } from "../components/Typography";
import { OpenClawLogo } from "../components/OpenClawLogo";

const Act15Conclusion: React.FC<{ chunks: ChunkTiming[] }> = ({ chunks }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      {chunks.map((chunk) => {
        switch (chunk.id) {
          case "s419":
            return (
              <React.Fragment key={chunk.id}>
                <Img
                  src={staticFile("assets/backgrounds/dark-apartment-laptop.jpg")}
                  style={{ position: "absolute", width: 1920, height: 1080, objectFit: "cover", opacity: 0.15 }}
                />
                <FlashText key={chunk.id} text="Return to the beginning." delay={0} fontSize={28} color={COLORS.grayLight} />
              </React.Fragment>
            );
          case "s420":
            return (
              <React.Fragment key={chunk.id}>
                <Img
                  src={staticFile("assets/backgrounds/dark-apartment-laptop.jpg")}
                  style={{ position: "absolute", width: 1920, height: 1080, objectFit: "cover", opacity: 0.2 }}
                />
                <FlashText key={chunk.id} text="Same apartment. Same laptop." delay={0} fontSize={36} />
              </React.Fragment>
            );
          case "s421":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(0,212,170,0.08) 0%, transparent 60%)" }} />
                <FlashText key={chunk.id} text="But now the room glows." delay={0} color={COLORS.accent} />
              </React.Fragment>
            );
          case "s422":
            return <FlashText key={chunk.id} text='"The lobster is loose."' delay={0} fontSize={48} color={COLORS.accent} />;
          case "s423":
            return <FlashText key={chunk.id} text="He built it because he was annoyed it didn't exist." delay={0} fontSize={28} />;
          case "s424":
            return <FlashText key={chunk.id} text="The best reason to build anything." delay={0} color={COLORS.accent} />;
          case "s425":
            return <KeyPhrase key={chunk.id} text="Built because it should exist." delay={0} color={COLORS.accent} />;
          case "s426":
            return <FlashText key={chunk.id} text="13 years building PSPDFKit." delay={0} color={COLORS.grayDark} />;
          case "s427":
            return <FlashText key={chunk.id} text="Empty." delay={0} color={COLORS.grayDark} />;
          case "s428":
            return <FlashText key={chunk.id} text="3 years wandering. Dark." delay={0} color={COLORS.grayDark} />;
          case "s429":
            return <FlashText key={chunk.id} text="43 projects. Nowhere." delay={0} color={COLORS.grayDark} />;
          case "s430":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(0,212,170,0.12) 0%, transparent 60%)" }} />
                <KeyPhrase key={chunk.id} text="Number 44 changed the world." delay={0} color={COLORS.accent} />
              </React.Fragment>
            );
          case "s431":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "35%", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", gap: 12, alignItems: "center", opacity: fadeIn(frame, 20) }}>
                  {["Weekend project.", "One-hour hack.", "Glue code."].map((text, i) => (
                    <div
                      key={i}
                      style={{
                        fontFamily: "Helvetica, sans-serif",
                        fontSize: 36,
                        fontWeight: 600,
                        color: COLORS.white,
                        opacity: fadeIn(frame, 12, i * 15),
                        textDecoration: i < 2 ? "line-through" : "none",
                        textDecorationColor: COLORS.red,
                      }}
                    >
                      {text}
                    </div>
                  ))}
                  <div style={{ fontSize: 48, color: COLORS.accent, marginTop: 20, fontWeight: 900, opacity: fadeIn(frame, 20, 45) }}>
                    World-changing.
                  </div>
                </div>
              </React.Fragment>
            );
          case "s432":
            return <FlashText key={chunk.id} text="The world-changing thing never looks like one at the start." delay={0} fontSize={28} />;
          case "s433":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translateX(-50%)", textAlign: "center", opacity: fadeIn(frame, 20) }}>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 36, fontWeight: 300, color: COLORS.white, lineHeight: 1.8 }}>
                    Not a Silicon Valley CEO.
                  </div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 36, fontWeight: 300, color: COLORS.white, lineHeight: 1.8, opacity: fadeIn(frame, 15, 15) }}>
                    Someone in <span style={{ color: COLORS.accent, fontWeight: 700 }}>Vienna</span>.
                  </div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 36, fontWeight: 300, color: COLORS.white, lineHeight: 1.8, opacity: fadeIn(frame, 15, 30) }}>
                    <span style={{ color: COLORS.purple, fontWeight: 700 }}>Bangalore</span>.
                  </div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 36, fontWeight: 300, color: COLORS.white, lineHeight: 1.8, opacity: fadeIn(frame, 15, 45) }}>
                    A <span style={{ color: COLORS.accentAlt, fontWeight: 700 }}>small town</span>.
                  </div>
                </div>
              </React.Fragment>
            );
          case "s434":
            return <KeyPhrase key={chunk.id} text="Anyone. Anywhere." delay={0} color={COLORS.accent} />;
          case "s435":
            return <FlashText key={chunk.id} text="You don't need a team." delay={0} />;
          case "s436":
            return <FlashText key={chunk.id} text="You don't need funding." delay={0} />;
          case "s437":
            return (
              <React.Fragment key={chunk.id}>
                <OpenClawLogo size={160} delay={0} style={{ position: "absolute", left: 760, top: 200 }} />
                <div style={{ position: "absolute", top: 400, left: 160, right: 160, textAlign: "center", opacity: fadeIn(frame, 25, 30) }}>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 48, fontWeight: 800, color: COLORS.accent }}>
                    The lobster is loose.
                  </div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 36, fontWeight: 600, color: COLORS.white, marginTop: 16, opacity: fadeIn(frame, 20, 50) }}>
                    The age of agents has begun.
                  </div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 20, fontWeight: 300, color: COLORS.grayLight, marginTop: 40, opacity: fadeIn(frame, 20, 70) }}>
                    Peter Steinberger — one guy, one laptop, one hour.
                  </div>
                </div>
              </React.Fragment>
            );
          case "s438":
          case "s439":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(0,212,170,0.06) 0%, transparent 60%)" }} />
                <OpenClawLogo size={200} delay={0} style={{ position: "absolute", left: 740, top: 200 }} />
                <div style={{ position: "absolute", bottom: 120, left: 160, right: 160, textAlign: "center" }}>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 24, fontWeight: 300, color: COLORS.grayLight, opacity: fadeIn(frame, 20) }}>
                    One guy. One laptop. One hour.
                  </div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 18, color: COLORS.grayDark, marginTop: 8, opacity: fadeIn(frame, 20, 15) }}>
                    The story of Peter Steinberger and OpenClaw
                  </div>
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

export default Act15Conclusion;
