import styled from "styled-components"

export const ResponsiveWidthWrapper = styled.div`
  margin: auto;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};

  background-color: ${({ background }) => background};

  box-shadow: ${({ shadow }) =>
    shadow && `0px 0px 30px 0px rgba(0, 0, 0, 0.08);`};

  border-radius: ${({ round }) => round && "5px"};

  @media (max-width: ${({ width }) => width}) {
    width: 100%;
  }

  @media (max-width: ${({ toColumnWidth, theme }) =>
      toColumnWidth ? toColumnWidth : theme.media.phone}) {
    flex-direction: column;
    width: 100%;
  }
`
export const ColumnWrapper = styled(ResponsiveWidthWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: ${({ top }) => (top ? "top" : "center")};
  align-items: ${({ left }) => (left ? "flex-start" : "center")};
  margin: ${({ margin }) => (margin ? margin : "50px auto 50px")};
`

export const RowWrapper = styled(ResponsiveWidthWrapper)`
  display: flex;
  flex-direction: row;
  justify-content: ${({ left }) => (left ? "flex-start" : "center")};
  align-items: ${({ top }) => (top ? "top" : "center")};
  margin: ${({ margin }) => margin};
  flex-wrap: wrap;
`
