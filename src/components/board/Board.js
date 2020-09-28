import React, { Component, createRef } from "react";
import Constants from "../../common/constants";
import Toolbar from "../toolbar";
import "./Board.css";
class Board extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = createRef(null);
    this.contextRef = createRef(null);
    this.draftRef = createRef(null);
    this.draftContextRef = createRef(null);
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
    const draft = this.draftRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    draft.width = window.innerWidth;
    draft.height = window.innerWidth;
    draft.style.width = `${window.innerWidth}px`;
    draft.style.height = `${window.innerHeight}px`;

    const ctx = this.canvasRef.current.getContext("2d");
    const draftCtx = this.draftRef.current.getContext("2d");
    ctx.scale(1, 1);
    draftCtx.scale(1, 1);
    draftCtx.lineCap = Constants.DEFAULT_LINECAP;
    draftCtx.strokeStyle = this.state.brushStyle.color;
    draftCtx.lineWidth = this.state.brushStyle.width;
    this.draftContextRef.current = draftCtx;
    draft.style.opacity = Constants.DEFAULT_OPACITY;
    ctx.globalAlpha = Constants.DEFAULT_OPACITY;
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
    let rect = this.draftRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  handlMouseUp = (e) => {
    if (!this.state.isDrawing) return;
    this.draftContextRef.current.closePath();
    this.setState({ isDrawing: false });
    this.contextRef.current.drawImage(this.draftRef.current, 0, 0);
    this.draftContextRef.current.clearRect(
      0,
      0,
      this.draftRef.current.width,
      this.draftRef.current.height
    );
  };

  handleMouseDown = (e) => {
    const { x, y } = this.getMousePos(e);
    this.draftContextRef.current.strokeStyle = this.state.brushStyle.color;
    this.draftContextRef.current.lineWidth = this.state.brushStyle.width;
    this.draftContextRef.current.beginPath();
    this.draftContextRef.current.moveTo(x, y);
    this.setState({ isDrawing: true });
    this.point = {
      x,
      y,
    };
  };

  handleMouseMove = (e) => {
    if (!this.state.isDrawing) return;

    const { x, y } = this.getMousePos(e);
    if (this.state.selectedTool === Constants.TOOLS.PEN) {
      this.draftContextRef.current.lineTo(x, y);
      this.draftContextRef.current.stroke();
      this.draftRef.current.style.opacity = Constants.DEFAULT_OPACITY;
    } else if (this.state.selectedTool === Constants.TOOLS.ERASER) {
      const width = this.state.brushStyle.width;
      this.draftContextRef.current.clearRect(x, y, 4 * width, 4 * width);
      this.contextRef.current.clearRect(x, y, 4 * width, 4 * width);
    } else if (this.state.selectedTool === Constants.TOOLS.HIGHLIGHTER) {
      this.draftRef.current.style.opacity = Constants.HIGHLIGHTER_OPACITY;
      this.draftContextRef.current.lineTo(x, y);
      this.draftContextRef.current.stroke();
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
          width: 5,
        },
      });
    } else {
      this.setState({
        selectedTool: tool,
        hideTool: current === tool && !this.state.hideTool,
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
        <canvas className="canvas-wrapper" ref={this.canvasRef} />
        <canvas
          className="canvas-wrapper"
          ref={this.draftRef}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handlMouseUp}
        />
      </div>
    );
  }
}

export default Board;
