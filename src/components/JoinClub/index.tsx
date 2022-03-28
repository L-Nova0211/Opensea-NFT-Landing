import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
import ButtonPrimary from './../ButtonPrimary'
const JoinClub = (props:any) => {
    return (
        <Flex
            position="relative"
            paddingTop={["4em","6em","8em","10em"]}
            paddingBottom={["3em","4em","4em","4em"]}
            bg="#000"
            id="club"
        >
            <Image
                position="absolute"
                width="60%"
                left="0px"
                bottom="0px"
                right="auto"
                top="auto"
                src="/joinclub/hero.png"
                display={["none","none","block","block"]}
            />
            <Flex                                                       
                maxWidth="1200px"
                marginLeft="auto"
                marginRight="auto"
            {...props}>
                <Flex justifyContent={["center","center","flex-end","flex-end"]}>
                    <Flex flexDirection="column" alignItems="flex-start" paddingRight="10px" width={["95%","90%","50%","50%"]}>
                        <Text fontFamily="'Clash Display', sans-serif"
                            color="white" fontSize={["35px","40px","45px","50px"]}
                            lineHeight="120%" fontWeight="900"                
                        >JOIN THE MAU CLUB
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            META APES UNIVERSE CLUB is a privileged club for our customers and all users of our developments. 
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            Holders of our NFT will become part of our club, where dozens of privileges and opportunities are waiting for them
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            <span style={{fontWeight:"900"}}>PARTISIPATION IN SWEEPSTAKES!</span>
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            <span style={{fontWeight:"900"}}>Full consultations on our developments personally with our team at online conferences!</span>
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            <span style={{fontWeight:"900"}}>Free use and access to our MAU P2P platform for work!</span>
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            <span style={{fontWeight:"900"}}>Our club members will find out all the news about our developments and plans before anyone else!</span>
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            <span style={{fontWeight:"900"}}>In our club we will open special online courses aimed at teaching earnings in the online worlds like DECENTRALAND, SANDBOX and METAVERSE on our developments and vacancies.</span>
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="30px" marginTop="20px">
                            Become a part of our club and community and we will change online opportunities together!
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="30px" marginTop="20px">
                            “It's never too late to change everything and dive into the future. “-FOUNDER of META APES UNIVERSE.
                        </Text>
                        <ButtonPrimary to="#" name="Join Discord" width="270px" />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default JoinClub