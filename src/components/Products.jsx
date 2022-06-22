import * as React from "react";
import { useState, useEffect } from "react";
import {
  Wrap,
  WrapItem,
  Box,
  Link,
  Text,
  Center,
  VStack,
  Container,
} from "@chakra-ui/react";
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";
import productsList from "../data/products.json";
import { GatsbyImage} from "gatsby-plugin-image";

export default function Products(props) {
  const [productHeader, setProductHeader] = useState([]);
  /* console.log("Data:", props) */

  useEffect(() => {
    setProductHeader(productsList);
  }, []);

  //image path relative to json file, so plugin can create node in GraphQl
  const data = useStaticQuery(graphql`
    {
      allProductsJson {
        nodes {
          header
          imageUrl {
            childImageSharp {
              gatsbyImageData(
                width: 217
                height: 308
                placeholder: BLURRED
                )
            }
          }
          inventario
          productPath: gatsbyPath(filePath: "/productos/{ProductsJson.header}")
        }
      }
    }
  `);

  return (
    <>
      <Container maxW="7xl">
        <Wrap spacing="50px" justify="Center" py={10}>
          {productHeader &&
            data.allProductsJson.nodes.map((elem, idx) => (
              <WrapItem key={idx}>
                <Link
                  as={GatsbyLink}
                  to={elem.productPath}
                  style={{ textDecoration: "none" }}
                >
                  <Center
                    rounded={"lg"}
                    shadow="lg"
                    _hover={{ shadow: "dark-lg" }}
                  >
                    <Box w="297px" h="388px">
                      <Box as="Center" pt={"4"}>
                        <GatsbyImage
                          image={elem.imageUrl.childImageSharp.gatsbyImageData}
                          alt={elem.header}
                        />
                      </Box>
                      <VStack pt={1} align={"center"}>
                        <Text
                          fontSize={"lg"}
                          fontWeight={700}
                          color="black"
                          textAlign={"center"}
                        >
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
