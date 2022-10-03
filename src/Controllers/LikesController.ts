import {LikesModel} from '../Models/LikesModels/LikesModel';
import {BaseController, baseControllerProps} from './BaseController';

type likesControllerProps = baseControllerProps & {};

class LikesController extends BaseController {
  private _likesModel: LikesModel;
  constructor(props: likesControllerProps) {
    super(props);
    this._likesModel = new LikesModel({id: '_likesModel'});
  }

  public get likesModel() {
    return this._likesModel;
  }

  public forceUpdate = () => {
    this._likesModel = new LikesModel({id: '_likesModel'});
  };
}

export {LikesController};
