import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
const Provenance = (props: any) => {
    return (
        <Flex
            flexDirection="column"
            backgroundColor="black"
            textColor="white"
            py ="30px"
            px="50px"
            {...props}
        >
            <Text
                fontFamily="'Clash Display', sans-serif"
                fontWeight="1000"
                fontStyle= "italic"
                textAlign="left"
                fontSize="28px"
            >
                BORED APE YACHT CLUB PROVENANCE RECORD

            </Text>
            <h2>
                This page presents the provenance record of each bored Ape that will ever exist.
                Each Bored Ape image is firstly hashed using SHA-256 algorithm.
                A combined string is obtained by concatenating SHA-256  of each Bored ape image in the specific order as listed below.
                The final proof is obtained by SHA-256 hashing this combined string.
                This is the final provenance record stored on the smart contract.
            </h2>
            <Text
                fontStyle="italic"
                textAlign="left"
                fontSize="20px"
                mt="70px"
            >
                IMPORTANT INFORMATION
            </Text>
            <Text 
                mt="30px"
            >
                Each Bored Ape token ID is assigned to an artwork image from the inital sequence with this formula:
            </Text>
            <Text
                textAlign="center"
                mt="20px"
            >
                (tokenId + starting Index) % 10000 - Initial Sequence Index
            </Text>
            <Text
                mt="30px"
            >
                Here's the relevant information:
            </Text>
            <Flex
                direction={["column","column","column", "row","row"]}
                w="100%"
            >
                <Text 
                    w={["100%","100%","100%","50%","50%"]}
                    textAlign={["center","center","center", "right","right"]}
                >
                    FINALIZED STARTING INDEX&nbsp;&nbsp;&nbsp;|<br/>
                    BORED APE YACHT CLUB CONTRACT ADDRESS&nbsp;&nbsp;&nbsp;|
                </Text>
                <Text
                 textAlign={["center","center","center", "left","left"]}
                >
                    &nbsp;&nbsp;&nbsp;8853<br/>
                    &nbsp;&nbsp;&nbsp;0x686c626E48bfC5DC98a30a9992897766fed4Abd3
                </Text>              
            </Flex>
        </Flex>

    );
};

export default Provenance