import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Introduction from "../components/Introduction"
import StackSection from "../components/StackSection"
import ProjectsSection from "../components/ProjectsSection"
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
