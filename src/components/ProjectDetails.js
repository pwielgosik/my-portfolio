import React, { useEffect } from "react"
import Img from "gatsby-image"
import actions from "../data/actions"
import { Button } from "../styles/Buttons.styled"
import { RowWrapper } from "../styles/Wrappers.styled"
import {
  BackgroundWrapper,
  StyledProjectDetails,
  CloseModalButton,
  StyledTechTooltip,
  StyledTechContainer,
  StyledTechWrapper,
} from "../styles/ProjectDetails.styled"

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
        >
          ✖
        </CloseModalButton>
        <RowWrapper style={{ margin: "0 1rem 1rem" }}>
          <h3>{project.name}</h3>
          {project.liveSrc && (
            <Button
              style={{ width: 200 }}
              as="a"
              target="_blank"
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
            href={project.githubSrc}
            secondary
          >
            Github
          </Button>
        </RowWrapper>
        <Img
          fluid={project.src.childImageSharp.fluid}
          style={{ boxShadow: "0 5px 15px rgba(0,0,0,.1)", borderRadius: 5 }}
        />
        <RowWrapper left style={{ margin: "1rem" }}>
          <p>{project.description}</p>
        </RowWrapper>
        <StyledTechContainer>
          {technologies.nodes
            .filter(tech => project.stack.includes(tech.name))
            .map(tech => (
              <StyledTechWrapper>
                <Img fluid={tech.src.childImageSharp.fluid} />
                <StyledTechTooltip>{tech.name}</StyledTechTooltip>
              </StyledTechWrapper>
            ))}
        </StyledTechContainer>
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
