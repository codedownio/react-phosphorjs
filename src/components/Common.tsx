
import * as React from "react";

import {Widget} from "@phosphor/widgets/lib/widget";

export const WidgetParentContext = React.createContext(null);

export interface IWidgetParent {
  receiveChild: (child: Widget) => void;
}

export const absoluteFill: React.CSSProperties = {
  position: "absolute",
  left: "0px",
  right: "0px",
  top: "0px",
  bottom: "0px",
};

export function setNodeAbsolute(node: HTMLElement) {
  node.style.position = "absolute";
  node.style.left = "0px";
  node.style.right = "0px";
  node.style.top = "0px";
  node.style.bottom = "0px";
}
