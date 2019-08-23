import React from 'react';
import Navbar from './navbar/Navbar'
import Landing from './landing/Landing'
import Services from './services/Services'
import Contact from './contact/Contact'
import ScrollToTop from './Scroll'
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <ScrollToTop>
    <div className="App">
      <Navbar/>
    <Switch>
      <Route exact path="/" exact component={Landing} />
      <Route  exact path="/services" exact component={Services} />
      <Route exact path="/contact" exact component={Contact} />
      </Switch>
    </div>
    </ScrollToTop>
    </Router>
  );
}

export default App;
