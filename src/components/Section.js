import React from "react"
import { ColumnWrapper } from "../styles/Wrappers.styled"

import styled from "styled-components"

const StyledSection = styled.section`
  width: 100vw;
  background: ${({ wBackground }) =>
    wBackground ? "linear-gradient(to right, #130a2b, #0b7869)" : "none"};
  padding: 1rem 0 1rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    padding: 2rem;
  }

  h2 {
    display: none;
  }

  span:nth-of-type(1) {
    color: ${({ wBackground, theme }) =>
      wBackground ? theme.colors.secondary : theme.colors.primary};
    font-size: 2.8rem;
    align-self: flex-start;

    margin-bottom: 1rem;
  }
  p {
    color: ${({ wBackground, theme }) =>
      wBackground ? "white" : theme.colors.grey};
    font-size: 14px;
    letter-spacing: 0.5px;
  }
`

const Section = ({ id, wBackground, title, outlineTitle, children }) => {
  return (
    <StyledSection id={id} wBackground={wBackground}>
      <ColumnWrapper width="650px" toColumnWidth="650px" minHeight="100px">
        <h2>{outlineTitle}</h2>
        <span>{title}</span>
        {children}
      </ColumnWrapper>
    </StyledSection>
  )
}

export default Section
