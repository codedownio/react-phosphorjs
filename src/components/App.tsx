
import * as React from "react";
import {createPortal} from "react-dom";

import "./../assets/scss/App.scss";

const reactLogo = require("./../assets/img/react_logo.svg");

import ReactBoxPanel from "./ReactBoxPanel";
import ReactSplitPanel from "./ReactSplitPanel";
import ReactWidget from "./ReactWidget";

import {absoluteFill, WidgetParentContext} from "./Common";

export default class App extends React.Component<{}, undefined> {

  render() {
    return (
      <div className="app">
          <h1>Hello World!</h1>

          <ReactSplitPanel sizes={[0.2, 0.4, 0.4]}
                           options={{
                             orientation: "horizontal"
                           }}
                           style={{
                             width: "500px",
                             height: "500px",
                             border: "solid 1px black"
                           }}>

              <ReactWidget>
                  <div className=""
                       style={{
                         backgroundColor: "red",
                         ...absoluteFill
                       }}>
                      <p>Hi there</p>
                  </div>
              </ReactWidget>

              <ReactWidget>
                  <h1>Other thingggg</h1>
              </ReactWidget>

              <ReactBoxPanel options={{direction: "top-to-bottom"}}>
                  <ReactWidget>
                      <h1>First box panel thing</h1>
                  </ReactWidget>

                  <ReactWidget>
                      <h1>Second box panel thingggg</h1>
                  </ReactWidget>
              </ReactBoxPanel>
          </ReactSplitPanel>
      </div>
    );
  }
}
