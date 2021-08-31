import {
  Flex,
  Circle,
  Box,
  Image,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

function ReviewCard(props) {
  const parkInfo = props.parkInfo;

  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("gray.200", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        pb="2"
      >
        <Image
          boxSize="sm"
          objectFit="cover"
          src={parkInfo.images[0].url}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />
        <VStack>
          <Flex justifyContent="space-between" alignContent="center" mt="2">
            <Box fontSize="sm" color={useColorModeValue("gray.800", "white")}>
              {parkInfo.addresses[0].city}, {parkInfo.addresses[0].stateCode}
            </Box>
          </Flex>
          <Box>
            <Flex mt="0" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                // isTruncated
              >
                {parkInfo.fullName}
              </Box>
            </Flex>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
}

export default ReviewCard;
