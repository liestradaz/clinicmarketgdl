import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <SEO title="Clinic Market Guadalajara" pathname="/" />
      <main>{children}</main>
      <Footer />
    </>
  )
}