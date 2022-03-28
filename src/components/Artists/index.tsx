import React, { useState } from "react";
import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
import { ARTISTS_LIST } from "../constants";
import Card from "./Card";
const Artists = (props:any) => {
    const [artists_list, setArtistsList] = useState<any>(ARTISTS_LIST)
    return (
        <Flex 
            alignItems="center"
            justifyContent="center"
            paddingTop={["3em","3em","3em","5em"]}
            paddingBottom={["3em","3em","3em","5em"]}
            bg="#fffc00"
        {...props}>
            <Flex alignItems="center" flexDirection="column" maxWidth={["none", "92vw", "92vw", "1200px"]}>
                <Box textAlign="center">
                    <Text fontFamily="'Clash Display', sans-serif"
                        color="black" fontSize={["35px","35px","45px","45px"]}
                        lineHeight="120%" fontWeight="900"                
                    >MEET THE ARTISTS
                    </Text>
                    <Text color="#161616" fontSize="11px" lineHeight="120%" marginBottom="10px" marginTop="20px" maxWidth="450px" >
                        You have admired their work in top cinemas around the world. They have made blockbusters and the best TV shows in recent years possible… and now they unleash their talent on the Metaverse.
                    </Text>               
                </Box>
                <Box display="grid" gridAutoColumns="1fr" alignSelf="stretch" gridColumnGap={["1em","2em","3em","4em"]}
                    gridTemplateRows="auto" gridRowGap="0px" gridTemplateColumns={["none","none","1fr 1fr 1fr","1fr 1fr 1fr"]} marginTop="2.8em"
                >
                    {artists_list?.map((artist:any, index:number) => {
                        return (
                            <Card key={index} name={artist.name} description={artist.description} img={artist.img} to={artist.to} button={artist.button} />
                        )
                    })
                    }
                </Box>
            </Flex>
        </Flex>
    );
};

export default Artists