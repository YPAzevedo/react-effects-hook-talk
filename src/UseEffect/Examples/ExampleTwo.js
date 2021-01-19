import { Text, Heading } from "@chakra-ui/react";
import * as React from "react";
import ColorBox from "../../components/ColorBox";
import ColorButton from "../../components/ColorButton";

import emitt from "../../helpers/emitt";
import logger from "../../helpers/logger";
import useRerender from "../../hooks/useRerender";

const emitter = emitt();
const eventName = "@useEffect:sub";

function Subscription() {
  const [latestEventValue, setLatestEventValue] = React.useState(null);
  const allSubscriptionsToEvent = emitter.all().get(eventName);

  React.useEffect(() => {
    const sub = emitter.on(eventName, (value) => {
      logger.purpleLogger(`Event(${eventName}) with value: ${value}`);
      setLatestEventValue(value);
    });
    return () => sub.off();
  });

  return (
    <ColorBox variant="blue">
      <Heading as="h2" size="lg">
        Event({eventName})
      </Heading>
      <Text>{latestEventValue || "No event emitted yet."}</Text>
      <Text>Number of subscriptions: {allSubscriptionsToEvent?.size || 0}</Text>
    </ColorBox>
  );
}

export default function UseEffectExampleTwo() {
  const rerender = useRerender();

  return (
    <>
      <Heading as="h3" size="lg">
        Main case Two - Subscriptions
      </Heading>
      <Text>Comment the clean-up function and press rerender.</Text>
      <ColorButton margin="10px" variant="purple" onClick={rerender}>
        Rerender
      </ColorButton>
      <ColorButton
        margin="10px"
        variant="purple"
        onClick={() => emitter.emit(eventName, new Date().valueOf())}
      >
        Emit Event
      </ColorButton>
      <Subscription />
    </>
  );
}
