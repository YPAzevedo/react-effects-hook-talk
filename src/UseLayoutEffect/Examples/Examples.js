import * as React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import UseLayoutEffectExampleOne from "./ExampleOne";

// You can see another more complex example here:
// https://codesandbox.io/s/simple-accordion-ptbxz?file=/src/App.js

export default function UseLayoutEffectExamples() {
  return (
    <Tabs>
      <TabList>
        <Tab>Example 1</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <UseLayoutEffectExampleOne />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
