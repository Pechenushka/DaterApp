import {RegistrationFormModel} from '../Models/RegistrationFormModel/RegistrationFormModel';
import {BaseController, baseControllerProps} from './BaseController';

type registrationControllerProps = baseControllerProps & {};

class RegistrationController extends BaseController {
  private _registrationFormModel: RegistrationFormModel;
  constructor(props: registrationControllerProps) {
    super(props);
    this._registrationFormModel = new RegistrationFormModel({id: '_registrationFormModel'});
  }

  public get registrationFormModel() {
    return this._registrationFormModel;
  }
}

export {RegistrationController};
