import React from "react"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Mohamed Afify Frontend Developer</title>
        <meta
          name="description"
          content="A personal website and portfolio for a frontend developer skilled in both development and designing aspects"
        />
      </Helmet>
      <div className="layout">
        <div className="content">{children}</div>
      </div>
    </>
  )
}

export default Layout
