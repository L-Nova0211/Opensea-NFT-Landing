import React, { useState } from "react";
import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
import { MEMBERS_LIST1 } from "../constants";
import { MEMBERS_LIST2 } from "../constants";
import MemberCard from "./Card";
const Team = (props:any) => {
    const [members_list1, setMembersList1] = useState<any>(MEMBERS_LIST1)
    const [members_list2, setMembersList2] = useState<any>(MEMBERS_LIST2)
    return (
        <Flex 
            alignItems="center"
            justifyContent="center"
            flexDirection="column"            
            bg="#fff"
            id="team"
        {...props}>
            <Flex alignItems="center" flexDirection="column" 
                maxWidth={["none", "92vw", "92vw", "1200px"]}
                paddingTop={["3em","3em","3em","5em"]}
                // paddingBottom={["3em","3em","3em","5em"]}
            >
                <Box textAlign="center">
                    <Text fontFamily="'Clash Display', sans-serif"
                        color="black" fontSize={["35px","35px","45px","45px"]}
                        lineHeight="120%" fontWeight="900"                
                    >MEET THE META APES<br />
                    UNIVERSE TEAM
                    </Text>                             
                </Box>
                <Box display="grid" gridAutoColumns="1fr" gridColumnGap={["1em","2em","3em","4em"]}
                    gridTemplateRows="auto" gridRowGap="16px" gridTemplateColumns={["none","1fr 1fr 1fr","1fr 1fr 1fr","1fr 1fr 1fr"]} marginTop="2.8em"
                >
                    {[0,1,2]?.map((item:any, index:number) => {
                        return (
                            <MemberCard key={item} name={members_list1[item].name} description={members_list1[item].description} img={members_list1[item].img}  />
                        )
                    })
                    }
                </Box>
                <Box display="grid" gridAutoColumns="1fr" gridColumnGap={["1em","2em","3em","4em"]}
                    gridTemplateRows="auto" gridRowGap="0px" gridTemplateColumns={["none","1fr 1fr 1fr 1fr","1fr 1fr 1fr 1fr","1fr 1fr 1fr 1fr"]} marginTop="2.8em"
                >
                    {[3,4,5,6]?.map((item:any, index:number) => {
                        return (
                            <MemberCard key={item} name={members_list1[item].name} description={members_list1[item].description} img={members_list1[item].img}  />
                        )
                    })
                    }
                </Box>
            </Flex>
            <Flex alignItems="center" flexDirection="column" 
                maxWidth={["none", "92vw", "92vw", "1200px"]}
                paddingTop={["3em","3em","3em","5em"]}
                paddingBottom={["3em","3em","3em","5em"]}
            >
                <Box textAlign="center">
                    <Text fontFamily="'Clash Display', sans-serif"
                        color="black" fontSize={["35px","35px","45px","45px"]}
                        lineHeight="120%" fontWeight="900"                
                    >THE MODERATION
                    <br />
                    TEAM
                    </Text>                             
                </Box>
                <Box display="grid" gridAutoColumns="1fr" gridColumnGap={["1em","2em","3em","4em"]}
                    gridTemplateRows="auto" gridRowGap="16px" gridTemplateColumns={["none","1fr 1fr","1fr 1fr","1fr 1fr"]} marginTop="2.8em"
                >
                    {[0,1]?.map((item:any, index:number) => {
                        return (
                            <MemberCard key={item} name={members_list2[item].name} description={members_list2[item].description} img={members_list2[item].img}  />
                        )
                    })
                    }
                </Box>
                <Box display="grid" gridAutoColumns="1fr" gridColumnGap={["1em","2em","3em","4em"]}
                    gridTemplateRows="auto" gridRowGap="0px" gridTemplateColumns={["none","1fr 1fr 1fr 1fr","1fr 1fr 1fr 1fr","1fr 1fr 1fr 1fr"]} marginTop="2.8em"
                >
                    {[2,3,4,5]?.map((item:any, index:number) => {
                        return (
                            <MemberCard key={item} name={members_list2[item].name} description={members_list2[item].description} img={members_list2[item].img}  />
                        )
                    })
                    }
                </Box>
                {/* <Box display="grid" gridAutoColumns="1fr" gridColumnGap={["1em","2em","3em","4em"]}
                    gridTemplateRows="auto" gridRowGap="0px" gridTemplateColumns={["none","1fr 1fr 1fr 1fr","1fr 1fr 1fr 1fr","1fr 1fr 1fr 1fr"]} marginTop="2.8em"
                >
                    {[6,7,8,9]?.map((item:any, index:number) => {
                        return (
                            <MemberCard key={item} name={members_list2[item].name} description={members_list2[item].description} img={members_list2[item].img}  />
                        )
                    })
                    }
                </Box> */}
            </Flex>
        </Flex>
    );
};

export default Team