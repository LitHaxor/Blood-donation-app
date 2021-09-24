import React from "react";
import type { NextPage } from "next";
import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import Head from "next/head";
import { useColorMode } from "@chakra-ui/color-mode";
import Image from "next/image";
import ThemeToggle from "../components/shared/buttons/DarkModeSwitch";
import Container from "../components/shared/container/Container";
const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <>
      <Container>
        <Head>
          <title>Home - Hasan Ahmed</title>
        </Head>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={2}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading mb={2}>Hi, I&#39;am Hasan</Heading>
            <Text color={colorSecondary[colorMode]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              error dolore modi repudiandae voluptatum. Dolorum, beatae adipisci
              reprehenderit officia obcaecati quam veritatis debitis saepe, illo
              autem vel accusantium tempora nihil.
            </Text>
            <Heading size="xl" my={2}>
              About Me
            </Heading>
            <Text color={colorSecondary[colorMode]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sed
              necessitatibus commodi minus temporibus incidunt, recusandae
              dolorem delectus alias aspernatur illo, quia quae quas in sit
              placeat consectetur? Officiis, rem.
            </Text>
            <Heading my={2} size="xl">
              Professional Experience
            </Heading>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
