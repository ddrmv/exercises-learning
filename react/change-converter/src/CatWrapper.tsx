import React from "react";

interface CatWrapperProps {
  children: React.ReactNode;
}

export const CatWrrapper = ({ children }: CatWrapperProps) => {
  return (
    <div
      style={{
        backgroundColor: "orange",
        color: "white",
        display: "flex",
        flexDirection: "column",
        padding: "50px",
        fontSize: 18,
      }}
    >
      {children}
    </div>
  );
};
