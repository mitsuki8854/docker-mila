import { Box, Text } from "@chakra-ui/layout";

export const TopWorks = () => 
{
  return (
    <Box bg="#000" opacity="0.8" color="#ffffff" pt={28} pb={28}>
      
      <Box textAlign="left" display="flex" justifyContent="center" alignItems="center">
        <Text as="u" fontSize="3xl" color="#ECC94B" fontFamily="Rajdhani">
        <h2 id="Works">Profile</h2>
        </Text>
      </Box>
        <Box textAlign="left" display="flex" justifyContent="center" alignItems="center">
          <Box mt={40}>
             <Text fontFamily="Roboto" fontWeight="bold" fontSize={24} mb={10}> >趣味　野球観戦, ディズニー(パーク, 映画全般！),ラジオ, 音楽, 散歩 </Text>
              <Text fontFamily="Roboto" fontWeight="bold" fontSize={24} mb={10}> >部活　中学：野球部, 高校：陸上競技部 </Text>
              <Text fontFamily="Roboto" fontWeight="bold" fontSize={24} mb={5}>>好きなアーティスト＆曲 ♪ </Text>
              <Text fontFamily="Roboto" fontWeight="bold" fontSize={24} mb={10}>CreepyNuts, YOASOBI, 大原櫻子, みやかわくん</Text>
          </Box>
        </Box>
      </Box>
  );
};