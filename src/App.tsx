import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Button} from "@mui/material";
import Mojsbouncer from "./components/animations/Mojsbouncer";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>I promise. There will be something here soon</p>
        <Button>Clickity click</Button>
        <Box sx={{height: "200px"}}>

        </Box>
        <Mojsbouncer duration={2000}/>
      </header>
    </div>
  );
}

export default App;
