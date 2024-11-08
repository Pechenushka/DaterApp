import {Alert} from 'react-native';
import {app} from '../../Core/AppImpl';
import {BaseModel, baseModelProps} from '../../Core/BaseModel';
import {photoAccessRequestItem} from '../../Core/DataTypes/BaseTypes';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {SetVisit} from '../../Common/Helpers';

type accessRequestItemModelProps = baseModelProps &
  photoAccessRequestItem & {
    deleteItemFromList: (id: number) => void;
  };

class AccessRequestItemModel extends BaseModel<accessRequestItemModelProps> {
  constructor(props: accessRequestItemModelProps) {
    super(props);
  }

  public get requestId() {
    return this.props.id;
  }

  public get author_id() {
    return this.props.author_id;
  }

  public get avatar() {
    return this.props.avatar;
  }

  public get birthDate() {
    return this.props.birthDate;
  }

  public get gender() {
    return this.props.gender;
  }

  public get name() {
    return this.props.name;
  }

  public get requestor_id() {
    return this.props.requestor_id;
  }

  public get status() {
    return this.props.status;
  }

  public onChangeMindReject = async () => {
    const res = await loadData(UserDataProvider.handlePhotoAccessRequest, {
      requestId: this.requestId,
      status: 'rejected',
    });
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      return;
    }
    this.props.deleteItemFromList(this.requestId);
  };

  public onChangeMindApproved = async () => {
    const res = await loadData(UserDataProvider.handlePhotoAccessRequest, {
      requestId: this.requestId,
      status: 'approved',
    });
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      return;
    }
    this.props.deleteItemFromList(this.requestId);
  };

  public onApprovePress = async () => {
    const res = await loadData(UserDataProvider.handlePhotoAccessRequest, {
      requestId: this.requestId,
      status: 'approved',
    });
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      return;
    }
    this.props.deleteItemFromList(this.requestId);
  };

  public onRejectPress = async () => {
    const res = await loadData(UserDataProvider.handlePhotoAccessRequest, {
      requestId: this.requestId,
      status: 'rejected',
    });
    if (res === null) {
      app.notification.showError(_.lang.warning, _.lang.something_went_wrong);
      return;
    }

    if (res.statusCode !== 200) {
      app.notification.showError(_.lang.warning, res.statusMessage);
      return;
    }
    this.props.deleteItemFromList(this.requestId);
  };

  public onAvatartPress = async (userId: number) => {
    app.navigator.goToProfileDetailsScreen(userId);
    SetVisit(userId, 4);
  };
}

export {AccessRequestItemModel};
