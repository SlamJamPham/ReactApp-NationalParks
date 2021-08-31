import ResultCard from "./ResultCard";
import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import "./Results.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import API from "../services/infoAPI";
import { withRouter } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import ParkCard from "./ParkInfo";

function Results(props) {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const [parkInfo, setParkInfo] = useState([]);
  const [fetching, setfetching] = useState(true);

  const stateCode = props.match.params.state;
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(props);

  useEffect(() => {
    async function fetchData() {
      const results = await API.get(stateCode);
      setParkInfo(results);
      console.log(results);
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
        <Slider {...settings}>
          {parkInfo.map((info, idx) => (
            <div
              key={info.id}
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
            >
              <Link onClick={onOpen}>
                <ResultCard key={info.id} parkInfo={info} />
              </Link>
            </div>
          ))}
        </Slider>
      )}
      <ParkCard isOpen={isOpen} onOpen={onOpen} onClose={onClose}></ParkCard>
    </div>
  );
}

export default Results;
