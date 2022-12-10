import React from "react";
import classes from "./Specifications.module.css";

const Specifications = ({ product }) => {
  const { processor, ram, storage, graphics, display, ports, windows } =
    product;
  return (
    <div className={classes.specifications}>
      <h4>Specifications</h4>
      <div>
        <span>Procesor: </span>
        <p>{processor}</p>
      </div>
      <div>
        <span>Ram: </span>
        <p>{ram}</p>
      </div>
      <div>
        <span>Storage: </span>
        <p>{storage}</p>
      </div>
      <div>
        <span>Graphics: </span>
        <p>{graphics}</p>
      </div>
      <div>
        <span>Display: </span>
        <p>{display}</p>
      </div>
      <div>
        <span>Ports: </span>
        <p>{ports}</p>
      </div>
      <div>
        <span>Windows: </span>
        <p>{windows}</p>
      </div>
    </div>
  );
};

export default Specifications;
