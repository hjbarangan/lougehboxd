// import { useState } from "react";

import { data } from "./data";
// import Button from "./components/Button";
import Skeleton from "./components/Skeleton";
import "./App.css";

function App() {
  return (
    <>
      <main id="main">
   
        <Skeleton></Skeleton>
        <div className="movie-container">
        {/* <Button>Click me</Button> */}
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
