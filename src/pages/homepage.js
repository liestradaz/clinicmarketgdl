import * as React from 'react'
import Hero from "../components/Hero";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";
import ContactFormBox from '../components/ContactFormBox';

export default function Homepage() {
  
  return (
    <>
      <Hero />
      <Features />
      <AboutUs />
      <Products />
      <ContactFormBox />
    </>
  );
}
