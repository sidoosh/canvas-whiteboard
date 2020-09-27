import React from "react";
import "./App.css";
import Board from "./components/board";

//Add Error Boundaries
function App() {
  return (
    <div className="app">
      <Board className="board" />
    </div>
  );
}

export default App;
