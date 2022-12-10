// Wrapper.tsx
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div
      style={{
        backgroundColor: "indigo",
        color: "white",
        display: "flex",
        flexDirection: "column",
        padding: "50px",
        fontSize: 24,
      }}
    >
      {children}
    </div>
  );
};
