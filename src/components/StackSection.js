import React from "react"
import Section from "./Section"
import { RowWrapper } from "../styles/Wrappers.styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const StyledTooltip = styled.div`
  display: none;

  position: absolute;

  background-color: white;
  padding: 10px;

  bottom: 0;
  left: 50%;
  transform: translate(-50%, 20%);
  z-index: 1;
  border-radius: 5px;

  align-self: center;
  text-align: center;
`

const StyledImageContainer = styled.div`
  height: 50px;
  width: 50px;
  margin: 1.5rem;

  position: relative;

  &:hover {
    div {
      display: block;
    }
  }
`

const StackSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allStackImagesJson {
        nodes {
          name
          src {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Section
      outlineTitle="Technologies I know"
      title="Technologies I worked with"
      id="technologies-section"
      wBackground
    >
      <RowWrapper>
        {data.allStackImagesJson.nodes.map(tech => (
          <StyledImageContainer>
            <Img fluid={tech.src.childImageSharp.fluid} />
            <StyledTooltip>{tech.name}</StyledTooltip>
          </StyledImageContainer>
        ))}
      </RowWrapper>
    </Section>
  )
}

export default StackSection
