import React from "react";
import classes from "./DescriptionModal.module.css";

const DescriptionModal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>Why to use Refurbished IT Equipment</h2>
        </header>
        <div className={classes.content}>
          <ul>
            <li>
              Really affordable and high on Performance and are “Just like New”.
            </li>
            <li>
              It is 25 times environmentally beneficial to reuse computer then
              to recycle.
            </li>
            <li>
              A new PC manufacturing require three time energy a PC consume is
              it lifetime.
            </li>
          </ul>
        </div>
        <footer className={classes.actions}>
          <button type="button" onClick={props.onClose}>
            Close
          </button>
        </footer>
      </div>
    </>
  );
};

export default DescriptionModal;
