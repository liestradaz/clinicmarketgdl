import * as React from 'react'
import Hero from "../components/Hero";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";
import ContactForm from '../components/ContactForm';

export default function Homepage() {
  
  return (
    <>
      <Hero />
      <Features />
      <AboutUs />
      <Products />
      <ContactForm />
    </>
  );
}
