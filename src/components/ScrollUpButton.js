import React, { useState, useEffect } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StyledScrollUpButton } from "../styles/Buttons.styled"
import ScrollUpSvg from "../images/arrow-icon.svg"

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
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleScrollButton)
    } else return
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", toggleScrollButton)
      }
    }
  }, [])

  return (
    <StyledScrollUpButton
      isVisible={isVisible}
      as={AnchorLink}
      to={`/#header`}
      aria-label="Scroll up to page header"
    >
      <ScrollUpSvg aria-hidden="true" alt="Arrow up" />
    </StyledScrollUpButton>
  )
}

export default ScrollUpButton
