import {BaseModel, baseModelProps} from '../../../Core/BaseModel';

type roundAvatarModelProps = baseModelProps & {};

class RoundAvatarModel extends BaseModel<roundAvatarModelProps> {
  constructor(props: roundAvatarModelProps) {
    super(props);
  }
}

export {RoundAvatarModel};
