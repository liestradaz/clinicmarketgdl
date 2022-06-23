import * as React from 'react'
import Products from '../components/Products';
import ContactFormBox from '../components/ContactFormBox';
import {
    Heading,
} from "@chakra-ui/react";

export default function Nosotros() {
    return (
        <>
            <Heading textAlign="center" mt={6}>Nuestros Productos</Heading>
            <Products />
            <ContactFormBox />

        </>
    );
}