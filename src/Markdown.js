import React from "react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer, { defaults } from "chakra-ui-markdown-renderer";
import CodeBlock from "./CodeBlock";

function Markdown({ markdown }) {
  return (
    <ReactMarkdown
      renderers={ChakraUIRenderer({
        ...defaults,
        code: CodeBlock
      })}
      escapeHtml={false}
      source={markdown}
    />
  );
}

export default React.memo(Markdown);
