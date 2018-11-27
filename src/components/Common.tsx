
import {Widget} from "@phosphor/widgets/lib/widget";

export interface IWidgetParent {
  receiveChild: (child: Widget) => void;
}

export interface IWidgetProps {
  parent: IWidgetParent;
}
