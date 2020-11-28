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
          <Route exact path="/portfolio-react/" component={Home} />
          <Route path="/portfolio-react/work" component={Work} />
          <Route path="/portfolio-react/education" component={Education} />
          <Route path="/portfolio-react/about" component={About} />
          <Route path="/portfolio-react/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
