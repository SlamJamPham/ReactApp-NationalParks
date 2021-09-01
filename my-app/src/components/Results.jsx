import React, { useState, useEffect } from "react";
import "./Results.css";
import API from "../services/infoAPI";
import { Box } from "@chakra-ui/react";
import { SearchLogo } from "./SearchLogo";
import CaorouselView from "./CarouselView";

function Results(props) {
  const [parkInfo, setParkInfo] = useState([]);
  const [initialModalInfo, setInitialModalInfo] = useState([]);
  const [fetching, setfetching] = useState(true);

  const stateCode = props.match.params.state;

  useEffect(() => {
    async function fetchData() {
      const results = await API.get(stateCode);
      setParkInfo(results);
      setInitialModalInfo(results[0]);
      setfetching(false);
    }
    fetchData();
  }, []);

  return (
    <Box className="centered" width="100%">
      <SearchLogo />
      {fetching ? (
        <h1>Loading Data </h1>
      ) : (
        <CaorouselView parkInfo={parkInfo} modalInfo={initialModalInfo} />
      )}
    </Box>
  );
}

export default Results;
