import { Box, Text, Divider, Link, Stack } from "@chakra-ui/layout";
import {Image} from "@chakra-ui/react"
import githubIcon from "../images/GitHub-Mark-32px.png";
import miracosta from "../images/photo2.png";
import des from "../images/photo3.jpg"

export const TopAbout = () => 
{
  return (
    <Box bg="#000" opacity="0.9" color="#ffffff" pt={0} pb={28}>
      <Image src={ des.src } w="100%" h={450} />
      <Box textAlign="left" display="flex" justifyContent="center" alignItems="center" mt={100} mb={40}>
        <Text as="u" fontSize="3xl" color="#ECC94B" fontFamily="Rajdhani">
        <h2 id="About">About</h2>
        </Text>
      </Box>
      <Stack direction={["column", "row"]} mx={100}>
        <Box textAlign="left" display="flex" justifyContent="center" alignItems="center">
          <Image src={ miracosta.src } mr={10} borderRadius={10} />
        </Box>
        <Box textAlign="left" display="flex" justifyContent="center" alignItems="center">
          <Text fontFamily="Roboto" fontWeight="bold" fontSize="2xl" m>
            milaです。<br />名前の由来は東京ディズニーシー・ホテルミラコスタからです。<br />
            法政大学でコンピュータサイエンスの勉強をしています。
          </Text>
        </Box>
      </Stack>
      <Divider w={40} borderColor="#ECC94B" opacity="1" mt={5} mb={5} />
      <Box display="flex" justifyContent="left" alignItems="center">
        <Image src={githubIcon.src} mr={2} />
        <Text fontSize="3xl" fontFamily="Rajdhani">
          GitHub :
          <Link href='https://github.com/tami719' isExternal> tami719 </Link>
        </Text>
      </Box>
    </Box>
  );
};