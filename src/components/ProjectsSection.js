import React, { useEffect, useReducer } from "react"
import Section from "./Section"
import { RowWrapper } from "../styles/Wrappers.styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectDetails from "./ProjectDetails"
import styled from "styled-components"
import actions from "../data/actions"
import ScrollDownButton from "./ScrollDownButton"

const StyledImageContainer = styled.div`
  height: 180px;
  width: 350px;
  margin: 1.5rem;
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    width: 100vw;
  }
  /* border: 1px solid rgba(0, 0, 0, 0.5); */
  border-radius: 5px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);

  img {
    margin: 0;
  }
  cursor: pointer;
  filter: grayscale(80%);

  /* &:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2);
    z-index: 10;
  } */
  position: relative;
  &:hover {
    transition: filter 0.2s ease-in-out;

    filter: grayscale(0);

    div {
      opacity: 1;
    }
  }
`
const StyledProjectTooltip = styled.div`
  opacity: 0;
  font-size: 1.6rem;
  position: absolute;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};

  padding: 10px;

  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 5px;
  transition: opacity 0.2s ease-in-out;

  align-self: center;
  text-align: center;
`

const ProjectsSection = () => {
  const data = useStaticQuery(graphql`
    query {
      projectsData: allProjectsImagesJson {
        nodes {
          id
          name
          liveSrc
          githubSrc
          stack
          description
          src {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
      technologies: allStackImagesJson {
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

  const [openProjects, dispatch] = useReducer(projectReducer, [])

  function projectReducer(state, action) {
    switch (action.type) {
      case actions.SHOW_DETAILS:
        return [state, action.payload]
      case actions.HIDE_DETAILS:
        return state.filter(project => project.id !== action.payload.id)
    }
  }

  const handleClick = (project, isOpen) => {
    if (!isOpen) {
      dispatch({ type: actions.SHOW_DETAILS, payload: project })
    } else {
      dispatch({ type: actions.HIDE_DETAILS, payload: project })
    }
  }

  return (
    <Section
      outlineTitle="My projects"
      title="Projects I made"
      id="projects-section"
    >
      <RowWrapper width="960px" left>
        {data.projectsData.nodes.map(project => {
          const isOpen = Boolean(openProjects.find(p => p.id === project.id))
          return (
            <>
              <StyledImageContainer
                key={project.id}
                onClick={() => handleClick(project, isOpen)}
              >
                <Img
                  style={{ opacity: 0.9, height: "100%" }}
                  fluid={project.src.childImageSharp.fluid}
                />
                <StyledProjectTooltip>{project.name}</StyledProjectTooltip>
              </StyledImageContainer>
              <ProjectDetails
                project={project}
                isOpen={isOpen}
                technologies={data.technologies}
                dispatch={dispatch}
              />
            </>
          )
        })}
      </RowWrapper>
      <ScrollDownButton to="/#about-me-section" />
    </Section>
  )
}

export default ProjectsSection
