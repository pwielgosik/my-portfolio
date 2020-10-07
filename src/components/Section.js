import React from "react"
import { ColumnWrapper } from "../styles/Wrappers.styled"

import styled from "styled-components"

const StyledSection = styled.section`
  width: 100vw;
  background: ${({ wBackground }) =>
    wBackground ? "linear-gradient(to right, #130a2b, #0b7869)" : "white"};
  padding: 1rem 0 1rem;
  position: relative;
  height: 100vh;
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    padding: 0 5rem 0;
  }

  h2 {
    display: none;
  }

  span:nth-of-type(1) {
    color: ${({ wBackground, theme }) =>
      wBackground ? theme.colors.secondary : theme.colors.primary};
    font-size: 2.8rem;
    align-self: flex-start;

    margin: 5rem 0 1rem;
  }
  p {
    color: ${({ wBackground, theme }) =>
      wBackground ? "white" : theme.colors.grey};
    font-size: 14px;
    letter-spacing: 0.5px;
  }
`

const Section = ({ id, wBackground, title, outlineTitle, children, style }) => {
  return (
    <StyledSection id={id} wBackground={wBackground}>
      <ColumnWrapper
        width="650px"
        toColumnWidth="650px"
        minHeight="100px"
        height="100%"
        margin="0 auto 0"
        style={style}
      >
        <h2>{outlineTitle}</h2>
        <span>{title}</span>
        {children}
      </ColumnWrapper>
    </StyledSection>
  )
}

export default Section
