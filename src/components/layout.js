import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from "../styles/GlobalStyle.styled"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import Header from "./Header"
import Footer from "./Footer"
import ScrollUpButton from "./ScrollUpButton"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }} */}
      <main>{children}</main>
      {/* <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          
        </footer> */}
      {/* </div> */}
      <ScrollUpButton />
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
