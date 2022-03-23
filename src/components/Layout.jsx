import React from "react"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Mohamed, A Frontend Developer</title>
        <meta
          name="description"
          content="A frontend developer skilled in both development and designing aspects"
        />
        <meta property="og:title" content="Mohamed, A Frontend Developer" />
        <meta property="og:description" content="A frontend developer skilled in both development and designing aspects" />
        <meta property="og:image" content="/og.jpg" />
      </Helmet>
      <div className="layout">
        <div className="content">{children}</div>
      </div>
    </>
  )
}

export default Layout
