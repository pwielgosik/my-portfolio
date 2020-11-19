import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import {
  StyledDesktopNav,
  StyledLinks,
  StyledSocials,
} from "../styles/Layout.styled"
import GithubIcon from "../images/github.svg"
import LinkedInIcon from "../images/linkedin.svg"

const Nav = () => {
  return (
    <StyledDesktopNav>
      <StyledLinks id="nav-links-list">
        {/* <li id="nav-link-about_me">
          <a to={`/`} id="nav-link-about_me">
            about me
          </a>
        </li> */}
        <li id="nav-links-list-item">
          <a
            href="https://drive.google.com/file/d/1ekqXZQnXTxXDY4UDA6wwIMNHzyay98NA/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            id="nav-link-resume"
          >
            resume
          </a>
        </li>
        <li id="nav-links-list-item">
          <AnchorLink to={`/#technologies-section`} id="nav-link-technologies">
            technologies
          </AnchorLink>
        </li>
        <li id="nav-links-list-item">
          <AnchorLink to={`/#projects-section`} id="nav-link-projects">
            projects
          </AnchorLink>
        </li>
      </StyledLinks>
      <StyledSocials id="nav-socials-list">
        <li id="nav-socials-list-item">
          <a
            id="nav-link-linkedin"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/pwielgosik"
            aria-label="Proceed to my LinkedIn profile"
          >
            <LinkedInIcon aria-hidden="true" alt="LinkedIn logo icon" />
          </a>
        </li>
        <li id="nav-socials-list-item">
          <a
            id="nav-link-github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/pwielgosik"
            aria-label="Proceed to my GitHub profile"
          >
            <GithubIcon aria-hidden="true" alt="GitHub logo icon" />
          </a>
        </li>
      </StyledSocials>
    </StyledDesktopNav>
  )
}

export default Nav
