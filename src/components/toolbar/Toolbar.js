import React from "react";
// import "./Controls.css";
import Pen from "../pen";
import Eraser from "../eraser";
import Highlighter from '../highlighter'

function ToolBar(props) {
    return (
        <div className="controls">
            <Pen />
            <Highlighter />
            <Eraser />

        </div>
    );
}

export default ToolBar;
