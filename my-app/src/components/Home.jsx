import React from "react";
import "../App.css";
import USAMap from "react-usa-map";
import { useHistory } from "react-router-dom";
import { Box, Flex, Stack, Image } from "@chakra-ui/react";
import { SearchLogo } from "./SearchLogo";
import footerImage from "../footerImg.png";

const Home = ({ setState }) => {
  const history = useHistory();

  const mapHandler = (event) => {
    history.push(`/search/${event.target.dataset.name}`);
  };

  return (
    <Flex className="centered" align="center" justifyContent="center">
      <Stack>
        <Box>
          <SearchLogo />
        </Box>
        <Box align="center" width="full" borderadius={4}>
          <Box justifyContent="center">
            <USAMap defaultFill="#7E6E5D" title="cool" onClick={mapHandler} />
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Home;
