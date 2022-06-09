import * as React from 'react'
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Link,
  Button
} from "@chakra-ui/react";
import aboutUsImg from "../images/aboutUs.png";

export default function AboutUs() {
  return (
    <Container maxW={"4xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>¿Quiénes somos?</Heading>
          <Text color={"gray.500"} fontSize={"xl"}>
            <strong>Clinic Market Guadalajara</strong> es una empresa enfocada en la venta de
            insumos médicos al personal de la salud, en el sector particular e
            instituciones, dentro de la Zona Metropolitana de Guadalajara.
          </Text>
          <Link style={{textDecoration: "none"}}><Button colorScheme='blue' >Leer más</Button></Link>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={aboutUsImg}
            objectFit={"cover"}
          />
        </Flex>
        
      </SimpleGrid>
    </Container>
  );
}
