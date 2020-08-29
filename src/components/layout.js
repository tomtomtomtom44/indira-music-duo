import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div>
        <header style={{ marginBottom: `1.5rem` }}>
        <ul style={{ listStyle: `none`}} className="liens">
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="/about-css-modules/">About CSS modules</ListLink>
        </ul>
        </header>
      {children}
    </div>
  )
}