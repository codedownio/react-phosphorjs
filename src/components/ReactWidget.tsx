
import * as PropTypes from "prop-types";
import * as React from "react";
import {createPortal} from "react-dom";

import {Widget} from "@phosphor/widgets/lib/widget";

require("@phosphor/widgets/style/widget.css");

import {IWidgetProps, WidgetParentContext, IWidgetParent} from "./Common";

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
  }

  componentDidMount() {
    let parent = this.storedContext;
    if (!parent) throw new Error("ReactWidget must be wrapped in a container component (BoxPanel, SplitPanel, etc.)");

    parent.receiveChild(this.widget);
  }

  componentDidUpdate() {

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
