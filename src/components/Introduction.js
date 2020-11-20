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
          id="intro-link-resume"
        >
          <Button
            as="a"
            id="introduction-button-link_resume"
            href="https://drive.google.com/file/d/1WV9IYX6JI5ZZJEDo915S_pdQcN0JnmF1/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            primary
            minWidth="250px"
          >
            read my resume
          </Button>
          <Button
            as={AnchorLink}
            minWidth="250px"
            to={`/#projects-section`}
            secondary
            id="intro-link-projects"
          >
            look at my projects
          </Button>
        </RowWrapper>
        <StyledMobileSocials id="nav-socials-list">
          <li id="mobile-nav-socials-list-item">
            <a
              id="intro-link-linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/pwielgosik"
              aria-label="Proceed to my LinkedIn profile"
            >
              <LinkedInIcon aria-hidden="true" alt="LinkedIn logo icon" />
            </a>
          </li>
          <li id="mobile-nav-socials-list-item">
            <a
              id="intro-link-github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/pwielgosik"
              aria-label="Proceed to my GitHub profile"
            >
              <GithubIcon aria-hidden="true" alt="GitHub logo icon" />
            </a>
          </li>
        </StyledMobileSocials>
        <ScrollDownButton
          to={`/#technologies-section`}
          ariaLabel="Scroll down to technologies section"
        />
      </StyledIntroductionContainer>
    </section>
  )
}

export default Introduction
