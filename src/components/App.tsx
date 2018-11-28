
import * as React from "react";
import {createPortal} from "react-dom";

import "./../assets/scss/App.scss";

const reactLogo = require("./../assets/img/react_logo.svg");

import ReactBoxPanel from "./ReactBoxPanel";
import ReactSplitPanel from "./ReactSplitPanel";
import ReactWidget from "./ReactWidget";

const absoluteFill: React.CSSProperties = {
  position: "absolute",
  left: "0px",
  right: "0px",
  top: "0px",
  bottom: "0px",
};

export default class App extends React.Component<{}, undefined> {

  render() {
    return (
      <div className="app">
          <h1>Hello World!</h1>
          <p>Foo to the barzzzzzzzzzzzz</p>

          <ReactSplitPanel withParent={(parent) =>
            <div>
                <ReactWidget parent={parent}>
                    <div className=""
                             style={{
                               backgroundColor: "red",
                               ...absoluteFill
                             }}>
                        <p>Hi there</p>
                    </div>
                </ReactWidget>

                <ReactWidget parent={parent}>
                    <h1>Other thingggg</h1>
                </ReactWidget>

                <ReactBoxPanel parent={parent}
                               withParent={(boxParent) =>
                                 <div>
                                     <ReactWidget parent={boxParent}>
                                         <h1>First box panel thing</h1>
                                     </ReactWidget>

                                     <ReactWidget parent={boxParent}>
                                         <h1>Second box panel thing</h1>
                                     </ReactWidget>
                                 </div>

                                          } />
            </div>}
                           style={{
                             width: "500px",
                             height: "500px",
                             border: "solid 1px black"
                           }}

                           sizes={[0.2, 0.4, 0.4]} />
      </div>
    );
  }
}
