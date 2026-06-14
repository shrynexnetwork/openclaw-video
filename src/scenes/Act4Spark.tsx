import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS } from "../theme/colors";
import { fadeIn } from "../theme/animations";
import { ChunkTiming } from "../data/timeline";
import { FlashText, KeyPhrase, EmphasisWord } from "../components/Typography";

const Act4Spark: React.FC<{ chunks: ChunkTiming[] }> = ({ chunks }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: "#0f0f0f" }}>
      {chunks.map((chunk) => {
        switch (chunk.id) {
          case "s070":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 60%)" }} />
                <FlashText text="Early 2025. Something shifted." delay={0} fontSize={42} />
              </React.Fragment>
            );
          case "s071":
            return <FlashText key={chunk.id} text="He heard about AI coding tools." delay={0} />;
          case "s072":
            return <FlashText key={chunk.id} text="Tools that could write software for you." delay={0} fontSize={36} />;
          case "s073":
            return <KeyPhrase key={chunk.id} text="He decided to try an experiment." delay={0} color={COLORS.warmGold} />;
          case "s074":
          case "s075":
            return (
              <React.Fragment key={chunk.id}>
                <EmphasisWord text="HOLY SHIT" color={COLORS.warmGold} fontSize={100} />
              </React.Fragment>
            );
          case "s076":
            return (
              <React.Fragment key={chunk.id}>
                <KeyPhrase
                  text="The boilerplate, the plumbing, the boring parts — AI could do all of it."
                  delay={0}
                  color={COLORS.accent}
                />
              </React.Fragment>
            );
          case "s077":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", left: 200, top: "50%", transform: "translateY(-60%)" }}>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 60, fontWeight: 700, color: COLORS.grayDark, textDecoration: "line-through", opacity: fadeIn(frame, 10) }}>
                    Typing
                  </div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 80, fontWeight: 900, color: COLORS.accent, marginTop: 20, opacity: fadeIn(frame, 20, 15) }}>
                    Thinking.
                  </div>
                </div>
              </React.Fragment>
            );
          case "s078":
            return <FlashText key={chunk.id} text="He built 43 projects in a few months." delay={0} />;
          case "s079":
            return <EmphasisWord key={chunk.id} text="43" color={COLORS.grayLight} fontSize={120} />;
          case "s080":
            return <FlashText key={chunk.id} text="None went anywhere." delay={0} color={COLORS.grayLight} />;
          case "s081":
            return <FlashText key={chunk.id} text="He didn't care." delay={0} color={COLORS.accent} />;
          case "s082":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(0,212,170,0.06) 0%, transparent 60%)" }} />
                <FlashText text="For the first time in years — fun again." delay={0} fontSize={42} color={COLORS.accent} />
              </React.Fragment>
            );
          case "s083":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(0,212,170,0.12) 0%, transparent 60%)" }} />
                <KeyPhrase text="Project 44." subtext="The one that changed everything." delay={0} color={COLORS.accent} />
              </React.Fragment>
            );
          default:
            return null;
        }
      })}
    </AbsoluteFill>
  );
};

export default Act4Spark;
