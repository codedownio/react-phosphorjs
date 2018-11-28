
import * as React from "react";
import {createPortal} from "react-dom";

import "./../assets/scss/App.scss";

import SplitPanelDemo from "./demos/SplitPanelDemo";
import TabPanelDemo from "./demos/TabPanelDemo";

import {absoluteFill, WidgetParentContext} from "./Common";

export default class App extends React.Component<{}, undefined> {

  render() {
    return (
      <div>
          <SplitPanelDemo />
          <TabPanelDemo />
      </div>
    );
  }
}
