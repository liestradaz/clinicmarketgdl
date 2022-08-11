import * as React from "react";
import { Box, Text, Icon, Link, HStack } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

export default function StickyBar() {
  return (
    <>
      <Box
      as="center"
        position="sticky"
        bg="#EC6D0D" color="white"
        textAlign={"center"}
        p={2}
        style={{ top: "0.1px", zIndex: "3" }}
        /* bgGradient="linear(to-l, blue.300, cyan.500)" */
      >
        <HStack align={"center"} justify={"center"}>
          <Text fontWeight={"500"}>
            ¡Servicio a domicilio sin costo en el Área Metropolitana de
            Guadalajara!
          </Text>
          <HStack alignItems="flex-start">
            <Icon as={BsWhatsapp} mt={1} />
            <Link
              href="https://api.whatsapp.com/send?phone=523322579557"
              isExternal
            >
              <Text as={"i"} fontWeight={"500"}>33 2257 9557</Text>
            </Link>
          </HStack>
        </HStack>
      </Box>
    </>
  );
}
