import React, { useEffect } from "react"
import { Button } from "../styles/Buttons.styled"
import styled from "styled-components"
import { RowWrapper } from "../styles/Wrappers.styled"
import Img from "gatsby-image"
import actions from "../data/actions"

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledProjectDetails = styled.div`
  /* display: none; */
  z-index: 2;
  max-width: 100vw;
  max-height: 100vh;
  width: 900px;
  position: relative;
  display: flex;
  flex-direction: column;

  background-color: white;

  /* top: ${({ isOpen }) => (isOpen ? `50%-${window.scrollY}px;` : "")}; */

  /* transform: translate(-50%, -50%); */
  z-index: 1;
  border-radius: 5px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
  max-height: 95vh;

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

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    padding: 3rem;
    margin: 2rem;
    h3 {
      margin: auto auto 1rem;
      width: 100%;
      display: block;
    }
    p {
      font-size: 1.4rem;
    }
    a,
    button {
      max-width: 45%;
      margin: 0.5rem;
      padding: 1rem;
    }
    div {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
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

const CloseModalButton = styled(Button)`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  position: absolute;
  top: -24px;
  right: -24px;
  margin: 0;
  padding: 0;
`

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
            Close
          </Button>
        </RowWrapper>
      </StyledProjectDetails>
    </BackgroundWrapper>
  ) : null
}

export default ProjectDetails
