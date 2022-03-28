import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
interface CardProps{
    name:string, description:string, img:string
}

const MemberCard = ({name, description, img}:CardProps) => {
    return (
        <Flex 
            alignItems="center"
            flexDirection="column"
            justifyContent="start"
            textAlign="center"
            width={["auto", "100px", "130px", "160px", "220px"]}
        >
            <Image src={img} alt={name} width={["50%", "100%", "100%", "100%"]} borderRadius="50%" />
            <Text fontFamily="'Clash Display', sans-serif"
                color="black" fontSize={["20px","25px","30px","30px"]}
                lineHeight="120%" fontWeight="900" marginTop="20px"             
            >{name}
            </Text>
            <Text color="#161616" fontSize="13px" lineHeight="120%" marginTop="15px">
                {description}
            </Text>
        </Flex>
    );
};

export default MemberCard