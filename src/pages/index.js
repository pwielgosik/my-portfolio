import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"
import Introduction from "../components/Introduction"
import StackSection from "../components/StackSection"
import ProjectsSection from "../components/ProjectsSection"
import AboutMeSection from "../components/AboutMeSection"
import ContactSection from "../components/ContactSection"
import BackgroundSection from "../components/BackgroundSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection />
    <Introduction />
    <StackSection />
    <ProjectsSection />
  </Layout>
)

export default IndexPage
