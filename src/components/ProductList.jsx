import * as React from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  IconButton,
  Button,
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
  Link,
  Image,
} from "@chakra-ui/react";

export default function ProductList(props) {
  const { header, imageUrl, inventario } = props.props.productsJson;
  console.log(header, imageUrl, inventario);
  return (
    <>
      <Container
        maxW="full"
        mt={5}
        centerContent
        overflow="hidden"
        
      >
        <Flex>
          <Box
            /* backgroundImage={imageUrl}
            backgroundSize={"cover"}
            backgroundPosition={"center center"} */
            color="black"
            borderRadius="lg"
            m={{ sm: 4, md: 10, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 10 }}
            border={"1px"}
          >
            <Box p={4} border={"1px"}>
              <Wrap spacing={{ base: 2, sm: 1, md: 2, lg: 3 }} align="center">
                <WrapItem >
                  <Box w="xs">
                    <Image src={imageUrl} alt="producto" objectFit='cover'/>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      Lista de productos
                      {inventario.map(elem => {
                        return (
                            <>
                            <ul>
                                <li>{elem}</li>
                            </ul>
                            </>
                        )
                      })}
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
