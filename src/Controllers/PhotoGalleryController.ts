import {ChatListModel} from '../Models/ChatListModels/ChatListModel';
import {PhotoGalleryModel} from '../Models/PhotoGalleryModels/PhotoGalleryModel';
import {BaseController, baseControllerProps} from './BaseController';

type photoGalleryControllerProps = baseControllerProps & {};

class PhotoGalleryController extends BaseController {
  private _photoGalleryModel: PhotoGalleryModel;
  constructor(props: photoGalleryControllerProps) {
    super(props);
    this._photoGalleryModel = new PhotoGalleryModel({id: '_photoGalleryModel'});
  }

  public get photoGalleryModel() {
    return this._photoGalleryModel;
  }

  public forceUpdate = () => {
    this._photoGalleryModel = new PhotoGalleryModel({id: '_photoGalleryModel'});
  };
}

export {PhotoGalleryController};
