import { AppShell, Button, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";
import Footer from "./Footer";
import Navbar from "../Navbar";
import LogoPNG from "../assets/logo2.png";

function AboutUs() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <Navbar />

      <AppShell.Main py={{ base: "xl", sm: "5rem" }} className="main">
        <Stack gap="lg" my="4rem" align="center">
          <Image src={LogoPNG} maw="6rem"  />
          <Title order={2}>Join Our Global Team</Title>
          <Text maw="450px" style={{ textAlign: "center" }}>
            We're on a mission to help organizations efficiently manage their
            brand identity at scale.
          </Text>
          <Button
            size="md"
            variant="gradient"
            gradient={{
              from: "rgba(223, 97, 255, 1)",
              to: "violet",
              deg: 173,
            }}
          >
          View Jobs
          </Button>
        </Stack>

        <Group className="" mt="2rem" mb="5rem" maw="1100px">
          <Title
            order={2}
            w="100%"
            p="md"
            style={{ textAlign: "center" }}
            // className="border"
          >
            About Us
          </Title>
          <Flex
            direction={{ base: "column", md: "row" }}
            lh="1.8"
            c="white"
            gap="md"
            // style={{boxShadow: "1px 1px 1px red"}}
          >
            <Text size="lg" lh="inherit">
              We're a passionate remote team building the future of Design
              Systems. We started in 2018 believing we could help organizations
              unify their brand identity and today we're on a mission to become
              the backbone of design & code decisions within an organization.
              Since then, we hired more than 10 people and raised a total of 5
              million euros.
            </Text>
            <Text size="lg" lh="inherit">
              And it's only the beginning. Joining Specify today is an amazing
              opportunity for you to be part of a product that will innovate the
              way companies operate their brand identity. We're product maniacs
              and a design-centric startup that wish to build the greatest
              remote team in the game. Wanna join the ride? 😎
            </Text>
          </Flex>
        </Group>

        <Flex
          mb="5rem"
          style={{ borderRadius: "10px" }}
          gap={{ base: "1rem", sm: "2rem", md: "3rem" }}
          bg=" rgb(31, 35, 36)"
          w="100%"
          justify="center"
          py="lg"
          wrap="wrap"
          maw={1100}
          c="white"
        >
          <Stack align="center" className="" p="md">
            <Title order={2}>2018</Title>
            <Text size="lg">Year Founded</Text>
          </Stack>
          <Stack align="center" className="" p="md">
            <Title order={2}>5M</Title>
            <Text size="lg">Total Funding</Text>
          </Stack>
          <Stack align="center" className="" p="md">
            <Title order={2}>14</Title>
            <Text size="lg">Team Members</Text>
          </Stack>
        </Flex>

        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}

export default AboutUs;
