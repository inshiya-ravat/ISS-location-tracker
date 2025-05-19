import ContentSection from "./ContentSection";
import Section from "./Section";

interface DistanceFromYouProp {
  parameters: {
    footprints: string;
  };
  isLoading: boolean;
  distance: string;
}

const DistanceFromYou = ({
  parameters,
  isLoading,
  distance,
}: DistanceFromYouProp) => {
  return (
    <Section heading="DISTANCE FROM YOU">
      <ContentSection
        mainHeading={distance.toString()}
        caption="Based on your current location."
        footerHeading="Footprint"
        footerValue={`${parameters.footprints} km`}
        isLoading={isLoading}
      />
    </Section>
  );
};

export default DistanceFromYou;
