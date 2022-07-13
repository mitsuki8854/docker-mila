import { Box, Text,Grid } from "@chakra-ui/layout";
import githubIcon1 from "../images/photo1.png";
import githubIcon2 from "../images/photo2.png";
import githubIcon3 from "../images/photo3.png";
import {Image} from "@chakra-ui/react"

export const TopContact = () => 
{
  return (
    <Box bg="#000" opacity="0.9" color="#ffffff" pt={28} pb={28}>
        <Text as="u" fontSize="3xl" color="#ECC94B" fontFamily="Rajdhani">
        <h2 id="Images">Images</h2>
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" ml={14} mr={14}>
        <Box display="left" justifyContent="left" alignItems="left">
        <Image src={githubIcon1.src} mr={1}></Image>
        </Box>
        <Box display="left" justifyContent="left" alignItems="left">
        <Image src={githubIcon2.src} mr={1}></Image>
        </Box>
        <Box display="left" justifyContent="left" alignItems="left">
        <Image src={githubIcon3.src} mr={1}></Image>
        </Box>
        </Grid>
    </Box>
  );
};