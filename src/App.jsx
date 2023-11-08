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
  Badge,
} from "@mantine/core";
import HeroImage from "../src/assets/hero-img.webp";
import classes from "./styles/MobileNavbar.module.css";
import HeaderMenu from "./HeaderMenu";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

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
        <Center>
          <Center
            component={Stack}
            justify="center"
            gap="xl"
            align="center"
            w={"800px"}
          >
            <Badge
              component="p"
              className="badge"
              variant="white"
              color="black"
              rightSection={rightIcon}
              size="xl"
              fz={16}
            >
              Introducing our Figma Variables compatibility
            </Badge>
            <Stack align="center" justify="center">
              <Title order={1} align="center">
                Automate the distribution of your design tokens - your team will
                love it.
              </Title>
              <Text fz={18} align="center">
                Enhance your design system by creating your own source of truth,
                improve collaboration between design and development and reduce
                manual work.
              </Text>
              <Flex gap="sm" wrap="wrap">
                <Button>Book demo</Button>
                <Button>Watch video</Button>
              </Flex>
            </Stack>

            <Image radius="lg" w={800} src={HeroImage} alt="Hero Image" />
          </Center>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
