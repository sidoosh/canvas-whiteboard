import React, { Component, createRef } from 'react'
import Constants from '../../common/constants';
import Toolbar from '../toolbar'

class Board extends Component {

    constructor(props) {
        super(props)
        this.canvasRef = createRef(null)
        this.contextRef = createRef(null)
        this.state = {
            isDrawing: false
        }
    }

    initialiseCanvasDefaults = () => {
        const canvas = this.canvasRef.current
        canvas.width = window.innerWidth * 2
        canvas.height = window.innerWidth * 2;
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.height = `${window.innerHeight}px`
        const ctx = this.canvasRef.current.getContext('2d')
        ctx.scale(2, 2)
        ctx.lineCap = Constants.DEFAULT_LINECAP
        ctx.strokeStyle = Constants.DEFAULT_STROKE_COLOR
        ctx.lineWidth = Constants.DEFAULT_LINE_WIDTH
        this.contextRef.current = ctx
    }

    componentDidMount() {
        // window.addEventListener('resize', this.handleResize)
        this.initialiseCanvasDefaults()
    }

    handlMouseUp = (e) => {
        if (!this.state.isDrawing) return;

        this.contextRef.current.closePath()
        this.setState({ isDrawing: false })
    }

    handleMouseDown = (e) => {
        const { clientX, clientY } = e
        this.contextRef.current.beginPath()
        this.contextRef.current.moveTo(clientX, clientY)
        this.setState({ isDrawing: true })
    }

    handleMouseMove = (e) => {
        if (!this.state.isDrawing) return;

        const { clientX, clientY } = e
        this.contextRef.current.lineTo(clientX, clientY)
        this.contextRef.current.stroke()
    }

    render() {
        return (
            <div>
                <Toolbar />
                <canvas
                    ref={this.canvasRef}
                    onMouseDown={this.handleMouseDown}
                    onMouseMove={this.handleMouseMove}
                    onMouseUp={this.handlMouseUp}
                />
            </div>
        )
    }
}

export default Board

