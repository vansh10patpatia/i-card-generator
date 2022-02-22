import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import group from "../assets/logo.png"

const ResponsiveAppBar = () => {
 

  return (
    <AppBar  position="fixed">
      <Container className='header' maxWidth="x1">
        <Toolbar disableGutters>
          <img src={group} alt="Logo" ></img>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;