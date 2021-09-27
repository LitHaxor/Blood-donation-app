import React, { FC, ReactComponentElement } from "react";
import { useColorMode, Button, Flex, Box, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";

import ThemeToggle from "../buttons/DarkModeSwitch";
import { useRouter } from "next/router";

import { navbarData } from "./navbar.data";

interface T {
  name?: string;
}
const Container: FC<T> = ({ children }) => {
  const { colorMode } = useColorMode();

  const path = useRouter().pathname;

  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  const navHoverBg = {
    light: "green.400",
    dark: "blue.400",
  };

  const navActive = {
    light: "blue.500",
    dark: "green.500",
  };

  const color = {
    light: "black",
    dark: "white",
  };

  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(100%) blue(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <>
      <StickNav
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box>
          <Text fontSize="xl" fontWeight="bold" color="#cf1e1ef">
            Joruri
          </Text>
        </Box>
        <Box>
          {navbarData.map((e) => (
            <>
              <NextLink href={e.path} passHref>
                <Button
                  as="a"
                  variant="ghost"
                  color={
                    path === e.path ? navActive[colorMode] : color[colorMode]
                  }
                  borderBottom={path === e.path ? "2px" : ""}
                  rounded={0}
                  p={[1, 2, 4]}
                  _hover={{
                    border: navHoverBg[colorMode],
                    borderBottom: "2px",
                    rounded: "0px",
                    color: navHoverBg[colorMode],
                  }}
                >
                  {e.name}
                </Button>
              </NextLink>
            </>
          ))}
        </Box>
        <Box>
          <ThemeToggle />
        </Box>
      </StickNav>

      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bgColor={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
};

export default Container;
