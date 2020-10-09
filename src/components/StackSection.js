import React from "react"
import Section from "./Section"
import { RowWrapper } from "../styles/Wrappers.styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ScrollDownButton from "./ScrollDownButton"
import { StyledImageContainer } from "../styles/StackSection.styled"
import { StyledTooltip } from "../styles/Layout.styled"

const StackSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allStackImagesJson {
        nodes {
          id
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
      <RowWrapper
        width="100%"
        margin="auto"
        as="ul"
        id="known-technologies-list"
      >
        {data.allStackImagesJson.nodes.map(tech => (
          <StyledImageContainer
            key={tech.id}
            as="li"
            id="known-technologies-list-item"
          >
            <Img
              fluid={tech.src.childImageSharp.fluid}
              alt={`${tech.name} logotype`}
            />
            <StyledTooltip>{tech.name}</StyledTooltip>
          </StyledImageContainer>
        ))}
      </RowWrapper>
      <ScrollDownButton to={`/#projects-section`} />
    </Section>
  )
}

export default StackSection
