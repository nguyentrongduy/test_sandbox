import React from "react";
import ReactDOM from "react-dom";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
import "./styles.css";

const styles = {
  slideInDown58: {
    animation: ".55s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  },
  slideInDown05: {
    animation: ".5s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  }
};

function App() {
  return (
    <StyleRoot>
      <div className="App">
        <h1 style={styles.slideInDown05}>Hello CodeSandbox</h1>
        <h2 style={styles.slideInDown58}>
          Start editing to see some magic happen!
        </h2>
      </div>
    </StyleRoot>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
