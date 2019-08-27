import React, { useState, useEffect } from "react";
import "./App.css";
import { Launcher } from "react-chat-window";
import { Input, Button } from "semantic-ui-react";
import Component from "./Component";
const Peer = window.Peer;
const p5 = window.p5;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Component></Component>
      </header>
    </div>
  );
}

export default App;
