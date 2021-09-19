import React from "react";
import Dictionary from "./Dictionary";
import './App.css';



export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <main>
        <Dictionary />
        </main>
        <footer>This project was coded by Jennifer Hsieh, and it is open-sourced on GitHub & hosted on Netlify</footer>
      </div>
    </div>
  );
}


