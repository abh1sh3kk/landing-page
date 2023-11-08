import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Burger,
  Button,
  Flex,
  Text,
  Image,
  Group,
  UnstyledButton,
  Title,
  Stack,
  Center,
  Badge,
} from "@mantine/core";
import HeroImage from "../src/assets/hero-img.webp";
import { MantineLogo } from "@mantine/ds";
import classes from "./styles/MobileNavbar.module.css";
import HeaderMenu from "./HeaderMenu";

export default function App() {
  const [opened, { toggle }] = useDisclosure();

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

      <AppShell.Main>
        <Center>
          <Center
            component={Stack}
            justify="center"
            gap="xl"
            align="center"
            w={"800px"}
          >
            <Badge>Introducing our Figma Variables compatibility</Badge>
            <Stack align="center" justify="center">
              <Title order={1}>
                Automate the distribution of your design tokens - your team will
                love it.
              </Title>
              <Text>
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
