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

  border-radius: 10px;

  /* box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2); */

  /* ------ RWD ------ */
  @media (max-width: 500px) {
    font-size: 1.8rem;
    padding: 1.5rem 2rem 1.5rem;
  }
  @media (max-width: 400px) {
    font-size: 1.6rem;
    padding: 1rem 1.5rem 1rem;
  }
  /* ----------------- */

  &:hover {
    background-color: ${({
      transparent,
      menu,
      primary,
      secondary,
      light,
      theme,
    }) =>
      (transparent && "transparent") ||
      (menu && "transparent") ||
      (primary && darken(0.05, theme.colors.primary)) ||
      (secondary && lighten(0.1, theme.colors.secondary)) ||
      (light && darken(0.05, theme.colors.light)) ||
      lighten(0.2, theme.colors.dark)};
  }

  @media screen and (-ms-high-contrast: active) {
    border: 2px solid currentcolor;
  }

  color: ${({ transparent, primary, secondary, light, theme, loading }) =>
    (transparent && theme.colors.light) ||
    (primary && theme.colors.secondary) ||
    (secondary && theme.colors.primary) ||
    (light && theme.colors.dark) ||
    (loading && "lightgrey") ||
    theme.colors.light};
  background-color: ${({
    transparent,
    primary,
    secondary,
    light,
    theme,
    loading,
  }) =>
    (transparent && "transparent") ||
    (primary && theme.colors.primary) ||
    (secondary && theme.colors.secondary) ||
    (light && theme.colors.light) ||
    (loading && "grey") ||
    theme.colors.dark};

  border: ${({ primary, light }) =>
    (primary && "none") || (light && "rgba(0,0,0,.4) solid 2px") || "none"};

  ${({ menu, theme }) =>
    menu &&
    `background-color: transparent;
        color: rgba(255,255,255, 1);
        padding: 0 2rem 0;
        text-transform: uppercase;
        font-size: 1.6rem;
        font-family: 'Futura T OT Light';
        margin: 0;
        position: relative;

        &:hover{
            color: rgba(255,255,255, .6);
        }
        `}

  &:active {
    background-color: ${({
      transparent,
      menu,
      primary,
      secondary,
      light,
      theme,
    }) =>
      (transparent && "transparent") ||
      (menu && "transparent") ||
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
`
