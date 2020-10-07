import React from "react"
import { ColumnWrapper, RowWrapper } from "../styles/Wrappers.styled"
import { Button } from "../styles/Buttons.styled"
import styled from "styled-components"
import ScrollDownButton from "./ScrollDownButton"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StyledMobileSocials } from "../styles/Layout.styled"
import GithubIcon from "../images/github.svg"
import LinkedInIcon from "../images/linkedin.svg"

const StyledIntroductionContainer = styled(ColumnWrapper)`
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    padding: 2rem;
    height: 100vh;
  }
  div {
    z-index: 0;
  }
  svg {
    z-index: 0;
  }
`

const StyledTitleContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  line-height: 40px;
  font-weight: normal;
  font-family: "Futura T OT Medium";
  color: ${({ theme }) => theme.colors.grey};
  font-size: 3.2rem;

  z-index: 0;

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
    @media (max-width: ${({ theme }) => theme.media.phone}) {
      margin: 0;
    }
    span {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 4.2rem;
    }
  }
`

const Introduction = () => {
  return (
    <section id="introduction-section">
      <StyledIntroductionContainer
        width="650px"
        minHeight="calc(100vh - 200px)"
        margin="0 auto 0"
        top
        left
      >
        <StyledTitleContainer>
          <h2>Introduction</h2>
          <span>Hi,</span> my name is <hr />
          <span>Przemysław Wielgosik,</span> <hr />
          <span>
            I'm a <span>front end developer.</span>
          </span>
        </StyledTitleContainer>

        <RowWrapper
          width="100%"
          left
          style={{ justifyContent: "space-evenly", marginTop: "12%" }}
        >
          <Button primary minWidth="250px">
            download my resume
          </Button>
          <Button
            as={AnchorLink}
            minWidth="250px"
            to="/#projects-section"
            secondary
          >
            look at my projects
          </Button>
        </RowWrapper>
        <StyledMobileSocials id="nav-socials-list">
          <li id="mobile-nav-socials-list-item">
            <a
              id="mobile-nav-socials-link"
              target="_blank"
              href="https://www.linkedin.com/in/przemys%C5%82aw-wielgosik-827653106"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li id="mobile-nav-socials-list-item">
            <a
              id="mobile-nav-socials-link"
              target="_blank"
              href="https://github.com/S50B32"
            >
              <GithubIcon />
            </a>
          </li>
        </StyledMobileSocials>
        <ScrollDownButton to="/#technologies-section" />
      </StyledIntroductionContainer>
    </section>
  )
}

export default Introduction
