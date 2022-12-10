import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import classes from "./Address.module.css";

const Address = () => {
  return (
    <div className={classes["address-container"]}>
      <div className={classes["shop-address"]}>
        <h2>Delhi Address</h2>
        <p>
          <ImLocation /> B-20/21 Basement, High Tention Road, Near Ramzani
          Masjid, Abul Fazal Part 1, New Delhi-110025
        </p>
        <p>
          <AiFillPhone /> 7588876958
        </p>
        <p>
          <GrMail /> test@test.com
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d876.0767992821255!2d77.29258795785479!3d28.56053667247611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce40cbd4a0073%3A0x4281cd61108f953b!2sComputer%20World%2C%20B-20%2F21%2C%20Abul%20Fazal%20Enclave%2C%20Jamia%20Nagar%2C%20Okhla%2C%20New%20Delhi%2C%20Delhi%20110025!3m2!1d28.560371699999997!2d77.2929734!5e0!3m2!1sen!2sin!4v1670305594307!5m2!1sen!2sin"
        className={classes.maps}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Address;
