import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"


export default function About() {
  return (
    <Layout>
      <Header headerText="About Gatsby" />
      <p>Such wow. Very React.</p>
    </Layout>
  )
}