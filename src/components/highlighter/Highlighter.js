import React, { useState } from "react";
import { ReactComponent as HighlighterSvg } from "../../assets/pen1.svg";
import WidthPanel from "../widthPanel";

const Highlighter = (props) => {
  const [showHighLighter, setHighLighter] = useState(false);

  const handlePenState = () => {
    setHighLighter(!showHighLighter);
  };
  return (
    <div onClick={handlePenState}>
      <div
        style={{
          backgroundColor: showHighLighter ? "rgb(73, 89, 172)" : "transparent",
        }}
      >
        <HighlighterSvg />
      </div>
      {showHighLighter && (
        <WidthPanel
          sendBrushStyle={props.onBrushChange}
          className={!showHighLighter ? "draggable" : null}
        />
      )}
    </div>
  );
};

export default Highlighter;
