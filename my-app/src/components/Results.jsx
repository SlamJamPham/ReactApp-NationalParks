import React, { useState, useEffect } from "react";
import "./Results.css";
import API from "../services/infoAPI";
import {
  Box,
  Switch,
  Stack,
  HStack,
  Center,
  Icon,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchLogo } from "./SearchLogo";
import CaorouselView from "./CarouselView";
import ListView from "./ListView";
import { MdFeedback } from "react-icons/md";
import ReportCard from "./ReportCard";

function Results(props) {
  const [parkInfo, setParkInfo] = useState([]);
  const [initialModalInfo, setInitialModalInfo] = useState([]);
  const [fetching, setfetching] = useState(true);
  const [isListView, setListView] = useState(false);

  const stateCode = props.match.params.state;

  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <div>
      <Box className={isListView ? "none" : "centered"} width="100%">
        <Stack pb="3">
          <SearchLogo />
          <Center>
            <HStack>
              <p>List View</p>
              <Switch
                colorScheme="blue"
                onChange={() => setListView(!isListView)}
              />
              <Spacer></Spacer>
              <Spacer></Spacer>
              <p>Report Missing Info</p>
              <Icon
                as={MdFeedback}
                w="7"
                h="7"
                onClick={() => {
                  onOpen();
                }}
              ></Icon>
            </HStack>
          </Center>
        </Stack>
        {fetching ? (
          <h1>Loading Data </h1>
        ) : isListView ? (
          <ListView parkInfo={parkInfo} modalInfo={initialModalInfo} />
        ) : (
          <CaorouselView parkInfo={parkInfo} modalInfo={initialModalInfo} />
        )}
      </Box>
      <ReportCard
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      ></ReportCard>
    </div>
  );
}

export default Results;
