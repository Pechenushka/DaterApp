import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {HomeScreen} from '../../Screens/HomeScreen';
import {DrawerItemModel} from './DrawerItem/DrawerItemModel';

type drawerContentModelProps = baseModelProps & {};

class DrawerContentModel extends BaseModel<drawerContentModelProps> {
  private _drawerButton: DrawerItemModel;

  constructor(props: drawerContentModelProps) {
    super(props);

    this._drawerButton = new DrawerItemModel({
      id: 'drawer_item_allInkasations',
      label: 'Мої',
      screenImpl: HomeScreen,
    });
  }

  public get drawerButton() {
    return this._drawerButton;
  }
}

export {DrawerContentModel};
