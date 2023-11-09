import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Burger,
  Button,
  Flex,
  Text,
  Image,
  UnstyledButton,
  Title,
  Stack,
  Center,
  Box,
} from "@mantine/core";
import HeroImage from "../src/assets/hero-img.webp";
import classes from "./styles/MobileNavbar.module.css";
import HeaderMenu from "./HeaderMenu";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Icon123 } from "@tabler/icons-react";

function App() {
  const [opened, { toggle }] = useDisclosure();
  const rightIcon = (
    <BsFillArrowRightCircleFill
      style={{ marginLeft: "0.2rem" }}
      fontSize={18}
    />
  );

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <HeaderMenu />
      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={classes.control}>Home</UnstyledButton>
        <UnstyledButton className={classes.control}>Blog</UnstyledButton>
        <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
        <UnstyledButton className={classes.control}>Support</UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main className="main">
        <Center
          component={Stack}
          justify="center"
          gap="xl"
          align="center"
          w={"800px"}
        >
          <Button
            component="p"
            className="badge"
            variant="white"
            color="black"
            rightSection={rightIcon}
            fz={16}
          >
            Introducing our Figma Variables compatibility
          </Button>

          <Stack align="center" justify="center">
            <Title order={1} className="hero-text" align="center">
              Automate the distribution of your design tokens -
              <span className="highlight-gradient">
                your team will love it.
              </span>
            </Title>
            <Text fz={18} align="center">
              Enhance your design system by creating your own source of truth,
              improve collaboration between design and development and reduce
              manual work.
            </Text>
            <Flex gap="sm" wrap="wrap">
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
              <Button size="md" className="secondary-btn">
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

        <Center
          className="hero--secondary"
          component={Stack}
          justify="center"
          gap="xl"
          align="center"
          w={"800px"}
        >
          <Stack align="center" justify="center">
            <Title order={2} className="hero-text-secondary" align="center">
              Improve your Continuous Design Data workflow
            </Title>
            <Text fz={18} align="center">
              Enhance your design system by creating your own source of truth,
              improve collaboration between design and development and reduce
              manual work.
            </Text>
            <Flex gap="sm" wrap="wrap">
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
              <Button size="md" className="secondary-btn">
                Watch video
              </Button>
            </Flex>
          </Stack>
        </Center>

        <Center component={Flex} maw={1100} className="frame" gap="2rem">
          <Stack className="frame__left" w={400} gap={0}>
            <Stack>
              <Flex gap={8} align="center">
                <Icon123 />
                <Title order={6}>Collect</Title>
              </Flex>
              <Text w={400} size="lg">
                Easily connect all your favorite tools to Specify to create a
                fully networked design system.
              </Text>
            </Stack>

            <Stack>
              <Flex gap={8} align="center">
                <Icon123 />
                <Title order={6}>Collect</Title>
              </Flex>
              <Text w={400} size="lg">
                Easily connect all your favorite tools to Specify to create a
                fully networked design system.
              </Text>
            </Stack>

            <Stack>
              <Flex gap={8} align="center">
                <Icon123 />
                <Title order={6}>Collect</Title>
              </Flex>
              <Text w={400} size="lg">
                Easily connect all your favorite tools to Specify to create a
                fully networked design system.
              </Text>
            </Stack>
          </Stack>

          <Box className="frame__right video-container" >
            <video
              style={{ width: "100%" }}
              src="https://static.specifyapp.com/34458951720-720.mp4"
              title="Video"
              allow=" autoplay; encrypted-media;"
            />
          </Box>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
