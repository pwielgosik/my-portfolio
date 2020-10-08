import styled from "styled-components"

export const StyledHeader = styled.header`
  z-index: 1;
  h1 {
    display: none;
  }
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  height: 200px;

  a {
    display: block;
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.grey};

    transition: 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  ul {
    margin: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    list-style: none;
    border-radius: 10px;
  }
  li {
    margin: 5px 20px 5px;
  }

  @media (max-width: ${({ theme }) => theme.media.phone}) {
    display: none;
  }
`

export const StyledSection = styled.section`
  width: 100vw;
  background: ${({ wBackground }) =>
    wBackground ? "linear-gradient(to right, #130a2b, #0b7869)" : "white"};
  padding: 1rem 0 1rem;
  position: relative;
  height: 100vh;
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    padding: 0 5rem 0;
  }
  h2 {
    display: none;
  }
  span:nth-of-type(1) {
    color: ${({ wBackground, theme }) =>
      wBackground ? theme.colors.secondary : theme.colors.primary};
    font-size: 2.8rem;
    align-self: flex-start;
    margin: 5rem 0 1rem;
  }
  p {
    color: ${({ wBackground, theme }) =>
      wBackground ? "white" : theme.colors.grey};
    font-size: 14px;
    letter-spacing: 0.5px;
  }
`

export const StyledLinks = styled.ul`
  background-color: white;
  padding: 10px;
`

export const StyledSocials = styled.ul`
  a {
    transition: 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const StyledFooterSocials = styled.ul`
  display: flex;
  margin: 1rem;
  li {
    margin: 1rem;
  }
  a {
    padding: 6px;
  }
  a:hover {
    transition: 0.2s ease-in-out;
    opacity: 0.8;
  }
`

export const StyledFooter = styled.footer`
  background: #0b7869;
  background: linear-gradient(to right, #130a2b, #0b7869);
  padding: 4rem;
  max-height: 300px;
  width: 100vw;
  color: rgba(255, 255, 255, 0.8);
  span {
    margin: 1rem;
    font-size: 1.4rem;
  }
`

export const StyledMobileSocials = styled.ul`
  display: none;
  margin: auto;
  li {
    margin: 0;
  }
  a {
    padding: 6px;
    margin: 2.4rem;
  }
  a:hover {
    transition: 0.2s ease-in-out;
    opacity: 0.8;
  }
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    display: flex;
    flex-direction: row !important;
    justify-content: center !important;
  }
`
