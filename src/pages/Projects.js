import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import {
  Button
} from 'reactstrap';



class Projects extends Component {

  render() {
    return (
      <div>
        <Wrapper>
          <Card backgroundImage="https://media.giphy.com/media/pFjZ8jIdeQAq4/giphy.gif">
            <Button color="link">
              <a href="https://chicagocommutechecker.github.io/ChicagoCommuteCheckerApp/" target="_blank">Chicago Commute Checker</a>
            </Button>

            <Button color="link">
              <a href="https://github.com/ChicagoCommuteChecker/ChicagoCommuteCheckerApp" target="_blank">Github Repository</a>
            </Button>
          </Card>


          <Card backgroundImage="https://media.giphy.com/media/3oKGzdryxKlE3gnly8/giphy.gif">
            <Button color="link">
              <a href="https://immense-headland-42429.herokuapp.com/" target="_blank">Spotashow</a>
            </Button>

            <Button color="link">
              <a href="https://github.com/project2-bootcamp/project2" target="_blank">Github Repository</a>
            </Button>
          </Card>

          <Card backgroundImage="https://media.giphy.com/media/xTiTnA2pGFtUGF7AR2/giphy.gif">
            <Button color="link">
              <a href="https://shrouded-falls-90324.herokuapp.com/" target="_blank">FitFix</a>
            </Button>

            <Button color="link">
              <a href="https://github.com/joe8021/project3" target="_blank">Github Repository</a>
            </Button>
          </Card>
        </Wrapper>
      </div>
    );
  }
}

export default Projects;
