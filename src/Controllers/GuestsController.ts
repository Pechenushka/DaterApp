import {GuestsModel} from '../Models/GuestsModel/GuestsModel';
import {BaseController, baseControllerProps} from './BaseController';

type guestsControllerProps = baseControllerProps & {};

class GuestsController extends BaseController {
  private _guestsModel: GuestsModel;
  constructor(props: guestsControllerProps) {
    super(props);
    this._guestsModel = new GuestsModel({
      id: '_guestsModel',
    });
  }

  public get guestsModel() {
    return this._guestsModel;
  }

  public forceUpdate = () => {
    this._guestsModel = new GuestsModel({
      id: '_guestsModel',
    });
  };
}

export {GuestsController};
