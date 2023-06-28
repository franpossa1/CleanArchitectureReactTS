import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { themePalette } from "../Core/Enums/themePalette"
/**
 * Creation of theme provider
 */
type ThemeProp = {
    children: JSX.Element
}
 

/**
 * the theme that would be consumed and reconfigured
 */
const theme = createTheme({
    palette : {
        mode:"dark",
        background :{
            default: themePalette.bg
        },
        primary : {
            main : themePalette.purple
        }
    },
    typography : {
        fontFamily : themePalette.Font_Monserrat

    },
    components : {
        MuiButton : {
            defaultProps : {
                style : {
                    textTransform : "none",
                    boxShadow:"none",
                    borderRadius : "0.5em"
                }
            }
        },
        MuiAlert :{
           defaultProps:{
            style :{
                borderRadius:"0.8em",
                fontSize:"1em",
            }
           },
           styleOverrides : {
            standardError : {
                border :`1px solid ${themePalette.error_main}`,
                background :themePalette.bg_error_main,
            } 
           }
        }
    }
})

/**
 * Function that would be using the ThemeConfig to config all the custom of colors,
 * spaces letter, etc
 *
 * @param {ThemeProp.children} children - Would recieve the 
 *  
 * @returns { ThemeProvider } ThemeProvider  Object that represents all the configuration
 */
export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (<ThemeProvider theme={theme} >
       <CssBaseline/>
        {children}
    </ThemeProvider>)
}