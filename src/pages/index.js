import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import nazila_welcome from "./nazila_welcome.jpg"

export default function Home() {
  return (
    <div>
      <div className="liens">
      <Link to="/contact/">Contact</Link>
      <Link to="/about/">About</Link>
      <Link to="/about-css-modules/">About CSS modules</Link>
      </div>
      
      <Header headerText="Welcome to my world !" />
      <p>Hope you like it.</p>
    <img src={nazila_welcome} alt="" />
  </div>)
}
