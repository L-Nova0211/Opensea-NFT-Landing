import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
interface CardProps{
    name:string, description:string, img:string, to:string, button:string
}

const Card = ({name, description, img, to, button}:CardProps) => {
    return (
        <Flex 
            alignItems="center"
            flexDirection="column"
            justifyContent="space-between"
            textAlign="center"
        >
            <Image src={img} alt={name} width={["50%", "50%", "90%", "90%"]} />
            <Text fontFamily="'Clash Display', sans-serif"
                color="black" fontSize={["20px","25px","30px","30px"]}
                lineHeight="120%" fontWeight="900" marginTop="20px"               
            >{name}
            </Text>
            <Text color="#161616" fontSize="13px" lineHeight="120%" margin="15px">
                {description}
            </Text>      
            <Link href={to} mb={5} isExternal>
                <Image src={button} />
            </Link>
        </Flex>
    );
};

export default Card