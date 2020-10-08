import React, { useReducer } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import actions from "../data/actions"
import Section from "./Section"
import ProjectDetails from "./ProjectDetails"
import {
  StyledImageContainer,
  StyledProjectTooltip,
} from "../styles/ProjectsSection.styled"
import { RowWrapper } from "../styles/Wrappers.styled"

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
      <RowWrapper width="100%">
        {data.projectsData.nodes.map(project => {
          const isOpen = Boolean(openProjects.find(p => p.id === project.id))
          return (
            <div key={project.id}>
              <StyledImageContainer
                onClick={() => handleClick(project, isOpen)}
              >
                <Img fluid={project.src.childImageSharp.fluid} />
                <StyledProjectTooltip>{project.name}</StyledProjectTooltip>
              </StyledImageContainer>
              <ProjectDetails
                project={project}
                isOpen={isOpen}
                technologies={data.technologies}
                dispatch={dispatch}
              />
            </div>
          )
        })}
      </RowWrapper>
    </Section>
  )
}

export default ProjectsSection
