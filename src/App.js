import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';

import Home from './components/Home';
import Work from './components/Work';
import Education from './components/Education';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/education" component={Education} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
