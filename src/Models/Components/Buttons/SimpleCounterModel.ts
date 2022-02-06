import {BaseModel, baseModelProps} from '../../../Core/BaseModel';

type simpleCounterModelProps = baseModelProps & {
  count: number;
};

class SimpleCounterModel extends BaseModel<simpleCounterModelProps> {
  private _count: number;

  constructor(props: simpleCounterModelProps) {
    super(props);
    this._count = props.count !== undefined ? props.count : 0;
  }

  public get count() {
    return this._count;
  }

  public set count(Val) {
    if (this._count === Val) {
      return;
    }
    this._count = Val;
    this.forceUpdate();
  }
}

export {SimpleCounterModel};
