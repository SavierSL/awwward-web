import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header.js"
import "./layout.css"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "./context/globalContext"

import Cursor from "../components/cursor/customCursor"
import Navigation from "../components/navigation"

// setGlobalStyle
const GlobalStyle = createGlobalStyle`
${normalize}
*{
  text-decoration: none;
  cursor: none;
button{
  background: none;
  border:none;
}
}
html{
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
}
body{
   background: ${props => props.theme.background};
   overscroll-behaviour: none;

}
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const darkTheme = {
    background: "#000",
    text: "#fff",
  }
  const lightTheme = {
    background: "#fff",
    text: "#000",
  }

  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType =
      cursorStyles.includes(cursorType) && cursorType ? cursorType : false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Cursor toggleMenu={toggleMenu} />
      <Header
        onCursor={onCursor}
        setToggleMenu={setToggleMenu}
        toggleMenu={toggleMenu}
      />

      <Navigation
        setToggleMenu={setToggleMenu}
        toggleMenu={toggleMenu}
        onCursor={onCursor}
      />

      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
