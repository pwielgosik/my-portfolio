import React from "react"
import { Button } from "../styles/Buttons.styled"
import styled from "styled-components"
import { RowWrapper } from "../styles/Wrappers.styled"
import Img from "gatsby-image"
import actions from "../data/actions"

const StyledProjectDetails = styled.div`
  /* display: none; */
  width: 900px;
  position: absolute;
  display: flex;
  flex-direction: column;

  background-color: white;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 5px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);

  /* align-self: center; */
  /* text-align: center; */

  padding: 1rem 5rem 1rem;
  h3 {
    margin: auto auto auto 0;
  }
  p {
    text-align: left;
    color: rgba(0, 0, 0, 0.7);
    margin: 1rem 0 1rem;
    font-size: 1.6rem;
    line-height: 1.5;
  }
`

const StyledTechTooltip = styled.div`
  display: none;

  position: absolute;

  background-color: white;
  padding: 10px;

  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 5px;

  align-self: center;
  text-align: center;
`

const StyledTechContainer = styled.div`
  height: 40px;
  width: 40px;
  margin: 1.5rem;

  position: relative;

  &:hover {
    div {
      display: block;
    }
  }
`

const ProjectDetails = ({ project, technologies, dispatch, isOpen }) =>
  isOpen ? (
    <StyledProjectDetails>
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

      <RowWrapper
        style={{
          backgroundColor: "rgba(0,0,0,.05)",
          boxShadow: "0 5px 10px rgba(0,0,0,.1)",
          borderRadius: 10,
          margin: "1rem",
        }}
      >
        {technologies.nodes
          .filter(tech => project.stack.includes(tech.name))
          .map(tech => (
            <StyledTechContainer>
              <Img fluid={tech.src.childImageSharp.fluid} />
              <StyledTechTooltip>{tech.name}</StyledTechTooltip>
            </StyledTechContainer>
          ))}
      </RowWrapper>
      <RowWrapper style={{ margin: "1rem" }}>
        <Button
          style={{ width: 200 }}
          primary
          onClick={() =>
            dispatch({ type: actions.HIDE_DETAILS, payload: project })
          }
        >
          Wróć
        </Button>
      </RowWrapper>
    </StyledProjectDetails>
  ) : null

export default ProjectDetails
