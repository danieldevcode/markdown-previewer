import React from "react";
import "../styles/header.scss";

function Header({ text }) {
  return (
    <div className="box">
      <p>{text}</p>
    </div>
  );
}

export default Header;
