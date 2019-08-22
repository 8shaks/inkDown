import React from 'react';
import Navbar from './navbar/Navbar'
import Landing from './landing/Landing'
import Services from './services/Services'
import Contact from './contact/Contact'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>

      <Route path="/" exact component={Landing} />
      <Route path="/services" exact component={Services} />
      <Route path="/contact" exact component={Contact} />
    </div>
    </Router>
  );
}

export default App;
