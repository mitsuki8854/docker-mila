import { Box, Text } from "@chakra-ui/layout";

export const TopContact = () => 
{
  return (
    <Box bg="#000" opacity="0.9" color="#ffffff" pt={28} pb={28}>
      <Box textAlign="left" display="flex" justifyContent="center" alignItems="center" mb={40}>
        <Text as="u" fontSize="3xl" color="#ECC94B" fontFamily="Rajdhani">
        <h2 id="Images">Favorites</h2>
        </Text>
      </Box>

      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <Text>  CreepyNuts『パッと咲いて散って灰に』</Text>
      </Box>
      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center" mb={40}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/UlrR9GYgZ2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Box>

      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <Text>  YOASOBI『あの夢をなぞって』</Text>
      </Box>
      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center" mb={40}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/sAuEeM_6zpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Box>

      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <Text> 大原櫻子『青い季節』 </Text>
      </Box>
      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center" mb={40}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wDLXHw-2Kbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Box>

      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <Text> みやかわくん『スターランド』 </Text>
      </Box>
      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center" mb={40}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/H4Cfn1l3d1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Box>
    </Box>
  );
};