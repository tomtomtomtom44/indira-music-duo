import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import nazila_welcome from "./nazila_welcome.jpg"
import Layout from "../components/layout"


export default function Home() {
  return (
      <Layout>
        <Header headerText="Welcome to my world !" />
        <p>Hope you like it.</p>
        <img src={nazila_welcome} alt="" />
      </Layout>
  )
}
