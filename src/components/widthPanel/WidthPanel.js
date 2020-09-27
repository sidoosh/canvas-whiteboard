import React from "react";
import Constants from "../../common/constants";
import "./WidthPanel.css";

const WidthPanel = (props) => {
  const handleClick = (e) => {
    e.stopPropagation();
    const { size: width } = e.currentTarget.dataset;
    props.sendBrushStyle({ width });
  };
  return (
    <div className="popover width-panel">
      <div className="width-panel-container">
        <div className="width-panel-content">
          {Constants.WIDTH_PANEL_SIZES.map((size, i) => (
            <div
              className={`width-panel-box ${
                parseInt(props.width) === parseInt(size.width)
                  ? "toolbar-content-active"
                  : ""
              }`}
              key={i}
              onClick={handleClick}
              data-size={size.width}
            >
              <svg
                viewBox="0 0 44 44"
                className={
                  parseInt(props.width) === parseInt(size.width)
                    ? "img-acitve"
                    : ""
                }
              >
                <circle cx="50%" cy="50%" r={size.radius}></circle>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WidthPanel;
