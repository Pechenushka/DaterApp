import {BaseModel, baseModelProps} from '../../../Core/BaseModel';

type labelModelProps = baseModelProps & {
  text?: string;
};

class LabelModel extends BaseModel<labelModelProps> {
  private _text: string;
  constructor(props: labelModelProps) {
    super(props);
    this._text = props.text || '';
  }

  public get text() {
    return this._text;
  }

  public set text(Val) {
    if (this._text === Val) {
      return;
    }
    this._text = Val;
    this.forceUpdate();
  }
}

export {LabelModel};
