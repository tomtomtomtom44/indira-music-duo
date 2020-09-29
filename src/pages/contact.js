import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import SEO from "../components/seo"

export default function Contact() {
  return (
    <div>
      <SEO/>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </div>
  )
}