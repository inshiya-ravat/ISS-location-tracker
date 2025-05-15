import ContentSection from "./ContentSection";
import Section from "./Section";

interface DistanceFromYouProp {
  parameters: {
    footprints: string;
  };
}
const DistanceFromYou = ({ parameters }: DistanceFromYouProp) => {
  return (
    <Section heading="DISTANCE FROM YOU">
      <ContentSection
        mainHeading="2,437 km"
        caption="Based on your current location."
        footerHeading="Footprint"
        footerValue={`${parameters.footprints} km`}
      />
    </Section>
  );
};

export default DistanceFromYou;
