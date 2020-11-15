import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  var [alert, setAlert] = useState(false);
  var bcg = rgb.join(",");
  // var hex = rgbToHex(...rgb);
  var hexVal = `#${hexColor}`;

  useEffect(() => {
    var timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <span>
        <p className="percent-value">{weight}%</p>
        <i
          class="far fa-copy fa-2x"
          onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText(hexVal);
          }}
        ></i>
      </span>
      <p className="color-value">{hexVal}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
