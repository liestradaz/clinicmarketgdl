import * as React from 'react'
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import bgnd from "../images/Doctor.png";
  import Features from "./Features";
  
  export default function Hero() {
    return (
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={bgnd}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Empresa mexicana especializada en la venta de insumos médicos a
              instituciones y particulares.
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Cotiza tus insumos
              </Button>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                Ver productos
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }
  