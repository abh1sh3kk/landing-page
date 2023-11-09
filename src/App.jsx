import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
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
import { BsCollectionPlayFill } from "react-icons/bs";
import { RiStoreFill } from "react-icons/ri";
import { BsStopCircleFill } from "react-icons/bs";

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
          w={{ sm: "clamp(0px, 60%, 800px)" }}
          className="section hero-section"
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

          <Stack align="center" justify="center" className="hero-texts">
            <Title order={1} className="hero-text" align="center">
              Automate the distribution of your design tokens -
              <Text inherit className="highlight-gradient">
                your team will love it.
              </Text>
            </Title>

            <Text fz={22} align="center" maw="70ch">
              Enhance your design system by creating your own source of truth,
              improve collaboration between design and development and reduce
              manual work.
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
          component={Stack}
          justify="center"
          gap="xl"
          align="center"
          w={{ sm: "clamp(0px, 60%, 800px)" }}
          className="hero-section"
        >
          <Stack align="center" justify="center" className="section hero-texts">
            <Title order={1} className="hero-text" align="center">
              Improve your Continuous Design Data workflow
            </Title>

            <Text fz={22} align="center" maw="50ch">
              Specify helps you gain control of your design system across teams
              and products.
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
              <Button size="md" className="secondary-btn">
                Read Vision
              </Button>
            </Flex>
          </Stack>
        </Center>

        <Flex
          maw={1100}
          className="frame"
          gap={{ sm: "1rem", lg: "3rem" }}
          direction={{ lg: "row" }}
        >
          <Stack className="frame__left" gap={0}>
            <Stack gap={4}>
              <Flex gap={8} align="center">
                <BsCollectionPlayFill color="#5f3dc4" />
                <Title order={6}>Collect</Title>
              </Flex>
              <Text size="lg" align={{ md: "left" }}>
                Easily connect all your favorite tools to Specify to create a
                fully networked design system.
              </Text>
            </Stack>

            <Stack>
              <Flex gap={8} align="center">
                <RiStoreFill color="#5f3dc4" />
                <Title order={6}>Store</Title>
              </Flex>
              <Text size="lg">
                Create a single source of truth for your design tokens and
                assets and start building brand consistency
              </Text>
            </Stack>

            <Stack>
              <Flex gap={8} align="center">
                <BsStopCircleFill color="#5f3dc4" />
                <Title order={6}>Distribute</Title>
              </Flex>
              <Text size="lg">
                Quickly build a custom delivery pipeline that adapts to your
                technology, framework, and platform — automatically.
              </Text>
            </Stack>
          </Stack>

          <Box className="frame__right video-container">
            <video
              style={{ width: "100%" }}
              src="https://static.specifyapp.com/34458951720-720.mp4"
              title="Video"
              allow=" autoplay; encrypted-media;"
            />
          </Box>
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
