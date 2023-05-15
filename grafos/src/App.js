import './App.css';
import Home from '../pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getLocales, getCalendars } from 'expo-localization';
import React, {useState,useEffect,useRef} from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

function App() {
  return (
    <>
     <Router>
      <h1>Zelda : Ocarina of time</h1>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
    
    
    </>
  )
}

export default App;
