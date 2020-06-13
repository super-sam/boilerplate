import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
//     primary: {
//       // light: will be calculated from palette.primary.main,
//       main: '#ff4400',
//       // dark: will be calculated from palette.primary.main,
//       // contrastText: will be calculated to contrast with palette.primary.main
//     },
//     secondary: {
//       light: '#0066ff',
//       main: '#0044ff',
//       // dark: will be calculated from palette.secondary.main,
//       contrastText: '#ffcc00',
//     },
//     // error: will use the default color

        primary: {
            main: '#b9b6b2'
        },
        background:{
            default: '#fff',
            light: '#f0f0f0'
        },
        text: {
          primary: '#b9b6b2',
        }
  },
});

export default theme