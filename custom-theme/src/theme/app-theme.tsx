import { createTheme } from '@mui/material';
import { green, orange, blue, red, yellow } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: green[200],
            dark: orange[600],
            light: blue[200],
            contrastText: yellow[500]
        }
    }
});


export default theme