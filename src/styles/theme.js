//Theme object containing colors, fonts and @media

const theme = {
  colors: {
    // primary: "rgba(242, 204, 12, 1)", //#f2cc0c
    primary: "#0B7869",
    secondary: "#DEBF84",
    light: "#E3A149",
    dark: "#130A2B",
    grey: "#AEAEAE",
  },
  fonts: {
    regular: "Futura T OT Medium",
  },
  media: {
    smallphone: "480px",
    phone: "666px",
    tablet: "1024px",
    desktop: "1920px",
  },
  mixins: {
    flexRow:
      "display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;",
    flexColumn: `display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; width: 100%;`,
  },
}

export default theme
