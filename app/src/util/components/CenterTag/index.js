import React from "react";

export default function CenterTag({ tagName: TagName = "div", children }) {
  return (
    <TagName
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </TagName>
  );
}
