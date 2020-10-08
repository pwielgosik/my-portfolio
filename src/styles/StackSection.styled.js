import styled from "styled-components"

export const StyledTooltip = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  padding: 10px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 20%);
  z-index: 1;
  border-radius: 5px;
  align-self: center;
  text-align: center;
`
export const StyledImageContainer = styled.div`
  height: 80px;
  width: 80px;
  margin: 3rem;
  position: relative;
  &:hover {
    div {
      display: block;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.phone}) {
    height: 50px;
    width: 50px;
    margin: 2rem 3rem 2rem;
  }
`
