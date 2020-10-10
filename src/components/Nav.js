import React, { useState, useEffect } from "react"
import DesktopMenu from "./DesktopMenu"
import Hamburger from "./Hamburger"
import MobileSideMenu from "./MobileSideMenu"
import theme from "../styles/theme"
import { ColumnWrapper } from "../styles/Wrappers.styled"
import useWindowWidth from "../hooks/useWindowWidth"

const breakpointWidth = parseInt(theme.media.phone)

const Nav = () => {
  const windowWidth = useWindowWidth()
  const [isDesktopMenuRendered, setIsDesktopMenuRendered] = useState(null)
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen)
  }

  useEffect(() => {
    if (windowWidth <= breakpointWidth) {
      return setIsDesktopMenuRendered(false)
    } else {
      return setIsDesktopMenuRendered(true)
    }
  }, [])

  return (
    <ColumnWrapper as="nav" width="650px" margin="0 auto 0" top>
      <h2>Navigation</h2>
      {isDesktopMenuRendered ? (
        <>
          <DesktopMenu />
          {console.log("Desktop nav mounted")}
        </>
      ) : (
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
      )}
    </ColumnWrapper>
  )
}

export default Nav
