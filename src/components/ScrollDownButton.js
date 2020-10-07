import React from "react"
import ScrollUpSvg from "../images/scroll-up-icon.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"

const StyledScrollDownButton = styled.button`
  /* border: 3px solid #debf84; */
  margin: auto;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 80px;
  a {
    display: block;
    width: 100% !important;
  }
  /* background-color: rgba(0, 0, 0, 0.05); */
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    height: 36px;
    width: 60px;
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
