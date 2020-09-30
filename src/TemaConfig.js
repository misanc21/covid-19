import { createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import blue from '@material-ui/core/colors/blue';

const Theme = createMuiTheme({
    palette: {
      primary: {
        main: deepOrange[700],
      },
      secondary: {
        main: blue[900],
      },
    },
  });

  export default Theme