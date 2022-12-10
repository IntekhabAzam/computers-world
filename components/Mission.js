import React from "react";
import classes from "./Mission.module.css";
import Image from "next/image";
import missionImage from "../public/Mission.png";

const Mission = () => {
  return (
    <div className={classes["mission-container"]}>
      <div className={classes["mission-description"]}>
        <h1>Our Mission and Vision</h1>
        <p>
          Our mission is to provide really affordable High-quality IT Hardware &
          Equipments for Business, Education, Gaming & Other Personal Use.
        </p>
        <p>Our vision is to maximize your level of satisfaction in regards of using Refurbished & Business grade IT Equipments.</p>
      </div>
      <div>
        <Image src={missionImage} alt="our mission" className={classes['mission-image']}/>
      </div>
    </div>
  );
};

export default Mission;
