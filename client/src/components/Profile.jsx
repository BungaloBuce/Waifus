import React from 'react';
import {
  Button, createTheme, ThemeProvider
} from '@material-ui/core';
// import axios from 'axios';
import Collection from './Collection.jsx';

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: '#36819E',
    },
  },
});

class Profile extends React.Component {

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
          Username's Waifus
        </h1>
      <Collection images={this.state.images}/>
      </div>);
  }
}

export default Profile;