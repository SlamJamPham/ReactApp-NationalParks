import React from "react";
import "../App.css";
import USAMap from "react-usa-map";
import { useHistory } from "react-router-dom";
import { Box, Flex, Stack } from "@chakra-ui/react";

const Home = ({ setState }) => {
  const history = useHistory();

  const mapHandler = (event) => {
    history.push(`/search/${event.target.dataset.name}`);
  };

  return (
    <Flex width="full" justifyContent="center">
      <Stack>
        <p>legs go</p>
        <Box align="center" borderWidth={5} px={4} width="full" borderadius={4}>
          <Box justifyContent="center">
            <USAMap onClick={mapHandler} />
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Home;
