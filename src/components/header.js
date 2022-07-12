import { Box, Text } from "@chakra-ui/layout";

export const Header = () => {
  return (
    <Box
      bg="#000"
      opacity="0.9"
      color="#ffffff"
      h={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize={44} fontFamily="Roboto" fontWeight="bold">
        Mp
        <Text as="span" color="#ECC94B">
          .
        </Text>
        2021
      </Text>
    </Box>
  );
};