import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "code-background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.

      const imageData = [
        `linear-gradient(to right, rgba(19, 10, 43, 1), rgba(11, 120, 105, 1))`,
        data.desktop.childImageSharp.fluid,
      ].reverse()

      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`rgba(11, 120, 105, 1)`}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  height: 320px;
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    height: 100vh;
  }
`

export default StyledBackgroundSection
