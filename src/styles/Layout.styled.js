import styled from "styled-components"

export const StyledHeader = styled.header`
  z-index: 1;
  h1 {
    display: none;
  }
`

export const StyledNav = styled.nav`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;

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

  @media (max-width: 768px) {
    display: none;
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
`
