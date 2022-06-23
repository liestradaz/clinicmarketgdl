import * as React from "react"
import { Box, Heading, Text, Button, Link } from '@chakra-ui/react';
import { Link as GatsbyLink } from "gatsby";

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, blue.400, blue.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Página no encontrada
      </Text>
      <Text color={'gray.500'} mb={6}>
        Esta página no existe
      </Text>

      <Link
        as={GatsbyLink}
        to="/homepage"
        style={{ textDecoration: "none" }}
      >
        <Button
          colorScheme="blue"
          bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
          color="white"
          variant="solid">
          Inicio
        </Button>
      </Link>
    </Box>
  );
}