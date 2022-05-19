import {Linking} from 'react-native';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {_} from '../../Core/Localization';
import {MainProfileScreen} from '../../Screens/MainProfileScreen';
import {DrawerItemModel} from './DrawerItem/DrawerItemModel';

type drawerContentModelProps = baseModelProps & {};

class DrawerContentModel extends BaseModel<drawerContentModelProps> {
  private _drawerButton: DrawerItemModel;

  constructor(props: drawerContentModelProps) {
    super(props);

    this._drawerButton = new DrawerItemModel({
      id: 'drawer_item_allInkasations',
      label: _.lang.feedback,
      onPress: this.onContactUsPress,
    });
  }

  public onContactUsPress = async () => {
    Linking.openURL('mailto:smsoftfeedback@gmail.com');
  };

  public get drawerButton() {
    return this._drawerButton;
  }
}

export {DrawerContentModel};
