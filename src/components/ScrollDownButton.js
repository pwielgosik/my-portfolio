import React from "react"
import ScrollUpSvg from "../images/arrow-icon.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StyledScrollDownButton } from "../styles/Buttons.styled"

const ScrollDownButton = ({ to, ariaLabel }) => {
  return (
    <StyledScrollDownButton id="button-scroll_section" as={AnchorLink} to={to}>
      <ScrollUpSvg alt="Arrow down" aria-label={ariaLabel} />
    </StyledScrollDownButton>
  )
}

export default ScrollDownButton
