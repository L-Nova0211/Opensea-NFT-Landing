import React, { useState, useEffect } from "react";
import { Link, Box, Flex, Text, Button, Image, Stack } from "@chakra-ui/react";
import Card from "./Card";
import { ReactComponent as InstagramIcon } from './../../assets/Instagram_Icon.svg'
import { ReactComponent as TwitterIcon } from './../../assets/Twitter_Icon.svg'
import { ReactComponent as DiscordIcon } from './../../assets/Discord_Icon.svg'

const RoadMap = () => {
    const [cardTranslate, setCardTranslate] = useState<any>()
    const [cardIndex, setCardIndex] = useState(0)    
    const handleLeftClick=()=>{
        if (cardIndex>0) setCardIndex(cardIndex-1)
        else setCardIndex(8)                  
    }
    const handleRightClick=()=>{
        if (cardIndex<8) setCardIndex(cardIndex+1)
        else setCardIndex(0)
    }
    useEffect(() => {
        setCardTranslate([`translateX(${-290*cardIndex}px)`, `translateX(${-320*cardIndex}px)`, `translateX(${-370*cardIndex}px)`,`translateX(${-440*cardIndex}px)`,`translateX(${-470*cardIndex}px)`])
    }, [cardIndex])
  return (
    <Flex
        paddingTop={["4em","6em","7em","8em"]}
        paddingBottom={["3em","4em","6em","7em"]}
        bg="#161616"
        flexDirection="column"
        justifyContent="center"
        alignItems="center" 
        overflowX="hidden"   
        id="roadmap"    
    >
        <Box maxWidth={["95vw", "95vw", "92vw", "90vw"]} width="100%" display="block" position="relative">
            <Flex justify="space-between" width="100%">
                <Text fontFamily="'Clash Display', sans-serif"
                    color="white" fontSize={["35px","45px","50px","60px"]}
                    lineHeight="120%" fontWeight="900">The RoadMap</Text>
                <Flex gridGap="20px">
                    <ArrowButton handleClick={handleLeftClick} transform=""  />
                    <ArrowButton handleClick={handleRightClick} transform="Rotate(180deg)"  />                
                </Flex>
            </Flex>
            <Box 
                mt={["30px","40px","45px","50px"]} 
                width={["270px","300px","350px","420px","450px"]} 
                height={["570px","650px","650px","45em", "43em"]} 
                overflow="visible" position="relative" 
                display="block" 
                transform={cardTranslate} right="0" whiteSpace="nowrap"
                transition="transform 500ms ease 0s"
            >
                {[0,1,2,3,4,5,6,7].map((item:number) => {
                    return (<Card key={item} no={item} />)
                })}
            </Box>
        </Box>
    </Flex> 
  );
};

const ArrowButton = ({handleClick, transform}: {handleClick:()=>void, transform:string}) => {
    return (
        <Flex w="50px" h="50px" cursor="pointer" justify="center" alignItems="center"
            border="1px solid yellow" borderRadius="50%" onClick={handleClick}>
            <Image src="/Left_Arrow.svg" transform={transform} />
        </Flex>
    )
}
const SocialItem = ({ children, to = "/"}:{children: React.ReactNode, to: string}) => {
    return (
      <Link href={to} isExternal>
        {children}
      </Link>
    );
};

const SocialLinks = () => {
    return (
      <Box>
        <Stack      
          spacing={8}    
          align="center"        
          direction="row"
          pt={6}
        >
          <SocialItem to="http://instagram.com/alphakongsclub"><InstagramIcon width="25px" height="25px" /></SocialItem>
          <SocialItem to="http://instagram.com/alphakongsclub"><TwitterIcon width="25px" height="25px" /></SocialItem>
          <SocialItem to="http://instagram.com/alphakongsclub"><DiscordIcon width="25px" height="25px" /></SocialItem>
        </Stack>
      </Box>
    );
};

export default RoadMap;
