import { extendTheme } from "@chakra-ui/react"
import {theme as charkaTheme} from '@chakra-ui/react';
import {createBreakpoints} from '@chakra-ui/theme-tools'
// 2. Extend the theme to include custom colors, fonts, etc
const fonts={
    ...charkaTheme.fonts,
    body: "Inter, -apple-system, BlinkMacSystemFont,'Sagoe UI'"
}

const breakPoints = createBreakpoints({
  sm: "40em",
  md: "50qem",
  lg: "64em",
  xl: "62em"
})
const override = {
  ...charkaTheme,
  fonts,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  }

}

const customTheme = extendTheme(override);

export default customTheme;