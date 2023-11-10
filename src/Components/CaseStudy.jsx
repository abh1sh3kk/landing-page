import {
  Button,
  Text,
  Card,
  Flex,
  Group,
  Paper,
  Stack,
  Title,
} from "@mantine/core";
import { Icon12Hours, Icon2fa } from "@tabler/icons-react";

const CaseStudy = () => {
  return (
    <section>
      <Paper
        gap={10}
        withBorder
        component={Flex}
        direction={{ sm: "column", lg: "row" }}
      >
        <Group
          component={Stack}
          p={32}
          align="center"
          style={{ border: "1px solid red" }}
        >
          <Stack align="center">
            <Icon2fa />
            <Stack align="center">
              <Text>Integrated Apps</Text>
              <Flex>
                <Icon12Hours />
                <Icon12Hours />
                <Icon12Hours />
              </Flex>
            </Stack>
            <Button variant="white" color="black">
              Case Study
            </Button>
          </Stack>
        </Group>

        <Stack p={16} gap={16} maw={720}>
          <Stack gap={2}>
            <Title order={4}>Jeremy Dahan</Title>
            <Text>Design System Designer</Text>
          </Stack>
          <Text>
            "Specify brought us confidence and ease of mind. Before, we used to
            be cautious and hesitant before updating our design tokens. We're
            now confident about updating a token, rolling back to a previous
            version, or even trying new ones."
          </Text>
        </Stack>
      </Paper>
    </section>
  );
};

export default CaseStudy;
