import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function CodeBlock({ language = null, value }) {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
}
