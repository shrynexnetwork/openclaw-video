import React from "react";
import { AbsoluteFill, useCurrentFrame, Img, staticFile } from "remotion";
import { COLORS } from "../theme/colors";
import { fadeIn, scaleIn, countUp } from "../theme/animations";
import { ChunkTiming } from "../data/timeline";
import { FlashText, KeyPhrase, EmphasisWord } from "../components/Typography";
import { QuoteCard } from "../components/QuoteCard";

const Act10Names: React.FC<{ chunks: ChunkTiming[] }> = ({ chunks }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      {chunks.map((chunk) => {
        switch (chunk.id) {
          case "s190":
            return <FlashText key={chunk.id} text="OpenClaw was not always OpenClaw." delay={0} />;
          case "s191":
            return <FlashText key={chunk.id} text="Three names in one week." delay={0} color={COLORS.accentAlt} />;
          case "s192":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", display: "flex", gap: 30 }}>
                  {["Trademark", "Crypto", "Chaos"].map((item, i) => (
                    <div key={i} style={{ padding: "16px 32px", backgroundColor: COLORS.cardBg, borderRadius: 8, border: "1px solid #444", fontFamily: "Helvetica, sans-serif", fontSize: 24, fontWeight: 600, color: COLORS.white, opacity: fadeIn(frame, 15, i * 10), transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)` }}>
                      {item}
                    </div>
                  ))}
                </div>
                <FlashText key={chunk.id} text="Trademark lawyers. Crypto scammers. Chaos." delay={30} fontSize={28} />
              </React.Fragment>
            );
          case "s193":
            return <FlashText key={chunk.id} text='"Clawdbot." Claw — like a lobster claw.' delay={0} fontSize={36} />;
          case "s194":
            return <FlashText key={chunk.id} text="But it sounded like 'Claude.'" delay={0} color={COLORS.accentAlt} />;
          case "s195":
            return <FlashText key={chunk.id} text="January 2026. Anthropic's legal team reached out." delay={0} fontSize={32} />;
          case "s196":
            return <FlashText key={chunk.id} text="Trademark concern." delay={0} color={COLORS.red} />;
          case "s197":
            return <FlashText key={chunk.id} text='"Clawdbot" was too close to "Claude."' delay={0} fontSize={36} />;
          case "s198":
            return <FlashText key={chunk.id} text="Peter didn't fight it." delay={0} />;
          case "s199":
            return <FlashText key={chunk.id} text="Solo developer in Austria." delay={0} />;
          case "s200":
            return <FlashText key={chunk.id} text="Anthropic: multi-billion-dollar AI company." delay={0} fontSize={36} />;
          case "s201":
            return <FlashText key={chunk.id} text="He had no legal department." delay={0} />;
          case "s202":
            return <FlashText key={chunk.id} text="So he agreed to rebrand." delay={0} />;
          case "s203":
            return <FlashText key={chunk.id} text='"Moltbot." Molt — like a lobster shedding its shell.' delay={0} fontSize={32} color={COLORS.accent} />;
          case "s204":
            return <FlashText key={chunk.id} text="New accounts. X. GitHub." delay={0} />;
          case "s205":
            return <FlashText key={chunk.id} text="Released the old handle." delay={0} color={COLORS.accentAlt} />;
          case "s206":
            return <EmphasisWord key={chunk.id} text="Nightmare." color={COLORS.red} />;
          case "s207":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "35%", left: "50%", transform: "translateX(-50%)", fontFamily: "Helvetica, sans-serif", fontSize: 120, fontWeight: 900, color: COLORS.red, opacity: fadeIn(frame, 15) }}>
                  10
                </div>
                <div style={{ position: "absolute", top: "55%", left: "50%", transform: "translateX(-50%)", fontFamily: "Helvetica, sans-serif", fontSize: 24, color: COLORS.grayLight, textAlign: "center", opacity: fadeIn(frame, 20, 15) }}>
                  Seconds between releasing Clawdbot and claiming Moltbot
                </div>
              </React.Fragment>
            );
          case "s208":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "35%", left: "50%", transform: "translateX(-50%)", textAlign: "center", opacity: fadeIn(frame, 20) }}>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 48, fontWeight: 700, color: COLORS.accentAlt }}>$CLAWD</div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 60, fontWeight: 800, color: COLORS.red, marginTop: 12, opacity: fadeIn(frame, 15, 10) }}>
                    $16M
                  </div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 20, color: COLORS.grayLight, marginTop: 8 }}>
                    market cap — before he could wake up
                  </div>
                </div>
              </React.Fragment>
            );
          case "s209":
            return <FlashText key={chunk.id} text="Token crashed to under $800,000 after his denial." delay={0} fontSize={32} />;
          case "s210":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 24, color: COLORS.grayDark, textDecoration: "line-through" }}>$16,000,000</div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 72, fontWeight: 900, color: COLORS.red, margin: 16 }}>$800,000</div>
                  <div style={{ width: 400, height: 200, display: "flex", alignItems: "flex-end", gap: 2 }}>
                    <div style={{ width: 200, height: 180, backgroundColor: COLORS.accent, borderRadius: "4px 4px 0 0" }} />
                    <div style={{ width: 200, height: 20, backgroundColor: COLORS.red, borderRadius: "4px 4px 0 0" }} />
                  </div>
                </div>
              </React.Fragment>
            );
          case "s211":
          case "s212":
            return (
              <QuoteCard
                key={chunk.id}
                quote="I was close to crying. I was ready to delete the whole project."
                attribution="Peter Steinberger"
                delay={0}
                color={COLORS.red}
              />
            );
          case "s213":
            return <FlashText key={chunk.id} text="Three days later. Renamed again." delay={0} />;
          case "s214":
            return <FlashText key={chunk.id} text="He checked with Sam Altman first." delay={0} fontSize={36} />;
          case "s215":
            return <KeyPhrase key={chunk.id} text="OpenClaw." subtext="Final name. Sam gave the thumbs up." delay={0} color={COLORS.accent} />;
          case "s216":
            return <FlashText key={chunk.id} text="The irony is thick." delay={0} color={COLORS.warmGold} />;
          case "s217":
            return <FlashText key={chunk.id} text="Anthropic's lawyers pushed him to rename." delay={0} />;
          case "s218":
            return <FlashText key={chunk.id} text="That rename made OpenClaw even more famous." delay={0} fontSize={36} color={COLORS.accent} />;
          case "s219":
            return <FlashText key={chunk.id} text="And then... he joined OpenAI." delay={0} fontSize={48} color={COLORS.accent} />;
          case "s220":
            return <FlashText key={chunk.id} text="Anthropic had the best community advocate in AI." delay={0} fontSize={32} />;
          case "s221":
            return <FlashText key={chunk.id} text="The guy whose project ran entirely on Claude." delay={0} />;
          case "s222":
            return <FlashText key={chunk.id} text="Driving thousands to sign up for $200/mo Claude Max." delay={0} fontSize={32} />;
          case "s223":
            return <FlashText key={chunk.id} text="And they sent him a legal letter." delay={0} color={COLORS.red} />;
          case "s224":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", left: 300, top: "40%", textAlign: "center", opacity: fadeIn(frame, 20) }}>
                  <Img src={staticFile("assets/logos/anthropic.svg")} style={{ width: 160, opacity: 0.4 }} />
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 20, color: COLORS.grayDark, marginTop: 8 }}>Sent the letter</div>
                </div>
                <div style={{ position: "absolute", left: "50%", top: "45%", transform: "translateX(-50%)", fontFamily: "Helvetica, sans-serif", fontSize: 36, color: COLORS.white, fontWeight: 700 }}>
                  →
                </div>
                <div style={{ position: "absolute", right: 300, top: "40%", textAlign: "center", opacity: fadeIn(frame, 20, 15) }}>
                  <Img src={staticFile("assets/logos/openai.svg")} style={{ width: 160 }} />
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 20, color: COLORS.accent, marginTop: 8 }}>He works here now</div>
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

export default Act10Names;
