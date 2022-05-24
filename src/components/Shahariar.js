import autoprefixer from "autoprefixer";
import React from "react";
import Header from "./Header";

const Shahariar = () => {
  return (
    <>
      <Header />
      <h1 style={shahariarHeading}>Ten Popular JavaScript Website</h1>
      <h4 style={shahariarWbsite}>
        <a href="https://www.w3schools.com">W3Schools</a>
      </h4>

      <h4 style={shahariarWbsite}>
        <a href="https://www.freecodecamp.org/">freecodecamp</a>
      </h4>

      <h4 style={shahariarWbsite}>
        <a href="https://javascript30.com/">javascript30</a>
      </h4>

      <h4 style={shahariarWbsite}>
        <a href="https://www.codementor.io/">codementor</a>
      </h4>

      <h4 style={shahariarWbsite}>
        <a href="https://www.educative.io/courses/learn-html-css-javascript-from-scratch">
          educative.io
        </a>
      </h4>

      <h4 style={shahariarWbsite}>
        <a href="https://javascript.info/">javascript</a>
      </h4>

      <h4 style={shahariarWbsite}>
        <a href="https://www.sololearn.com/home">sololearn</a>
      </h4>

      <h4 style={shahariarWbsite}>
        <a href="https://www.tutorialrepublic.com/">tutorialrepublic</a>
      </h4>

      <h4 style={shahariarWbsite}>
        <a href="https://learnjavascript.online/">learnjavascrip</a>
      </h4>

      <h4 style={shahariarWbsite}>
        <a href="https://devdocs.io/">devdocs</a>
      </h4>
    </>
  );
};
const shahariarHeading = {
  margin: "0 auto",
  background: "yellow",
  textAlign: "center",
  fontSize: "50px",
  fontWeight: "bold",
  width: "750px",
};
const shahariarWbsite = {
  background: "green",
  textAlign: "center",
  fontSize: "28px",
  fontWeight: "bold",
  width: "750px",
  margin: "0 auto",
  border: "1px solid red",
  letterSpacing: "3px",
};

export default Shahariar;
