import React, { useState } from "react"
import PropTypes from "prop-types"
import { StyledHeader } from "../styles/Layout.styled"
import { ColumnWrapper } from "../styles/Wrappers.styled"

import Nav from "./Nav"
import MobileSideMenu from "./MobileSideMenu"
import Hamburger from "./Hamburger"

const Header = ({ siteTitle }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen)
  }
  return (
    <StyledHeader id="header">
      <ColumnWrapper width="960px" margin="0 auto 0" top>
        <Hamburger
          id="hamburger-button"
          toggleSideMenu={toggleSideMenu}
          isOpen={isSideMenuOpen}
        />
        <MobileSideMenu
          toggleSideMenu={toggleSideMenu}
          isOpen={isSideMenuOpen}
        />
        <Nav />
        <h1>{siteTitle}</h1>
      </ColumnWrapper>
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
