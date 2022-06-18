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
  UnorderedList,
  ListItem
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
            color="black"
            borderRadius="lg"
            m={{ sm: 4, md: 10, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 10 }}
            boxShadow={'2xl'}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 2, sm: 1, md: 2, lg: 3 }} align="center" justify='center'>
                <WrapItem>
                  <Box w="xs" alignItems={"center"}  >
                    <Image src={imageUrl} alt="producto" objectFit='cover'/>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Heading textAlign="center" size='lg' noOfLines={2}>{header}</Heading>
                    <Box m={8} color="#0B0E3F">
                      {inventario.map(elem => {
                        return (
                            <>
                            <UnorderedList>
                                <ListItem>{elem}</ListItem>
                            </UnorderedList>
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
