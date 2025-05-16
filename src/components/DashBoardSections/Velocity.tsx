import ContentSection from "./ContentSection";
import Section from "./Section";

interface VelocityProp {
  parameters: {
    velocity: string;
    units: string;
  };
  isLoading: boolean;
}
const Velocity = ({ parameters, isLoading }: VelocityProp) => {
  return (
    <Section heading="VELOCITY">
      <ContentSection
        mainHeading={`${parameters.velocity} km/h`}
        caption="velocity of the ISS"
        footerHeading="Units"
        footerValue={parameters.units}
        isLoading={isLoading}
      />
    </Section>
  );
};

export default Velocity;
