import * as React from "react";

export default function Emoji({ emoji, label, ...props }) {
  return (
    <span {...props} role="img" aria-label={label}>
      {emoji}
    </span>
  );
}
