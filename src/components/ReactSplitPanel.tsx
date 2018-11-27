
import * as React from "react";

import {SplitPanel} from "@phosphor/widgets/lib/splitpanel";
import {Widget} from "@phosphor/widgets/lib/widget";

import {IWidgetParent} from "./Common";

require("@phosphor/widgets/style/splitpanel.css");

interface ReactSplitPanelProps {
  withParent: (parent: IWidgetParent) => JSX.Element[] | JSX.Element;
  className?: string;
  style?: React.CSSProperties;
}

export default class ReactSplitPanel extends React.Component<ReactSplitPanelProps, {}> {

  private elem: HTMLElement;

  private splitPanel: SplitPanel;

  constructor(props) {
    super(props);

    this.splitPanel = new SplitPanel();

    this.splitPanel.node.style.position = "absolute";
    this.splitPanel.node.style.left = "0px";
    this.splitPanel.node.style.right = "0px";
    this.splitPanel.node.style.top = "0px";
    this.splitPanel.node.style.bottom = "0px";
  }

  componentDidMount() {
    Widget.attach(this.splitPanel, this.elem);
  }

  componentDidUpdate() {
    Widget.attach(this.splitPanel, this.elem);
  }

  receiveChild(child: Widget) {
    this.splitPanel.addWidget(child);
  }

  render() {
    return (
      <div className={this.props.className || ""}
           style={{
             position: "relative",
             ...(this.props.style || {})
           }}>

          <div ref={(c) => this.elem = c}
               style={{
                 position: "absolute",
                 left: 0,
                 right: 0,
                 top: 0,
                 bottom: 0,
               }} />

          {this.props.withParent(this)}
      </div>
    );
  }
}
