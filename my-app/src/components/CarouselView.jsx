import ResultCard from "./ResultCard";
import Slider from "react-slick";
import React, { useState } from "react";
import "./Results.css";
import { Link } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import ParkCard from "./ParkInfo";
import { NextArrow, PrevArrow } from "./SliderArrows";

const CaorouselView = (props) => {
  const parkInfo = props.parkInfo;
  const [imageIndex, setImageIndex] = useState(0);
  const [modalInfo, setModalInfo] = useState(props.modalInfo);
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(modalInfo);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow type="normal" />,
    prevArrow: <PrevArrow type="normal" />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
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
              <ResultCard key={info.id} parkInfo={info} modalInfo={modalInfo} />
            </Link>
          </div>
        ))}
      </Slider>
      <p>
        {imageIndex + 1} of {parkInfo.length}
      </p>
      <ParkCard
        modalInfo={modalInfo}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      ></ParkCard>
    </div>
  );
};

export default CaorouselView;
