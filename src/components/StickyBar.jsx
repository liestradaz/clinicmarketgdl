import * as React from "react";
import {
  Box,
  Text,
  Icon,
  Link,
  HStack,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

export default function StickyBar() {
  return (
    <>
      <Box
        as="center"
        position="sticky"
        bg="#EC6D0D"
        color="white"
        textAlign={"center"}
        p={2}
        style={{ top: "0.1px", zIndex: "3" }}
        /* bgGradient="linear(to-l, blue.300, cyan.500)" */
      >
        <Stack
          align={"center"}
          spacing={2}
          justify={"center"}
          direction={useBreakpointValue(
            { base: "column", sm: "column", md: "row", lg:"row", xl:"row", '2xl':"row" },
            { ssr: false }
          )}
        >
          <Text fontWeight={"500"}>
            ¡Servicio a domicilio sin costo en el Área Metropolitana de
            Guadalajara!
          </Text>
          <HStack alignItems="Stack-start">
            <Icon as={BsWhatsapp} mt={1} />
            <Link
              href="https://api.whatsapp.com/send?phone=523322579557"
              isExternal
            >
              <Text as={"i"} fontWeight={"500"}>
                33 2257 9557
              </Text>
            </Link>
          </HStack>
        </Stack>
      </Box>
    </>
  );
}
