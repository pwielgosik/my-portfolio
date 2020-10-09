import styled from "styled-components"

export const StyledImageContainer = styled.div`
  height: 80px;
  width: 80px;
  margin: 3rem;
  position: relative;
  &:hover {
    div {
      transition-delay: 0.7s;

      opacity: 1;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    height: 50px;
    width: 50px;
    margin: 2rem 3rem 2rem;
  }
`
