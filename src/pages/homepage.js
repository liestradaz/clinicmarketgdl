import * as React from 'react'
import Hero from "../components/Hero";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";
import Layout from '../layouts';

export default function Homepage() {
  return (
    <>//
    <Layout>
      <Hero />
      <Features />
      <AboutUs />
      <Products />
    </Layout>
    </>
  );
}
