
import * as React from "react";
import {createPortal} from "react-dom";

import "../../assets/scss/App.scss";

const reactLogo = require("../../assets/img/react_logo.svg");

import ReactBoxPanel from "../ReactBoxPanel";
import ReactTabPanel from "../ReactTabPanel";
import ReactWidget from "../ReactWidget";

import {absoluteFill, WidgetParentContext} from "../Common";

export default class TabPanelDemo extends React.Component<{}, undefined> {

  render() {
    return (
      <div className="app">
          <h1>Tab panel</h1>

          <ReactTabPanel sizes={[0.2, 0.4, 0.4]}
                         options={{

                         }}
                         style={{
                           width: "500px",
                           height: "500px",
                           border: "solid 1px black"
                         }}>

              <ReactWidget title={{label: "First widget"}}>
                  <p>Hi there</p>
              </ReactWidget>

              <ReactWidget title={{label: "Second widget"}}>
                  <h1>Middle section</h1>
              </ReactWidget>
          </ReactTabPanel>
      </div>
    );
  }
}
