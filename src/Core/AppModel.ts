import {BaseModel, baseModelProps} from './BaseModel';
import {app} from './AppImpl';

type appModelProps = baseModelProps & {appName: string};

class AppModel extends BaseModel<appModelProps> {
  constructor(props: appModelProps) {
    super(props);
  }

  public get appName() {
    return this.props.appName;
  }
  public async handleBackground(state: string) {
    await app.navigator.handleBackground(state);
  }
}
export {AppModel};
