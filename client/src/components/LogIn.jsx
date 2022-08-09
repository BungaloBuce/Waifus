import React from 'react';
import {
  Button, createTheme, ThemeProvider
} from '@material-ui/core';

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: '#36819E',
    },
  },
});

class LogIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  render() {
    return (
      <div className="main">
        <h1 align="center">
         <ThemeProvider theme={buttonTheme}>
            <Button
             style={{"marginRight": "1.2rem", "marginBottom": "5px"}}
             color="primary"
             variant="contained"
             onClick={(e) => console.log(e)}
             >
              Back
            </Button>
          </ThemeProvider>
          Log In or Create Account
        </h1>

      </div>);
  }
}

export default LogIn;
