import type { ParamType } from "./CurrentPosition";
import Section from "./Section";
import TabularSections from "./TabularSections";

const parameters: ParamType[] = [
  {
    id: "Solar Latitude",
    value: "N/A",
  },
  {
    id: "Solar Logitude",
    value: "N/A",
  },
  {
    id: "Day Number",
    value: "N/A",
  },
];
const CurrentPosition = () => {
  return (
    <Section heading="SOLAR POSITION">
      <TabularSections parameters={parameters} />
    </Section>
  );
};

export default CurrentPosition;
