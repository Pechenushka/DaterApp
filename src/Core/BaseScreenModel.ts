import {BaseModel, baseModelProps} from './BaseModel';

type baseScreenModelProps = baseModelProps & {
  screenName: string;
};

class BaseScreenModel extends BaseModel<baseScreenModelProps> {
  constructor(props: baseScreenModelProps) {
    super(props);
  }
}

export {BaseScreenModel};
export type {baseScreenModelProps};
