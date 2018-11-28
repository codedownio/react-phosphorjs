
import * as React from "react";

import {BoxPanel} from "@phosphor/widgets/lib/boxpanel";
import {Widget} from "@phosphor/widgets/lib/widget";

import {absoluteFill, setNodeAbsolute, IWidgetParent, WidgetParentContext} from "./Common";
import ReactContainerWidget from "./ReactContainerWidget";

interface ReactBoxPanelProps {

}

export default class ReactBoxPanel extends ReactContainerWidget<BoxPanel, BoxPanel.IOptions, ReactBoxPanelProps> {

  constructor(props) {
    super(props);

    this.containerWidget = new BoxPanel(props.options || {});

    this.optionKeys = ["alignment", "layout", "direction", "spacing"];
  }
}
