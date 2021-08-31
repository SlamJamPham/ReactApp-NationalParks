import ResultCard from "./ResultCard";
import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import "./Results.css";
import API from "../services/infoAPI";
import { Link } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import ParkCard from "./ParkInfo";
import { NextArrow, PrevArrow } from "./SliderArrows";

function Results(props) {
  const [parkInfo, setParkInfo] = useState([]);
  const [modalInfo, setModalInfo] = useState([]);
  const [fetching, setfetching] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);

  const stateCode = props.match.params.state;
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(props);

  useEffect(() => {
    async function fetchData() {
      const results = await API.get(stateCode);
      setParkInfo(results);
      setModalInfo(results[0]);
      // console.log(results);
      setfetching(false);
    }
    fetchData();
  }, []);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      {fetching ? (
        <div>loooking </div>
      ) : (
        <div>
          <Slider {...settings}>
            {parkInfo.map((info, idx) => (
              <div
                key={info.id}
                className={idx === imageIndex ? "slide activeSlide" : "slide"}
              >
                <Link
                  onClick={() => {
                    onOpen();
                    setModalInfo(info);
                  }}
                >
                  <ResultCard key={info.id} parkInfo={info} />
                </Link>
              </div>
            ))}
          </Slider>
          <ParkCard
            modalInfo={modalInfo}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          ></ParkCard>
        </div>
      )}
    </div>
  );
}

export default Results;
