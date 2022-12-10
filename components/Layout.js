import React from "react";
import Head from "next/head";
import { Navbar, Footer } from "../components";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Computers World</title>
      </Head>
      <Navbar />
      <main className={classes["main-container"]}>{children}</main>
      <Footer />
      </>
  );
};

export default Layout;
