import React from 'react';
import {
  Button, Box, Card, createTheme, ThemeProvider
} from '@material-ui/core';

export default function Collection({images}) {
  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: '#36819E',
      },
    },
  });

  return (
    <div align="center" className="collection">
      <ThemeProvider theme={buttonTheme}>
        <Box style={{"display": "inline", "width": "35%"}}>
          {
            images.map(image =>
              <Card style={{"display": "inline-block", "marginLeft": "1%", "marginBottom": "2%", "borderRadius": "11px"}} key={image}>
                <img style={{"width": "300px", "maxHeight": "420px", "border": "solid black 3px", "borderRadius": "10px"}} src={image} alt="waifu pic"/>
                <br />
                <Button
                style={{"width": "50%","border": "solid black 3px", "borderRadius": "0px"}}
                color="primary"
                variant="contained"
                >
                  Save
                </Button>
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
    </div>
  );
}
