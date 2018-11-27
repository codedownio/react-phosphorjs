
import * as React from "react";
import {createPortal} from "react-dom";

import "./../assets/scss/App.scss";

const reactLogo = require("./../assets/img/react_logo.svg");

import ReactSplitPanel from "./ReactSplitPanel";
import ReactWidget from "./ReactWidget";

export default class App extends React.Component<{}, undefined> {

  render() {
    let absoluteFill: React.CSSProperties = {
      position: "absolute",
      left: "0px",
      right: "0px",
      top: "0px",
      bottom: "0px",
    };

    return (
      <div className="app">
          <h1>Hello World!</h1>
          <p>Foo to the barzzzzzzzzzzzz</p>

          <ReactSplitPanel withParent={(parent) => {
              return [
                <ReactWidget key="blue"
                             parent={parent}>
                    <div className=""
                             style={{
                               backgroundColor: "red",
                               ...absoluteFill
                             }}>
                        <p>Hi there</p>
                    </div>
                </ReactWidget>,

                <ReactWidget key="red"
                             parent={parent}>
                    <h1>Other thingggg</h1>
                </ReactWidget>
              ];
          }} style={{
            width: "500px",
            height: "500px",
            border: "solid 1px black"
          }} />
      </div>
    );
  }
}
