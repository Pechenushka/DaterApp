import {baseModelProps} from '../Core/BaseModel';

export type baseControllerProps = baseModelProps & {
  name?: string;
  onBackPress: () => void;
};

class BaseController {
  private _props: baseControllerProps;

  constructor(props: baseControllerProps) {
    this._props = props;
  }

  public get props() {
    return this._props;
  }

  public get name() {
    return this._props.name;
  }

  public forceUpdate = () => {};
}

export {BaseController};
