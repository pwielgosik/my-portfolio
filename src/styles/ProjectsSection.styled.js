import styled from "styled-components"

export const StyledImageContainer = styled.article`
  position: relative;
  width: 70%;
  margin: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  h3 {
    opacity: 0;
    transition: all 0.4s ease-in-out;
  }
  &:hover {
    margin-top: 1.5rem;

    h3 {
      opacity: 1;
    }
  }
  img {
    margin: 0;
  }
  .gatsby-image-wrapper {
    width: auto;
    transition: all 0.4s ease-in-out;
    opacity: 0.7;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
    filter: grayscale(80%);
    &:hover {
      opacity: 1;
      filter: grayscale(0);
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
    }
  }
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    width: 80%;
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
