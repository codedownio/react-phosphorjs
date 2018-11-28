
import * as PropTypes from "prop-types";
import * as React from "react";
import {createPortal} from "react-dom";

import {Widget} from "@phosphor/widgets/lib/widget";

import {Title} from "@phosphor/widgets/lib/title";

require("@phosphor/widgets/style/widget.css");

import {WidgetParentContext, IWidgetParent} from "./Common";

export interface IWidgetProps {
  title?: Partial<Title.IOptions<Widget>>;
}

export default class ReactWidget extends React.PureComponent<IWidgetProps, {}> {
  private widget: Widget;

  // TODO: aah why isn't this working
  // Some indication that this may be unstable (i.e. worked on 16.6.3 but not 16.6.1)
  // https://stackoverflow.com/questions/53110121/react-new-context-api-not-working-with-class-contexttype-but-works-with-conte
  static contextType = WidgetParentContext;
  contextType = WidgetParentContext;

  private storedContext: IWidgetParent;

  constructor(props) {
    super(props);
    this.widget = new Widget();

    ReactWidget.setTitleKeys(this.widget, {}, props);
  }

  componentDidMount() {
    let parent = this.storedContext;
    if (!parent) throw new Error("ReactWidget must be wrapped in a container component (BoxPanel, SplitPanel, etc.)");

    parent.receiveChild(this.widget);
  }

  componentDidUpdate(prevProps: IWidgetProps) {
    ReactWidget.setTitleKeys(this.widget, prevProps, this.props);
  }

  static setTitleKeys(widget: Widget, prevProps: IWidgetProps, props: IWidgetProps) {
    let titleKeys: (keyof Title.IOptions<Widget>)[] = ["caption", "className", "closable", "dataset", "icon", "iconClass", "iconLabel", "label", "mnemonic"];

    for (let k of titleKeys) {
      if ((prevProps.title || {})[k as any] !== (props.title || {})[k as any]) {
        widget.title[k as any] = props.title[k as any];
      }
    }
  }

  render() {
    return createPortal(
      <div>
          <p>
              <WidgetParentContext.Consumer>
                  {(value) => { this.storedContext = value; return null; }}
              </WidgetParentContext.Consumer>
          </p>
          {this.props.children}
      </div>,
      this.widget.node
    );
  }
}
