import * as React from "react";
import { useState } from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  IconButton,
  Button,
  Stack,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link
} from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsPerson, BsTelephone } from "react-icons/bs";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import bgnd from "../images/bgForm.png";

export default function ContactForm(props) {
const [name, setName] = useState("")
const [phone, setPhone] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")

const nameInputHandler = event => setName(event.target.value)
const phoneInputHandler = event => setPhone(event.target.value)
const emailInputHandler = event => setEmail(event.target.value)
const messageInputHandler = event => setMessage(event.target.value)

const submitHandler = event =>{
  event.preventDefault();
  console.log(name, phone, email, message)
}

  return (
    <>
      <Container maxW="full" mt={5} centerContent overflow="hidden">
        <Flex>
          <Box
            /* bg="#3A6DCC" */
            backgroundImage={bgnd}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                  <Container maxW='xs' bg="#3A6DCC" opacity={"0.9"} borderRadius="lg">
                    <Heading>Contacto</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white.500">
                      Llena el formulario con tu mensaje
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                          <Icon as={MdPhone} /> 33 2257 9557
                        </Text>
                        <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                          <Icon as={MdEmail} /> clinicmarketgdl@hotmail.com
                        </Text>
                        <Text mt={{ sm: 3, md: 3, lg: 5 }} noOfLines={3}>
                          <Icon as={MdLocationOn} />
                          Av. Circunvalación Dr. Atl #70 Independencia Oriente
                          44340 Guadalajara, Jal
                        </Text>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <Link href='https://www.facebook.com/Clinic-Market-Guadalajara-104759491745597/' isExternal>
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsFacebook size="28px" />}
                      />
                      </Link>
                      <Link href='https://www.instagram.com/clinicmarketgdl/' isExternal>
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsInstagram size="28px" />}
                      />
                      </Link>
                    </HStack>
                    </Container>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={"25px"}>
                        <form action="" onSubmit={submitHandler}>
                          <FormControl isRequired>
                            <FormLabel htmlFor="name">Nombre</FormLabel>
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents="none"
                                children={<BsPerson color="gray.800" />}
                              />
                              <Input id="name" type="text" value={name} onChange={nameInputHandler} />
                            </InputGroup>
                          </FormControl>

                          <FormControl isRequired>
                            <FormLabel htmlFor="phone">Teléfono</FormLabel>
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents="none"
                                children={<BsTelephone color="gray.800" />}
                              />
                              <Input id="phone" type="tel" value={phone} onChange={phoneInputHandler} />
                            </InputGroup>
                          </FormControl>

                          <FormControl isRequired>
                            <FormLabel htmlFor="email">
                              Correo electrónico
                            </FormLabel>
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents="none"
                                children={<MdOutlineEmail color="gray.800" />}
                              />
                              <Input id="email" type="email" value={email} onChange={emailInputHandler} />
                            </InputGroup>
                          </FormControl>

                          <FormControl isRequired>
                            <FormLabel htmlFor="message">Mensaje</FormLabel>
                            <Textarea size="md" value={message} onChange={messageInputHandler} />
                          </FormControl>

                          <Button
                            type="submit"
                            colorScheme="blue"
                            rounded={"full"}
                          >
                            Enviar Mensaje
                          </Button>
                        </form>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
