import ResultCard from "./ResultCard";
import React, { useState } from "react";
import "./Results.css";
import { Link } from "@chakra-ui/react";
import { useDisclosure, Grid, GridItem } from "@chakra-ui/react";
import ParkCard from "./ParkCard";

const ListView = (props) => {
  const parkInfo = props.parkInfo;
  const [modalInfo, setModalInfo] = useState(props.modalInfo);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <p>
        Displaying {parkInfo.length} of {parkInfo.length}
      </p>
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {parkInfo.map((info, idx) => (
          <GridItem>
            <Link
              onClick={() => {
                onOpen();
                setModalInfo(info);
              }}
            >
              <ResultCard key={info.id} parkInfo={info} modalInfo={modalInfo} />
            </Link>
          </GridItem>
        ))}
      </Grid>
      <ParkCard
        modalInfo={modalInfo}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      ></ParkCard>
    </div>
  );
};

export default ListView;
