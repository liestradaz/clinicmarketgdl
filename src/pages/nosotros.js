import * as React from 'react'
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";
import nosotros1 from "../images/nosotros/nosotros1.png"
import nosotros2 from "../images/nosotros/nosotros2.png"

const valores = {
  Integridad: "Fieles a nuestros principios e ideales",
  Pasión: "Dar lo mejor en cada una de nuestras actividades.",
  Calidad: "Excelencia en productos y servicio en cada momento.",
  Servicio: "Atención oportuna y personalizada.",
  Honestidad: "Actuar con transparencia y verdad.",
  Innovación: "Sin miedo al cambio, impulsores de la mejora constante."
}

export default function Nosotros() {
  return (
    <>
      <Heading textAlign="center" mt={6}>CLINIC MARKET GUADALAJARA</Heading>

      {/* Box one */}
      <Container maxW={'5xl'} p={10} centerContent boxShadow={'2xl'}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4} justify='center'>
            <Heading textAlign="center">¿Quiénes somos?</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Clinic Market Guadalajara es una empresa que nace en Guadalajara, Jalisco, México con la finalidad de proveer al personal de salud e instituciones de los insumos y equipos médicos necesarios para la realización de sus actividades.
            </Text>
            <Text color={'gray.500'} fontSize={'lg'}>
              Nos apasiona servir, proveer de soluciones en equipamiento e insumos médicos a cada uno de nuestros clientes en la forma y tiempo que lo necesita. Por esta razón contamos con un amplio surtido de insumos en las categorías de instrumental, vendas, gasas y algodón; ropa medica, equipamiento de clínicas y hospitales, ginecología; así como de cuidado general de la salud.
            </Text>
          </Stack>
          <Flex >
            <Box as='center' boxSize={"xl"}>
              <Image
                h="100%"
                rounded={'md'}
                alt={'feature image'}
                src={nosotros1}
                objectFit={'cover'}
              />
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>

      {/* Box two */}
      <Container maxW={'5xl'} p={10} centerContent boxShadow={'2xl'} >
        <SimpleGrid columns={{ base: 1, md: 2 }}
          spacing={10}
          backgroundImage={nosotros2}
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
          borderRadius={"md"}>
          <Stack spacing={4} justify='center' >

          </Stack>
          <Flex>
            <Flex as='flex' boxSize={"xl"} flexDirection={"column"} justify={"flex-end"}>
              <Box bg={"white"} p={4} borderLeftRadius="lg" borderTopRadius="lg">
                <Heading textAlign={"center"} size='lg' my={2}>Misión</Heading>
                <Text color={'gray.500'} fontSize={'lg'}>
                  Proveer al personal de salud de los insumos médicos de mayor calidad e innovación, al mejor precio posible y de la forma más rápida, sin importar el rango de especialización de estos.            </Text>
                <Heading textAlign={"center"} size='lg' my={2}>Visión</Heading>
                <Text color={'gray.500'} fontSize={'lg'}>
                  Ofrecer la mejor experiencia de compra a cada uno de nuestros clientes, mediante el acceso al surtido más amplio de insumos nacionales y de importación; a través de un servicio personalizado a sus necesidades.            </Text>
              </Box>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Container>

      {/* Box three */}
      <Container maxW={'5xl'} p={10} centerContent boxShadow={'2xl'}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4} justify='center'>
            <Heading textAlign="center">Nuestros valores</Heading>
            <UnorderedList>
              {Object.keys(valores).map((val, idx) => (
                <ListItem>
                  <Flex>
                  <Text as='u' color={'gray.500'} fontSize={'lg'}>
                  {val}
                  </Text>
                  <Text color={'gray.500'} fontSize={'lg'}>
                  {`: ${valores[val]}`}
                  </Text>
                  </Flex>
                </ListItem>
              ))}

            </UnorderedList>
          </Stack>
          <Flex >
            <Box as='center' boxSize={"xl"}>
              <Image
                h="100%"
                rounded={'md'}
                alt={'feature image'}
                src={nosotros1}
                objectFit={'cover'}
              />
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
}