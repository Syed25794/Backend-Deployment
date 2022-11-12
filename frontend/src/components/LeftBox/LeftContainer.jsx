import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

export const LeftContainer = () => {
  return (
    <div style={{background:"cyan"}}>
      <Logo sellerName={"Syed"} />
      <Navbar />
    </div>
  );
};
