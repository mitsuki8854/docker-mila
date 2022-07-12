import { Box, Text} from "@chakra-ui/layout";

export const TopAbout = () => {
  return (
    <Box bg="#000" opacity="0.9" color="#ffffff" pt={28} pb={28}>
        <Text as="u" fontSize="3xl" color="#ECC94B" fontFamily="Rajdhani">
            About
        </Text>
    </Box>
  );
};