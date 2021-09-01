import searchLogo from "../park-logo.svg";
import { Box, Flex, Stack, LinkBox, Text } from "@chakra-ui/react";
import { Link as RouterLink, useHistory } from "react-router-dom";

export const SearchLogo = () => {
  return (
    <Box>
      <LinkBox as={RouterLink} to="/">
        <Text fontSize="3xl">
          National <img src={searchLogo} className="App-logo" alt="logo" /> Park
          Finder
        </Text>
      </LinkBox>
    </Box>
  );
};
