import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
const About = (props:any) => {
    return (
        <Flex 
            alignItems="center"
            justifyContent="center"
            paddingTop={["3em","3em","3em","5em"]}
            paddingBottom={["3em","3em","3em","5em"]}
            bg="#161616"
            position="relative"
        {...props}>
            <Box maxWidth={["88vw","86vw","66vw","66vw"]} textAlign="left" fontSize='15px' >
                <Text fontFamily="'Clash Display', sans-serif"
                    color="white" fontSize={["30px","30px","40px","40px"]}
                    lineHeight="120%" fontWeight="900"  
                    textAlign= "center"            
                >
                    <span style={{color:"green"}}>META APES UNIVERSE<br/></span>
                    READY FOR NEW OPPERTUNITIES? 
                </Text>
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    META APES UNIVERSE is a project that will completely change the NFT industry with its developments and technologies for our customers and users of online worlds.
                </Text>
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    Our project will create online <span style={{fontWeight:"900"}}>earnings opportunities</span> in the three largest online worlds for everyone and develop the industry of online marketing and online earnings in worlds like METAVERSE, DECENTRALAND and SANDBOX.
                </Text>
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    The mission of META APES UNIVERSE is to purchase a large amount of space and land in the <span style={{fontWeight:"900"}}>online worlds of DECENTRALAND, SANDBOX and METAVERSE</span> and to build avenues and blocks there like in TIMES SQUARE in NEW YORK city, where we plan to place thousands of advertising spaces and 3D billboards for advertising on our real estate.
                </Text>
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    <span style={{fontWeight:"900"}}>TRADE our NFT on OPENSEA.</span>
                </Text>
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    Each of our NFT tokens is a place for a specific advertising space on our buildings in online worlds like <span style={{fontWeight:"900"}}>DECENTRALAND, SANDBOX</span> and <span style={{fontWeight:"900"}}>METAVERSE</span>, where you can put your ads on our billboards and develop marketing of your business!
                </Text>
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    <span style={{fontWeight:"900"}}>TRADE</span> each of your advertising space with the help of our <span style={{fontWeight:"900"}}>P2P META APES UNIVERSE platform</span>.
                </Text>
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                     3 online agencies and online offices in <span style={{fontWeight:"900"}}>DECENTRALAND, SANDBOX and METAWERSE</span>, to help you find a MAU job, work as <span style={{fontWeight:"900"}}>brokers for the sale</span>, rent or search of advertising spaces for all willing customers!<br/>MANY MORE JOBS AVAILIBLE SOON!
                </Text>
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    <span style={{fontWeight:"900"}}>JOIN MAU Club!</span><br/>
                    Find out news about our plans and developments before anyone else!
                    Participate in special sweepstakes!
                    Receive any consultations with our team at online conferences and forums.
                </Text>
            </Box>            
            <Image
                position="absolute"
                width={["0%","30%","26%","30%","25%"]}
                display={["none","none","block","block","block"]}
                left="auto"
                bottom="0px"
                right="0px"
                src="/about/neon.png"
            />
        </Flex>
    );
};

export default About