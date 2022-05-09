import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {MainProfileScreen} from '../../Screens/MainProfileScreen';
import {DrawerItemModel} from './DrawerItem/DrawerItemModel';

type drawerContentModelProps = baseModelProps & {};

class DrawerContentModel extends BaseModel<drawerContentModelProps> {
  private _drawerButton: DrawerItemModel;

  constructor(props: drawerContentModelProps) {
    super(props);

    this._drawerButton = new DrawerItemModel({
      id: 'drawer_item_allInkasations',
      label: 'Мої',
      screenImpl: MainProfileScreen,
    });
  }

  public get drawerButton() {
    return this._drawerButton;
  }
}

export {DrawerContentModel};
