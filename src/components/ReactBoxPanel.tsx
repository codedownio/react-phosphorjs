
import * as React from "react";

import {BoxPanel} from "@phosphor/widgets/lib/boxpanel";
import {Widget} from "@phosphor/widgets/lib/widget";

import {IWidgetParent} from "./Common";

interface ReactBoxPanelProps {
  parent?: IWidgetParent;
  withParent: (parent: IWidgetParent) => JSX.Element[] | JSX.Element;

  className?: string;
  style?: React.CSSProperties;
}

export default class ReactBoxPanel extends React.Component<ReactBoxPanelProps, {}> {

  private elem: HTMLElement;

  private boxPanel: BoxPanel;

  constructor(props) {
    super(props);

    this.boxPanel = new BoxPanel();
  }

  componentDidMount() {
    this.attach();
  }

  componentDidUpdate() {
    this.attach();
  }

  attach() {
    // If we have a parent, attach to it and render using portals
    // Otherwise, attach to our own React DOM node
    if (this.props.parent) {
      this.props.parent.receiveChild(this.boxPanel);
    } else {
      this.boxPanel.node.style.position = "absolute";
      this.boxPanel.node.style.left = "0px";
      this.boxPanel.node.style.right = "0px";
      this.boxPanel.node.style.top = "0px";
      this.boxPanel.node.style.bottom = "0px";

      Widget.attach(this.boxPanel, this.elem);
    }
  }

  receiveChild(child: Widget) {
    this.boxPanel.addWidget(child);
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
