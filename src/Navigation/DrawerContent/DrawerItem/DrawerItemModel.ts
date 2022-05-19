import {app} from '../../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../../Core/BaseModel';
import {baseScreenCreator} from '../../../Core/BaseScreen';
type drawerItemModelProps = baseModelProps & {
  label: string;
  onPress?: () => void;
};

class DrawerItemModel extends BaseModel<drawerItemModelProps> {
  constructor(props: drawerItemModelProps) {
    super(props);
  }

  public get label() {
    return this.props.label;
  }

  public onPress = () => {
    this.props.onPress && this.props.onPress();
  };
}

export {DrawerItemModel};
