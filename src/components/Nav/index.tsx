import React, { } from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { ReactComponent as InstagramIcon } from './../../assets/Instagram_Icon.svg'
import { ReactComponent as TwitterIcon } from './../../assets/Twitter_Icon.svg'
import { ReactComponent as DiscordIcon } from './../../assets/Discord_Icon.svg'
import Logo from "./Logo";
import ButtonPrimary from "../ButtonPrimary";

const NavBar = (props:any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>      
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <SocialLinks isOpen={isOpen} />      
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }:{toggle:()=>void, isOpen: boolean}) => {
  return (
    <Box display={{ base: "block", md: "block", lg: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, to = "/", ...rest }:{children: React.ReactNode, to: string}) => {
  return (
    <Link href={to} style={{textDecoration:"none"}} _hover={{color: "gray.400"}}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const SocialItem = ({ children, to = "/"}:{children: React.ReactNode, to: string}) => {
    return (
      <Link href={to} isExternal>
        {children}
      </Link>
    );
};

const SocialLinks = ({ isOpen }:{isOpen: boolean}) => {
    return (
      <Box
        display={{ base: isOpen ? "block" : "none", md: isOpen ? "block" : "none", lg: "block" }}
        flexBasis={{ base: "100%", md: "100%", lg: "auto" }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "center", "center", "flex-end"]}
        //   direction={["column", "row", "row", "row"]}
          direction={["row", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <SocialItem to="http://instagram.com/alphakongsclub"><InstagramIcon width="25px" height="25px" /></SocialItem>
          <SocialItem to="http://instagram.com/alphakongsclub"><TwitterIcon width="25px" height="25px" /></SocialItem>
          <SocialItem to="http://instagram.com/alphakongsclub"><DiscordIcon width="25px" height="25px" /></SocialItem>
        </Stack>
      </Box>
    );
};

const MenuLinks = ({ isOpen }:{isOpen: boolean}) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: isOpen ? "block" : "none", lg: "block" }}
      flexBasis={{ base: "100%", md: "100%", lg: "100%", xl: "auto" }}      
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "space-between", "center"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/#about">About US</MenuItem>
        <MenuItem to="/#team">Team </MenuItem>        
        <MenuItem to="#roadmap">Roadmap </MenuItem>
        {/* <MenuItem to="/pricing">Provenance </MenuItem>     */}
        <MenuItem to="/#club">MAU Club </MenuItem>
        <MenuItem to="/#earning">Mau earning </MenuItem>
        <ButtonPrimary to="https://opensea.io/collection/alphakongsclub" name="Mint soon" width="260px" />        
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }:{children:React.ReactNode}) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify={["space-between","space-between","space-between","flex-start","space-between"]}
      wrap="wrap"
      w="100%"
      mb={8}
      p={6}
      position="fixed"
      zIndex="1000"
      bg={["navbg.100", "navbg.100", "navbg.300", "navbg.300"]}
      color={["white", "white", "white", "white"]}
      {...props}
    >
      {children}      
    </Flex>
  );
};

export default NavBar;
