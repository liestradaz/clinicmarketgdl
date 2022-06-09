import * as React from 'react'
import { Box, SimpleGrid, Icon } from "@chakra-ui/react";
import FeatureCard from "./FeatureCard";
import syringe from "../images/features/syringe.svg"

export default function Features() {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} mt={5} mx={5}>
      <FeatureCard
          image={syringe}
          title={"Amplio surtido en insumos"}
          text={"Encuentra lo necesario para tu consulta médica."}
        />
        <FeatureCard
          image={syringe}
          title={"Insumos de calidad"}
          text={"Encuentra los mejores productos a los mejores precios."}
        />
        <FeatureCard
          image={syringe}
          title={"Atención personalizada"}
          text={"Atención de acuerdo a tus necesidades por parte de nuestros agentes de ventas."}
        />
        <FeatureCard
          image={syringe}
          title={"Servicio a domicilio"}
          text={"Haz tu pedido y recíbelo lo más rápido posible en la ZMG."}
        />
      </SimpleGrid>
    </>
  );
}
