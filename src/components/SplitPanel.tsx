
import * as React from "react";

import {SplitPanel} from "@phosphor/widgets/lib/splitpanel";
import {Widget} from "@phosphor/widgets/lib/widget";

export interface ReactSplitPanelProps {
  //children: ReactNodeWithWidget[];
}

export interface ReactSplitPanelState {

}

export default class ReactSplitPanel extends React.Component<ReactSplitPanelProps, ReactSplitPanelState> {

  private elem: HTMLElement;

  private splitPanel: SplitPanel;

  componentDidMount() {
    this.splitPanel = new SplitPanel();

    /* for (let child of this.props.children) {
     *   this.splitPanel.addWidget(child);
     * }*/
  }

  render() {
    return (
      <div ref={(c) => this.elem = c} />
    );
  }
}


type Constructor<T> = new (...args: any[]) => T;

class S {
  foo() {
    console.log("foo from S");
  }
}

// Here the possible SuperClass is set to {} (Object)
function WidgetMixin<T extends Constructor<Widget>>(SuperClass: T) {
  return class extends SuperClass {

  };
}

// Here the possible SuperClass (S) is specified
function ComponentMixin<T extends Constructor<React.PureComponent>>(SuperClass: T) {
  return class extends SuperClass {

  };
}

/* class RenderablePhosphorWidget extends WidgetMixin(React.PureComponent) {
 *
 * }*/

class RenderablePhosphorWidget extends Widget {

}

export class ReactNodeWithWidget extends React.Component {

  private widget: Widget;

  getWidget() {
    return this.widget;
  }

}
