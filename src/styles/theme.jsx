import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        primary: 'purple',
        secondary: 'red',
    },
};

 const Theme = ({children}) => (
   <ThemeProvider theme={theme}>{children}</ThemeProvider> 
)

export default Theme;