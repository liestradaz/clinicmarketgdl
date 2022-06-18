import * as React from 'react'
import Products from '../components/Products';
import ContactForm from '../components/ContactForm';
import {
    Heading,
} from "@chakra-ui/react";

export default function Nosotros() {
    return (
        <>
            <Heading textAlign="center" mt={6}>Nuestros Productos</Heading>
            <Products />
            <ContactForm />

        </>
    );
}