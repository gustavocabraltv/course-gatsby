import React from 'react'

import {createGlobalStyle,ThemeProvider} from 'styled-components'
import Theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin:0;
        border:0;
        background-color: white;
    }
    html, body {
        height: 100%;
        font-family: ${props => props.theme.theme};
        background-color: ${props => props.theme.colors.light1};
    }

    `


export const wrapRootElement = ({element}) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles/>
        {element}
    </ThemeProvider>
)