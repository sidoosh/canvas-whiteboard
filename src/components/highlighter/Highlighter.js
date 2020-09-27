import React from "react";
import { ReactComponent as HighlighterSvg } from "../../assets/pen1.svg";
import Constants from "../../common/constants";
import ColorPicker from "../colorPicker";

const Highlighter = (props) => {
  const isHighlighter =
    props.selectedTool === Constants.TOOLS.HIGHLIGHTER && !props.hideTool;

  return (
    <div>
      <div className={isHighlighter ? "toolbar-content-active" : ""}>
        <HighlighterSvg
          className={isHighlighter ? "img-acitve" : ""}
          onClick={props.changeTool}
          data-tool={Constants.TOOLS.HIGHLIGHTER}
        />
      </div>
      {isHighlighter && (
        <div className="brush-style-container" style={{ height: 131 }}>
          <ColorPicker
            sendBrushStyle={props.changeBrushStyle}
            color={props.brushStyle.color}
          />
        </div>
      )}
    </div>
  );
};

export default Highlighter;
