import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Characters from './Components/Characters/Characters';
import Hero from './Components/OneCharacter/Hero';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Characters />
          </Route>
          <Route exact path="/hero">
            <Hero />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
