import * as React from 'react'
import { Box, SimpleGrid, Icon } from "@chakra-ui/react";
import FeatureCard from "./FeatureCard";
import syringe from "../images/features/syringe.svg"
import star from "../images/features/star.svg"
import call from "../images/features/call.svg"
import delivery from "../images/features/delivery.svg"

export default function Features() {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={1} mt={5} mx={10}>
      <FeatureCard
          image={syringe}
          title={"Amplio surtido en insumos"}
          text={"Encuentra lo necesario para tu consulta médica."}
        />
        <FeatureCard
          image={star}
          title={"Insumos de calidad"}
          text={"Encuentra los mejores productos a los mejores precios."}
        />
        <FeatureCard
          image={call}
          title={"Atención personalizada"}
          text={"Atención de acuerdo a tus necesidades por parte de nuestros agentes de ventas."}
        />
        <FeatureCard
          image={delivery}
          title={"Servicio a domicilio"}
          text={"Haz tu pedido y recíbelo lo más rápido posible en la ZMG."}
        />
      </SimpleGrid>
    </>
  );
}
