import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS } from "../theme/colors";
import { fadeIn } from "../theme/animations";
import { ChunkTiming } from "../data/timeline";
import { FlashText, KeyPhrase, EmphasisWord } from "../components/Typography";

const Act14Vision: React.FC<{ chunks: ChunkTiming[] }> = ({ chunks }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      {chunks.map((chunk) => {
        switch (chunk.id) {
          case "s362":
            return <FlashText key={chunk.id} text="Peter has a prediction." delay={0} />;
          case "s363":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "35%", left: "50%", transform: "translateX(-50%)", fontSize: 140, fontWeight: 900, color: COLORS.red, opacity: fadeIn(frame, 25) }}>
                  80%
                </div>
                <div style={{ position: "absolute", bottom: 200, left: "50%", transform: "translateX(-50%)", fontFamily: "Helvetica, sans-serif", fontSize: 28, color: COLORS.white }}>
                  of apps will die
                </div>
              </React.Fragment>
            );
          case "s364":
            return <FlashText key={chunk.id} text="Here's his reasoning." delay={0} />;
          case "s365":
            return <FlashText key={chunk.id} text="Most apps are just interfaces for managing data." delay={0} fontSize={32} />;
          case "s366":
            return <FlashText key={chunk.id} text="MyFitnessPal tracks what you eat." delay={0} />;
          case "s367":
            return <FlashText key={chunk.id} text="Todoist manages your tasks." delay={0} />;
          case "s368":
            return <FlashText key={chunk.id} text="Calendar app schedules your day." delay={0} />;
          case "s369":
            return <FlashText key={chunk.id} text="Weather app tells you the forecast." delay={0} />;
          case "s370":
            return <FlashText key={chunk.id} text="Each one is a separate interface to learn." delay={0} />;
          case "s371":
            return <KeyPhrase key={chunk.id} text="In the agent era, you don't need any of that." delay={0} color={COLORS.accent} />;
          case "s372":
            return <FlashText key={chunk.id} text="Just talk to your agent." delay={0} />;
          case "s373":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "35%", left: "50%", transform: "translateX(-50%)", width: 600, opacity: fadeIn(frame, 20) }}>
                  {[
                    { text: "Remind me to buy milk tomorrow.", isUser: true },
                    { text: "Done! I'll remind you at 9 AM.", isUser: false },
                    { text: "Book a flight to Tokyo, window seat.", isUser: true },
                    { text: "Tuesday next week? Let me check...", isUser: false },
                  ].map((msg, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "12px 20px",
                        margin: 8,
                        borderRadius: 12,
                        backgroundColor: msg.isUser ? COLORS.accent : COLORS.cardBg,
                        alignSelf: msg.isUser ? "flex-end" : "flex-start",
                        textAlign: msg.isUser ? "right" : "left",
                        fontFamily: "Helvetica, sans-serif",
                        fontSize: 18,
                        color: COLORS.white,
                        opacity: fadeIn(frame, 12, i * 15),
                      }}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
                <div style={{ position: "absolute", bottom: 100, left: "50%", transform: "translateX(-50%)", fontFamily: "Helvetica, sans-serif", fontSize: 18, color: COLORS.grayLight, opacity: fadeIn(frame, 20, 60) }}>
                  Never leave your messaging app.
                </div>
              </React.Fragment>
            );
          case "s374":
            return <FlashText key={chunk.id} text="Agent talks to APIs. Fills forms. Checks data." delay={0} fontSize={32} />;
          case "s375":
            return <FlashText key={chunk.id} text="It fills in the forms." delay={0} />;
          case "s376":
            return <FlashText key={chunk.id} text="It checks the data." delay={0} />;
          case "s377":
            return <KeyPhrase key={chunk.id} text="You never leave your messaging app." delay={0} color={COLORS.accent} />;
          case "s378":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", alignItems: "center", gap: 30, opacity: fadeIn(frame, 20) }}>
                  <div style={{ padding: "16px 32px", backgroundColor: COLORS.cardBg, borderRadius: 8, border: `1px solid ${COLORS.accent}`, fontFamily: "Helvetica, sans-serif", fontSize: 24, fontWeight: 600, color: COLORS.accent }}>
                    Agent
                  </div>
                  <div style={{ fontSize: 32, color: COLORS.grayDark }}>→</div>
                  <div style={{ padding: "16px 32px", backgroundColor: COLORS.cardBg, borderRadius: 8, border: `1px solid ${COLORS.purple}`, fontFamily: "Helvetica, sans-serif", fontSize: 24, fontWeight: 600, color: COLORS.purple }}>
                    API
                  </div>
                  <div style={{ fontSize: 32, color: COLORS.grayDark }}>→</div>
                  <div style={{ padding: "16px 32px", backgroundColor: COLORS.cardBg, borderRadius: 8, border: "1px solid #444", fontFamily: "Helvetica, sans-serif", fontSize: 24, fontWeight: 600, color: COLORS.white }}>
                    Data
                  </div>
                </div>
                <KeyPhrase key={chunk.id} text='"Every app is just a very slow API now."' delay={25} color={COLORS.accent} />
              </React.Fragment>
            );
          case "s379":
            return <FlashText key={chunk.id} text="API = Application Programming Interface." delay={0} fontSize={28} />;
          case "s380":
            return <FlashText key={chunk.id} text="Every app has a backend with APIs." delay={0} />;
          case "s381":
            return <FlashText key={chunk.id} text="The frontend is just a wrapper around those APIs." delay={0} fontSize={32} />;
          case "s382":
            return <KeyPhrase key={chunk.id} text="Agent calls APIs directly. No visual wrapper needed." delay={0} color={COLORS.accent} />;
          case "s383":
            return <FlashText key={chunk.id} text="No API? Agent uses the browser." delay={0} />;
          case "s384":
            return <KeyPhrase key={chunk.id} text='"The browser is a very slow API."' subtext="Navigates. Clicks. Fills forms. Just like a human." delay={0} color={COLORS.accentAlt} />;
          case "s385":
            return <FlashText key={chunk.id} text="Slower. But works for everything." delay={0} />;
          case "s386":
            return <FlashText key={chunk.id} text="Only hardware sensor apps survive." delay={0} />;
          case "s387":
            return <FlashText key={chunk.id} text="Camera. Heart rate. Thermometer." delay={0} />;
          case "s388":
            return <FlashText key={chunk.id} text="Everything else gets absorbed." delay={0} />;
          case "s389":
            return <KeyPhrase key={chunk.id} text="The agent becomes the OS." delay={0} color={COLORS.accent} />;
          case "s390":
            return <FlashText key={chunk.id} text="Real examples: invoices, workouts, smart home, e-commerce." delay={0} fontSize={28} />;
          case "s391":
            return <FlashText key={chunk.id} text="Even brewing beer." delay={0} color={COLORS.accentAlt} />;
          case "s392":
          case "s393":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translateX(-50%)", display: "flex", gap: 20, opacity: fadeIn(frame, 20) }}>
                  {["📄 Invoice", "💪 Fitness", "🏠 Smart Home", "🛒 Store", "🍺 Beer"].map((item, i) => (
                    <div key={i} style={{
                      padding: "16px 24px",
                      backgroundColor: COLORS.cardBg,
                      borderRadius: 8,
                      border: "1px solid #333",
                      fontFamily: "Helvetica, sans-serif",
                      fontSize: 18,
                      fontWeight: 600,
                      color: COLORS.white,
                      opacity: fadeIn(frame, 12, i * 10),
                    }}>
                      {item}
                    </div>
                  ))}
                </div>
                <div style={{ position: "absolute", bottom: 100, left: "50%", transform: "translateX(-50%)", fontFamily: "Helvetica, sans-serif", fontSize: 20, color: COLORS.grayLight, opacity: fadeIn(frame, 20, 50) }}>
                  All done by the agent.
                </div>
              </React.Fragment>
            );
          case "s394":
            return <FlashText key={chunk.id} text="Structural implications: App Store economy." delay={0} />;
          case "s395":
            return <FlashText key={chunk.id} text="Apple and Google Play. Coins falling off." delay={0} />;
          case "s396":
            return <FlashText key={chunk.id} text="Developers have to reinvent themselves." delay={0} />;
          case "s397":
            return <KeyPhrase key={chunk.id} text="Identity shift." delay={0} color={COLORS.accent} />;
          case "s398":
            return <FlashText key={chunk.id} text="From programmer who writes syntax to builder who solves problems." delay={0} fontSize={28} />;
          case "s399":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", gap: 60, opacity: fadeIn(frame, 20) }}>
                  <div style={{ textAlign: "center", opacity: fadeIn(frame, 20) }}>
                    <div style={{ fontSize: 80, marginBottom: 12 }}>🚪</div>
                    <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 20, fontWeight: 700, color: COLORS.grayDark }}>Programmer</div>
                    <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 14, color: COLORS.grayDark }}>Writes syntax</div>
                  </div>
                  <div style={{ fontSize: 48, color: COLORS.grayDark, alignSelf: "center" }}>→</div>
                  <div style={{ textAlign: "center", opacity: fadeIn(frame, 20, 15) }}>
                    <div style={{ fontSize: 80, marginBottom: 12 }}>🚪</div>
                    <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 20, fontWeight: 700, color: COLORS.accent }}>Builder</div>
                    <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 14, color: COLORS.grayLight }}>Solves problems</div>
                  </div>
                </div>
              </React.Fragment>
            );
          case "s400":
            return <FlashText key={chunk.id} text="The programmer writes syntax. The builder solves problems." delay={0} fontSize={28} />;
          case "s401":
            return <FlashText key={chunk.id} text="AI handles the syntax. Humans focus on problems." delay={0} fontSize={28} color={COLORS.accent} />;
          case "s402":
            return <KeyPhrase key={chunk.id} text="This changes everything." delay={0} color={COLORS.accent} />;
          case "s403":
            return <FlashText key={chunk.id} text="Six months. That's all it took." delay={0} />;
          case "s404":
          case "s405":
          case "s406":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", bottom: 250, left: 160, right: 160, display: "flex", justifyContent: "space-between", opacity: fadeIn(frame, 20) }}>
                  {[
                    { month: "Nov 2025", label: "Burnout" },
                    { month: "Dec 2025", label: "Built #44" },
                    { month: "Jan 2026", label: "Viral" },
                    { month: "Feb 2026", label: "Joined OpenAI" },
                  ].map((item, i) => (
                    <div key={i} style={{ textAlign: "center", opacity: fadeIn(frame, 15, i * 10) }}>
                      <div style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: COLORS.accent, margin: "0 auto 8px" }} />
                      <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 18, fontWeight: 700, color: COLORS.white }}>{item.month}</div>
                      <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 14, color: COLORS.grayLight }}>{item.label}</div>
                    </div>
                  ))}
                </div>
                <KeyPhrase key={chunk.id} text="Six months." subtext="From burnout to changing the AI industry." delay={50} color={COLORS.accent} />
              </React.Fragment>
            );
          case "s407":
            return <FlashText key={chunk.id} text="Three moments that changed AI." delay={0} />;
          case "s408":
          case "s409":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", gap: 40, opacity: fadeIn(frame, 20) }}>
                  {[
                    { year: "2022", label: "ChatGPT", desc: "Chat" },
                    { year: "2025", label: "DeepSeek", desc: "Reasoning" },
                    { year: "2026", label: "OpenClaw", desc: "Action" },
                  ].map((item, i) => (
                    <div key={i} style={{ textAlign: "center", padding: "24px 32px", backgroundColor: COLORS.cardBg, borderRadius: 12, border: i === 2 ? `2px solid ${COLORS.accent}` : "1px solid #333", opacity: fadeIn(frame, 15, i * 15) }}>
                      <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 16, color: COLORS.grayDark }}>{item.year}</div>
                      <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 28, fontWeight: 800, color: i === 2 ? COLORS.accent : COLORS.white, margin: "8px 0" }}>{item.label}</div>
                      <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 14, color: COLORS.grayLight }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </React.Fragment>
            );
          case "s410":
            return <FlashText key={chunk.id} text="Burnout." delay={0} color={COLORS.grayLight} />;
          case "s411":
            return <FlashText key={chunk.id} text="Reinvention." delay={0} color={COLORS.accent} />;
          case "s412":
            return <FlashText key={chunk.id} text="Emergence." delay={0} color={COLORS.purple} />;
          case "s413":
          case "s414":
          case "s415":
          case "s416":
          case "s417":
          case "s418":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(0,212,170,0.08) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", opacity: fadeIn(frame, 30) }}>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 32, color: COLORS.grayDark, marginBottom: 20, textTransform: "uppercase", letterSpacing: 6 }}>
                    MOLT
                  </div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 28, color: COLORS.white, marginBottom: 12 }}>
                    The old shell falls away.
                  </div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 20, color: COLORS.grayLight }}>
                    Burnout → Reinvention → Emergence
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

export default Act14Vision;
