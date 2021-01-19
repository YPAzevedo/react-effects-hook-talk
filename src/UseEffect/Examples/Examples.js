import * as React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import UseEffectExampleOne from "./ExampleOne";
import UseEffectExampleTwo from "./ExampleTwo";
import UseEffectExampleThree from "./ExampleThree";
import UseEffectExampleFour from "./ExampleFour";

export default function UseEffectExamples() {
  return (
    <Tabs>
      <TabList>
        <Tab>Main use case 1</Tab>
        <Tab>Main use case 2</Tab>
        <Tab>Not advised use case 1</Tab>
        <Tab>Not advised use case 2</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <UseEffectExampleOne />
        </TabPanel>
        <TabPanel>
          <UseEffectExampleTwo />
        </TabPanel>
        <TabPanel>
          <UseEffectExampleThree />
        </TabPanel>
        <TabPanel>
          <UseEffectExampleFour />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
