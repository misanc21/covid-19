import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';

const Theme = createMuiTheme({
    palette: {
      primary: {
        main: orange[500],
      },
      secondary: {
        main: blue[900],
      },
    },
  });

  export default Theme