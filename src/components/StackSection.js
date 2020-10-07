import React from "react"
import Section from "./Section"
import { RowWrapper } from "../styles/Wrappers.styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ScrollDownButton from "./ScrollDownButton"

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
  height: 80px;
  width: 80px;
  margin: 3rem;

  position: relative;

  &:hover {
    div {
      display: block;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    height: 70px;
    width: 70px;
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
      style={{ justifyContent: "space-evenly" }}
    >
      <RowWrapper width="100%" margin="auto">
        {data.allStackImagesJson.nodes.map(tech => (
          <StyledImageContainer>
            <Img fluid={tech.src.childImageSharp.fluid} />
            <StyledTooltip>{tech.name}</StyledTooltip>
          </StyledImageContainer>
        ))}
      </RowWrapper>
      <ScrollDownButton to="/#projects-section" />
    </Section>
  )
}

export default StackSection
