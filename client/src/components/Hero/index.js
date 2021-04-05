import React from "react";
import Style from "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }} id="home">
      {props.children}
    </div>
  );
}

export default Hero;
