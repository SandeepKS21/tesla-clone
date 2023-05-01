// type rfce and click on it to get default files
import React from "react";
import "./section.css";

function section(props) {
  return (
    // "style" => in line css goies like a object in react
    <section style={{ backgroundImage: "url(images/" + props.background + ")" }}>
      <div className="modelName">
        <h1>{props.name}</h1>
        <p>{props.tagLine}</p>
      </div>

      {/* "cta" => call to action */}

      <div className="cta">
        <div className="buttons">
          <a href="#" className="left">
            {" "}
            {props.leftBtn}
          </a>
          <a href="#" className="right">
            {" "}
            {props.rightBtn}
          </a>
        </div>

        {/* if arrow is true then it will be displayed. this is called conditional rendering */}

        {props.arrow && <img src="images/down_arrow.png" alt="down arrow" />}
      </div>
    </section>
  );
}

export default section;
