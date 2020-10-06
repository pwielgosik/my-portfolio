import React from "react"
import ScrollUpSvg from "../images/scroll-up-icon.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"

const StyledScrollDownButton = styled.div`
  /* border: 3px solid #debf84; */
  margin: 5rem auto 5rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;

  /* background-color: rgba(0, 0, 0, 0.05); */
  svg {
    height: 80%;
    width: 90%;
    display: block;
  }
`

const ScrollDownButton = ({ to }) => {
  return (
    <StyledScrollDownButton as={AnchorLink} to={to}>
      <ScrollUpSvg />
    </StyledScrollDownButton>
  )
}

export default ScrollDownButton
