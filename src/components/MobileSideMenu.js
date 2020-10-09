import React from "react"
import { MobileMenuWrapper } from "../styles/MobileSideMenu.styled"
import { MobileSideMenuButton } from "../styles/Buttons.styled"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StyledMobileSocials } from "../styles/Layout.styled"
import GithubIcon from "../images/github.svg"
import LinkedInIcon from "../images/linkedin.svg"

const MobileSideMenu = ({ isOpen, toggleSideMenu }) => {
  return (
    <MobileMenuWrapper id="mobile-nav-container" isOpen={isOpen}>
      <ul id="mobile-nav">
        <li id="mobile-nav-item" onClick={toggleSideMenu}>
          <MobileSideMenuButton
            id="mobile-nav-link-about_me"
            primary
            as={AnchorLink}
            to={`/`}
          >
            about me
          </MobileSideMenuButton>
        </li>
        <li id="mobile-nav-item" onClick={toggleSideMenu}>
          <MobileSideMenuButton
            id="mobile-nav-link-resume"
            primary
            as={AnchorLink}
            to={`/`}
          >
            resume
          </MobileSideMenuButton>
        </li>
        <li id="mobile-nav-item" onClick={toggleSideMenu}>
          <MobileSideMenuButton
            id="mobile-nav-link"
            primary
            as={AnchorLink}
            to={`/#technologies-section`}
          >
            stack
          </MobileSideMenuButton>
        </li>
        <li id="mobile-nav-item" onClick={toggleSideMenu}>
          <MobileSideMenuButton
            id="mobile-nav-link-technologies"
            primary
            as={AnchorLink}
            to={`/#projects-section`}
          >
            projects
          </MobileSideMenuButton>
        </li>
      </ul>
      <StyledMobileSocials id="nav-socials-list">
        <li id="mobile-nav-socials-list-item">
          <a
            id="mobile-nav-link-linkedin"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/przemys%C5%82aw-wielgosik-827653106"
            aria-label="Proceed to my LinkedIn profile"
          >
            <LinkedInIcon aria-hidden="true" alt="LinkedIn logo icon" />
          </a>
        </li>
        <li id="mobile-nav-socials-list-item">
          <a
            id="mobile-nav-link-github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/S50B32"
            aria-label="Proceed to my GitHub profile"
          >
            <GithubIcon aria-hidden="true" alt="GitHub logo icon" />
          </a>
        </li>
      </StyledMobileSocials>
    </MobileMenuWrapper>
  )
}

export default MobileSideMenu
