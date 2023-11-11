import {
  Button,
  Flex,
  Text,
  Image,
  Title,
  Stack,
  Center,
  Box,
} from "@mantine/core";
import HeroImage from "../assets/hero-img.webp";
import { BsPlayCircleFill } from "react-icons/bs";
import { RiLink } from "react-icons/ri";

const HeroSection = () => {
  const rightIcon = <RiLink style={{ marginLeft: "0.2rem" }} fontSize={18} />;
  return (
    <Center
      component={Stack}
      justify="center"
      gap="xl"
      align="center"
      w={{ sm: "clamp(0px, 60%, 800px)" }}
      className="section hero-section"
    >
      <Button component="p" className="badge" rightSection={rightIcon} fz={18}>
        Introducing our Figma Variables compatibility
      </Button>

      <Stack align="center" justify="center" className="hero-texts">
        <Title order={1} className="hero-text" align="center">
          Automate the distribution of your design tokens -
          <Text inherit className="highlight-gradient">
            your team will love it.
          </Text>
        </Title>

        <Text fz={22} align="center" maw="70ch">
          Enhance your design system by creating your own source of truth,
          improve collaboration between design and development and reduce manual
          work.
        </Text>

        <Flex
          className="btn-group"
          gap={{ sm: "md", md: "sm" }}
          direction={{ md: "row" }}
          w="100%"
          justify="center"
        >
          <Button
            size="md"
            variant="gradient"
            gradient={{
              from: "rgba(223, 97, 255, 1)",
              to: "violet",
              deg: 173,
            }}
          >
            Book demo
          </Button>
          <Button
            size="md"
            className="secondary-btn"
            leftSection={<BsPlayCircleFill fontSize={18} />}
          >
            Watch video
          </Button>
        </Flex>
      </Stack>

      <Box style={{ flex: 1 }} className="hero__bg-gradient">
        <Image
          radius="lg"
          w="clamp(320px, 80vw, 1000px)"
          src={HeroImage}
          alt="Hero Image"
          className="hero-img"
        />
      </Box>
    </Center>
  );
};

export default HeroSection;
