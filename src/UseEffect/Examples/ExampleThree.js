import React from "react";
import { Checkbox, Heading, Stack, Text } from "@chakra-ui/react";
import Emoji from "../../components/Emoji";

function DeriveAndSyncInternalState() {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);
  // ⛔️ Comment allChecked state and isIndeterminate state
  const [allChecked, setAllChecked] = React.useState(
    checkedItems.every(Boolean)
  );
  const [isIndeterminate, setIsIndeterminate] = React.useState(
    checkedItems.some(Boolean) && !allChecked
  );

  // ✅ uncomment the code below
  // const allChecked = checkedItems.every(Boolean)
  // const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  // ⛔️ Comment this useEffect
  React.useEffect(() => {
    const _allChecked = checkedItems.every(Boolean);
    setAllChecked(_allChecked);
    setIsIndeterminate(checkedItems.some(Boolean) && !_allChecked);
  }, [checkedItems]);

  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Parent Checkbox
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          Child Checkbox 2
        </Checkbox>
      </Stack>
    </>
  );
}

export default function UseEffectExampleThree() {
  return (
    <>
      <Heading as="h3" size="lg">
        Not advised use case - Derive State
      </Heading>
      <Text>
        Uncomment the code with <Emoji emoji="✅" label="check-mark" /> and
        comment the code with <Emoji emoji="⛔️" label="error-mark" />
      </Text>
      <DeriveAndSyncInternalState />
    </>
  );
}
