import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import About from "../pages/About";
import '../components/AwesomeSlider/open-animation.scss';
import {
    Button
  } from 'reactstrap';



// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/open-animation.scss'
// import 'react-awesome-slider/dist/styles.css';


function Home() {
    return (
        <AwesomeSlider fillParent={true}>
                <div style={{background: "#B5EAD7"}}>Welcome to my portfolio!</div>
                <div style={{background: "#70A1D7"}}>I design and build user interfaces.</div>
                <div style={{background: "#A1DE93"}}>I enjoy discovering new UI effects, animations and creating intuitive, dynamic user experiences.</div>
                <div style={{background: "#F7F48B"}}>
                {/* <Router>  */}
                    <Button outline color="info">
                      <Link to="/about">
                   
                        Learn More
                        </Link>
                        <Route exact path="/about" component={About} />
                    </Button>
                {/* </Router> */}
                </div>
        </AwesomeSlider>

    );
}

export default Home;