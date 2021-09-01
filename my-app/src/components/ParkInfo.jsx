import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Link,
  Stack,
  Box,
  HStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import { IoBookOutline } from "react-icons/io5";
import { WiDayCloudy } from "react-icons/wi";
import { AiOutlineHome, AiOutlineDollar } from "react-icons/ai";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./SliderArrows";

function ParkCard(props) {
  const { isOpen, onOpen, onClose } = props;

  const parkInfo = props.modalInfo;
  const { line1, city, stateCode, postalCode } = parkInfo.addresses[0];
  console.log(parkInfo);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  // operatingHours .standardHours

  return (
    <>
      <Modal
        scrollBehavior="inside"
        size="4xl"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{parkInfo.fullName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Slider {...settings}>
              {parkInfo.images.map((image) => (
                <Image
                  key={image.url}
                  boxSize="sm"
                  objectFit="cover"
                  src={image.url}
                  roundedTop="lg"
                />
              ))}
            </Slider>
            <Stack mt="10">
              <Box>
                <span>
                  <Icon
                    as={AiOutlineHome}
                    color="teal"
                    h={5}
                    w={5}
                    alignSelf={"center"}
                  />{" "}
                  {line1} ,{city}, {stateCode} {postalCode}
                </span>
              </Box>

              <Box>
                <span>
                  <Icon
                    color="teal"
                    pt=".5"
                    pl=".5"
                    as={IoBookOutline}
                    h={5}
                    w={5}
                    alignSelf={"center"}
                  />{" "}
                  {parkInfo.description}
                </span>
              </Box>
              <Box>
                <span>
                  <Icon
                    color="teal"
                    pt=".5"
                    as={WiDayCloudy}
                    h={6}
                    w={6}
                    alignSelf={"center"}
                  />{" "}
                  {parkInfo.weatherInfo}
                </span>
              </Box>
              <Box>
                <span>
                  <Icon
                    as={AiOutlineDollar}
                    color="teal"
                    h={5}
                    w={5}
                    alignSelf={"center"}
                  />{" "}
                  Entrance Fees{" "}
                  {parkInfo.entranceFees.map((fee) => (
                    <div key={parkInfo.id}>
                      {fee.cost == 0
                        ? `${fee.title}`
                        : `${fee.title}: $${fee.cost}`}
                    </div>
                  ))}
                </span>
              </Box>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Link href={parkInfo.url} mr="2">
              <Button variant="ghost">Visit Park Website</Button>
            </Link>

            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ParkCard;
