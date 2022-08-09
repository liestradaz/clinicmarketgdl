import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import StickyBar from "../components/StickyBar"

export default function Layout({ children }) {
  return (
    <>
      <StickyBar />
      <Navbar />
      <SEO title="Clinic Market Guadalajara" pathname="/" />
      <main>{children}</main>
      <Footer />
    </>
  )
}