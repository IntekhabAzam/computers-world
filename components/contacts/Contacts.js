import React from "react";
import Image from "next/image";
import classes from "./Contacts.module.css";
import contactsImg from "../../public/contacts.png";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import Address from "./Address";

const Contacts = () => {
  return (
    <>
      <div>
        <div className={classes["contacts-title"]}>
          <h1>Meet Our Teams</h1>
        </div>
        <div className={classes["contacts-content"]}>
          <Image
            className={classes["contacts-content-image"]}
            src={contactsImg}
            alt="contacts"
          />
          <div className={classes["contacts-details"]}>
            <div className={`${classes["contacts-name"]} ${classes.bg1}`}>
              <h2>Faraz Ahmed</h2>
              <p>
                <AiFillPhone /> 8744034584
              </p>
              <p>
                <AiFillMail /> farazahmed82@gmail.com
              </p>
            </div>
            <div className={`${classes["contacts-name"]} ${classes.bg2}`}>
              <h2>Mohd Ashabul Haque</h2>
              <p>
                <AiFillPhone /> 8010607445
              </p>
              <p>
                <AiFillMail /> ashabulhaque1986@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Address />
    </>
  );
};

export default Contacts;
