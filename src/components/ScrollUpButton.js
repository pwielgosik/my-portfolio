import React, { useState, useEffect } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import ScrollUpSvg from "../images/scroll-up-icon.svg"

import styled from "styled-components"

const StyledScrollUpButton = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  /* border: 3px solid #debf84; */
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  transition: opacity 0.2s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
  background-color: white;
  transform: rotate(180deg);

  svg {
    height: 80%;
    width: 90%;
    display: block;
  }
`

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(null)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY
      if (scrollY >= 300) {
        return setIsVisible(true)
      } else {
        return setIsVisible(false)
      }
    })
    return () => window.removeEventListener("scroll")
  }, [])

  return (
    <StyledScrollUpButton isVisible={isVisible} as={AnchorLink} to="/#header">
      <ScrollUpSvg />
    </StyledScrollUpButton>
  )
}

export default ScrollUpButton
