import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <h1>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Style System
      </Link>
    </h1>
  </header>
)

export default Header
