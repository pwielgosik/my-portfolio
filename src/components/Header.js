import React from "react"
import PropTypes from "prop-types"
import Nav from "./Nav"
import { StyledHeader } from "../styles/Layout.styled"

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader id="header">
      <h1>{siteTitle}</h1>
      <Nav />
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
