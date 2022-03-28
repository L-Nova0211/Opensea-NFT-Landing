import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
import ButtonPrimary from "../ButtonPrimary";
const Hero = (props: any) => {
    return (
        <HeroContainer {...props}>
            <WelcomeContainer>
                <WelcomeImg />
                <Text color="white" fontSize={["16px", "16px", "18px", "18px"]}
                    lineHeight="160%" marginBottom="30px"
                >
                    META APES UNIVERSE - MAU CLUB is a limited collection of 10,000 unique and creative NFT tokens that will become not only digital art, but also a way to EARN and DEVELOP digital advertising and marketing in online worlds such as DECENTRALAND, SANDBOX and METAWERSE!
              
                </Text>
                <Box>
                    <ButtonPrimary to="https://opensea.io/collection/alphakongsclub" name="Mint Soon" width="300px" />
                </Box>
            </WelcomeContainer>
            <HeroImg />
        </HeroContainer>
    );
};

const WelcomeImg = (props: any) => {
    return (
        // <Image
        //     src="/welcometext.png"
        //     w="100%"
        // />
        <Text
            fontSize={["30px", "35px", "38px", "42px", "45px"]}
            fontWeight="900"
            fontFamily="'Clash Display', sans-serif"
            color="rgb(255,255,235)"
            // textShadow="2px 2px 8px rgba(210, 210, 40, 0.8), -2px -2px 8px rgba(210, 210, 40, 0.8), 5px 5px 20px rgba(200, 200, 40, 0.8), -5px -5px 20px rgba(200, 200, 40, 0.8)"            
            textShadow="2px 2px 8px rgba(100, 210, 30, 0.8), -2px -2px 8px rgba(100, 210, 30, 0.8), 5px 5px 20px rgba(80, 200, 20, 0.8), -5px -5px 20px rgba(100, 200, 40, 0.8)"            
            // textShadow="2px 2px 8px rgba(210, 20, 180, 0.8), -2px -2px 8px rgba(210, 20, 180, 0.8), 5px 5px 20px rgba(210, 20, 180, 0.8), -5px -5px 20px rgba(210, 20, 180, 0.8)"
            textTransform="uppercase"
            lineHeight="96%"
            mb={6}
        >Welcome to <br />The Meta APES <br />Universe</Text>
    )
};

const WelcomeContainer = ({ children, ...props }: { children: React.ReactNode }) => {
    return (
        <Flex
            flexDirection="column"
            w={["80vw", "70vw", "50vw", "45vw"]}
            padding={["30px", "30px", "40px", "60px"]}
            marginTop={["50px", "50px", "60px", "50px"]}
        >
            {children}
        </Flex>
    )
};

const HeroImg = (props: any) => {
    return (
        <Image
            src="/hero.png"
            position="absolute"
            left="auto"
            top="auto"
            right="0%"
            bottom="0%"
            // maxWidth="479px"
            w="45vw"
            display={["none", "block", "block", "block"]}
        />
    )
};

const HeroContainer = ({ children, ...props }: { children: React.ReactNode }) => {
    return (
        <Flex
            position="relative"
            alignItems="center"
            backgroundImage="/hero-bg.png"
            backgroundPosition="50% 50%"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            h={["548px", "450px", "450px", "100vh"]}
            id="about"
            {...props}
        >
            {children}
        </Flex>
    );
};

export default Hero