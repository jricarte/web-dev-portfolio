import React, { Component } from "react";
// import EmailForm from "../components/EmailForm";
import Hero from "../components/Hero";


class Search extends Component {
  
  render() {
    return (
      <div>
        <Hero>
            <h1>say hello!</h1>
            <a href="mailto:jordan@ricarte.net?subject=subject here">jordan@ricarte.net</a>
        </Hero>
      </div>
    );
  }
}

export default Search;
