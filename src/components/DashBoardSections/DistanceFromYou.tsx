import ContentSection from "./ContentSection";
import Section from "./Section";

interface DistanceFromYouProp {
  parameters: {
    footprints: string;
  };
  isLoading: boolean;
}
const DistanceFromYou = ({ parameters, isLoading }: DistanceFromYouProp) => {
  return (
    <Section heading="DISTANCE FROM YOU">
      <ContentSection
        mainHeading="2,437 km"
        caption="Based on your current location."
        footerHeading="Footprint"
        footerValue={`${parameters.footprints} km`}
        isLoading={isLoading}
      />
    </Section>
  );
};

export default DistanceFromYou;
