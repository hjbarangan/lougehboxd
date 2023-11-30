// import { useState } from "react";

import { data } from "./data";
import "./App.css";

function App() {
  return (
    <>
      <main id="main">
        <div className="movie-container">
          {data.map((item) => {
            return (
              <>
                <div className="movie">
                  <img src={item.imageSrc} alt="images"></img>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
