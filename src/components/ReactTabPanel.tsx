
import * as React from "react";
import {keys} from "ts-transformer-keys";

import {TabPanel} from "@phosphor/widgets/lib/tabpanel";
import {Widget} from "@phosphor/widgets/lib/widget";

import {absoluteFill, setNodeAbsolute, IWidgetParent, WidgetParentContext} from "./Common";

import ReactContainerWidget from "./ReactContainerWidget";

import "@phosphor/widgets/style/tabpanel.css";

interface ReactTabPanelProps {
  sizes?: number[];
}

export default class ReactTabPanel extends ReactContainerWidget<TabPanel, TabPanel.IOptions, ReactTabPanelProps> {

  constructor(props) {
    super(props);

    this.containerWidget = new TabPanel(props.options || {});
    this.optionKeys = ["tabPlacement", "tabsMovable"];
  }
}
