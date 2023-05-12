import React from "react";
import { useParams } from "react-router-dom";

function About() {

    const { id } = useParams();

    return (
      <div className="container">
        <h1>About {id}</h1>
      </div>
    );
  }
  export default About;