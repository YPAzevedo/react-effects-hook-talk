import * as React from "react";
import Markdown from "../Markdown";
import UseEffectExamples from "./Examples/Examples";

import useEffectMarkdown from "./UseEffect.md";

export default function UseEffect() {
  return (
    <div>
      <Markdown markdown={useEffectMarkdown} />
      <UseEffectExamples />
    </div>
  );
}
