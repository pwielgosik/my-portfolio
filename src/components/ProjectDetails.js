import React, { useEffect } from "react"
import Img from "gatsby-image"
import actions from "../data/actions"
import { Button } from "../styles/Buttons.styled"
import { RowWrapper } from "../styles/Wrappers.styled"
import {
  BackgroundWrapper,
  StyledProjectDetails,
  CloseModalButton,
  StyledTechContainer,
  StyledTechWrapper,
} from "../styles/ProjectDetails.styled"
import { StyledTooltip } from "../styles/Layout.styled"

const ProjectDetails = ({ project, technologies, dispatch, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.querySelector("html").style.overflowY = "hidden"
      return
    } else {
      document.querySelector("html").style.overflowY = "visible"
      return
    }
  }, [isOpen])

  return isOpen ? (
    <BackgroundWrapper>
      <StyledProjectDetails isOpen={isOpen}>
        <CloseModalButton
          onClick={() =>
            dispatch({ type: actions.HIDE_DETAILS, payload: project })
          }
          aria-label="Close this window"
        >
          ✖
        </CloseModalButton>
        <RowWrapper as="header" style={{ margin: "0 1rem 1rem" }}>
          <h3>{project.name}</h3>
          {project.liveSrc && (
            <Button
              style={{ width: 200 }}
              as="a"
              target="_blank"
              rel="noreferrer"
              href={project.liveSrc}
              primary
            >
              Live
            </Button>
          )}
          <Button
            style={{ width: 200 }}
            as="a"
            target="_blank"
            rel="noreferrer"
            href={project.githubSrc}
            secondary
          >
            GitHub
          </Button>
        </RowWrapper>
        <section>
          <h4>Description</h4>
          <Img
            as="figure"
            fluid={project.src.childImageSharp.fluid}
            alt={`View of the project ${project.name}`}
            aria-label="hidden"
          />
          <RowWrapper left style={{ margin: "1rem" }}>
            <p>{project.description}</p>
          </RowWrapper>
        </section>
        <section>
          <h4>Used technologies</h4>
          <StyledTechContainer as="ul">
            {technologies.nodes
              .filter(tech => project.stack.includes(tech.name))
              .map(tech => (
                <StyledTechWrapper as="li" key={tech.id}>
                  <Img
                    fluid={tech.src.childImageSharp.fluid}
                    alt={tech.name}
                    aria-hidden="true"
                    aria-label={tech.name}
                  />
                  <StyledTooltip>{tech.name}</StyledTooltip>
                </StyledTechWrapper>
              ))}
          </StyledTechContainer>
        </section>
        <RowWrapper style={{ margin: "1rem" }}>
          <Button
            style={{ width: 200 }}
            primary
            onClick={() =>
              dispatch({ type: actions.HIDE_DETAILS, payload: project })
            }
          >
            Close
          </Button>
        </RowWrapper>
      </StyledProjectDetails>
    </BackgroundWrapper>
  ) : null
}

export default ProjectDetails
