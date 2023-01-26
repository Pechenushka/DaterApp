import {HelpModel} from '../Models/HelpModels/HelpModel';
import {BaseController, baseControllerProps} from './BaseController';

type helpControllerProps = baseControllerProps & {};

class HelpController extends BaseController {
  private _helpModel: HelpModel;
  constructor(props: helpControllerProps) {
    super(props);
    this._helpModel = new HelpModel({
      id: '_helpModel',
    });
  }

  public get helpModel() {
    return this._helpModel;
  }

  public forceUpdate = () => {
    this._helpModel = new HelpModel({
      id: '_helpModel',
    });
  };
}

export {HelpController};
