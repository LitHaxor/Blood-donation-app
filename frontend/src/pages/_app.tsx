import type { AppProps } from "next/app";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { FC } from "react";

interface T {
  name?: string;
}
const GlobalStyle: FC<T> = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }

          ::-moz-selection {
            background-color: #ffb7b7;
            color: #fefefe;
          }

          html {
            min-width: 356 px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#171717"};
          }
        `}
      ></Global>
      {children}
    </>
  );
};
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true,
        }}
      />
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
};
export default MyApp;
