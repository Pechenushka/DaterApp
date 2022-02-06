import {BaseModel, baseModelProps} from '../../../Core/BaseModel';

type taberModelProps = baseModelProps & {
  tabs: Array<string>;
  onChangeSelection: (activeIndex: number) => Promise<void>;
};

class TaberModel extends BaseModel<taberModelProps> {
  private _tabs: Array<string>;
  private _activeIndex: number = 0;
  constructor(props: taberModelProps) {
    super(props);
    this._tabs = props.tabs !== undefined ? props.tabs : [];
  }

  public get tabs() {
    return this._tabs;
  }

  public get activeIndex() {
    return this._activeIndex;
  }

  public changeSelectedItem = async (activeIndex: number) => {
    this._activeIndex = activeIndex;
    this.props.onChangeSelection(activeIndex);
    this.forceUpdate();
  };
}

export {TaberModel};
