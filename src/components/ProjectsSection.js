import React, { useReducer } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import actions from "../data/actions"
import Section from "./Section"
import ProjectDetails from "./ProjectDetails"
import { StyledOpenProjectDetailsButton } from "../styles/ProjectsSection.styled"
import { ColumnWrapper } from "../styles/Wrappers.styled"

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
      <ColumnWrapper width="100%" margin="auto">
        {data.projectsData.nodes.map(project => {
          const isOpen = Boolean(openProjects.find(p => p.id === project.id))
          return (
            <>
              {!isOpen && (
                <StyledOpenProjectDetailsButton
                  onClick={() => handleClick(project, isOpen)}
                  aria-label={`Proceed to the detailed article about ${project.name} project`}
                >
                  <article>
                    <h3 style={{ lineHeight: 0 }}>{project.name}</h3>
                    <Img
                      fluid={project.src.childImageSharp.fluid}
                      alt={`View of the project ${project.name}`}
                      aria-label="hidden"
                    />
                  </article>
                </StyledOpenProjectDetailsButton>
              )}
              <ProjectDetails
                project={project}
                isOpen={isOpen}
                technologies={data.technologies}
                dispatch={dispatch}
              />
            </>
          )
        })}
      </ColumnWrapper>
    </Section>
  )
}

export default ProjectsSection
