import React from "react";
import Markdown from "../Markdown";
import UseLayoutEffectExamples from "./Examples/Examples";

import useLayoutEffectMarkdown from "./UseLayoutEffect.md";

export default function UseLayoutEffect() {
  return (
    <div>
      <Markdown markdown={useLayoutEffectMarkdown} />
      <UseLayoutEffectExamples />
    </div>
  );
}
