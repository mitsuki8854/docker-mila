import { Box, Text, Divider, Link } from "@chakra-ui/layout";
import {Image} from "@chakra-ui/react"
import githubIcon from "../images/GitHub-Mark-32px.png";

export const TopAbout = () => 
{
  return (
    <Box bg="#000" opacity="0.9" color="#ffffff" pt={28} pb={28}>
        <Text as="u" fontSize="3xl" color="#ECC94B" fontFamily="Rajdhani">
        <h2 id="About">About</h2>
        </Text>
        <Box textAlign="left" display="flex" alignItems="center">
          <Box m={0}>
            <Text fontFamily="Roboto" fontWeight="bold" fontSize={72} m>
              私はmilaです
            </Text>
          </Box>
        </Box>
        <Divider w={20} borderColor="#ECC94B" opacity="1" mb={5} />
        <Box display="flex" justifyContent="left" alignItems="center">
          <Image src={githubIcon.src} mr={2}></Image>
          <Text fontSize="3xl" fontFamily="Rajdhani">
            GitHub :
            <Link href='https://github.com/tami719' isExternal> tami719 </Link>
          </Text>
        </Box>
    </Box>
  );
};