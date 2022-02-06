import {ImageSourcePropType} from 'react-native';
import {BaseModel, baseModelProps} from '../../../Core/BaseModel';
import {SimpleCounterModel} from './SimpleCounterModel';

type simpleButtonModelProps = baseModelProps & {
  onPress: () => void;
  text?: string;
  icon?: ImageSourcePropType;
  disabled?: boolean;
};

class SimpleButtonModel extends BaseModel<simpleButtonModelProps> {
  private _disabled: boolean;
  private _counterModel: SimpleCounterModel;
  private _icon: ImageSourcePropType | null;

  constructor(props: simpleButtonModelProps) {
    super(props);
    this._disabled = props.disabled !== undefined ? props.disabled : false;
    this._counterModel = new SimpleCounterModel({id: '_counterModel', count: 0});
    this._icon = props.icon !== undefined ? props.icon : null;
  }

  public get text() {
    return this.props.text || null;
  }

  public get counterModel() {
    return this._counterModel;
  }

  public get icon() {
    return this._icon;
  }

  public set icon(Val) {
    if (this._icon === Val) {
      return;
    }
    this._icon = Val;
    this.forceUpdate();
  }

  public get disabled() {
    return this._disabled;
  }

  public set disabled(Val) {
    if (this._disabled === Val) {
      return;
    }
    this._disabled = Val;
    this.forceUpdate();
  }

  public onPress = async () => {
    this.props.onPress && this.props.onPress();
  };
}

export {SimpleButtonModel};
