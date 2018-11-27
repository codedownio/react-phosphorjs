
import * as React from "react";
import {createPortal} from "react-dom";

import {Widget} from "@phosphor/widgets/lib/widget";

require("@phosphor/widgets/style/widget.css");

import {IWidgetProps} from "./Common";

export default class ReactWidget extends React.Component<IWidgetProps, {}> {
  widget: Widget;

  constructor(props) {
    super(props);
    this.widget = new Widget();
  }

  componentDidMount() {
    this.props.parent.receiveChild(this.widget);
  }

  render() {
    return createPortal(
      <div>{this.props.children}</div>,
      this.widget.node
    );
  }
}
