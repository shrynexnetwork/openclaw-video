import React from "react";
import { AbsoluteFill, useCurrentFrame, Img, staticFile } from "remotion";
import { COLORS } from "../theme/colors";
import { fadeIn } from "../theme/animations";
import { ChunkTiming } from "../data/timeline";
import { FlashText, KeyPhrase } from "../components/Typography";
import { QuoteCard } from "../components/QuoteCard";
import { PhoneMockup } from "../components/PhoneMockup";

const Act13Bidding: React.FC<{ chunks: ChunkTiming[] }> = ({ chunks }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      {chunks.map((chunk) => {
        switch (chunk.id) {
          case "s313":
            return <FlashText key={chunk.id} text="By February 2026, every major tech company knew." delay={0} fontSize={36} />;
          case "s314":
            return <FlashText key={chunk.id} text="They all wanted a piece." delay={0} color={COLORS.accent} />;
          case "s315":
            return <FlashText key={chunk.id} text="Peter's inbox was flooded." delay={0} />;
          case "s316":
            return <FlashText key={chunk.id} text="Every VC in Silicon Valley." delay={0} />;
          case "s317":
            return <FlashText key={chunk.id} text="Every major AI lab." delay={0} />;
          case "s318":
            return <KeyPhrase key={chunk.id} text="Two stood out: Meta and OpenAI." delay={0} color={COLORS.accent} />;
          case "s319":
            return <FlashText key={chunk.id} text="Mark Zuckerberg reached out via WhatsApp." delay={0} fontSize={36} />;
          case "s320":
            return (
              <React.Fragment key={chunk.id}>
                <PhoneMockup
                  messages={[
                    { text: "Hey Peter, got 10 mins?", isMine: false },
                  ]}
                  style={{ position: "absolute", left: 800, top: 200 }}
                />
                <FlashText key={chunk.id} text="No assistant. No calendar invite. Just a DM." delay={0} fontSize={28} />
              </React.Fragment>
            );
          case "s321":
            return <FlashText key={chunk.id} text="No assistant. No calendar invite." delay={0} />;
          case "s322":
            return <KeyPhrase key={chunk.id} text="Just a direct message." delay={0} color={COLORS.metaBlue} />;
          case "s323":
            return (
              <QuoteCard
                key={chunk.id}
                quote="Give me ten minutes, I need to finish coding."
                attribution="Mark Zuckerberg to Peter Steinberger"
                color={COLORS.metaBlue}
              />
            );
          case "s324":
            return <FlashText key={chunk.id} text="'That gives you street cred.'" delay={0} fontSize={36} />;
          case "s325":
            return <FlashText key={chunk.id} text="He is still writing code." delay={0} />;
          case "s326":
            return <FlashText key={chunk.id} text="'He gets me.'" delay={0} fontSize={48} color={COLORS.accent} />;
          case "s327":
            return <FlashText key={chunk.id} text="They argued about Claude Code vs Codex for 10 minutes." delay={0} fontSize={28} />;
          case "s328":
            return <FlashText key={chunk.id} text="Zuckerberg: 'Eccentric but brilliant.'" delay={0} fontSize={32} />;
          case "s329":
            return <FlashText key={chunk.id} text="He had actually used OpenClaw." delay={0} />;
          case "s330":
          case "s331":
            return <FlashText key={chunk.id} text='"This is great. This is shit. This needs to change."' delay={0} fontSize={28} />;
          case "s332":
            return <FlashText key={chunk.id} text="That level of engagement impressed Peter." delay={0} />;
          case "s333":
            return <FlashText key={chunk.id} text="Sam Altman took a different approach." delay={0} />;
          case "s334":
            return (
              <QuoteCard
                key={chunk.id}
                quote="Really cool. Very thoughtful. Brilliant."
                attribution="Peter on Sam Altman"
                color={COLORS.openaiGreen}
              />
            );
          case "s335":
            return <FlashText key={chunk.id} text="OpenAI was covering $10,000–$20,000/month in API costs." delay={0} fontSize={28} />;
          case "s336":
            return <FlashText key={chunk.id} text="But Peter noticed a difference." delay={0} />;
          case "s337":
            return <FlashText key={chunk.id} text={'"Mark gave anecdotes. OpenAI didn\'t feel the same."'} delay={0} fontSize={28} />;
          case "s338":
            return <FlashText key={chunk.id} text="Even Satya Nadella got involved personally." delay={0} />;
          case "s339":
            return <KeyPhrase key={chunk.id} text="Why did Peter choose OpenAI?" delay={0} color={COLORS.openaiGreen} />;
          case "s340":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translateX(-50%)", fontSize: 120, fontWeight: 900, color: COLORS.openaiGreen, opacity: fadeIn(frame, 20) }}>
                  3
                </div>
                <div style={{ position: "absolute", bottom: 200, left: "50%", transform: "translateX(-50%)", fontFamily: "Helvetica, sans-serif", fontSize: 22, color: COLORS.grayLight, opacity: fadeIn(frame, 20, 15) }}>
                  Three reasons
                </div>
              </React.Fragment>
            );
          case "s341":
            return <FlashText key={chunk.id} text="Reason 1: He believed in their technology." delay={0} fontSize={32} color={COLORS.openaiGreen} />;
          case "s342":
            return <FlashText key={chunk.id} text='"The biggest unpaid Codex advertisement shill."' delay={0} fontSize={28} />;
          case "s343":
            return <KeyPhrase key={chunk.id} text="Reason 2: Non-negotiable — OpenClaw stays open source." delay={0} color={COLORS.accent} />;
          case "s344":
            return <FlashText key={chunk.id} text="Altman committed to this explicitly." delay={0} />;
          case "s345":
            return <FlashText key={chunk.id} text="An independent foundation, supported by OpenAI." delay={0} fontSize={32} />;
          case "s346":
            return <FlashText key={chunk.id} text="Meta's offer didn't include that guarantee." delay={0} color={COLORS.grayLight} />;
          case "s347":
            return <FlashText key={chunk.id} text="Reason 3: Scale." delay={0} fontSize={48} color={COLORS.openaiGreen} />;
          case "s348":
            return <FlashText key={chunk.id} text="300 million weekly ChatGPT users." delay={0} />;
          case "s349":
            return <FlashText key={chunk.id} text="Infrastructure to bring agents to everyone." delay={0} />;
          case "s350":
            return (
              <QuoteCard
                key={chunk.id}
                quote="Build an agent that even my mum can use."
                attribution="Peter Steinberger's mission"
                color={COLORS.accent}
              />
            );
          case "s351":
            return <FlashText key={chunk.id} text="Money was not a factor." delay={0} color={COLORS.grayLight} />;
          case "s352":
          case "s353":
          case "s354":
            return (
              <QuoteCard
                key={chunk.id}
                quote="I do not do this for the money. I do not give a f***. I want to have fun and have impact."
                attribution="Peter Steinberger"
                color={COLORS.accent}
              />
            );
          case "s355":
            return <FlashText key={chunk.id} text="February 14, 2026. Valentine's Day." delay={0} fontSize={36} />;
          case "s356":
          case "s357":
          case "s358":
          case "s359":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "30%", left: 200, right: 200, padding: "32px 40px", backgroundColor: COLORS.cardBg, borderRadius: 12, border: "1px solid #333", opacity: fadeIn(frame, 20) }}>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 14, color: COLORS.grayDark, marginBottom: 12 }}>BLOG POST · FEB 14, 2026</div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 32, fontWeight: 700, color: COLORS.white, marginBottom: 16 }}>
                    I could totally see how OpenClaw could become a huge company.
                  </div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 24, color: COLORS.grayLight }}>
                    And no, it is not really exciting for me. I am a builder at heart. What I want is to change the world, not build a large company.
                  </div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 18, color: COLORS.accent, marginTop: 16, fontWeight: 600 }}>
                    — Peter Steinberger
                  </div>
                </div>
              </React.Fragment>
            );
          case "s360":
          case "s361":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "30%", left: 200, right: 200, padding: "32px 40px", backgroundColor: "#0a1a10", borderRadius: 12, border: `1px solid ${COLORS.openaiGreen}`, opacity: fadeIn(frame, 20) }}>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 14, color: COLORS.grayDark, marginBottom: 12 }}>@sama · X / TWITTER · FEB 14, 2026</div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 28, fontStyle: "italic", color: COLORS.white, lineHeight: 1.5 }}>
                    "Peter Steinberger is joining OpenAI to drive the next generation of personal agents. He is a genius with a lot of amazing ideas about the future of very smart agents interacting with each other to do very useful things for people."
                  </div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 18, color: COLORS.openaiGreen, marginTop: 16, fontWeight: 600 }}>
                    — Sam Altman
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

export default Act13Bidding;
