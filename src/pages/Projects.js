import React, { Component } from "react";
import Card from "../components/Card";
import {
  Container, Row, Col, Breadcrumb, BreadcrumbItem
} from 'reactstrap';


class Projects extends Component {

  render() {
    return (

      <Container>
        <Row>
          <Col>
            <Card backgroundImage="https://media.giphy.com/media/pFjZ8jIdeQAq4/giphy.gif">

              <Breadcrumb>
                <BreadcrumbItem tag="a" href="https://chicagocommutechecker.github.io/ChicagoCommuteCheckerApp/">Chicago Commute Checker</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="https://github.com/ChicagoCommuteChecker/ChicagoCommuteCheckerApp">Github</BreadcrumbItem>
              </Breadcrumb>

            </Card>
          </Col>



          <Col>
            <Card backgroundImage="https://media.giphy.com/media/3oKGzdryxKlE3gnly8/giphy.gif">

              <Breadcrumb>
                <BreadcrumbItem tag="a" href="https://immense-headland-42429.herokuapp.com/">Spotashow</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="https://github.com/project2-bootcamp/project2">Github</BreadcrumbItem>
              </Breadcrumb>

            </Card>
          </Col>

          <Col>
            <Card backgroundImage="https://media.giphy.com/media/xTiTnA2pGFtUGF7AR2/giphy.gif">

              <Breadcrumb>
                <BreadcrumbItem tag="a" href="https://shrouded-falls-90324.herokuapp.com/">FitFix</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="https://github.com/joe8021/project3">Github</BreadcrumbItem>
              </Breadcrumb>

            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;
