import { extendTheme } from "@chakra-ui/react";

const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  primary: {
    100: "#E5FCF1",
    200: "#27EF96",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E"
  },    
  navbg: {
    100: "rgba(0,0,0,0.95)",
    300: "rgba(0,0,0,0.8)",
    600: "rgba(0,0,0,0.7)",
    900: "rgba(0,0,0,0.4)"    
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;
