import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BackgroundSection from "../components/BackgroundSection"
import { Link } from "gatsby"
import { ColumnWrapper } from "../styles/Wrappers.styled"
import { Button } from "../styles/Buttons.styled"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <BackgroundSection />
    <ColumnWrapper id="404-wrapper" width="100%">
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <h1>404: Not Found</h1>
      <Button secondary as={Link} to={`/`}>
        Come back
      </Button>
    </ColumnWrapper>
  </Layout>
)

export default NotFoundPage
