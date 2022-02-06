import {LoginFormModel} from '../Models/LoginFormModel/LoginFormModel';
import {BaseController, baseControllerProps} from './BaseController';

type loginControllerProps = baseControllerProps & {};

class LoginController extends BaseController {
  private _loginFormModel: LoginFormModel;
  constructor(props: loginControllerProps) {
    super(props);
    this._loginFormModel = new LoginFormModel({id: '_loginFormModel'});
  }

  public get loginFormModel() {
    return this._loginFormModel;
  }
}

export {LoginController};
