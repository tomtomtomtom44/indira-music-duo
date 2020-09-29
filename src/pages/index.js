import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'
import Header from "../components/header"
import nazila_welcome from "./nazila_welcome_resized.jpg"
import config from "../utils/config"
import SEO from "../components/seo"

export default function Home() {
  return (
    <div>
      <Helmet title={config.siteTitle} />
      <SEO />
      <section className="lead">
        <Link to="/contact/">Contact</Link>
        <Header headerText="Welcome to my world !" />
        <p>Hope you like it.</p>
        <div className="image">
          <img src={nazila_welcome} alt="Nazila" />
        </div>
      </section>
    </div>
  )
}
