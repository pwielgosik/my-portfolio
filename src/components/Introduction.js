import React from "react"
import { RowWrapper } from "../styles/Wrappers.styled"
import { Button } from "../styles/Buttons.styled"
import ScrollDownButton from "./ScrollDownButton"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StyledMobileSocials } from "../styles/Layout.styled"
import GithubIcon from "../images/github.svg"
import LinkedInIcon from "../images/linkedin.svg"
import {
  StyledIntroductionContainer,
  StyledTitleContainer,
} from "../styles/Introduction.styled"

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
