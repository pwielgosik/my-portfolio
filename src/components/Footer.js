import React from "react"
import { StyledFooter } from "../styles/Layout.styled"
import { ColumnWrapper, RowWrapper } from "../styles/Wrappers.styled"

import {
  StyledNav,
  StyledLinks,
  StyledFooterSocials,
} from "../styles/Layout.styled"
import GithubIcon from "../images/github.svg"
import LinkedInIcon from "../images/linkedin.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Footer = () => {
  return (
    <StyledFooter>
      <ColumnWrapper width="100%" margin="0">
        <StyledFooterSocials id="nav-socials-list">
          <li id="footer-socials-list-item">
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
        </StyledFooterSocials>
        <span>© {new Date().getFullYear()}, Przemysław Wielgosik</span>
      </ColumnWrapper>
    </StyledFooter>
  )
}

export default Footer
