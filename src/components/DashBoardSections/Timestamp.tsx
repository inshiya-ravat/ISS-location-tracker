import type { ParamType } from "./CurrentPosition";
import Section from "./Section";
import TabularSections from "./TabularSections";

const parameters: ParamType[] = [
  {
    id: "Unix Timestamp",
    value: "N/A",
  },
  {
    id: "Human Readable",
    value: "N/A",
  },
  {
    id: "People in Space",
    value: "N/A",
  },
];
const CurrentPosition = () => {
  return (
    <Section heading="TIMESTAMP INFORMATION">
      <TabularSections parameters={parameters} />
    </Section>
  );
};

export default CurrentPosition;
