import React from "react";
// Scss
import "./projectBox.scss";

const projectBox = (props) => {
  const onPortfolioHandler = () => {
    window.open("http://bhavindomadiya.ml/demo2Spandid/index.html", "_blank");
  };
  return (
    <>
      <div className="portfolio__box" onClick={onPortfolioHandler}>
        <img src={props.preview} alt="project" />
        <div className="portfolio__hover-info flex-center">
          <div className="text-center">
            <p className="font30 weight800">{props.title}</p>
            <p className="font12 weight500">{props.tag}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default projectBox;
