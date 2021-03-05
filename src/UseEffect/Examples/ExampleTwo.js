import { Text, Heading } from "@chakra-ui/react";
import React from "react";
import ColorBox from "../../components/ColorBox";
import ColorButton from "../../components/ColorButton";

import emitt from "../../helpers/emitt";
import logger from "../../helpers/logger";

const emitter = emitt();
const eventName = "@useEffect:sub";

function Subscription({ count }) {
  const [latestEventValue, setLatestEventValue] = React.useState(null);
  const allSubscriptionsToEvent = emitter.all().get(eventName);

  React.useEffect(() => {
    const sub = emitter.on(eventName, (value) => {
      logger.purpleLogger(
        `Event(${eventName}) with value: ${value} and count: ${count}`
      );
      setLatestEventValue(value);
    });
    return () => sub.off();
  }, [count]);

  return (
    <ColorBox variant="blue">
      <Heading as="h2" size="lg">
        Event({eventName})
      </Heading>
      <Text>{latestEventValue || "No event emitted yet."}</Text>
      <Text>Number of subscriptions: {allSubscriptionsToEvent?.size || 1}</Text>
    </ColorBox>
  );
}

export default function UseEffectExampleTwo() {
  const [count, increment] = React.useReducer((counter) => counter + 1, 0);

  return (
    <>
      <Heading as="h3" size="lg">
        Main case Two - Subscriptions
      </Heading>
      <Text>Comment the clean-up function and press rerender.</Text>
      <ColorButton margin="10px" variant="purple" onClick={increment}>
        Rerender
      </ColorButton>
      <ColorButton
        margin="10px"
        variant="purple"
        onClick={() => emitter.emit(eventName, new Date().valueOf())}
      >
        Emit Event
      </ColorButton>
      <Subscription count={count} />
    </>
  );
}
