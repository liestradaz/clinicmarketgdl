import * as React from 'react'
import { useState, useEffect } from "react";
import {
  Wrap,
  WrapItem,
  Box,
  Link,
  Text,
  Image,
  Center,
  VStack,
  Container
} from "@chakra-ui/react";
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby';
import productsList from "../data/products.json";

export default function Products(props) {
  const [productHeader, setProductHeader] = useState([]);
  /* console.log("Data:", props) */

  useEffect(() => {
    setProductHeader(productsList);
  }, []);

  const data = useStaticQuery(graphql`
    {
      allProductsJson {
        nodes {
          header
          imageUrl
          inventario
          productPath: gatsbyPath(filePath: "/productos/{ProductsJson.header}")
        }
      }
    }
  `)

  return (
    <>
    <Container maxW='7xl'>
      <Wrap spacing="50px" justify="Center" py={10}>
        {productHeader &&
          data.allProductsJson.nodes.map((elem, idx) => (
            <WrapItem key={idx}>
              <Link as={GatsbyLink} to={elem.productPath} style={{textDecoration: "none"}}>
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
              </Link>
            </WrapItem>
          ))}
      </Wrap>
      </Container>
    </>
  );
}
