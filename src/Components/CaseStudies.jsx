import { Carousel } from "@mantine/carousel";
import CaseStudy from "./CaseStudy";
const CaseStudies = () => {
  return (
    <Carousel
      loop={true}
      slideSize={{ base: "90%", sm: "50%", md: "33.333333%" }}
      slideGap="lg"
      withControls={false}
      withIndicators
      className="section carousel-section"
    >
      <CaseStudy />
      <CaseStudy />
      <CaseStudy />
      <CaseStudy />
    </Carousel>
  );
};

export default CaseStudies;
