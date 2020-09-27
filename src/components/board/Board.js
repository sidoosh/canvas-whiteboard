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
      hideTool: false,
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

  getMousePos = (e) => {
    var rect = this.canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  handlMouseUp = (e) => {
    if (!this.state.isDrawing) return;
    this.contextRef.current.closePath();
    // this.contextRef.current.save();
    this.setState({ isDrawing: false });
  };

  handleMouseDown = (e) => {
    const { x, y } = this.getMousePos(e);
    this.contextRef.current.strokeStyle = this.state.brushStyle.color;
    this.contextRef.current.lineWidth = this.state.brushStyle.width;
    this.contextRef.current.beginPath();
    this.contextRef.current.moveTo(x, y);
    this.setState({ isDrawing: true });
  };

  handleMouseMove = (e) => {
    if (!this.state.isDrawing) return;

    const { x, y } = this.getMousePos(e);
    if (this.state.selectedTool === Constants.TOOLS.PEN) {
      this.contextRef.current.lineTo(x, y);
      this.contextRef.current.stroke();
      this.contextRef.current.globalAlpha = 1;
    } else if (this.state.selectedTool === Constants.TOOLS.ERASER) {
      const width = this.state.brushStyle.width;
      this.contextRef.current.globalAlpha = 1;
      this.contextRef.current.clearRect(x, y, 4 * width, 4 * width);
    } else if (this.state.selectedTool === Constants.TOOLS.HIGHLIGHTER) {
      this.contextRef.current.globalAlpha = 0.5;
      this.contextRef.current.lineTo(x, y);
      this.contextRef.current.stroke();
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
    const { selectedTool: current } = this.state;
    const { brushStyle } = this.state;
    if (tool === Constants.TOOLS.HIGHLIGHTER) {
      this.setState({
        selectedTool: tool,
        hideTool: current === tool && !this.state.hideTool,
        brushStyle: {
          ...brushStyle,
          alpha: 0.5,
          width: 5,
        },
      });
    } else {
      this.setState({
        selectedTool: tool,
        hideTool: current === tool && !this.state.hideTool,
        brushStyle: {
          ...brushStyle,
          alpha: 1,
        },
      });
    }
  };

  render() {
    return (
      <div className="broad-wrapper">
        <Toolbar
          className="toolbar"
          changeBrushStyle={this.handleBrushChange}
          selectedTool={this.state.selectedTool}
          hideTool={this.state.hideTool}
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
