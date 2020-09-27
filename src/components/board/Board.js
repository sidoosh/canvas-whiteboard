import React, { Component, createRef } from "react";
import Constants from "../../common/constants";
import Toolbar from "../toolbar";
import "./Board.css";
class Board extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = createRef(null);
    this.contextRef = createRef(null);
    this.state = {
      isDrawing: false,
      brushStyle: {
        color: Constants.DEFAULT_STROKE_COLOR,
        width: Constants.DEFAULT_LINE_WIDTH,
      },
      selectedTool: Constants.DEFAULT_TOOL,
      isClearing: false,
      prevTool: null,
    };
  }

  initialiseCanvasDefaults = () => {
    const canvas = this.canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerWidth * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const ctx = this.canvasRef.current.getContext("2d");
    ctx.scale(2, 2);
    ctx.lineCap = Constants.DEFAULT_LINECAP;
    ctx.strokeStyle = this.state.brushStyle.color;
    ctx.lineWidth = this.state.brushStyle.width;
    this.contextRef.current = ctx;
  };

  unloadHandler = (e) => {
    e.preventDefault();
    return (e.returnValue = "Are you sure you want to close?");
  };

  componentDidMount() {
    // window.addEventListener('resize', this.handleResize)
    this.initialiseCanvasDefaults();
    window.addEventListener("beforeunload", this.unloadHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.unloadHandler);
  }

  handlMouseUp = (e) => {
    if (!this.state.isDrawing) return;
    e.stopPropagation();
    this.contextRef.current.closePath();
    this.contextRef.current.save();
    this.setState({ isDrawing: false });
  };

  handleMouseDown = (e) => {
    e.stopPropagation();
    const { clientX, clientY } = e;
    this.contextRef.current.strokeStyle = this.state.brushStyle.color;
    this.contextRef.current.lineWidth = this.state.brushStyle.width;
    this.contextRef.current.beginPath();
    this.contextRef.current.moveTo(clientX, clientY);
    this.setState({ isDrawing: true });
  };

  handleMouseMove = (e) => {
    if (!this.state.isDrawing) return;
    e.stopPropagation();
    const { clientX, clientY } = e;

    if (this.state.selectedTool === Constants.TOOLS.PEN) {
      this.contextRef.current.lineTo(clientX, clientY);
      this.contextRef.current.stroke();
    } else if (this.state.selectedTool === Constants.TOOLS.ERASER) {
      const width = this.state.brushStyle.width;
      this.contextRef.current.clearRect(clientX, clientY, 4 * width, 4 * width);
    }
  };

  handleBrushChange = (style) => {
    const { brushStyle } = this.state;

    this.setState({
      brushStyle: {
        ...brushStyle,
        ...style,
      },
    });
  };

  handleToolChange = (e) => {
    const { tool } = e.currentTarget.dataset;
    const prevTool = this.state.selectedTool;
    this.setState({
      selectedTool: tool,
      prevTool,
    });
  };

  render() {
    return (
      <div className="broad-wrapper">
        <Toolbar
          className="toolbar"
          changeBrushStyle={this.handleBrushChange}
          selectedTool={this.state.selectedTool}
          prevTool={this.state.prevTool}
          changeTool={this.handleToolChange}
          brushStyle={this.state.brushStyle}
        />
        <canvas
          ref={this.canvasRef}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handlMouseUp}
        />
      </div>
    );
  }
}

export default Board;
