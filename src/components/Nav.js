import React, { useState, useEffect } from "react"
import DesktopMenu from "./DesktopMenu"
import Hamburger from "./Hamburger"
import MobileSideMenu from "./MobileSideMenu"
import theme from "../styles/theme"
import { ColumnWrapper } from "../styles/Wrappers.styled"
import useWindowWidth from "../hooks/useWindowWidth"

const breakpointWidth = parseInt(theme.media.phone)

const Nav = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const windowWidth = useWindowWidth()

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen)
  }

  return (
    <ColumnWrapper as="nav" width="650px" margin="0 auto 0" top>
      <h2>Navigation</h2>
      {windowWidth <= breakpointWidth ? (
        <>
          <Hamburger
            id="hamburger-button"
            toggleSideMenu={toggleSideMenu}
            isOpen={isSideMenuOpen}
          />
          <MobileSideMenu
            toggleSideMenu={toggleSideMenu}
            isOpen={isSideMenuOpen}
          />
          {console.log("Mobile nav mounted")}
        </>
      ) : (
        <>
          <DesktopMenu />
          {console.log("Desktop nav mounted")}
        </>
      )}
    </ColumnWrapper>
  )
}

export default Nav
