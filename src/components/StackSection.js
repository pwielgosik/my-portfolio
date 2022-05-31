import React from "react"
import Section from "./Section"
import { RowWrapper } from "../styles/Wrappers.styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ScrollDownButton from "./ScrollDownButton"
import {
  StyledTechWrapper,
  StyledTechImageContainer,
} from "../styles/StackSection.styled"
import { StyledTooltip } from "../styles/Layout.styled"

const StackSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allStackImagesJson {
        nodes {
          id
          name
          url
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
        {data.allStackImagesJson.nodes.map(({ id, name, src, url }) => (
          <li key={id} id={`known-technologies-list-item-${id}`}>
            <StyledTechWrapper>
              <h3>{name}</h3>
              <StyledTechImageContainer
                as="a"
                href={url}
                id={`tech-link-${id}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Proceed to ${name} introduction website`}
              >
                <Img
                  fluid={src.childImageSharp.fluid}
                  alt={`${name} logotype`}
                />
                <StyledTooltip>{name}</StyledTooltip>
              </StyledTechImageContainer>
            </StyledTechWrapper>
          </li>
        ))}
      </RowWrapper>
      <ScrollDownButton
        to={`/#projects-section`}
        ariaLabel="Scroll down to projects section"
      />
    </Section>
  )
}

export default StackSection
