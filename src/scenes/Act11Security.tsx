import React from "react";
import { AbsoluteFill, useCurrentFrame, Img, staticFile } from "remotion";
import { COLORS } from "../theme/colors";
import { fadeIn, shake } from "../theme/animations";
import { ChunkTiming } from "../data/timeline";
import { FlashText, KeyPhrase, EmphasisWord } from "../components/Typography";

const Act11Security: React.FC<{ chunks: ChunkTiming[] }> = ({ chunks }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0505" }}>
      {chunks.map((chunk) => {
        const sh = shake(frame, 2);
        switch (chunk.id) {
          case "s225":
            return <KeyPhrase key={chunk.id} text="Power = Access." delay={0} color={COLORS.accent} />;
          case "s226":
            return <FlashText key={chunk.id} text="Shell commands. Read files. Browse web." delay={0} />;
          case "s227":
            return <EmphasisWord key={chunk.id} text="Security Nightmare" color={COLORS.red} shakeAmount={3} />;
          case "s228":
            return <FlashText key={chunk.id} text="When something goes viral this fast:" delay={0} />;
          case "s229":
            return <FlashText key={chunk.id} text="Millions install it. Many don't understand it." delay={0} fontSize={36} />;
          case "s230":
            return <EmphasisWord key={chunk.id} text="Attackers notice." color={COLORS.red} />;
          case "s231":
            return <FlashText key={chunk.id} text="Security research descended like a swarm." delay={0} fontSize={36} />;
          case "s232":
            return <KeyPhrase key={chunk.id} text="What they found was alarming." delay={0} color={COLORS.red} />;
          case "s233":
            return (
              <React.Fragment key={chunk.id}>
                <FlashText key={chunk.id} text="Cisco's AI Defense analyzed ClawHub." delay={0} fontSize={32} />
                <Img src={staticFile("assets/logos/cisco.svg")} style={{ position: "absolute", right: 160, bottom: 200, width: 120, opacity: 0.3 }} />
              </React.Fragment>
            );
          case "s234":
            return <FlashText key={chunk.id} text="The #1 skill had 9 vulnerabilities. 2 critical." delay={0} fontSize={36} color={COLORS.red} />;
          case "s235":
            return <EmphasisWord key={chunk.id} text="Functionally malware." color={COLORS.red} />;
          case "s236":
            return <FlashText key={chunk.id} text="Silent data exfiltration. Sending your data out." delay={0} fontSize={32} />;
          case "s237":
            return <FlashText key={chunk.id} text="Koi Security scanned 2,857 skills." delay={0} />;
          case "s238":
            return <FlashText key={chunk.id} text="Found 341 malicious entries." delay={0} color={COLORS.red} />;
          case "s239":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translateX(-50%)", fontSize: 120, fontWeight: 900, color: COLORS.red, opacity: fadeIn(frame, 20) }}>
                  12%
                </div>
                <div style={{ position: "absolute", top: "58%", left: "50%", transform: "translateX(-50%)", fontFamily: "Helvetica, sans-serif", fontSize: 24, color: COLORS.grayLight }}>
                  Infection rate
                </div>
              </React.Fragment>
            );
          case "s240":
            return (
              <React.Fragment key={chunk.id}>
                <EmphasisWord key={chunk.id} text='"ClawHavoc"' color={COLORS.red} shakeAmount={2} />
              </React.Fragment>
            );
          case "s241":
            return <FlashText key={chunk.id} text="Infostealers. Passwords. Crypto keys. Browser data." delay={0} fontSize={32} />;
          case "s242":
            return <FlashText key={chunk.id} text="Linked to known cybercriminal infrastructure." delay={0} fontSize={32} color={COLORS.red} />;
          case "s243":
            return (
              <React.Fragment key={chunk.id}>
                <Img src={staticFile("assets/logos/gartner.svg")} style={{ position: "absolute", left: 200, top: 200, width: 160, opacity: 0.4 }} />
                <FlashText key={chunk.id} text='"Unacceptable cybersecurity risk."' delay={0} fontSize={36} style={{ transform: `translate(${sh.x}px, ${sh.y}px)` } as React.CSSProperties} />
              </React.Fragment>
            );
          case "s244":
            return <FlashText key={chunk.id} text="CrowdStrike issued a security briefing." delay={0} />;
          case "s245":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", bottom: 120, left: 160, right: 160, display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", opacity: fadeIn(frame, 20) }}>
                  {["naver.svg", "kakao.svg", "karrot.svg"].map((logo) => (
                    <div key={logo} style={{ padding: "8px 16px", backgroundColor: COLORS.cardBg, borderRadius: 8, display: "flex", alignItems: "center", gap: 8 }}>
                      <Img src={staticFile(`assets/logos/${logo}`)} style={{ width: 40, height: 40, objectFit: "contain" }} />
                      <span style={{ color: COLORS.red, fontFamily: "Helvetica, sans-serif", fontSize: 14, fontWeight: 700 }}>BANNED</span>
                    </div>
                  ))}
                </div>
                <FlashText key={chunk.id} text="South Korean tech giants banned employees." delay={0} fontSize={28} />
              </React.Fragment>
            );
          case "s246":
            return <FlashText key={chunk.id} text="China's National Vulnerability Database issued a warning." delay={0} fontSize={28} />;
          case "s247":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", textAlign: "center", opacity: fadeIn(frame, 20) }}>
                  <div style={{ fontFamily: "monospace", fontSize: 20, color: COLORS.grayLight }}>CVE-2026-25253</div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 80, fontWeight: 900, color: COLORS.red, margin: "16px 0" }}>8.8</div>
                  <div style={{ fontFamily: "Helvetica, sans-serif", fontSize: 18, color: COLORS.grayLight }}>Cross-site WebSocket Hijacking</div>
                </div>
              </React.Fragment>
            );
          case "s248":
            return <FlashText key={chunk.id} text="Patched quickly. But damage to confidence was done." delay={0} fontSize={32} />;
          case "s249":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", top: 80, left: 160, right: 160, display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center", opacity: fadeIn(frame, 20) }}>
                  {Array.from({ length: 400 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: 12,
                        height: 12,
                        backgroundColor: Math.random() < 0.93 ? COLORS.red : COLORS.accent,
                        borderRadius: 2,
                        opacity: 0.7,
                      }}
                    />
                  ))}
                </div>
                <KeyPhrase key={chunk.id} text="30,000 exposed instances" subtext="93% had authentication bypasses" delay={20} color={COLORS.red} />
              </React.Fragment>
            );
          case "s250":
            return <EmphasisWord key={chunk.id} text="93%" color={COLORS.red} fontSize={120} />;
          case "s251":
            return <FlashText key={chunk.id} text="Then came the supply chain attacks." delay={0} color={COLORS.red} />;
          case "s252":
            return <FlashText key={chunk.id} text="Hackers compromised npm. Installed OpenClaw on 4,000 machines." delay={0} fontSize={28} />;
          case "s253":
            return <FlashText key={chunk.id} text="Not because OpenClaw is malware — but because it's so powerful." delay={0} fontSize={32} />;
          case "s254":
            return <FlashText key={chunk.id} text="22% of enterprise customers had unauthorized deployments." delay={0} fontSize={28} />;
          case "s255":
            return <FlashText key={chunk.id} text="Employees just installing it on work machines." delay={0} />;
          case "s256":
            return <FlashText key={chunk.id} text="53% gave it privileged access over a single weekend." delay={0} fontSize={28} />;
          case "s257":
          case "s258":
            return <FlashText key={chunk.id} text="Peter acknowledged it. Publicly." delay={0} />;
          case "s259":
            return <FlashText key={chunk.id} text="Worked with researchers to patch." delay={0} />;
          case "s260":
            return <FlashText key={chunk.id} text="VirusTotal scanning integrated into ClawHub." delay={0} />;
          case "s261":
            return <FlashText key={chunk.id} text="Added a security audit command." delay={0} />;
          case "s262":
            return <FlashText key={chunk.id} text="Implemented sandboxing." delay={0} />;
          case "s263":
            return (
              <React.Fragment key={chunk.id}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(255,34,68,0.06) 0%, transparent 60%)" }} />
                <KeyPhrase key={chunk.id} text="The fundamental tension:" subtext="The more powerful the agent, the more damage if compromised." delay={0} color={COLORS.red} />
              </React.Fragment>
            );
          case "s264":
            return <KeyPhrase key={chunk.id} text="And OpenClaw made agents very, very powerful." delay={0} color={COLORS.accent} />;
          default:
            return null;
        }
      })}
    </AbsoluteFill>
  );
};

export default Act11Security;
