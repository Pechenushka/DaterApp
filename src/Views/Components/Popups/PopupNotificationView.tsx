import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../../Core/BaseComponent';
import React from 'react';
import {Text, View, Animated, Image, Modal} from 'react-native';
import {PopupNotificationModel} from '../../../Models/Components/Popups/PopupNotificationModel';
import {PopupStyles} from '../../../Styles/PopupStyles';
import {COLORS} from '../../../constants/colors';
import {ShadowWrapperView} from '../Wrappers/ShadowWrapperView';
import {BaseStyles} from '../../../Styles/BaseStyles';
import {ICONS} from '../../../constants/icons';

type popupNotificationViewProps = baseComponentProps & {};

class PopupNotificationView extends TypedBaseComponent<
  popupNotificationViewProps,
  PopupNotificationModel
> {
  constructor(props: componentPropsWithModel<popupNotificationViewProps, PopupNotificationModel>) {
    super(props);
  }

  public getTypeMessageStyles = () => {
    if (this.model.type === 'info') {
      return {backgroundColor: COLORS.INFO_BACGROUND};
    }

    if (this.model.type === 'success') {
      return {backgroundColor: COLORS.GREEN_BUTTON};
    }

    if (this.model.type === 'error') {
      return {backgroundColor: COLORS.RED};
    }
    return {};
  };

  public getTypeMessageIcon = () => {
    if (this.model.type === 'info') {
      return ICONS.infoIcon;
    }

    if (this.model.type === 'success') {
      return ICONS.checkIconWhite;
    }

    if (this.model.type === 'error') {
      return ICONS.reportIconWhite;
    }
    return {};
  };

  public render() {
    super.render();
    return (
      <Animated.View style={[{top: this.model.topVal}, PopupStyles.popupContainer]}>
        <ShadowWrapperView>
          <View style={[PopupStyles.contentContainer, this.getTypeMessageStyles()]}>
            <View style={[BaseStyles.w20, BaseStyles.ai_c]}>
              <Image style={PopupStyles.iconStyles} source={this.getTypeMessageIcon()} />
            </View>
            <View style={[BaseStyles.w80, BaseStyles.ai_c]}>
              <Text style={PopupStyles.titleTextStyle}>{this.model.title}!</Text>
              <Text style={PopupStyles.messageTextStyle}>{this.model.message}</Text>
            </View>
          </View>
        </ShadowWrapperView>
      </Animated.View>
    );
  }
}

export {PopupNotificationView};
