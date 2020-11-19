import React from "react"
import { StyledFooter } from "../styles/Layout.styled"
import { ColumnWrapper } from "../styles/Wrappers.styled"
import { StyledFooterSocials } from "../styles/Layout.styled"
import GithubIcon from "../images/github.svg"
import LinkedInIcon from "../images/linkedin.svg"

const Footer = () => {
  return (
    <StyledFooter>
      <h2>Footer</h2>
      <ColumnWrapper width="100%" margin="0">
        <StyledFooterSocials id="nav-socials-list">
          <li id="footer-socials-list-item">
            <a
              id="footer-link-linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/przemys%C5%82aw-wielgosik-827653106"
              aria-label="Proceed to my LinkedIn profile"
            >
              <LinkedInIcon aria-hidden="true" alt="LinkedIn logo icon" />
            </a>
          </li>
          <li id="nav-socials-list-item">
            <a
              id="footer-link-github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/pwielgosik"
              aria-label="Proceed to my GitHub profile"
            >
              <GithubIcon aria-hidden="true" alt="GitHub logo icon" />
            </a>
          </li>
        </StyledFooterSocials>
        <span>© {new Date().getFullYear()}, Przemysław Wielgosik</span>
      </ColumnWrapper>
    </StyledFooter>
  )
}

export default Footer
