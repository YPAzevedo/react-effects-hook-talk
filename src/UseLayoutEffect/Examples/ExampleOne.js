import * as React from "react";
import { Text, Heading, Box } from "@chakra-ui/react";
import ColorButton from "../../components/ColorButton";

function BlinkExample() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (value === 0) {
      setValue(new Date().valueOf());
    }
  }, [value]);

  return (
    <ColorButton margin="10px" variant="blue" onClick={() => setValue(0)}>
      Value: {value}
    </ColorButton>
  );
}

export default function UseLayoutEffectExampleOne() {
  return (
    <Box>
      <Heading as="h3" size="lg">
        Simple example: Blinking value
      </Heading>
      <Text as="strong">Click and hold(easier to see the blink)</Text>
      <Text>
        Swap between useEffect and useLayoutEffect to see the difference
      </Text>
      <BlinkExample />
    </Box>
  );
}
