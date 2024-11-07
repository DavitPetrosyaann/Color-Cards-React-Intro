import React from "react";
import "./RandomColorsGeneration.css";
import { randomColor } from "../../helpers/randomColor.js";

const RandomColorsGeneration = () => {
  const changeColor = (e) => {
    e.target.parentNode.style.backgroundColor = randomColor();
  };

  return (
    <div className="random-colors-generation container">
      <section>
        <button onClick={changeColor}>Change Color</button>
      </section>
      <section>
        <button onClick={changeColor}>Change Color</button>
      </section>
      <section>
        <button onClick={changeColor}>Change Color</button>
      </section>
      <section>
        <button onClick={changeColor}>Change Color</button>
      </section>
    </div>
  );
};

export default RandomColorsGeneration;
