import React from "react"
import { ColumnWrapper } from "../styles/Wrappers.styled"
import { StyledSection } from "../styles/Layout.styled"

const Section = ({ id, wBackground, title, outlineTitle, children, style }) => {
  return (
    <StyledSection id={id} wBackground={wBackground}>
      <ColumnWrapper
        width="650px"
        toColumnWidth="650px"
        minHeight="inherit"
        margin="0 auto 0"
        padding="2rem"
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
