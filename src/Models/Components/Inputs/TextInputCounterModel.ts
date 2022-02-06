import {BaseModel, baseModelProps} from '../../../Core/BaseModel';

type textInputCounterModelProps = baseModelProps & {
  maxLength: number;
};

class TextInputCounterModel extends BaseModel<textInputCounterModelProps> {
  private _counter: number = 0;
  constructor(props: textInputCounterModelProps) {
    super(props);
  }

  public get counter() {
    return this._counter;
  }

  public set counter(val) {
    if (this._counter === val) {
      return;
    }
    this._counter = val;
    this.forceUpdate();
  }

  public get maxLength() {
    return this.props.maxLength;
  }
}

export {TextInputCounterModel};
