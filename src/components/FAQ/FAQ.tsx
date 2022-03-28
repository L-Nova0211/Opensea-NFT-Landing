import React, { useState } from "react";
import { Link, Box, Flex, Text, Button, Stack, Accordion, AccordionIcon, AccordionItem, AccordionButton, AccordionPanel } from "@chakra-ui/react";
const FAQ = (props:any) => {    
    return (
        <Flex 
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            paddingTop={["3em","3em","3em","5em"]}
            paddingBottom={["3em","3em","3em","5em"]}
            bg="#161616"
        {...props}>
            <Flex alignItems="center" flexDirection="column" justifyContent="center" maxWidth={["none", "92vw", "92vw", "1200px"]}>                
                <Text fontFamily="'Clash Display', sans-serif"
                    color="white" fontSize={["35px","35px","45px","45px"]}
                    lineHeight="120%" fontWeight="900"  textAlign="center"              
                >FREQUENTLY ASKED<br />
                QUESTIONS
                </Text>                                   
            </Flex>            
            <Flex width="90vw" justifyContent="center">
            <Flex maxWidth="1200px" width="100%" mt={6} flexDirection="column">                
                <Accordion allowMultiple>
                    <AccordionItem bg="black" color="white" borderColor="#161616" borderWidth="10px">
                        <h2>
                        <AccordionButton>
                            <Box flex='1' >
                                <Text
                                textAlign='left' textTransform="uppercase" p="10px" _hover={{color:"yellow"}} fontSize={["14px","16px","18px","20px"]} fontWeight="900"
                                textShadow="2px 2px 8px rgba(0, 255, 40, 0.8), -2px -2px 8px rgba(0, 255, 40, 0.8), 5px 5px 20px rgba(0, 255, 40, 0.8), -5px -5px 20px rgba(0, 255, 40, 0.8)"            
                                lineHeight="96%"
                                >
                                    HOW TO EARN MONEY WITH META APES UNIVERSE?
                                </Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={5}>
                            Our project will provide dozens of types of earnings in online worlds like <span style={{fontWeight:"900"}}>DECENTRALAND, SANDBOX and METAVERSE</span>.
                            <br/><br/>
                            Earn by trading our NFT, as well as your advertising places on billboards that are attached to each NFT from our collection.
                            All work will take place on our <span style={{fontWeight:"900"}}>special MAU P2P platform.</span>
                            <br/><br/>
                            <span style={{fontWeight:"900"}}>Work as a broker for sales,</span> search or rental of billboards to all interested customers who want to buy a place on the billboard to place their ads.
                            <br/><br/>
                            MAU NFT STAKING 
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion allowMultiple>
                    <AccordionItem bg="black" color="white" borderColor="#161616" borderWidth="10px">
                        <h2>
                        <AccordionButton>
                            <Box flex='1' >
                                <Text
                                textAlign='left' textTransform="uppercase" p="10px" _hover={{color:"yellow"}} fontSize={["14px","16px","18px","20px"]} fontWeight="900"
                                textShadow="2px 2px 8px rgba(0, 255, 40, 0.8), -2px -2px 8px rgba(0, 255, 40, 0.8), 5px 5px 20px rgba(0, 255, 40, 0.8), -5px -5px 20px rgba(0, 255, 40, 0.8)"            
                                lineHeight="96%"
                                >
                                WHAT PRIVILLEGES MAU NFT’S GIVE?
                                </Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={5}>
                            MAU NFT carry a lot of privileges for our buyers and investors.
                            <br/><br/>
                            You will be able to participate and use all our developments in the online worlds and receive any help, advice and consulataion from our team personally, at organized online conferences.
                            <br/><br/>
                            MAU NFT is not only a creative digital art creation in limited quantities, but also a high-tech device and an opportunity to earn and develop!
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion allowMultiple>
                    <AccordionItem bg="black" color="white" borderColor="#161616" borderWidth="10px">
                        <h2>
                        <AccordionButton>
                            <Box flex='1' >
                                <Text
                                textAlign='left' textTransform="uppercase" p="10px" _hover={{color:"yellow"}} fontSize={["14px","16px","18px","20px"]} fontWeight="900"
                                textShadow="2px 2px 8px rgba(0, 255, 40, 0.8), -2px -2px 8px rgba(0, 255, 40, 0.8), 5px 5px 20px rgba(0, 255, 40, 0.8), -5px -5px 20px rgba(0, 255, 40, 0.8)"            
                                lineHeight="96%"
                                >
                                WHY IS META APES UNIVERSE A VERY SUCCESSFUL INVESTMENT?
                                </Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={5}>
                            META APES UNIVERSE is a very successful investment for all people who want to start earning online and develop their IT capabilities.
                            <br/><br/>
                            Our project will be the first NFT project to create ways of -
                            <span style={{fontWeight:"900"}}>
                            ACTIVE and PASSIVE online earnings in online worlds!
                            <br/><br/>
                            MAU NFT STAKING!
                            <br/><br/>
                            DEVELOPMENT OF ONLINE MARKETING 
                            <br/><br/>
                            Creation of the first special secure crypto wallet, specialized for working with NFT assets with high tech functions
                            </span>
                            Behind our project is the future and development of online technologies that will change the industry of online earnings and marketing!
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                
                <Accordion allowMultiple>
                    <AccordionItem bg="black" color="white" borderColor="#161616" borderWidth="10px">
                        <h2>
                        <AccordionButton>
                        <Box flex='1' >
                                <Text
                                textAlign='left' textTransform="uppercase" p="10px" _hover={{color:"yellow"}} fontSize={["14px","16px","18px","20px"]} fontWeight="900"
                                textShadow="2px 2px 8px rgba(0, 255, 40, 0.8), -2px -2px 8px rgba(0, 255, 40, 0.8), 5px 5px 20px rgba(0, 255, 40, 0.8), -5px -5px 20px rgba(0, 255, 40, 0.8)"            
                                lineHeight="96%"
                                >
                                HOW TO GET ON THE PRE-SALE MINT WHITELIST?
                                </Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={5}>
                            Become a part in all three MAU communities
                            <br/><br/>
                            <span style={{fontWeight:"900"}}>
                            DISCORD
                            <br/><br/>
                            INSTAGRAM
                            <br/><br/>
                            TWITTER
                            </span>
                            In the DISCORD community will have a limited opportunity to register on WHITELIST!
                            <br/><br/>
                            Follow all the news in DISCORD!
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion allowMultiple>
                    <AccordionItem bg="black" color="white" borderColor="#161616" borderWidth="10px">
                        <h2>
                        <AccordionButton>
                            <Box flex='1' >
                                <Text
                                textAlign='left' textTransform="uppercase" p="10px" _hover={{color:"yellow"}} fontSize={["14px","16px","18px","20px"]} fontWeight="900"
                                textShadow="2px 2px 8px rgba(0, 255, 40, 0.8), -2px -2px 8px rgba(0, 255, 40, 0.8), 5px 5px 20px rgba(0, 255, 40, 0.8), -5px -5px 20px rgba(0, 255, 40, 0.8)"            
                                lineHeight="96%"
                                >
                                WHY SHOULD YOU ENTER OUR COMMUNITY AND MAU CLUB?
                                </Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={5}>
                            People who are members of the MAU CLUB will have more privileges!
                            <br/><br/>
                            To become a part of our club, you will need to buy our NFT and apply on our website.<br/><br/>
                            <span style={{fontWeight:"900"}}>
                            You will find out all the news and plans about our developments before anyone else!
                            <br/><br/>
                            Frequent online conferences with our team.
                            <br/><br/>
                            Free use of our MAU P2P platform, you will not need to pay any commissions for the purchase or sale of assets.
                            Free educational training from our team on how to make money on our project and how our broker vacancies will work and a full explanation of all earning opportunities using MAU.
                            </span>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion allowMultiple>
                    <AccordionItem bg="black" color="white" borderColor="#161616" borderWidth="10px">
                        <h2>
                        <AccordionButton>
                            <Box flex='1' >
                                <Text
                                textAlign='left' textTransform="uppercase" p="10px" _hover={{color:"yellow"}} fontSize={["14px","16px","18px","20px"]} fontWeight="900"
                                textShadow="2px 2px 8px rgba(0, 255, 40, 0.8), -2px -2px 8px rgba(0, 255, 40, 0.8), 5px 5px 20px rgba(0, 255, 40, 0.8), -5px -5px 20px rgba(0, 255, 40, 0.8)"            
                                lineHeight="96%"
                                >
                                WHAT WILL THE MINT PRICE BE?
                                </Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={5}>
                            We will make MINT PRICE as accessible as possible for everyone, it will be announced on <span style={{fontWeight:"900"}}>DISCORD community, very soon!</span>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>       
            </Flex>     
        </Flex>
    );
};

export default FAQ