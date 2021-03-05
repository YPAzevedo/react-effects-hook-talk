import React from "react";
import Markdown from "../Markdown";

import basicsMarkdown from "./Basics.md";

import logger from "../helpers/logger";

import ColorBox from "../components/ColorBox";
import ColorButton from "../components/ColorButton";
import useRerender from "../hooks/useRerender";

function ChildComponent({ count }) {
  React.useEffect(() => {
    logger.purpleLogger("ChildComponent effect run - no dependency array");
    return () =>
      logger.purpleLogger("ChildComponent clean-up run - no dependency array");
  });
  React.useEffect(() => {
    logger.blueLogger("ChildComponent effect run - empty dependency array");
    return () =>
      logger.blueLogger("ChildComponent clean-up run - empty dependency array");
  }, []);
  React.useEffect(() => {
    logger.greenLogger(
      `ChildComponent effect run - count with value ${count} dependency array`
    );
    return () =>
      logger.greenLogger(
        `ChildComponent clean-up run - count with value ${count} dependency array`
      );
  }, [count]);
  return (
    <ColorBox variant="purple">
      <h1>ChildComponent</h1>
    </ColorBox>
  );
}

function ParentComponent() {
  const [count, setCount] = React.useState(0);
  const rerender = useRerender();

  React.useEffect(() => {
    logger.purpleLogger("ParentComponent effect run - no dependency array");
    return () =>
      logger.purpleLogger("ParentComponent clean-up run - no dependency array");
  });
  React.useEffect(() => {
    logger.blueLogger("ParentComponent effect run - empty dependency array");
    return () =>
      logger.blueLogger(
        "ParentComponent clean-up run - empty dependency array"
      );
  }, []);
  React.useEffect(() => {
    logger.greenLogger(
      `ParentComponent effect run - count with value ${count} dependency array`
    );
    return () =>
      logger.greenLogger(
        `ParentComponent clean-up run - count with value ${count} dependency array`
      );
  }, [count]);
  return (
    <ColorBox variant="green">
      <h1>ParentComponent</h1>
      <ColorButton
        margin="10px"
        variant="green"
        onClick={() => setCount((c) => c + 1)}
      >
        Increment count on Parent
      </ColorButton>
      {count}
      <ColorButton margin="10px" variant="green" onClick={rerender}>
        Rerender with no count change
      </ColorButton>
      <ChildComponent count={count} />
    </ColorBox>
  );
}

export default function Basics() {
  return (
    <div>
      <Markdown markdown={basicsMarkdown} />
      <ParentComponent />
    </div>
  );
}
