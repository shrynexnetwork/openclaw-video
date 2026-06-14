import React from "react";
import { AbsoluteFill, useCurrentFrame, Img, staticFile } from "remotion";
import { COLORS } from "../theme/colors";
import { fadeIn, shake } from "../theme/animations";
import { ChunkTiming } from "../data/timeline";
import { FlashText, EmphasisWord, KeyPhrase } from "../components/Typography";
import { QuoteCard } from "../components/QuoteCard";
import { OpenClawLogo } from "../components/OpenClawLogo";
import { GitHubStarCounter } from "../components/GitHubStars";
import { CodeEditor } from "../components/CodeEditor";

const Act1Hook: React.FC<{ chunks: ChunkTiming[] }> = ({ chunks }) => {
  const frame = useCurrentFrame();
  const chunk = (id: string) => chunks.find((c) => c.id === id);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      {chunks.map((chunk) => {
        const localFrame = frame;
        switch (chunk.id) {
          case "s001":
            return (
              <React.Fragment key={chunk.id}>
                <Img
                  src={staticFile("assets/backgrounds/rain-window.jpg")}
                  style={{
                    position: "absolute",
                    width: 1920,
                    height: 1080,
                    objectFit: "cover",
                    opacity: 0.4,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 80,
                    left: 160,
                    fontFamily: "Helvetica, sans-serif",
                    fontSize: 24,
                    fontWeight: 600,
                    color: COLORS.accent,
                    opacity: fadeIn(localFrame, 20),
                  }}
                >
                  Vienna, November 2025
                </div>
                <div
                  style={{
                    position: "absolute",
                    width: 800,
                    right: 160,
                    top: "50%",
                    transform: "translateY(-50%)",
                    textAlign: "right",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Helvetica, sans-serif",
                      fontSize: 36,
                      fontWeight: 300,
                      color: COLORS.white,
                      opacity: fadeIn(localFrame, 25, 10),
                      lineHeight: 1.5,
                    }}
                  >
                    A burned-out Austrian developer sat alone in his apartment
                  </div>
                </div>
              </React.Fragment>
            );
          case "s002":
            return (
              <React.Fragment key={chunk.id}>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: 100,
                    fontWeight: 900,
                    color: COLORS.accentAlt,
                    opacity: fadeIn(localFrame, 20),
                  }}
                >
                  100,000,000+
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: 28,
                    color: COLORS.grayLight,
                    opacity: fadeIn(localFrame, 20, 10),
                  }}
                >
                  euros
                </div>
              </React.Fragment>
            );
          case "s003":
            return (
              <React.Fragment key={chunk.id}>
                {["Exit", "Wealth", "Success"].map((item, i) => (
                  <div
                    key={item}
                    style={{
                      position: "absolute",
                      top: `${30 + i * 18}%`,
                      left: "50%",
                      transform: `translateX(-50%) scale(${fadeIn(localFrame, 20, i * 10)})`,
                      fontSize: 48,
                      fontWeight: 700,
                      color: fadeIn(localFrame, 20, i * 10 + 15) > 0.5 ? COLORS.red : COLORS.grayLight,
                      opacity: fadeIn(localFrame, 20, i * 10),
                    }}
                  >
                    ✓ {item}
                  </div>
                ))}
              </React.Fragment>
            );
          case "s004":
            return <EmphasisWord key={chunk.id} text="EMPTY" color={COLORS.gray} fontSize={140} />;
          case "s005":
            return (
              <React.Fragment key={chunk.id}>
                <CodeEditor
                  empty
                  cursor
                  style={{ position: "absolute", left: 560, top: "50%", transform: "translateY(-60%)" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "55%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: 48,
                    fontWeight: 700,
                    color: COLORS.red,
                    opacity: Math.min(1, (localFrame - 30) / 15),
                  }}
                >
                  ✕
                </div>
              </React.Fragment>
            );
          case "s006":
            return <KeyPhrase key={chunk.id} text="Therapy" delay={0} color={COLORS.purple} />;
          case "s007":
            return <KeyPhrase key={chunk.id} text="Moving Countries" delay={0} color={COLORS.accent} />;
          case "s008":
            return <KeyPhrase key={chunk.id} text="Ayahuasca" delay={0} color={COLORS.accentAlt} />;
          case "s009":
            return <EmphasisWord key={chunk.id} text="NOTHING" shakeAmount={5} />;
          case "s010":
            return (
              <React.Fragment key={chunk.id}>
                <CodeEditor
                  lines={[
                    { text: "for (let i = 0; i < 100; i++) {" },
                    { text: "  console.log('why?');" },
                    { text: "}" },
                  ]}
                  style={{ position: "absolute", left: 560, top: "50%", transform: "translateY(-60%)", opacity: 0.5 }}
                />
                <EmphasisWord text="..." color={COLORS.gray} fontSize={80} />
              </React.Fragment>
            );
          case "s011":
            return <FlashText key={chunk.id} text="He opened his laptop." delay={0} />;
          case "s012":
            return <FlashText key={chunk.id} text="Just to see if he still could." delay={0} fontSize={48} />;
          case "s013":
            return <OpenClawLogo key={chunk.id} size={160} delay={0} style={{ position: "absolute", left: 760, top: 300 }} />;
          case "s014":
            return (
              <GitHubStarCounter
                key={chunk.id}
                target={100000}
                label="GitHub Stars"
                style={{ position: "absolute", left: 460, top: 300 }}
              />
            );
          case "s015":
            return <KeyPhrase key={chunk.id} text="Broke Anthropic's Pricing" color={COLORS.red} />;
          case "s016":
            return (
              <FlashText
                key={chunk.id}
                text="AI Agents Invented Their Own Religion"
                fontSize={52}
                color={COLORS.purple}
              />
            );
          case "s017":
            return (
              <React.Fragment key={chunk.id}>
                <Img
                  src={staticFile("assets/logos/meta-wordmark.svg")}
                  style={{ position: "absolute", left: 300, top: 300, width: 200, opacity: fadeIn(localFrame, 20) }}
                />
                <div style={{ position: "absolute", left: 560, top: 360, fontSize: 36, color: COLORS.grayLight, fontWeight: 700 }}>
                  VS
                </div>
                <Img
                  src={staticFile("assets/logos/openai.svg")}
                  style={{ position: "absolute", right: 300, top: 300, width: 200, opacity: fadeIn(localFrame, 20, 10) }}
                />
              </React.Fragment>
            );
          case "s018":
            return <FlashText key={chunk.id} text="Changed How Tech Thinks About AI" fontSize={48} delay={0} />;
          case "s019":
            return (
              <React.Fragment key={chunk.id}>
                <Img
                  src={staticFile("assets/photos/peter-steinberger-headshot.webp")}
                  style={{
                    position: "absolute",
                    left: 360,
                    top: 140,
                    width: 400,
                    height: 400,
                    objectFit: "cover",
                    borderRadius: 200,
                    opacity: fadeIn(localFrame, 25),
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    right: 200,
                    top: 280,
                    width: 600,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Helvetica, sans-serif",
                      fontSize: 52,
                      fontWeight: 800,
                      color: COLORS.white,
                      opacity: fadeIn(localFrame, 20, 10),
                    }}
                  >
                    Peter Steinberger
                  </div>
                  <div
                    style={{
                      fontFamily: "Helvetica, sans-serif",
                      fontSize: 24,
                      color: COLORS.grayLight,
                      marginTop: 12,
                      opacity: fadeIn(localFrame, 20, 20),
                    }}
                  >
                    The developer who changed everything
                  </div>
                </div>
              </React.Fragment>
            );
          case "s020":
            return (
              <QuoteCard
                key={chunk.id}
                quote="One person, no team, no funding, nothing to lose — accidentally wrote the first draft of the AI agent era."
                color={COLORS.accent}
              />
            );
          default:
            return null;
        }
      })}
    </AbsoluteFill>
  );
};

export default Act1Hook;
