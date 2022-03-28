import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
import ButtonPrimary from '../ButtonPrimary'
const MauEarning = (props:any) => {
    return (
        <Flex
            position="relative"
            paddingTop={["4em","6em","7em","8em"]}
            bg="#000"
            id="earning"
        >
            <Image
                position="absolute"
                width={["0%","30%","26%","30%","30%"]}
                display={["none","none","block","block","block"]}
                left="0px"
                bottom="0px"
                right="auto"
                src="/festival/1.png"
            />
            <Image
                position="absolute"
                width={["0%","30%","26%","30%","30%"]}
                display={["none","none","block","block","block"]}
                left="auto"
                bottom="0px"
                right="0px"
                src="/festival/2.png"
            />
            <Flex                                                       
                maxWidth="1200px"
                marginLeft="auto"
                marginRight="auto"
                {...props}
            >
                <Flex justifyContent="center" zIndex="1">
                    <Flex 
                        flexDirection="column" 
                        alignItems="center" 
                        textAlign="center" 
                        width={["90%","86%","60%","50%","60%"]}
                        fontSize={["15px","15px","17px","19px"]} 
                    >
                        <Text fontFamily="'Clash Display', sans-serif"
                            color="white" fontSize={["30px","35px","40px","50px","60px"]}
                            lineHeight="120%" fontWeight="900" letterSpacing="-3px"                
                        >
                            <span style={{color:"green"}}>MAU EARNINGS</span>
                        </Text>
                        <Text color="#fff" lineHeight="120%" marginBottom="5px" marginTop="10px">
                            The META APES UNIVERSE project will create dozens <span style={{fontWeight:"900"}}>of new types of online earnings</span> in the largest online worlds like <span style={{fontWeight:"900"}}>DECENTRALAND, SANDBOX and METAVERSE</span> for everyone.
                        </Text>
                        <Text color="#fff" lineHeight="120%" marginBottom="5px" marginTop="10px">
                            Each of our NFT tokens is a certain place on the online billboard from which you can earn by <span style={{fontWeight:"900"}}>TRADING</span> it or giving it for the <span style={{fontWeight:"900"}}>RENT</span>. 
                        </Text>
                        <Text color="#fff" lineHeight="120%" marginBottom="5px" marginTop="10px">
                            All work will be carried out on our <span style={{fontWeight:"900"}}>MAU P2P platform</span>, which will be a marketplace on the ETH blockchain with a P2P function, where you can buy a place on a billboard, TRADE YOUR BILLBOARD, or exchange it! And many more.
                        </Text>
                        <Text color="#fff" lineHeight="120%" marginBottom="5px" marginTop="10px">
                            <span style={{fontWeight:"900"}}>MEMBERS OF THE MAU CLUB</span> will use MAU platform free of charge, without paying a commission for sale or purchase.
                        </Text>
                        <Text color="#fff" lineHeight="120%" marginBottom="5px" marginTop="10px">
                            <span style={{fontWeight:"900"}}>More then 10,000 vacancies for online MAU jobs will be available!</span><br/>  
                            Work as brokers for the sale or search of billboards for people who want to buy or rent a billboard for their advertising.<br/>
                            <span style={{fontWeight:"900"}}>EARN IN HOURS, WEEKS or MONTHS.</span>
                        </Text>
                        <Text color="#fff" lineHeight="120%" marginBottom="5px" marginTop="10px">
                            <span style={{fontWeight:"900"}}>3 Online offices in METAVERSE, DECENTRALAND and SANDBOX, which will be available 24/7</span><br/>
                            For any help or consultation. 
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default MauEarning