import React from "react";
import { AbsoluteFill, useCurrentFrame, Img, staticFile } from "remotion";
import { COLORS } from "../theme/colors";
import { fadeIn } from "../theme/animations";
import { ChunkTiming } from "../data/timeline";
import { FlashText, EmphasisWord, KeyPhrase } from "../components/Typography";
import { QuoteCard } from "../components/QuoteCard";

const Act3Burnout: React.FC<{ chunks: ChunkTiming[] }> = ({ chunks }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      {chunks.map((chunk) => {
        switch (chunk.id) {
          case "s041":
            return <KeyPhrase key={chunk.id} text="Bootstrapped. Zero VC." delay={0} color={COLORS.accent} />;
          case "s042":
            return <FlashText key={chunk.id} text="Zero venture capital." delay={0} color={COLORS.accent} />;
          case "s043":
            return <FlashText key={chunk.id} text="Zero outside funding." delay={0} color={COLORS.accent} />;
          case "s044":
            return <FlashText key={chunk.id} text="Grew from revenue only." delay={0} color={COLORS.accent} />;
          case "s045":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", left: 160, right: 160, top: 160, bottom: 160, display: "flex", alignItems: "flex-end", gap: 8 }}>
                  {Array.from({ length: 13 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: 80,
                        height: `${60 + i * 20}%`,
                        backgroundColor: i < 12 ? COLORS.accent : COLORS.grayDark,
                        borderRadius: "4px 4px 0 0",
                        opacity: fadeIn(frame, 20, i * 3),
                      }}
                    />
                  ))}
                </div>
                <div style={{ position: "absolute", bottom: 80, left: "50%", transform: "translateX(-50%)", fontFamily: "Helvetica, sans-serif", fontSize: 20, color: COLORS.grayLight }}>
                  13 years of identity in this company
                </div>
              </React.Fragment>
            );
          case "s046":
            return <FlashText key={chunk.id} text="Insight Partners invested €100M+" delay={0} fontSize={40} />;
          case "s047":
            return <FlashText key={chunk.id} text="First outside money ever." delay={0} color={COLORS.accentAlt} />;
          case "s048":
            return <FlashText key={chunk.id} text="Sold his shares." delay={0} />;
          case "s049":
            return <FlashText key={chunk.id} text="Stepped down as CEO." delay={0} />;
          case "s050":
            return <EmphasisWord key={chunk.id} text="BROKE" color={COLORS.red} shakeAmount={4} />;
          case "s051":
            return (
              <React.Fragment key={chunk.id}>
                <Img
                  src={staticFile("assets/backgrounds/stage-mic.jpg")}
                  style={{ position: "absolute", width: 1920, height: 1080, objectFit: "cover", opacity: 0.15 }}
                />
                <FlashText key={chunk.id} text="His talk was so raw, the audience cried." delay={0} fontSize={36} />
              </React.Fragment>
            );
          case "s052":
          case "s053":
            return (
              <QuoteCard
                key={chunk.id}
                quote="As a CEO, you are the trash bin. Everything others cannot solve, you have to fix."
                attribution="Peter Steinberger"
                delay={0}
                color={COLORS.accentAlt}
              />
            );
          case "s054":
          case "s055":
            return <FlashText key={chunk.id} text="Austin Powers. Mojo sucked out." delay={0} fontSize={42} color={COLORS.purple} />;
          case "s056":
          case "s057":
            return (
              <QuoteCard
                key={chunk.id}
                quote="I could not get code out anymore. I was just staring and feeling empty."
                attribution="Peter Steinberger"
                delay={0}
                color={COLORS.red}
              />
            );
          case "s058":
            return <KeyPhrase key={chunk.id} text="Post-Exit Depression" delay={0} color={COLORS.red} />;
          case "s059":
            return <FlashText key={chunk.id} text="Achieved everything you worked for." delay={0} />;
          case "s060":
            return <KeyPhrase key={chunk.id} text="You were chasing purpose. Not happiness." delay={0} color={COLORS.accent} />;
          case "s061":
            return <FlashText key={chunk.id} text="He didn't know who he was." delay={0} />;
          case "s062":
            return <FlashText key={chunk.id} text="For three years, he wandered." delay={0} color={COLORS.grayLight} />;
          case "s063":
            return <FlashText key={chunk.id} text="Madrid." delay={0} color={COLORS.accentAlt} />;
          case "s064":
            return <FlashText key={chunk.id} text="London." delay={0} color={COLORS.accentAlt} />;
          case "s065":
            return <KeyPhrase key={chunk.id} text="Partied." delay={0} color={COLORS.purple} />;
          case "s066":
            return <KeyPhrase key={chunk.id} text="Therapy." delay={0} color={COLORS.purple} />;
          case "s067":
            return <KeyPhrase key={chunk.id} text="Ayahuasca." delay={0} color={COLORS.purple} />;
          case "s068":
            return <FlashText key={chunk.id} text="Moved countries again." delay={0} />;
          case "s069":
            return <EmphasisWord key={chunk.id} text="Nothing." color={COLORS.gray} fontSize={100} />;
          default:
            return null;
        }
      })}
    </AbsoluteFill>
  );
};

export default Act3Burnout;
