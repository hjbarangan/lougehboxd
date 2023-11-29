// import { useState } from "react";

import imageSrc from "./assets/images/default.png";
import hungerGames from "./assets/images/hunger.jpg"
import spiderVerse from "./assets/images/spiderverse.jpeg"
import oppen from "./assets/images/oppen.jpg"
import barbie from "./assets/images/barbie.jpg"

import "./App.css";

function App() {
  return (
    <>
      <header>
        <form id="form">
          <input
            type="text"
            id="search"
            placeholder="Search"
            className="search"
          />
        </form>
      </header>
      <main id="main">
        {/* <div className="text-heading">
          <h1>Lorem Ipsum</h1>
        </div> */}
        <div className="movie-container">
          <div className="movie">
            <img src={hungerGames} alt="images"></img>
          </div>

          <div className="movie">
            <img src={spiderVerse} alt="images"></img>
          </div>

          <div className="movie">
            <img src={barbie} alt="images"></img>
          </div>

          <div className="movie">
            <img src={oppen} alt="images"></img>
          </div>

          <div className="movie">
            <img src={imageSrc} alt="images"></img>
          </div>

          <div className="movie">
            <img src={imageSrc} alt="images"></img>
          </div>

          <div className="movie">
            <img src={imageSrc} alt="images"></img>
          </div>

          <div className="movie">
            <img src={imageSrc} alt="images"></img>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
