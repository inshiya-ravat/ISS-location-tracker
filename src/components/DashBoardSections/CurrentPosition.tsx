import Section from "./Section";
import TabularSections from "./TabularSections";

export type ParamType = {
  id: string;
  value: string | number;
};
const parameters: ParamType[] = [
  {
    id: "Latitude",
    value: "N/A",
  },
  {
    id: "Logitude",
    value: "N/A",
  },
  {
    id: "Altitude",
    value: "N/A",
  },
  {
    id: "Visibility",
    value: "N/A",
  },
];
const CurrentPosition = () => {
  return (
    <Section heading="CURRENT POSITION">
      <TabularSections parameters={parameters} />
    </Section>
  );
};

export default CurrentPosition;
