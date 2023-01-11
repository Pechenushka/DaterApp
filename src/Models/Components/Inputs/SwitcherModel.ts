import {BaseModel, baseModelProps} from '../../../Core/BaseModel';

type switcherModelProps = baseModelProps & {
  onValueChange?: (value: boolean) => Promise<any>;
};

class SwitcherModel extends BaseModel<switcherModelProps> {
  private _value: boolean = false;

  constructor(props: switcherModelProps) {
    super(props);
  }

  public get value() {
    return this._value;
  }

  public set value(Val) {
    this._value = Val;
    this.forceUpdate();
  }

  public switch = async () => {
    this.value = !this.value;
    this.props.onValueChange && this.props.onValueChange(this.value);
  };
}

export {SwitcherModel};
