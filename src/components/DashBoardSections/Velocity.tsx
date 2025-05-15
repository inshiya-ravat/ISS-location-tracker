import ContentSection from "./ContentSection";
import Section from "./Section";

interface VelocityProp {
  parameters: {
    velocity: string;
    units: string;
  };
}
const Velocity = ({ parameters }: VelocityProp) => {
  return (
    <Section heading="VELOCITY">
      <ContentSection
        mainHeading={`${parameters.velocity} km/h`}
        caption="7.66 m/s"
        footerHeading="Units:"
        footerValue={parameters.units}
      />
    </Section>
  );
};

export default Velocity;
