import styled from "styled-components"
import { Button } from "../styles/Buttons.styled"

export const MobileMenuWrapper = styled.div`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: black;

  height: calc(100vh - 56px);
  width: 100vw;

  z-index: 99;
  position: absolute;
  top: 56px;
  left: 0;

  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});

  transition: transform 0.25s ease-in-out;

  /* padding: 5px; */
  ul {
    height: 100%;
    width: 100%;
    margin: 0;
    /* padding: 0 2rem 2rem; */
    padding: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  li {
    text-align: center;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`
export const MobileSideMenuButton = styled(Button)`
  display: inline-flex;
  width: 100%;
  border-bottom: 1px solid gray;
  font-size: 3rem;
  margin: 0;
  padding: 2rem;
`
