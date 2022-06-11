import * as React from 'react'
import { useState, useEffect } from "react";
import {
  Wrap,
  WrapItem,
  Box,
  Flex,
  Text,
  useBreakpointValue,
  Image,
  Center,
  VStack,
  Container
} from "@chakra-ui/react";
import productsList from "../products.json";

export default function Products() {
  const [productHeader, setProductHeader] = useState([]);

  useEffect(() => {
    setProductHeader(productsList);
  }, []);

  return (
    <>
    <Container maxW='7xl'>
      <Wrap spacing="50px" justify="center" py={10}>
        {productHeader &&
          productHeader.map((elem, idx) => (
            <WrapItem key={idx}>
              <Center rounded={"lg"} shadow="lg" _hover={{shadow:"dark-lg"}}>
                <Box w="297px" h="388px" >
                  <Box
                    as="Center"
                    pt={"4"}
                  >
                    <Image
                      w="217px"
                      h="308px"
                      objectFit="cover"
                      src={elem.imageUrl}
                      alt="ProductImage"
                    />
                  </Box>
                  <VStack pt={1} align={"center"}>
                    <Text fontSize={"lg"} fontWeight={700} color="black" textAlign={"center"}>
                      {elem.header}
                    </Text>
                  </VStack>
                </Box>
              </Center>
            </WrapItem>
          ))}
      </Wrap>
      </Container>
    </>
  );
}
