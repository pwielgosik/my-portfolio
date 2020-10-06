import React from "react"
import { Link } from "gatsby"
import {
  MobileMenuWrapper,
  MobileSideMenuButton,
} from "./MobileSideMenu.styled"

const MobileSideMenu = ({ isOpen }) => {
  return (
    <MobileMenuWrapper id="mobile-menu-container" isOpen={isOpen}>
      <ul id="nav-mobile">
        <li id="nav-item">
          <MobileSideMenuButton as={Link} to="/">
            about me
          </MobileSideMenuButton>
        </li>
        <li id="nav-item">
          <MobileSideMenuButton as={Link} to="/">
            resume
          </MobileSideMenuButton>
        </li>
        <li id="nav-item">
          <MobileSideMenuButton as={Link} to="/">
            stack
          </MobileSideMenuButton>
        </li>
        <li id="nav-item">
          <MobileSideMenuButton as={Link} to="/">
            projects
          </MobileSideMenuButton>
        </li>
      </ul>
    </MobileMenuWrapper>
  )
}

export default MobileSideMenu
