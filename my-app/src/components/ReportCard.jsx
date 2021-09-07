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
  FormControl,
  FormLabel,
  Input,
  HStack,
  Box,
  Select,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";

function ReportCard(props) {
  const { isOpen, onOpen, onClose } = props;
  const [emailError, setEmailError] = useState("Invalid Email");

  const validateEmail = (email) => {
    setEmailError(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
        ? null
        : "Invalid Email"
    );
  };

  const handleSubmit = async (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
    props.onSubmit(values);
  };

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
          <ModalHeader>Report Missing Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{ email: "", field: "", parkName: "", desc: "" }}
              onSubmit={handleSubmit}
            >
              {(formikProps) => (
                <Form>
                  <FormControl isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      name="email"
                      onChange={(event) => {
                        formikProps.handleChange(event);
                        validateEmail(event.target.value);
                      }}
                      isInvalid={emailError != null}
                      errorBorderColor={
                        emailError === null ? "black" : "red.300"
                      }
                    />
                    <Text fontSize="sm" color="red" textAlign="left">
                      {emailError}
                    </Text>
                  </FormControl>
                  <HStack pt="3">
                    <Box w="50%">
                      <FormControl isRequired>
                        <FormLabel>Park Name</FormLabel>
                        <Input
                          name="parkName"
                          onChange={formikProps.handleChange}
                        />
                      </FormControl>
                    </Box>
                    <Box w="50%">
                      <FormControl>
                        <FormLabel>Field</FormLabel>
                        <Select
                          data-testid="selector"
                          name="field"
                          onChange={formikProps.handleChange}
                          placeholder="Select Field with Error"
                        >
                          <option>Address</option>
                          <option>Description</option>
                          <option>Weather</option>
                          <option>Entrance Fees</option>
                        </Select>
                      </FormControl>
                    </Box>
                  </HStack>
                  <Box pt="3">
                    <FormControl isRequired>
                      <FormLabel>Description</FormLabel>
                      <Textarea
                        name="desc"
                        onChange={formikProps.handleChange}
                      />
                    </FormControl>
                  </Box>
                  <HStack pt="3" float="right">
                    <Button
                      colorScheme="blue"
                      mr={3}
                      data-testid="submitButton"
                      type="submit"
                    >
                      Submit
                    </Button>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </HStack>
                </Form>
              )}
            </Formik>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ReportCard;
