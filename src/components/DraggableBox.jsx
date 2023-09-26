import React, { useEffect, useRef, useState } from "react";
import "../styles/box.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";

function DraggableBox() {
  return (
    <div className="box">
      <p>Preview</p>
    </div>
  );
}

export default DraggableBox;
