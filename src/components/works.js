import { Box, Text } from "@chakra-ui/layout";

export const TopWorks = () => 
{
  return (
    <Box bg="#000" opacity="0.8" color="#ffffff" pt={28} pb={28}>
        <Text as="u" fontSize="3xl" color="#ECC94B" fontFamily="Rajdhani">
        <h2 id="Works">Works</h2>
        </Text>
        <Box textAlign="left" display="flex" alignItems="left">
          <Box m={0}>
            <Text fontFamily="Roboto" fontWeight="bold" fontSize={24} m>
            <p>・趣味　野球観戦, ディズニー(パーク, 映画全般！),ラジオ, 音楽, 散歩</p>
            <p>・部活　中学：野球部, 高校：陸上競技部</p>
            <p>・好きなアーティスト＆曲 ♪</p>
            <p>  CreepyNuts『パッと咲いて散って灰に』</p>
            <p>  YOASOBI『あの夢をなぞって』</p>
            <p>  大原櫻子『青い季節』</p>
            <p>  宮川大聖『スターランド』</p>
            </Text>
          </Box>
        </Box>
      </Box>
  );
};