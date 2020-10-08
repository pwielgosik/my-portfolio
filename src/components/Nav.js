import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StyledNav, StyledLinks, StyledSocials } from "../styles/Layout.styled"
import GithubIcon from "../images/github.svg"
import LinkedInIcon from "../images/linkedin.svg"

const Nav = () => {
  return (
    <StyledNav>
      <StyledLinks id="nav-links-list">
        <li id="nav-links-list-item">
          <AnchorLink to="/" id="nav-link">
            about me
          </AnchorLink>
        </li>
        <li id="nav-links-list-item">
          <a id="nav-link" target="_blank">
            resume
          </a>
        </li>
        <li id="nav-links-list-item">
          <AnchorLink to="/#technologies-section" id="nav-link">
            technologies
          </AnchorLink>
        </li>
        <li id="nav-links-list-item">
          <AnchorLink to="/#projects-section" id="nav-link">
            projects
          </AnchorLink>
        </li>
      </StyledLinks>
      <StyledSocials id="nav-socials-list">
        <li id="nav-socials-list-item">
          <a
            id="nav-link"
            target="_blank"
            href="https://www.linkedin.com/in/przemys%C5%82aw-wielgosik-827653106"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li id="nav-socials-list-item">
          <a id="nav-link" target="_blank" href="https://github.com/S50B32">
            <GithubIcon />
          </a>
        </li>
      </StyledSocials>
    </StyledNav>
  )
}

export default Nav
