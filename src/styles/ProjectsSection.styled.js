import styled from "styled-components"

export const StyledImageContainer = styled.div`
  position: relative;
  width: 350px;
  margin: 1.5rem;
  border-radius: 5px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  filter: grayscale(80%);
  img {
    margin: 0;
  }
  .gatsby-image-wrapper {
    opacity: 0.7;
    height: 100%;
  }
  &:hover {
    transition: filter 0.2s ease-in-out;
    filter: grayscale(0);
    div {
      opacity: 1;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    min-width: 30%;
    height: auto;
  }
`
export const StyledProjectTooltip = styled.div`
  opacity: 0;
  font-size: 1.6rem;
  position: absolute;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 5px;
  transition: opacity 0.2s ease-in-out;
  align-self: center;
  text-align: center;
`
