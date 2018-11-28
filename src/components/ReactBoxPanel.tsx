
import * as React from "react";

import {BoxPanel} from "@phosphor/widgets/lib/boxpanel";
import {Widget} from "@phosphor/widgets/lib/widget";

import {absoluteFill, setNodeAbsolute, IWidgetParent, WidgetParentContext} from "./Common";

interface ReactBoxPanelProps {
  className?: string;
  style?: React.CSSProperties;

  options?: Partial<BoxPanel.IOptions>;
}

export default class ReactBoxPanel extends React.PureComponent<ReactBoxPanelProps, {}> {

  private boxPanel: BoxPanel;
  private elem: HTMLElement;

  private storedContext: IWidgetParent;

  constructor(props) {
    super(props);

    this.boxPanel = new BoxPanel(props.options || {});
  }

  componentDidMount() {
    this.attach();
  }

  componentDidUpdate(prevProps: ReactBoxPanelProps) {
    // TODO: get ts-transformer-keys working: keys<SplitPanel.IOptions>();
    const optionKeys: (keyof BoxPanel.IOptions)[] = ["alignment", "layout", "direction", "spacing"];
    for (let k of optionKeys) {
      if ((prevProps.options || {})[k as any] !== (this.props.options || {})[k as any]) {
        this.boxPanel[k] = this.props.options[k as any];
      }
    }

    this.attach();
  }

  attach() {
    let parent = this.storedContext;

    // If we have a parent, attach to it and render using portals
    // Otherwise, attach to our own React DOM node
    if (parent) {
      parent.receiveChild(this.boxPanel);
    } else {
      setNodeAbsolute(this.boxPanel.node);

      if (!this.boxPanel.isAttached) Widget.attach(this.boxPanel, this.elem);
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
               style={absoluteFill} />

          <WidgetParentContext.Consumer>
              {(value) => {this.storedContext = value; return null;}}
          </WidgetParentContext.Consumer>

          <WidgetParentContext.Provider value={this}>
              {this.props.children}
          </WidgetParentContext.Provider>
      </div>
    );
  }
}
