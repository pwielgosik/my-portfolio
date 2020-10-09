import React from "react"
import { HamburgerButton, InnerHamburger } from "../styles/Hamburger.styled"

const Hamburger = ({ toggleSideMenu, isOpen }) => {
  return (
    <HamburgerButton
      aria-label="Open/close navigation"
      onClick={toggleSideMenu}
    >
      <InnerHamburger aria-hidden="true" isOpen={isOpen} alt="Hamburger icon" />
    </HamburgerButton>
  )
}

export default Hamburger
