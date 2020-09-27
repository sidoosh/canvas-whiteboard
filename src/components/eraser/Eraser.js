import React from "react";
import { ReactComponent as EraserSvg } from "../../assets/eraser.svg";
import WidthPanel from "../widthPanel";
import "./Eraser.css";
import Constants from "../../common/constants";

const Eraser = (props) => {
  const isEraser =
    props.selectedTool === Constants.TOOLS.ERASER && !props.hideTool;

  return (
    <div className="eraser-wrapper">
      <div className={isEraser ? "toolbar-content-active" : ""}>
        <EraserSvg
          onClick={props.changeTool}
          data-tool={Constants.TOOLS.ERASER}
          className={isEraser ? "img-acitve" : ""}
        />
      </div>
      {isEraser && (
        <div className="brush-style-container">
          <WidthPanel
            sendBrushStyle={props.changeBrushStyle}
            selectedTool="eraser"
            width={props.brushStyle.width}
          />
        </div>
      )}
    </div>
  );
};

export default Eraser;
