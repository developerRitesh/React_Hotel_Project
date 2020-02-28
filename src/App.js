import React from 'react'; 
// import logo from './logo.svg';
import './App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Gauravs from "./pages/Gauravs";
import Navbar from "./components/Navbar";

import {Route,Switch} from "react-router-dom";

function App() {
  return <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />           
      <Route exact path="/rooms" component={Rooms} />           
      <Route exact path="/gurav" component={Gauravs} />           
      <Route exact path="/slider" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route component={Error} />
    </Switch>           
  </>;
}

export default App;
