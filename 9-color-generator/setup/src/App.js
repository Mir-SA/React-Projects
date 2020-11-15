import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  var [color, setColor] = useState("");
  var [error, setError] = useState(false);
  var [list, setList] = useState(new Values("#9b59b6").all(10));

  var handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#9b59b6"
            className={`${error ? "error" : null}`}
          />

          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
