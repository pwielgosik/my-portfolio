import React from "react"
import ScrollUpSvg from "../images/arrow-icon.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StyledScrollDownButton } from "../styles/Buttons.styled"

const ScrollDownButton = ({ to }) => {
  return (
    <StyledScrollDownButton
      as={AnchorLink}
      to={to}
      aria-label="Scroll to next page section"
    >
      <ScrollUpSvg aria-hidden="true" alt="Arrow down" />
    </StyledScrollDownButton>
  )
}

export default ScrollDownButton
