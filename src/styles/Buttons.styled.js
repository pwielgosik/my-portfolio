import styled from "styled-components"
import { lighten, darken } from "polished"

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1rem;
  padding: 1.5rem 2.5rem 1.5rem;
  border: none;
  font-family: "Futura T OT Medium";
  font-size: 1.8rem;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  border-radius: 10px;
  &:hover {
    background-color: ${({ primary, secondary, light, theme }) =>
      (primary && darken(0.05, theme.colors.primary)) ||
      (secondary && lighten(0.1, theme.colors.secondary)) ||
      (light && darken(0.05, theme.colors.light)) ||
      lighten(0.2, theme.colors.dark)};
  }
  color: ${({ primary, secondary, light, theme }) =>
    (primary && theme.colors.secondary) ||
    (secondary && theme.colors.primary) ||
    (light && theme.colors.dark) ||
    theme.colors.light};
  background-color: ${({ primary, secondary, light, theme }) =>
    (primary && theme.colors.primary) ||
    (secondary && theme.colors.secondary) ||
    (light && theme.colors.light) ||
    theme.colors.dark};
  border: ${({ primary, light }) =>
    (primary && "none") || (light && "rgba(0,0,0,.4) solid 2px") || "none"};
  &:active {
    background-color: ${({ primary, secondary, light, theme }) =>
      (primary && darken(0.1, theme.colors.primary)) ||
      (secondary && lighten(0.2, theme.colors.secondary)) ||
      (light && darken(0.1, theme.colors.light)) ||
      lighten(0.4, theme.colors.dark)};
    color: ${({ primary, light, theme }) =>
      (primary && theme.colors.dark) ||
      (light && theme.colors.dark) ||
      theme.colors.light};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
  @media screen and (-ms-high-contrast: active) {
    border: 2px solid currentcolor;
  }
`
export const MobileSideMenuButton = styled(Button)`
  display: inline-flex;
  width: 100%;
  font-size: 3rem;
  margin: 0;
  padding: 2rem;
  border-radius: 0;
`
export const StyledScrollUpButton = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  transition: opacity 0.2s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
  background-color: white;
  transform: rotate(180deg);
  svg {
    display: block;
    height: 20px;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    height: 60px;
    width: 60px;
  }
`
export const StyledScrollDownButton = styled.button`
  margin: auto;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 80px;
  a {
    display: block;
    width: 100% !important;
  }
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    height: 36px;
    width: 60px;
  }
`
