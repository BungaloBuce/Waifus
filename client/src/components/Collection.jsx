import React from 'react';
import {
  Button, Box, Card, createTheme, ThemeProvider
} from '@material-ui/core';
import axios from 'axios';

export default function Collection({images, updateImages, user, inProfile}) {
  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: '#36819E',
      },
    },
  });

  return (
    <div align="center" className="collection">
      {images.length > 0 &&
        <ThemeProvider theme={buttonTheme}>
        <Box style={{"display": "inline", "width": "35%"}}>
          {
            images.map(image =>
              <Card style={{"display": "inline-block", "marginLeft": "1%", "marginBottom": "2%", "borderRadius": "11px"}} key={image}>
                <img style={{"width": "300px", "maxHeight": "420px", "border": "solid black 3px", "borderRadius": "10px"}} src={image} alt="waifu pic"/>
                <br />
                {inProfile === undefined &&
                  <Button
                  style={{"width": "50%","border": "solid black 3px", "borderRadius": "0px"}}
                  color="primary"
                  variant="contained"
                  onClick={(e) => {
                    if (user !== ''){
                      axios.post(`http://localhost:5000/image`, {url: image, user})
                      .catch(err => console.log(err));
                    } else {
                      alert('Please Log In or Create an Account :)');
                    }
                  }}
                  >
                    Save
                  </Button>
                }
                {inProfile === true &&
                  <Button
                  style={{"width": "50%","border": "solid black 3px", "borderRadius": "0px"}}
                  color="primary"
                  variant="contained"
                  onClick={(e) => {
                    axios.post(`http://localhost:5000/delete`, {url: image, user})
                    .catch(err => console.log(err));
                    updateImages();
                  }}
                  >
                    Delete
                  </Button>
                }
                <Button
                style={{"width": "50%", "border": "solid black 3px", "borderRadius": "0px"}}
                color="primary"
                variant="contained"
                href={image}
                target="_blank"
                >
                  Download
                </Button>
              </Card>
            )
            }
          </Box>
        </ThemeProvider>
      }
      {inProfile === true &&
        <>
        {images.length === 0 &&
          <p style={{"fontSize": "400%"}}>
            You're Lonely...
          </p>
        }
        </>
      }
    </div>
  );
}
