import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import logo from './logo.svg';
import './App.css';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
         
          
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Search} />
          </Wrapper>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Footer />
    
        </div>
      </Router>
    </div>
  );
}

export default App;
