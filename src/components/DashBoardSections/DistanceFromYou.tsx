import ContentSection from "./ContentSection";
import Section from "./Section";

const DistanceFromYou = () => {
  return (
    <Section heading="DISTANCE FROM YOU">
      <ContentSection
        mainHeading="2,437 km"
        caption="Based on your current location."
        footerHeading="Footprint"
        footerValue="4,516,55 km"
      />
    </Section>
  );
};

export default DistanceFromYou;
