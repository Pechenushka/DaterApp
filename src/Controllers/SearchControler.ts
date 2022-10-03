import {SearchModel} from '../Models/SearchModels/SearchModel';
import {BaseController, baseControllerProps} from './BaseController';

type searchControllerProps = baseControllerProps & {};

class SearchController extends BaseController {
  private _searchModel: SearchModel;
  constructor(props: searchControllerProps) {
    super(props);
    this._searchModel = new SearchModel({id: '_searchModel'});
  }

  public get searchModel() {
    return this._searchModel;
  }

  public forceUpdate = () => {
    this._searchModel = new SearchModel({id: '_searchModel'});
  };
}

export {SearchController};
