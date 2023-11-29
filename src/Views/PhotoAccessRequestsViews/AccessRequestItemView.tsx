import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {_} from '../../Core/Localization';
import {AccessRequestItemModel} from '../../Models/PhotoAccessRequestsModels/AccessRequestItemModel';
import {BaseStyles} from '../../Styles/BaseStyles';
import {AccessRequestsStyles} from '../../Styles/AccessRequestsStyles';
import {RoundAvatarView} from '../Components/Avatars/RoundAvatarView';
import {getAge} from '../../Common/Helpers';
import {ICONS} from '../../constants/icons';
import {app} from '../../Core/AppImpl';
import {COLORS} from '../../constants/colors';
import {ShadowWrapperView} from '../Components/Wrappers/ShadowWrapperView';

type accessRequestItemViewProps = baseComponentProps & {};

class AccessRequestItemView extends TypedBaseComponent<
  accessRequestItemViewProps,
  AccessRequestItemModel
> {
  constructor(props: componentPropsWithModel<accessRequestItemViewProps, AccessRequestItemModel>) {
    super(props);
  }

  public getStatusTextCollor(status: string) {
    if (status === 'pending') {
      return COLORS.WARNING_YELLOW;
    }
    if (status === 'approved') {
      return COLORS.GREEN_BUTTON;
    }
    if (status === 'rejected') {
      return COLORS.RED;
    }
    return COLORS.BLACK;
  }

  public getStatusMessage(status: string) {
    if (status === 'pending') {
      return _.lang.requestItemStatusMessage.pending;
    }
    if (status === 'approved') {
      return _.lang.requestItemStatusMessage.approved;
    }
    if (status === 'rejected') {
      return _.lang.requestItemStatusMessage.rejected;
    }
    return '';
  }

  public getButtons(status: string) {
    if (status === 'pending') {
      return (
        <View style={[BaseStyles.row, BaseStyles.w100, BaseStyles.mt10, BaseStyles.jc_c]}>
          <ShadowWrapperView borderRadius={20}>
            <TouchableOpacity
              style={[
                AccessRequestsStyles.aproveRejectButtons,
                {backgroundColor: COLORS.GREEN_BUTTON},
              ]}
              onPress={this.model.onApprovePress}>
              <Image style={BaseStyles.bigIcon} source={ICONS.checkIconWhite} />
            </TouchableOpacity>
          </ShadowWrapperView>
          <View style={BaseStyles.ml10}>
            <ShadowWrapperView borderRadius={20}>
              <TouchableOpacity
                style={[AccessRequestsStyles.aproveRejectButtons, {backgroundColor: COLORS.RED}]}
                onPress={this.model.onRejectPress}>
                <Image style={BaseStyles.bigIcon} source={ICONS.closeIconWhite} />
              </TouchableOpacity>
            </ShadowWrapperView>
          </View>
        </View>
      );
    }
    if (status === 'approved') {
      return (
        <View style={[BaseStyles.w100, BaseStyles.mt10, BaseStyles.ai_c]}>
          <View>
            <ShadowWrapperView style={{overflow: 'hidden'}} borderRadius={20}>
              <TouchableOpacity
                style={[AccessRequestsStyles.changeMyMindButtons, {backgroundColor: COLORS.RED}]}
                onPress={this.model.onChangeMindReject}>
                <Image style={BaseStyles.bigIcon} source={ICONS.closeIconWhite} />
              </TouchableOpacity>
            </ShadowWrapperView>
          </View>
        </View>
      );
    }
    if (status === 'rejected') {
      return (
        <View style={[BaseStyles.w100, BaseStyles.mt10, BaseStyles.ai_c]}>
          <View>
            <ShadowWrapperView borderRadius={20}>
              <TouchableOpacity
                style={[
                  AccessRequestsStyles.changeMyMindButtons,
                  {backgroundColor: COLORS.GREEN_BUTTON},
                ]}
                onPress={this.model.onChangeMindApproved}>
                <Image style={BaseStyles.bigIcon} source={ICONS.checkIconWhite} />
              </TouchableOpacity>
            </ShadowWrapperView>
          </View>
        </View>
      );
    }
    return <></>;
  }

  public render() {
    super.render();
    return (
      <View style={[BaseStyles.w100, AccessRequestsStyles.requestItemContainer]}>
        <View style={[BaseStyles.w30, BaseStyles.alignCenter]}>
          {app.currentUser.userId === this.model.requestor_id ? (
            <>
              <RoundAvatarView id={'Requestor'} imagePath={app.currentUser.avatar} size={65} />
              <View style={[BaseStyles.w100, BaseStyles.row, BaseStyles.jc_c]}>
                <Text
                  style={[AccessRequestsStyles.requestItemNameText]}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}>
                  {app.currentUser.userName}
                </Text>
                <Text>{getAge(app.currentUser.birthDate || 0)}</Text>
                <Image
                  source={app.currentUser.gender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon}
                  style={[BaseStyles.defaultIcon, BaseStyles.ml10]}
                />
              </View>
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => {
                  this.model.onAvatartPress(this.model.requestor_id);
                }}>
                <RoundAvatarView id={'Author'} imagePath={this.model.avatar} size={65} />
              </TouchableOpacity>

              <View style={[BaseStyles.w100, BaseStyles.row, BaseStyles.jc_c]}>
                <Text
                  style={[AccessRequestsStyles.requestItemNameText]}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}>
                  {this.model.name}
                </Text>
                <Text>{getAge(this.model.birthDate)}</Text>
                <Image
                  source={this.model.gender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon}
                  style={[BaseStyles.defaultIcon, BaseStyles.ml10]}
                />
              </View>
            </>
          )}
        </View>

        <View style={[BaseStyles.w40, BaseStyles.alignCenter]}>
          <Text
            style={[
              AccessRequestsStyles.requestItemStatusText,
              {color: this.getStatusTextCollor(this.model.status)},
            ]}>
            {this.getStatusMessage(this.model.status)}
          </Text>
          {app.currentUser.userId === this.model.author_id && (
            <View style={[BaseStyles.w100]}>{this.getButtons(this.model.status)}</View>
          )}
        </View>

        <View style={[BaseStyles.w30, BaseStyles.alignCenter]}>
          {app.currentUser.userId === this.model.author_id ? (
            <>
              <RoundAvatarView id={'Requestor'} imagePath={app.currentUser.avatar} size={65} />
              <View style={[BaseStyles.w100, BaseStyles.row, BaseStyles.jc_c]}>
                <Text
                  style={[AccessRequestsStyles.requestItemNameText]}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}>
                  {app.currentUser.userName}
                </Text>
                <Text>{getAge(app.currentUser.birthDate || 0)}</Text>
                <Image
                  source={app.currentUser.gender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon}
                  style={[BaseStyles.defaultIcon, BaseStyles.ml10]}
                />
              </View>
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => {
                  this.model.onAvatartPress(this.model.author_id);
                }}>
                <RoundAvatarView id={'Author'} imagePath={this.model.avatar} size={65} />
              </TouchableOpacity>

              <View style={[BaseStyles.w100, BaseStyles.row, BaseStyles.jc_c]}>
                <Text
                  style={[AccessRequestsStyles.requestItemNameText]}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}>
                  {this.model.name}
                </Text>
                <Text>{getAge(this.model.birthDate)}</Text>
                <Image
                  source={this.model.gender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon}
                  style={[BaseStyles.defaultIcon, BaseStyles.ml10]}
                />
              </View>
            </>
          )}
        </View>
      </View>
    );
  }
}

export {AccessRequestItemView};
