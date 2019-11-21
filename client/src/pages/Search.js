import React, { Component } from "react";
import EmailForm from "../components/EmailForm";
import Hero from "../components/Hero";


class Search extends Component {
  
  render() {
    return (
      <div>
        <Hero>
            <h1>say hello!</h1>
            <p>Contact me at jordan@ricarte.net</p>
        </Hero>
      <EmailForm />
      </div>
    );
  }
}

export default Search;
