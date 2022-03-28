import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
const PromotionVideo = (props:any) => {
    return (
        <Flex 
            alignItems="center"
            justifyContent="center"
            {...props}
        >
            <video 
                width = "100%"
                autoPlay= {true}
                loop= {true} 
                style={{backgroundImage: "url(&quot;https://global-uploads.webflow.com/61f25bf46b3218708480f622/61fbd0ae336940fbeebccfb0_akc_announcement_2___v5 (1080p)-poster-00001.jpg&quot;)"}} 
                muted= {true}
                playsInline= {true} 
                data-wf-ignore="true" 
                data-object-fit="cover"
            >
                <source 
                    src="https://global-uploads.webflow.com/61f25bf46b3218708480f622/   61fbd0ae336940fbeebccfb0_akc_announcement_2___v5 (1080p)-transcode.mp4"
                    data-wf-ignore="true"
                />
                <source 
                    src="https://global-uploads.webflow.com/61f25bf46b3218708480f622/61fbd0ae336940fbeebccfb0_akc_announcement_2___v5 (1080p)-transcode.webm" 
                    data-wf-ignore="true"
                />
            </video>          
        </Flex>
    );
};

export default PromotionVideo