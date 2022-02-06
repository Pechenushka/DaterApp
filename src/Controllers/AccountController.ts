import {BaseController, baseControllerProps} from './BaseController';

export type accountControllerProps = baseControllerProps & {};

class AccountController extends BaseController {

    constructor(props: accountControllerProps) {
        super(props);
    }
}

export {AccountController};

