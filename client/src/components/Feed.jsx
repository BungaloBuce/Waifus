import React from 'react';
import {
  Button, createTheme, ThemeProvider, Select, FormControl, InputLabel, MenuItem
} from '@material-ui/core';
import axios from 'axios';
import Collection from './Collection.jsx';

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: '#36819E',
    },
  },
});

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: "waifu",
      images: []
    };
    this.getImages = this.getImages.bind(this);
  }

  componentDidMount(){
    this.getImages(this.state.category);
  }

  async getImages(category) {
    this.setState({images: []});
    let temp = [];
    for (let i = 0; i < 8; i++) {
      await axios.get(`https://api.waifu.pics/sfw/${this.state.category}`)
        .then(results => {
          temp.push(results.data.url);
        })
        .catch(err => console.log(err));
    }
    this.setState({images: temp});
  }

  render() {
    return (
      <div className="main">
        <h1 align="center">
          Generate Waifus!!
          <ThemeProvider theme={buttonTheme}>
            <Button
             style={{"marginLeft": "1.2rem", "marginBottom": "5px"}}
             color="primary"
             variant="contained"
             onClick={(e) => this.getImages(this.state.category)}
             >
              Generate
            </Button>
          </ThemeProvider>
          <FormControl>
          <InputLabel style={{"fontSize": "70%", "color": "white", "marginLeft": "1.8rem", "marginBottom": "5px", "width": "200%", "textDecoration": "underline"}} id="demo-simple-select-label">Category</InputLabel>
            <Select
             style={{"color": "white", "marginLeft": "1rem", "marginBottom": "5px", "width": "200%"}}
             value={this.state.category}
             onChange={(e) => this.setState({category: e.target.value})}
            >
              <MenuItem value="waifu">waifu</MenuItem>
              <MenuItem value="bully">bully</MenuItem>
              <MenuItem value="cuddle">cuddle</MenuItem>
              <MenuItem value="cry">cry</MenuItem>
              <MenuItem value="kiss">kiss</MenuItem>
              <MenuItem value="hug">hug</MenuItem>
              <MenuItem value="pat">pat</MenuItem>
              <MenuItem value="bonk">bonk</MenuItem>
              <MenuItem value="yeet">yeet</MenuItem>
              <MenuItem value="blush">blush</MenuItem>
              <MenuItem value="smile">smile</MenuItem>
              <MenuItem value="wave">wave</MenuItem>
              <MenuItem value="highfive">highfive</MenuItem>
              <MenuItem value="handhold">handhold</MenuItem>
              <MenuItem value="nom">nom</MenuItem>
              <MenuItem value="bite">bite</MenuItem>
              <MenuItem value="slap">slap</MenuItem>
              <MenuItem value="kick">kick</MenuItem>
              <MenuItem value="happy">happy</MenuItem>
              <MenuItem value="wink">wink</MenuItem>
              <MenuItem value="poke">poke</MenuItem>
              <MenuItem value="dance">dance</MenuItem>
              <MenuItem value="cringe">cringe</MenuItem>
            </Select>
          </FormControl>
          <Button
             style={{"marginLeft": "35rem", "marginBottom": "5px"}}
             color="primary"
             variant="contained"
             onClick={(e) =>  {
              if(this.props.user === "") {
                this.props.switchToLogIn();
              } else {
                this.props.switchToProfile();
              }
            }}
             >
              {this.props.user === "" &&
                <>
                  Log In/Create Account
                </>
              }
              {this.props.user !== "" &&
                <>
                  {this.props.user}
                </>
              }
          </Button>
        </h1>
      <Collection user={this.props.user} images={this.state.images}/>
      </div>
      );
  }
}

export default Feed;