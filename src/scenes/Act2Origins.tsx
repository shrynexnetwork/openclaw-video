import React from "react";
import { AbsoluteFill, useCurrentFrame, Img, staticFile } from "remotion";
import { COLORS } from "../theme/colors";
import { fadeIn, scaleIn } from "../theme/animations";
import { ChunkTiming } from "../data/timeline";
import { FlashText } from "../components/Typography";
import { LogoPill } from "../components/LogoPill";

const Act2Origins: React.FC<{ chunks: ChunkTiming[] }> = ({ chunks }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, overflow: "hidden" }}>
      {chunks.map((chunk) => {
        switch (chunk.id) {
          case "s021":
            return (
              <React.Fragment key={chunk.id}>
                <Img
                  src={staticFile("assets/backgrounds/austria-alps.jpg")}
                  style={{ position: "absolute", width: 1920, height: 1080, objectFit: "cover", opacity: 0.3 }}
                />
                <FlashText text="To understand OpenClaw, understand Peter." delay={0} fontSize={44} />
              </React.Fragment>
            );
          case "s022":
            return (
              <React.Fragment key={chunk.id}>
                <Img
                  src={staticFile("assets/backgrounds/austria-alps.jpg")}
                  style={{ position: "absolute", width: 1920, height: 1080, objectFit: "cover", opacity: 0.35 }}
                />
                <FlashText text="Born 1986. Rural Austria." delay={0} />
              </React.Fragment>
            );
          case "s023":
            return <FlashText key={chunk.id} text="Actual farmland." delay={0} fontSize={48} color={COLORS.accentAlt} />;
          case "s024":
            return <FlashText key={chunk.id} text="No startup scene." delay={0} color={COLORS.red} />;
          case "s025":
            return <FlashText key={chunk.id} text="No Silicon Valley culture." delay={0} color={COLORS.red} />;
          case "s026":
            return (
              <React.Fragment key={chunk.id}>
                <Img
                  src={staticFile("assets/backgrounds/vintage-crt.jpg")}
                  style={{ position: "absolute", width: 1920, height: 1080, objectFit: "cover", opacity: 0.25 }}
                />
                <FlashText text="Just a kid obsessed with computers." delay={0} fontSize={48} />
              </React.Fragment>
            );
          case "s027":
            return <FlashText key={chunk.id} text="Programming at 14." delay={0} color={COLORS.accent} />;
          case "s028":
            return (
              <React.Fragment key={chunk.id}>
                <Img
                  src={staticFile("assets/backgrounds/tu-wien.jpg")}
                  style={{ position: "absolute", left: 0, width: 960, height: 1080, objectFit: "cover", opacity: 0.5 }}
                />
                <Img
                  src={staticFile("assets/logos/apple.svg")}
                  style={{ position: "absolute", right: 160, top: 200, width: 120, opacity: 0.3 }}
                />
                <div
                  style={{
                    position: "absolute",
                    right: 160,
                    top: 380,
                    fontFamily: "Helvetica, sans-serif",
                    fontSize: 30,
                    fontWeight: 700,
                    color: COLORS.white,
                    textAlign: "right",
                    opacity: fadeIn(frame, 20, 20),
                  }}
                >
                  Vienna University of Technology
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: 160,
                    top: 440,
                    fontFamily: "Helvetica, sans-serif",
                    fontSize: 20,
                    color: COLORS.grayLight,
                    textAlign: "right",
                    opacity: fadeIn(frame, 20, 30),
                  }}
                >
                  Early iOS expert. Platform just launched.
                </div>
              </React.Fragment>
            );
          case "s029":
            return <FlashText key={chunk.id} text="2010: Freelance job. Fix a broken PDF viewer." delay={0} fontSize={42} />;
          case "s030":
            return <FlashText key={chunk.id} text="He rewrote it from scratch." delay={0} color={COLORS.accent} />;
          case "s031":
            return <FlashText key={chunk.id} text="Eight weeks." delay={0} fontSize={96} color={COLORS.accentAlt} />;
          case "s032":
            return <FlashText key={chunk.id} text="This could be a business." delay={0} color={COLORS.accent} />;
          case "s033":
            return <FlashText key={chunk.id} text="PSPDFKit" delay={0} fontSize={96} color={COLORS.accent} />;
          case "s034":
            return <FlashText key={chunk.id} text="Software toolkit for PDF editing." delay={0} fontSize={36} />;
          case "s035":
            return <FlashText key={chunk.id} text="An SDK — software development kit." delay={0} fontSize={42} />;
          case "s036":
            return <FlashText key={chunk.id} text="You've used it without knowing." delay={0} fontSize={36} color={COLORS.grayLight} />;
          case "s037":
            return <FlashText key={chunk.id} text="Dropbox used it." delay={0} color={COLORS.accent} />;
          case "s038":
            return <FlashText key={chunk.id} text="DocuSign used it." delay={0} color={COLORS.accent} />;
          case "s039":
            return (
              <React.Fragment key={chunk.id}>
                <div
                  style={{
                    position: "absolute",
                    bottom: 200,
                    left: 160,
                    right: 160,
                    display: "flex",
                    gap: 24,
                    justifyContent: "center",
                    flexWrap: "wrap",
                    opacity: fadeIn(frame, 20),
                  }}
                >
                  {["sap.svg", "ibm.svg", "lufthansa.svg", "volkswagen.svg"].map((logo) => (
                    <Img
                      key={logo}
                      src={staticFile(`assets/logos/${logo}`)}
                      style={{ width: 120, height: 60, objectFit: "contain", opacity: 0.7 }}
                    />
                  ))}
                </div>
                <FlashText text="SAP, IBM, Lufthansa, Volkswagen" delay={0} fontSize={36} />
              </React.Fragment>
            );
          case "s040":
            return (
              <React.Fragment key={chunk.id}>
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: 80,
                    fontWeight: 900,
                    color: COLORS.accent,
                    opacity: fadeIn(frame, 25),
                  }}
                >
                  1,000,000,000
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "55%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: 28,
                    color: COLORS.grayLight,
                    opacity: fadeIn(frame, 20, 15),
                  }}
                >
                  devices ran his code
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

export default Act2Origins;
