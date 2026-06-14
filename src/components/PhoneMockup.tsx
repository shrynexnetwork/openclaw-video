import React from "react";
import { COLORS } from "../theme/colors";
import { FONTS } from "../theme/fonts";

interface ChatMessage {
  text: string;
  isMine: boolean;
}

export const PhoneMockup: React.FC<{
  messages?: ChatMessage[];
  style?: React.CSSProperties;
}> = ({ messages, style }) => {
  return (
    <div
      style={{
        width: 320,
        backgroundColor: "#111",
        borderRadius: 32,
        border: "3px solid #333",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          backgroundColor: COLORS.accent,
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.3)",
          }}
        />
        <div>
          <div style={{ color: "#fff", fontFamily: FONTS.heading, fontSize: 14, fontWeight: 600 }}>
            AI Agent
          </div>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11 }}>Online</div>
        </div>
      </div>
      <div style={{ padding: 16, minHeight: 300 }}>
        {messages?.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: msg.isMine ? "flex-end" : "flex-start",
              marginBottom: 8,
            }}
          >
            <div
              style={{
                maxWidth: "80%",
                padding: "10px 14px",
                borderRadius: 16,
                backgroundColor: msg.isMine ? COLORS.accent : "#2a2a2a",
                color: "#fff",
                fontFamily: FONTS.body,
                fontSize: 13,
                lineHeight: 1.4,
                borderBottomRightRadius: msg.isMine ? 4 : 16,
                borderBottomLeftRadius: msg.isMine ? 16 : 4,
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
