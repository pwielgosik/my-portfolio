import React, { useState, useEffect } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StyledScrollUpButton } from "../styles/Buttons.styled"
import ScrollUpSvg from "../images/scroll-up-icon.svg"

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(null)

  const toggleScrollButton = () => {
    const scrollY = window.scrollY
    if (scrollY >= 300) {
      return setIsVisible(true)
    } else {
      return setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollButton)
    return () => window.removeEventListener("scroll", toggleScrollButton)
  }, [])

  return (
    <StyledScrollUpButton isVisible={isVisible} as={AnchorLink} to="/#header">
      <ScrollUpSvg />
    </StyledScrollUpButton>
  )
}

export default ScrollUpButton
