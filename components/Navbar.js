import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./Navbar.module.css";

const Navbar = () => {
    const router = useRouter();

  return (
    <div>
    <nav className={classes["navbar-container"]}>
      <div>
        <p className={classes.logo}>
          <Link href="/">Computers World</Link>
        </p>
      </div>
      <ul>
        <li className={router.pathname == "/" ? classes.active : ""}>
          <Link href="/" acti>Home</Link>
        </li>
        <li className={router.pathname == "/products" ? classes.active : ""}>
          <Link href="/products">Products</Link>
        </li>
        <li className={router.pathname == "/contacts" ? classes.active : ""}>
          <Link href="/contacts">Contact Us</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
