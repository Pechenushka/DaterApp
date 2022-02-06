import {BaseModel, baseModelProps} from '../Core/BaseModel';
import {DrawerContentModel} from './DrawerContent/DrawerContentModel';

type mainNavigationModelProps = baseModelProps & {};

class MainNavigationModel extends BaseModel<mainNavigationModelProps> {
  private _drawerContent: DrawerContentModel;

  constructor(props: mainNavigationModelProps) {
    super(props);
    this._drawerContent = new DrawerContentModel({id: 'Custom_DrawerContentModel'});
  }

  public get drawerContentModel() {
    return this._drawerContent;
  }
}

export {MainNavigationModel};
