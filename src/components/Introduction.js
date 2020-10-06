import React from "react"
import { ColumnWrapper, RowWrapper } from "../styles/Wrappers.styled"
import { Button } from "../styles/Buttons.styled"
import styled from "styled-components"
import ScrollDownButton from "./ScrollDownButton"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Section from "./Section"

const TitleContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  line-height: 40px;
  font-weight: normal;
  font-family: "Futura T OT Medium";
  color: ${({ theme }) => theme.colors.grey};
  font-size: 3.2rem;

  z-index: 0;

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    padding: 2rem;
    height: 100vh;
  }

  h2 {
    display: none;
  }

  hr {
    height: 0;
  }
  span:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.secondary};
  }
  span:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.light};
    font-size: 5rem;
  }
  span:nth-of-type(3) {
    margin: 60px;
    span {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 4.2rem;
    }
  }
`

const Introduction = () => {
  return (
    <section>
      <ColumnWrapper
        width="650px"
        minHeight="calc(100vh - 200px)"
        margin="0 auto 100px"
        top
        left
      >
        <TitleContainer>
          <h2>Introduction</h2>
          <span>Hi,</span> my name is <hr />
          <span>Przemysław Wielgosik,</span> <hr />
          <span>
            I'm a <span>front end developer.</span>
          </span>
        </TitleContainer>

        <RowWrapper
          width="100%"
          left
          style={{ justifyContent: "space-evenly", marginTop: 100 }}
        >
          <Button primary style={{ width: 250 }}>
            download my resume
          </Button>
          <Button
            as={AnchorLink}
            to="/#projects-section"
            secondary
            style={{ width: 250 }}
          >
            jump straight to my projects
          </Button>
        </RowWrapper>
        <ScrollDownButton to="/#technologies-section" />
      </ColumnWrapper>
    </section>
  )
}

export default Introduction
