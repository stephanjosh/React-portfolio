import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  // return null;

  return (
  <HStack spacing ={4}>
    <Box key={title} maxW="sm" borderWidth="1px" borderRadius="1g" overflow="hidden">
    <Image src={imageSrc} alt=""/>
      <VStack align="start" p={4} spacing={2} bg="white">
        <Heading size='sm' color="black" noOfLines={1}>{title}</Heading>
        <Text fontSize='xs' color="gray.600" noOfLines={2}>{description}</Text>
        <Text color="blue.300">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
    </VStack>
    </Box>
  </HStack>
  )
};

export default Card;
