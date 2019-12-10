import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import logo from '../logo.svg';
import {
  Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody
} from 'reactstrap';
import Icon from '@mdi/react'
import { mdiSpeedometer, mdiGestureTapButton, mdiMonitorCellphone, mdiTrendingUp  } from '@mdi/js'
import Fade from 'react-reveal/Fade'; 


function About() {
  return (
    <div>
      <Hero backgroundImage="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif">
        <h1>Hi, I'm Jordan. I design and build user interfaces</h1>
        <h2>
          Developed with React
        <img src={logo} className="App-logo" alt="logo"></img>
        </h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        
      <Fade big>
        <Row>
          <Col size="md-12">
            <h1>Welcome to my portfolio</h1>
          </Col>
        </Row>
      </Fade>

      <Fade left cascade>
        <Row>
          <Col size="md-6">
            <Card>
              <Icon path={mdiSpeedometer}/>

              {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
              <CardBody>
                <CardTitle>Fast</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>Fast load times and lag free interaction are my highest priority.</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col size="md-6">
            <Card>
              <Icon path={mdiGestureTapButton}/>

              {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
              <CardBody>
                <CardTitle>User-Friendly</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>Always building with the user in mind. </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fade>

      <Fade right cascade>
        <Row>
        <Col size="md-6">
            <Card>
              <Icon path={mdiMonitorCellphone}/>

              {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
              <CardBody>
                <CardTitle>Responsive</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>My layouts adapt to any digital device, big or small.</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col size="md-6">
            <Card>
              <Icon path={mdiTrendingUp}/>

              {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
              <CardBody>
                <CardTitle>Dynamic</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>Websites don't have to be static. I enjoy pushing the boundaries to create lasting impressions visitors will remember.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Fade>
      </Container>
    </div>
  );
}

export default About;
