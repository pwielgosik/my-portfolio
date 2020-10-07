import styled from "styled-components"

export const HamburgerButton = styled.button`
  display: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  height: 48px;
  width: 48px;
  margin: 4px;
  padding: 10px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    display: block;
    align-self: flex-end;
  }
`
export const InnerHamburger = styled.div`
  height: 3px;
  width: 100%;
  position: relative;
  z-index: 999;
  background-color: ${({ isOpen, theme }) =>
    isOpen ? "transparent" : theme.colors.grey};
  transition: 0.1s background-color ease-in-out;
  &::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.grey};
    position: absolute;
    top: -8px;
    left: 0;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(8px) rotate(225deg)" : ""};
    transition: 0.25s transform ease-in-out;
  }
  &::after {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.grey};
    position: absolute;
    top: 8px;
    left: 0;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(-8px) rotate(-225deg)" : ""};
    transition: 0.25s transform ease-in-out;
  }
`
