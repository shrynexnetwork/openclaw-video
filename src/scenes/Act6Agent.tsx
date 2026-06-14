import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS } from "../theme/colors";
import { fadeIn } from "../theme/animations";
import { ChunkTiming } from "../data/timeline";
import { FlashText, KeyPhrase } from "../components/Typography";
import { Terminal } from "../components/Terminal";

const Act6Agent: React.FC<{ chunks: ChunkTiming[] }> = ({ chunks }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      {chunks.map((chunk) => {
        switch (chunk.id) {
          case "s094":
            return <FlashText key={chunk.id} text="Let me explain some terms." delay={0} fontSize={36} color={COLORS.grayLight} />;
          case "s095":
            return (
              <React.Fragment key={chunk.id}>
                <Terminal
                  lines={[
                    { text: "ls -la", isCommand: true },
                    { text: "total 24" },
                    { text: "drwxr-xr-x  2 user staff   64 Mar 20 10:00 ." },
                    { text: "drwxr-xr-x  5 user staff  160 Mar 20 10:00 .." },
                  ]}
                  style={{ position: "absolute", left: 610, top: 200 }}
                />
                <KeyPhrase text="CLI = Command Line Interface" subtext="Type, don't click." delay={15} color={COLORS.accent} />
              </React.Fragment>
            );
          case "s096":
            return <FlashText key={chunk.id} text="Instead of clicking, you type commands." delay={0} fontSize={36} />;
          case "s097":
            return <FlashText key={chunk.id} text="Developers use CLIs all the time." delay={0} />;
          case "s098":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", alignItems: "center", gap: 40, opacity: fadeIn(frame, 20) }}>
                  <div style={{ fontSize: 60, fontWeight: 700, color: COLORS.accent }}>📱</div>
                  <div style={{ fontSize: 32, color: COLORS.grayDark }}>→</div>
                  <div style={{ fontSize: 60, fontWeight: 700, color: COLORS.accentAlt }}>💻</div>
                </div>
                <FlashText key={chunk.id} text="WhatsApp → Claude's CLI" delay={0} fontSize={36} />
              </React.Fragment>
            );
          case "s099":
            return <FlashText key={chunk.id} text="Message goes to Claude. Claude does something." delay={0} fontSize={36} />;
          case "s100":
            return <KeyPhrase key={chunk.id} text="This is an AI Agent." delay={0} color={COLORS.accent} />;
          case "s101":
            return <FlashText key={chunk.id} text="Not a chatbot." delay={0} color={COLORS.red} />;
          case "s102":
            return <FlashText key={chunk.id} text="There is a difference." delay={0} fontSize={48} />;
          case "s103":
            return <FlashText key={chunk.id} text="A chatbot is reactive." delay={0} color={COLORS.grayLight} />;
          case "s104":
            return <FlashText key={chunk.id} text="Ask a question. Get an answer." delay={0} />;
          case "s105":
            return <FlashText key={chunk.id} text="Conversation ends." delay={0} color={COLORS.grayDark} />;
          case "s106":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 60%)" }} />
                <KeyPhrase text="An AI agent is proactive." delay={0} color={COLORS.purple} />
              </React.Fragment>
            );
          case "s107":
            return <FlashText key={chunk.id} text="Access to files, calendar, computer." delay={0} fontSize={36} />;
          case "s108":
            return <FlashText key={chunk.id} text="It can take actions." delay={0} color={COLORS.accent} />;
          case "s109":
            return <FlashText key={chunk.id} text="Book flights." delay={0} />;
          case "s110":
            return <FlashText key={chunk.id} text="Send emails." delay={0} />;
          case "s111":
            return <FlashText key={chunk.id} text="Run code." delay={0} />;
          case "s112":
            return <KeyPhrase key={chunk.id} text="It doesn't wait. It does things." delay={0} color={COLORS.accent} />;
          default:
            return null;
        }
      })}
    </AbsoluteFill>
  );
};

export default Act6Agent;
