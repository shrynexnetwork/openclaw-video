import React from "react";
import { AbsoluteFill, useCurrentFrame, Img, staticFile } from "remotion";
import { COLORS } from "../theme/colors";
import { fadeIn, countUp } from "../theme/animations";
import { ChunkTiming } from "../data/timeline";
import { FlashText, KeyPhrase, EmphasisWord } from "../components/Typography";
import { GitHubStarCounter } from "../components/GitHubStars";

const Act7Breakthrough: React.FC<{ chunks: ChunkTiming[] }> = ({ chunks }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      {chunks.map((chunk) => {
        switch (chunk.id) {
          case "s113":
            return (
              <React.Fragment key={chunk.id}>
                <Img
                  src={staticFile("assets/backgrounds/mac-mini.jpg")}
                  style={{ position: "absolute", left: 0, width: 960, height: 1080, objectFit: "cover", opacity: 0.3 }}
                />
                <Img
                  src={staticFile("assets/backgrounds/marrakesh.jpg")}
                  style={{ position: "absolute", right: 0, width: 960, height: 1080, objectFit: "cover", opacity: 0.3 }}
                />
                <div style={{ position: "absolute", top: 160, left: 160, fontFamily: "Helvetica, sans-serif", fontSize: 24, color: COLORS.grayLight }}>
                  Mac Mini ← Vienna
                </div>
                <div style={{ position: "absolute", top: 500, right: 160, fontFamily: "Helvetica, sans-serif", fontSize: 24, color: COLORS.grayLight, textAlign: "right" }}>
                  Birthday trip → Marrakesh
                </div>
                <FlashText key={chunk.id} text="Installed on Mac Mini. Went to Marrakesh." delay={0} fontSize={32} />
              </React.Fragment>
            );
          case "s114":
            return <FlashText key={chunk.id} text="While traveling, the agent did something he didn't program." delay={0} fontSize={36} color={COLORS.accent} />;
          case "s115":
            return <FlashText key={chunk.id} text="Someone sent a voice message." delay={0} />;
          case "s116":
          case "s117":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "35%", left: "50%", transform: "translateX(-50%)", display: "flex", gap: 30, alignItems: "center", opacity: fadeIn(frame, 20) }}>
                  {[
                    { icon: "🎤", label: "Voice" },
                    { icon: "⚙️", label: "ffmpeg" },
                    { icon: "🧠", label: "Whisper" },
                    { icon: "💬", label: "Response" },
                  ].map((step, i) => (
                    <React.Fragment key={i}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: fadeIn(frame, 15, i * 10) }}>
                        <div style={{ fontSize: 48 }}>{step.icon}</div>
                        <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 16, color: COLORS.grayLight }}>{step.label}</div>
                      </div>
                      {i < 3 && <div style={{ fontSize: 24, color: COLORS.grayDark, opacity: fadeIn(frame, 10, i * 10 + 5) }}>→</div>}
                    </React.Fragment>
                  ))}
                </div>
                <div style={{ position: "absolute", bottom: 200, left: "50%", transform: "translateX(-50%)", fontFamily: "Helvetica, sans-serif", fontSize: 22, color: COLORS.accent, opacity: fadeIn(frame, 20, 50) }}>
                  It figured it out. On its own.
                </div>
              </React.Fragment>
            );
          case "s118":
            return <KeyPhrase key={chunk.id} text="This was different." delay={0} color={COLORS.accent} />;
          case "s119":
            return <FlashText key={chunk.id} text="Not a chatbot." delay={0} color={COLORS.red} />;
          case "s120":
            return <KeyPhrase key={chunk.id} text="A digital employee." delay={0} color={COLORS.accent} />;
          case "s121":
            return <FlashText key={chunk.id} text="He put it on a public Discord server." delay={0} />;
          case "s122":
            return <FlashText key={chunk.id} text="Just a few friends, he thought." delay={0} color={COLORS.grayLight} />;
          case "s123":
            return <FlashText key={chunk.id} text="Then he went to bed." delay={0} />;
          case "s124":
            return <FlashText key={chunk.id} text="He forgot one thing: it was resilient." delay={0} color={COLORS.accentAlt} />;
          case "s125":
            return <FlashText key={chunk.id} text="If it crashed, it restarted." delay={0} />;
          case "s126":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center", top: 100, left: 100, right: 100, opacity: fadeIn(frame, 20) }}>
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: 40,
                        height: 24,
                        borderRadius: 4,
                        backgroundColor: COLORS.red,
                        fontSize: 10,
                        color: COLORS.white,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        opacity: fadeIn(frame, 5, i * 2),
                      }}
                    >
                      {Math.floor(Math.random() * 99) + 1}
                    </div>
                  ))}
                </div>
                <EmphasisWord key={chunk.id} text="800+ messages" color={COLORS.red} fontSize={72} />
              </React.Fragment>
            );
          case "s127":
            return <FlashText key={chunk.id} text="The agent had been talking to strangers all night." delay={0} fontSize={36} />;
          case "s128":
            return <EmphasisWord key={chunk.id} text="He panicked." color={COLORS.red} />;
          case "s129":
            return <FlashText key={chunk.id} text="Pulled the plug." delay={0} color={COLORS.red} />;
          case "s130":
            return <FlashText key={chunk.id} text="Read every message. No leaks." delay={0} fontSize={36} />;
          case "s131":
            return <FlashText key={chunk.id} text="No leaks." delay={0} color={COLORS.accent} />;
          case "s132":
            return <KeyPhrase key={chunk.id} text="But it could have." delay={0} color={COLORS.red} />;
          case "s133":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 120, fontWeight: 900, color: COLORS.accent, opacity: fadeIn(frame, 25) }}>
                  VIRAL
                </div>
              </React.Fragment>
            );
          case "s134":
            return (
              <React.Fragment key={chunk.id}>
                <GitHubStarCounter
                  target={100000}
                  label="Clawdbot on GitHub"
                  style={{ position: "absolute", left: 460, top: 250 }}
                />
              </React.Fragment>
            );
          case "s135":
            return (
              <React.Fragment key={chunk.id}>
                <GitHubStarCounter
                  target={100000}
                  label="100,000 stars — fastest in GitHub history"
                  style={{ position: "absolute", left: 460, top: 250 }}
                />
              </React.Fragment>
            );
          case "s136":
            return (
              <React.Fragment key={chunk.id}>
                <GitHubStarCounter
                  target={200000}
                  label="200,000 stars"
                  style={{ position: "absolute", left: 460, top: 250 }}
                />
              </React.Fragment>
            );
          case "s137":
            return <KeyPhrase key={chunk.id} text='The "OpenClaw Moment"' subtext="Compared to ChatGPT 2022 and DeepSeek 2025" delay={0} color={COLORS.accent} />;
          case "s138":
            return <FlashText key={chunk.id} text="People bought Mac Minis just to run OpenClaw." delay={0} fontSize={36} />;
          case "s139":
            return <KeyPhrase key={chunk.id} text="SOLD OUT" subtext="In some regions" delay={0} color={COLORS.red} />;
          default:
            return null;
        }
      })}
    </AbsoluteFill>
  );
};

export default Act7Breakthrough;
