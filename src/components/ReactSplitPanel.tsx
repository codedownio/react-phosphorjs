
import * as React from "react";
import {keys} from "ts-transformer-keys";

import {SplitPanel} from "@phosphor/widgets/lib/splitpanel";
import {Widget} from "@phosphor/widgets/lib/widget";

import {absoluteFill, setNodeAbsolute, IWidgetParent, WidgetParentContext} from "./Common";

import ReactContainerWidget from "./ReactContainerWidget";

import "@phosphor/widgets/style/splitpanel.css";

interface ReactSplitPanelProps {
  sizes?: number[];
}

export default class ReactSplitPanel extends ReactContainerWidget<SplitPanel, SplitPanel.IOptions, ReactSplitPanelProps> {

  constructor(props) {
    super(props);

    this.containerWidget = new SplitPanel(props.options || {});

    // Note: "renderer" is not included because it's a read-only property
    // TODO: find a way to typecheck this
    this.optionKeys = ["alignment", "layout", "orientation", "spacing"];
  }

  attach() {
    super.attach();

    if (this.props.sizes) this.containerWidget.setRelativeSizes(this.props.sizes);
  }
}
