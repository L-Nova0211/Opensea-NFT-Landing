import { Link } from "@chakra-ui/react";
const ButtonPrimary = ({ to = "/", name, width, ...rest }:{to: string, name:string, width:string}) => {
    return (
        <Link
            href={to}
            size="lg"
            // rounded="md"
            textTransform="uppercase"
            // color={["primary.500", "primary.500", "white", "white"]}
            color="white"
            // bg={["white", "white", "primary.500", "primary.500"]}
            bg="transparent"
            border="2px solid #33FF00"
            borderRadius="30px"
            w={width}
            h="60px"
            // letterSpacing="1px"
            fontSize="22px"
            fontWeight="extrabold"
            _hover={{
                bg: "rgb(97,255,150)",
                boxShadow: "0px 0px 20px 7px rgba(51, 255, 0, 0.5)",
                color: "black"
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"                        
            isExternal           
        >            
            {name}
        </Link>
    );
  };

export default ButtonPrimary