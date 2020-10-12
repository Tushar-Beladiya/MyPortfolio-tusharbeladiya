import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from "./teamBox";
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/person01.png";
import Person02 from "../../assets/about/person02.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT MYSELF" />
      <p className="font12">
        As a web designer and developer, I have constantly enjoyed working with
        clients to unravel how <br></br>they can make their brands shine and
        communicate better with audiences.
      </p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox
            avatar={Person01}
            name="Tushar Beladiya"
            job="Web Developer"
          />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox
            avatar={Person02}
            name="Tushar Beladiya"
            job="Web Designer"
          />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
