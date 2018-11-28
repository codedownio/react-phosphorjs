
import * as React from "react";
import {keys} from "ts-transformer-keys";

import {SplitPanel} from "@phosphor/widgets/lib/splitpanel";
import {Widget} from "@phosphor/widgets/lib/widget";

import {absoluteFill, setNodeAbsolute, IWidgetParent, WidgetParentContext} from "./Common";

import "@phosphor/widgets/style/splitpanel.css";

interface ReactSplitPanelProps {
  className?: string;
  style?: React.CSSProperties;

  sizes?: number[];

  options?: Partial<SplitPanel.IOptions>;
}

export default class ReactSplitPanel extends React.PureComponent<ReactSplitPanelProps, {}> {

  private elem: HTMLElement;
  private splitPanel: SplitPanel;

  private storedContext: IWidgetParent;

  constructor(props) {
    super(props);

    this.splitPanel = new SplitPanel(props.options || {});
  }

  componentDidMount() {
    this.attach();
  }

  componentDidUpdate(prevProps: ReactSplitPanelProps) {
    // TODO: get ts-transformer-keys working: keys<SplitPanel.IOptions>();
    const optionKeys: (keyof SplitPanel.IOptions)[] = ["alignment", "layout", "orientation", "renderer", "spacing"];
    for (let k of optionKeys) {
      if ((prevProps.options || {})[k as any] !== (this.props.options || {})[k as any]) {
        if (k === "renderer") {
          console.error("Tried to update read-only property " + k);
          continue;
        }

        this.splitPanel[k] = this.props.options[k as any];
      }
    }

    this.attach();
  }

  attach() {
    let parent = this.storedContext;

    // If we have a parent, attach to it and render using portals
    // Otherwise, attach to our own React DOM node
    if (parent) {
      parent.receiveChild(this.splitPanel);
    } else {
      setNodeAbsolute(this.splitPanel.node);

      if (!this.splitPanel.isAttached) Widget.attach(this.splitPanel, this.elem);
    }

    if (this.props.sizes) this.splitPanel.setRelativeSizes(this.props.sizes);
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
               style={absoluteFill} />

          <WidgetParentContext.Provider value={this}>
              {this.props.children}
          </WidgetParentContext.Provider>
      </div>
    );
  }
}
