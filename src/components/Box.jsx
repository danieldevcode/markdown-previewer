import React from "react";
import "../styles/box.scss";

function DraggableBox({ text }) {
  return (
    <div className="box">
      <p>{text}</p>
    </div>
  );
}

export default DraggableBox;
