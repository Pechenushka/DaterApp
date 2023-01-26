import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {_} from '../../Core/Localization';

type guestItemModelProps = baseModelProps & {
  date: number;
  guestId: number;
  guestAvatar: string;
  guestGender: string;
  guestName: string;
  guestBirthDate: number;
  guestWay: number;
  isNew: boolean;
  onItemPress?: (guestId: number) => Promise<any>;
};

class GuestItemModel extends BaseModel<guestItemModelProps> {
  constructor(props: guestItemModelProps) {
    super(props);
  }

  public get guestItemId() {
    return this.props.id;
  }

  public get date() {
    return this.props.date;
  }

  public get guestAvatar() {
    return this.props.guestAvatar;
  }

  public get guestGender() {
    return this.props.guestGender;
  }

  public get guestBirthDate() {
    return this.props.guestBirthDate;
  }

  public get guestWay() {
    return this.props.guestWay;
  }

  public get isNew() {
    return this.props.isNew;
  }

  public get guestId() {
    return this.props.guestId;
  }

  public get guestName() {
    return this.props.guestName;
  }

  public onItemPress = async () => {
    this.props.onItemPress && this.props.onItemPress(this.props.guestId);
  };
}

export {GuestItemModel};
