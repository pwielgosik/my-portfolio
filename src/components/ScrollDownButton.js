import React from "react"
import ScrollUpSvg from "../images/scroll-up-icon.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StyledScrollDownButton } from "../styles/Buttons.styled"

const ScrollDownButton = ({ to }) => {
  return (
    <StyledScrollDownButton as={AnchorLink} to={to}>
      <ScrollUpSvg />
    </StyledScrollDownButton>
  )
}

export default ScrollDownButton
