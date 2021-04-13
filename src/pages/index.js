import React from "react"
import ProjectsList from "../components/ProjectList"
import "../styles/css/global.min.css"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import About from "../components/About"

import Layout from "../components/Layout"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Header />
      <About />
      <ProjectsList />
      <Skills />
      <Footer />
    </Layout>
  )
}

export default Home
