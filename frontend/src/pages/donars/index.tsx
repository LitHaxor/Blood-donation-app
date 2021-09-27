import React from "react";
import Head from "next/head";
import Container from "../../components/shared/container/Container";
import { Flex, Heading, Stack } from "@chakra-ui/layout";

const BlogPage = () => {
  return (
    <>
      <Container>
        <Head>
          <title>Blog- Hasan</title>
        </Head>
        <Stack
          as="main"
          spacing={0}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            px={4}
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Blog
            </Heading>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

// export async function getStaticProps() {
//   // todo fetch blog posts
//   return

// }

export default BlogPage;
