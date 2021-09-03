import searchLogo from "../images/park-logo.svg";
import { Box, LinkBox, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

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
