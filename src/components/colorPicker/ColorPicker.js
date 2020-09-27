import React from "react";
import Constants from "../../common/constants";
import "./ColorPicker.css";
import { convertToNumber, convertToHex } from "../../common/utils";

const ColorPicker = (props) => {
  const handleColorChange = (e) => {
    e.stopPropagation();
    let color = "";
    if (e.target.value && e.target.id === Constants.COLOR_INPUT_ID) {
      color = e.target.value;
    } else if (e.currentTarget.dataset.color) {
      color = e.currentTarget.dataset.color;
    }
    color = convertToHex(color);
    props.sendBrushStyle({ color });
  };
  let str = convertToNumber(props.color);

  return (
    <div className="color-picker-wrapper">
      <div className="color-picker-control-container">
        <button
          className="color-picker-label-swatch"
          style={{ backgroundColor: props.color || "12b886" }}
        ></button>
        <label className="color-input-container">
          <div className="color-picker-hash">#</div>
          <input
            onChange={handleColorChange}
            className="color-picker-input"
            id="input-color-picker"
            value={str}
          />
        </label>
      </div>
      <div className="popover">
        <div className="color-picker color-picker-type-elementStroke">
          <div className="color-picker-triangle color-picker-triangle-shadow"></div>
          <div className="color-picker-content">
            {Constants.DEFAULT_COLORS.map((color, index) => (
              <button
                className="color-picker-swatch"
                style={{ backgroundColor: color }}
                onClick={handleColorChange}
                key={index}
                data-color={color}
              >
                <span className="color-picker-keybinding">{index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
