import * as React from "react";
import ContactForm from "./ContactForm";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  IconButton,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Link,
} from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import bgnd from "../images/bgForm.png";

export default function ContactFormBox(props) {
  return (
    <>
      <Container maxW="full" mt={5} centerContent overflow="hidden">
        <Flex>
          <Box
            backgroundImage={bgnd}
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} align="center">
                <WrapItem>
                  <Box>
                    <Container
                      maxW="xs"
                      bg="#3A6DCC"
                      opacity={"0.9"}
                      borderRadius="lg"
                      p={8}
                      centerContent
                    >
                      <Heading>Contacto</Heading>
                      <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white.500">
                        Llena el formulario con tu mensaje o escríbenos via WhatsApp, dando click en el icono. ¡Nos pondremos en contacto!
                      </Text>
                      <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                        <VStack pl={0} spacing={3} alignItems="flex-start">
                          <HStack alignItems="flex-start">
                            <Icon as={MdPhone} mt={1} />
                            <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                              33 2257 9557
                            </Text>
                          </HStack>
                          <HStack alignItems="flex-start">
                            <Icon as={MdEmail} mt={1} />
                            <Link href="mailto:clinicmarketgdl@hotmail.com" isExternal>
                            <Text>
                              clinicmarketgdl@hotmail.com
                            </Text>
                            </Link>
                          </HStack>
                          <HStack alignItems="flex-start">
                            <Icon as={MdLocationOn} mt={1} />
                            <Text mt={{ sm: 3, md: 3, lg: 5 }} noOfLines={3}>
                              Av. Circunvalación Dr. Atl #70 Independencia
                              Oriente 44340 Guadalajara, Jal
                            </Text>
                          </HStack>
                        </VStack>
                      </Box>
                      <HStack
                        mt={{ lg: 10, md: 10 }}
                        spacing={5}
                        px={5}
                        alignItems="flex-start"
                      >
                        <Link
                          href="https://api.whatsapp.com/send?phone=523322579557"
                          isExternal
                        >
                          <IconButton
                            aria-label="whastapp"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: "#0D74FF" }}
                            icon={<BsWhatsapp size="28px" />}
                          />
                        </Link>
                        <Link
                          href="https://www.facebook.com/Clinic-Market-Guadalajara-104759491745597/"
                          isExternal
                        >
                          <IconButton
                            aria-label="facebook"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: "#0D74FF" }}
                            icon={<BsFacebook size="28px" />}
                          />
                        </Link>
                        <Link
                          href="https://www.instagram.com/clinicmarketgdl/"
                          isExternal
                        >
                          <IconButton
                            aria-label="instagram"
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
                    <ContactForm />
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
