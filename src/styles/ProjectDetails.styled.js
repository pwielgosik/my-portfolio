import styled from "styled-components"
import { RowWrapper } from "../styles/Wrappers.styled"
import { Button } from "../styles/Buttons.styled"

export const BackgroundWrapper = styled.div`
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
export const StyledProjectDetails = styled.div`
  z-index: 2;
  max-width: 100vw;
  max-height: 100vh;
  width: 900px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 1;
  border-radius: 5px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
  max-height: 95vh;
  padding: 1rem 5rem 1rem;
  h3 {
    margin: auto auto auto 0;
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    text-align: left;
    color: rgba(0, 0, 0, 0.7);
    margin: 1rem 0 1rem;
    font-size: 1.6rem;
    line-height: 1.5;
  }
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    padding: 1rem 2.5rem 0rem;
    margin: 1.5rem;
    h3 {
      display: block;
      margin: auto auto 1rem;
      width: 100%;
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
export const StyledTechTooltip = styled.div`
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
export const StyledTechContainer = styled(RowWrapper)`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: 0;
`
export const StyledTechWrapper = styled.div`
  height: 40px;
  width: 40px;
  margin: 1.5rem;
  position: relative;
  &:hover {
    div {
      display: block;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    height: 48px;
    width: 48px;
    padding: 9px;
    margin: 0;
  }
`
export const CloseModalButton = styled(Button)`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  position: absolute;
  top: -24px;
  right: -24px;
  margin: 0;
  padding: 0;
`
