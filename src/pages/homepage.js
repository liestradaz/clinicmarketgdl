import * as React from 'react'
import Hero from "../components/Hero";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";
import ContactForm from '../components/ContactForm';
import { Box, Container } from "@chakra-ui/react";
import bgnd from "../images/bgForm.png";
import productsList from "../data/products.json";
import { graphql } from 'gatsby';

export default function Homepage(props) {
  console.log("props",props)
  
  return (
    <>
      {props.data && <h1>{props.data}</h1>}
      <Hero />
      <Features />
      <AboutUs />
      <Products />
      <ContactForm />
      <ComponentName />
      
    </>
  );
}

const ComponentName = ({ data }) =>  {
  console.log("component", data)
return (
  <>
<pre>{JSON.stringify(data, null, 4)}</pre>
  </>
)}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
