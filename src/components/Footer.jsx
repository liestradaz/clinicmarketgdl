import * as React from "react";
import {
  Wrap,
  WrapItem,
  Box,
  Flex,
  Text,
  useBreakpointValue,
  Image,
  Center,
  Stack,
  HStack,
  Container,
  SimpleGrid,
  Link,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsPerson, BsTelephone } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <Box as="Center" bg={"#303036"}>
        <Container maxW={"6xl"} py={10} color={"white"} centerContent>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
            <Stack align={"center"}>
              <Link href="mailto:clinicmarketgdl@hotmail.com" isExternal>
                <Text>clinicmarketgdl@hotmail.com</Text>
              </Link>
              <Text>33 2257 9557</Text>
            </Stack>
            {/* <Divider orientation='vertical' /> */}
            <Stack align={"center"}>
              <Text noOfLines={3}>
                Av. Circunvalación Dr. Atl #70 Independencia Oriente 44340
                Guadalajara, Jal
              </Text>
            </Stack>
            <Stack align={"center"}>
              <Text>Clinic Market Guadalajara ®</Text>
              <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={0}
                      px={5}
                      alignItems="flex-start"
                    >
              <Link
                href="https://www.facebook.com/Clinic-Market-Guadalajara-104759491745597/"
                isExternal
              >
                <IconButton
                  aria-label="facebook"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: "#636369" }}
                  icon={<BsFacebook size="28px" />}
                />
              </Link>
              <Link
                href="https://www.instagram.com/clinicmarketgdl/"
                isExternal
              >
                <IconButton
                  aria-label="github"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: "#636369" }}
                  icon={<BsInstagram size="28px" />}
                />
              </Link>
              </HStack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
