import styled from "styled-components"
import { ColumnWrapper } from "../styles/Wrappers.styled"

export const StyledIntroductionContainer = styled(ColumnWrapper)`
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    padding: 2rem;
    height: 100vh;
  }
  div {
    z-index: 0;
  }
  svg {
    z-index: 0;
  }
`
export const StyledTitleContainer = styled.div`
  line-height: 40px;
  font-weight: normal;
  font-family: "Futura T OT Medium";
  color: ${({ theme }) => theme.colors.lightgrey};
  font-size: 3.2rem;
  z-index: 0;
  h2 {
    display: none;
  }
  hr {
    height: 0;
  }
  span:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.secondary};
  }
  span:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.light};
    font-size: 5rem;
  }
  span:nth-of-type(3) {
    margin: 60px;
    color: ${({ theme }) => theme.colors.grey};
    @media (max-width: ${({ theme }) => theme.media.phone}) {
      margin: 0;
    }
    span {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 4.2rem;
    }
  }
`
