import styled from "styled-components"

export const MobileMenuWrapper = styled.div`
  display: none;
  position: fixed;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 99;
  top: 0;
  left: 0;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: transform 0.25s ease-in-out;
  padding-top: 56px;
  background-color: ${({ theme }) => theme.colors.primary};
  ul {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  li {
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    display: flex;
  }
`
