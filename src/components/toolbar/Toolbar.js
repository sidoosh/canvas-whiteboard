import React from "react";
import "./Toolbar.css";
import Pen from "../pen";
import Eraser from "../eraser";
import Highlighter from "../highlighter";

function ToolBar(props) {
  return (
    <div className="toolbar">
      <Pen {...props} />
      <Highlighter {...props} />
      <Eraser {...props} />
    </div>
  );
}

export default ToolBar;
