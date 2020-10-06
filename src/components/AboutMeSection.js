import React from "react"
import Section from "./Section"
import { ColumnWrapper, RowWrapper } from "../styles/Wrappers.styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"

const StyledTooltip = styled.div`
  display: none;

  position: absolute;

  background-color: white;
  padding: 10px;

  top: 0;
  z-index: 1;
  border-radius: 5px;

  align-self: center;
  text-align: center;
`

const StyledImageContainer = styled.div`
  height: 50px;
  min-width: 50px;
  margin: 1.5rem;

  position: relative;

  &:hover {
    div {
      display: block;
    }
  }
`

const AboutMeSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allInterestsImagesJson {
        nodes {
          name
          src {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Section
      id="about-me-section"
      outlineTitle="About me"
      title="Who am I?"
      wBackground
    >
      <RowWrapper width="100%">
        <ColumnWrapper width="70%">
          <p>
            My name is Przemek and I am a 29 years old living in Poznań. There
            was a time I studied and graduated from Mechanical Engineering
            course. Long time ago, but still... Always loved cars and, as years
            spent at campus went by, I realized that the most interesting
            subsystem for me was engine. I mean combustion engine. Later, as a
            drivetrain engineer in PUT Motorsport Formula Student Team, there
            was a time I had believed I could become an F1 engineer. But the
            things tourned out differently...
          </p>
          <p>
            I love driving, getting to know cars, but I soon understood that
            there is to much hurry and carelessness in this field for me to
            handle. I like to do things in a way it was meant to be, not to save
            money once and lose twice.
          </p>
          <p>
            The other day I decided to give a try to programming and that's how
            it continued until today... And I don't intend to ever let the cars
            leave in my number one hobby zone.
          </p>
        </ColumnWrapper>
        <ColumnWrapper width="30%">
          {data.allInterestsImagesJson.nodes.map(interest => (
            <StyledImageContainer>
              <StyledTooltip>{interest.name}</StyledTooltip>
              <Img fluid={interest.src.childImageSharp.fluid} />
            </StyledImageContainer>
          ))}
        </ColumnWrapper>
      </RowWrapper>
    </Section>
  )
}

export default AboutMeSection
