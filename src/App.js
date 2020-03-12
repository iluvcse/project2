import React from 'react';
import './App.css';
import Profile from './Profile';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume1 from './Resume1';

let App=()=>{
  return (
    <BrowserRouter>
    <Route exact path="/" component={Profile} />
    <Route exact path="/Resume1" component={Resume1} />
    </BrowserRouter>
    
  )
}

export default App;