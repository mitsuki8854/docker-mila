import { Box, Text, Grid } from "@chakra-ui/layout";

export const Header = () => 
{
  return (
    <Box
      bg="#000"
      opacity="0.9"
      color="#ffffff"
      h={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
      pos="fixed"
      w="100%"
      zIndex={2}
    >
      <Text fontSize={44} fontFamily="Roboto" fontWeight="bold">
        milalaの自己紹介ブログ
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} ml={14} mr={14}>
        <Text
          fontSize="3xl"
          fontFamily="Rajdhani"
          transition="all .0.2s"
          _hover={{ textDecoration: "underline 1px" }}
        >
          <a href="#About">About</a>
        </Text>
        <Text
          fontSize="3xl"
          fontFamily="Rajdhani"
          _hover={{ textDecoration: "underline 1px" }}
        >
          <a href="#Works">Profile</a>
        </Text>
        <Text
          fontSize="3xl"
          fontFamily="Rajdhani"
          _hover={{ textDecoration: "underline 1px" }}
        >
          <a href="#Images">Favorites</a>
        </Text>
      </Grid>
    </Box>
  );
};