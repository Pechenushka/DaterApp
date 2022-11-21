import {PhotoAccessRequestsModel} from '../Models/PhotoAccessRequestsModels/PhotoAccessRequestsModel';
import {BaseController, baseControllerProps} from './BaseController';

type photoAccessRequestsControllerProps = baseControllerProps & {};

class PhotoAccessRequestsController extends BaseController {
  private _photoAccessRequestsModel: PhotoAccessRequestsModel;
  constructor(props: photoAccessRequestsControllerProps) {
    super(props);
    this._photoAccessRequestsModel = new PhotoAccessRequestsModel({
      id: '_photoAccessRequestsModel',
    });
  }

  public get photoAccessRequestsModel() {
    return this._photoAccessRequestsModel;
  }

  public forceUpdate = () => {
    this._photoAccessRequestsModel = new PhotoAccessRequestsModel({
      id: '_photoAccessRequestsModel',
    });
  };
}

export {PhotoAccessRequestsController};
