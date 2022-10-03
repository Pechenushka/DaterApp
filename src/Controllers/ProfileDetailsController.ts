import {ProfileDetailsModel} from '../Models/ProfileDetailsModels/ProfileDetailsModel';
import {BaseController, baseControllerProps} from './BaseController';

export type profileDetailsControllerProps = baseControllerProps & {};

class ProfileDetailsController extends BaseController {
  private _profileModel: ProfileDetailsModel;
  private _userId: any;
  constructor(props: profileDetailsControllerProps) {
    super(props);
    //@ts-ignore
    this._profileModel = new ProfileDetailsModel({id: '_profileModel', userId: props.userId});
    //@ts-ignore
    this._userId = props.userId;
  }

  public get profileModel() {
    return this._profileModel;
  }

  public forceUpdate = () => {
    this._profileModel = new ProfileDetailsModel({id: '_profileModel', userId: this._userId});
  };
}

export {ProfileDetailsController};
