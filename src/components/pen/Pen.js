import React from "react";
import { ReactComponent as PenSvg } from "../../assets/pen2.svg";
import WidthPanel from "../widthPanel";
import Constants from "../../common/constants";
import ColorPicker from "../colorPicker";
import "./Pen.css";

const Pen = (props) => {
  const isPen = props.selectedTool === Constants.TOOLS.PEN && !props.hideTool;

  return (
    <div>
      <div className={isPen ? "toolbar-content-active" : ""}>
        <PenSvg
          className={isPen ? "img-acitve" : ""}
          onClick={props.changeTool}
          data-tool={Constants.TOOLS.PEN}
        />
      </div>
      {isPen && (
        <div className="brush-style-container">
          <ColorPicker
            sendBrushStyle={props.changeBrushStyle}
            color={props.brushStyle.color}
          />
          <WidthPanel
            sendBrushStyle={props.changeBrushStyle}
            width={props.brushStyle.width}
          />
        </div>
      )}
    </div>
  );
};

export default Pen;
