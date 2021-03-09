import React from "react";
import { Navbar } from "./Navbar";

function SiteLayout(props) {
  return (
    <>
      <Navbar>{props.children}</Navbar>
    </>
  );
}

export { SiteLayout };
