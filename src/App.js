import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="ct">
        <div className="container p-3 pt-4">
        <Weather defaultCity="Denver" />
        <footer>
          This project was coded by Adriana Pana and is {" "}
        <a href="https://github.com/AdrianaPana/react-weather-project" target="_blank" rel="noreferrer">      open-sourced on GitHub
  </a> {" "} and {" "}
  <a href="https://react-weather-project-app.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a>
      </footer>
      </div>
      </div>
      <img src="/Sun_Outline.png" alt="Sun icon"/>
    </div>
  );
}