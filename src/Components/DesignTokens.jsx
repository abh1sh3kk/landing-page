import {
  Button,
  Image,
  Text,
  Card,
  Stack,
  Title,
  Center,
  Flex,
} from "@mantine/core";
import Design2 from "../assets/design-2.png";
import { BsArrowRightCircleFill } from "react-icons/bs";

const DesignTokens = () => {
  const rightIcon = (
    <BsArrowRightCircleFill style={{ marginLeft: "0.2rem" }} fontSize={18} />
  );
  return (
    <section className="section design-section">
      <Title c="white" my="5rem" order={1} maw="800px" align="center" w="100%">
        Design tokens are the heart of your design system
      </Title>
      <Flex gap="lg" align="center" justify="center" wrap="wrap">
        <Card
          c="white"
          bg="#232628"
          style={{ border: "1px solid #7b7b7bd4" }}
          withBorder
          radius="lg"
          maw={{ md: "640px" }}
          w={{ base: "100%", sm: "80%", md: "40%" }}
        >
          <Stack
            p={14}
            py="xl"
            align="center"
            style={{ textAlign: "center" }}
            gap="lg"
          >
            <Title order={2}>Design Tokens and Assets</Title>
            <Text size="xl" c="dimmed">
              Specify supports colors, text styles, shadows, dimensions,
              bitmaps, vectors, font files, and many more. All of them are
              automatically synced and updated.
            </Text>
            <Button
              variant="white"
              color="black"
              radius="xl"
              size="lg"
              rightSection={rightIcon}
            >
              View Documentation
            </Button>
          </Stack>
          <Card.Section>
            <Image src={Design2} />
          </Card.Section>
        </Card>
        <Card
          c="white"
          bg="#232628"
          style={{ border: "1px solid #7b7b7bd4" }}
          withBorder
          radius="lg"
          maw={{ md: "640px" }}
          w={{ base: "100%", sm: "80%", md: "40%" }}
        >
          <Stack
            p={14}
            py="xl"
            align="center"
            style={{ textAlign: "center" }}
            gap="lg"
          >
            <Title order={2}>Design Tokens and Assets</Title>
            <Text size="xl" c="dimmed">
              Specify supports colors, text styles, shadows, dimensions,
              bitmaps, vectors, font files, and many more. All of them are
              automatically synced and updated.
            </Text>
            <Button
              variant="white"
              color="black"
              radius="xl"
              size="lg"
              rightSection={rightIcon}
            >
              View Documentation
            </Button>
          </Stack>
          <Card.Section>
            <Image src={Design2} />
          </Card.Section>
        </Card>
      </Flex>
    </section>
  );
};

export default DesignTokens;
