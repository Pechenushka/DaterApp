import {BaseModel, baseModelProps} from '../../../Core/BaseModel';

type genderSvitcherModelProps = baseModelProps & {
  allMode?: boolean;
};
export type genderEnum = 'male' | 'female' | 'all';

class GenderSvitcherModel extends BaseModel<genderSvitcherModelProps> {
  private _value: genderEnum = 'male';
  private _allMode: boolean = false;
  constructor(props: genderSvitcherModelProps) {
    super(props);
    this._allMode = props.allMode !== undefined ? props.allMode : false;
  }

  public get value() {
    return this._value;
  }

  public set value(Val) {
    this._value = Val;
    this.forceUpdate();
  }

  public get allMode() {
    return this._allMode;
  }

  public setGender = async (gender: genderEnum) => {
    this.value = gender;
  };
}

export {GenderSvitcherModel};
