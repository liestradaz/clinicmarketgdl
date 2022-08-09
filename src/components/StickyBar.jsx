import * as React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function StickyBar() {
  return (
    <>
      <Box position="sticky" /* bg="blue.300" */ color="white" textAlign={"center"} p={2} style={{top:"0.1px", zIndex: "3"}} bgGradient='linear(to-l, blue.300, cyan.500)'>
        <Text fontWeight={"500"}>¡Servicio a domicilio sin costo en el Área Metropolitana de Guadalajara!</Text>
      </Box>
    </>
  );
}
