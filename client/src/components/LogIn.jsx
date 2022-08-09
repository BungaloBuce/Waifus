import React from 'react';
import {
  Button, createTheme, ThemeProvider, TextField, Box
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
      user: "Bruce",
      password: "Waifus",
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
             onClick={(e) => this.props.switchToFeed()}
             >
              Back
            </Button>
          </ThemeProvider>
          Log In or Create Account
        </h1>
        <Box component="form" align="center" id="LogIn">
          <TextField
            required
            style={{"marginBottom": "0.5rem"}}
            label="Username"
            defaultValue="Bruce"
            variant="filled"
            size="small"
            onChange={(e) => this.setState({user: e.target.value})}
          />
          <br />
          <TextField
            required
            label="Password"
            defaultValue="Waifus"
            variant="filled"
            size="small"
            onChange={(e) => this.setState({password: e.target.value})}
          />
          <br />
           <Button
             style={{"marginRight": "1.2rem", "marginTop": "5px"}}
             color="primary"
             variant="contained"
             onClick={(e) => {this.props.handleLogIn(this.state.user, this.state.password); this.props.switchToFeed();}}
             >
              Log In/Create
            </Button>
        </Box>
      </div>);
  }
}

export default LogIn;
