import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import './App.css';

// import PlayingField from './PlayingField/PlayingField';
import Starter from './Starter/Starter'
function App() {
  return (
    <BrowserRouter>
      <Starter/>
    </BrowserRouter>
  );
}

export default App;
