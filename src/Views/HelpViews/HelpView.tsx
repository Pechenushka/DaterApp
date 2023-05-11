import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {Text, View} from 'react-native';
import {_} from '../../Core/Localization';
import {GuestsStyle} from '../../Styles/GuestsStyle';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {BaseStyles} from '../../Styles/BaseStyles';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {HelpModel} from '../../Models/HelpModels/HelpModel';
import {HelpItemView} from './HelpItemView';
import {HelpStyles} from '../../Styles/HelpStyles';
import {ScrollView} from 'react-native-gesture-handler';

type helpViewProps = baseComponentProps & {};

class HelpView extends TypedBaseComponent<helpViewProps, HelpModel> {
  constructor(props: componentPropsWithModel<helpViewProps, HelpModel>) {
    super(props);
  }

  public updateAnyWay = () => {
    this.shouldBeTotalyUpdated = true;
    this.forceUpdate();
    this.shouldBeTotalyUpdated = false;
  };

  public update = () => {
    this.forceUpdate();
  };

  public render() {
    if (!this.shouldBeTotalyUpdated) {
      super.render();
    }
    return (
      <View style={[GuestsStyle.mainContainer]}>
        <View style={ChatsStyles.chatListHeaderContainer}>
          <View style={[BaseStyles.w10]}>
            <SimpleButtonView
              styles={[ChatsStyles.chatListHeaderMenuButton]}
              iconStyles={[BaseStyles.bigIcon]}
              {...this.childProps(this.model.backButton)}
            />
          </View>

          <View style={[BaseStyles.w80, BaseStyles.ai_c]}>
            <Text style={ChatsStyles.chatListHeaderText}>{_.lang.help}</Text>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={[BaseStyles.ai_c, BaseStyles.pb100]}
          style={[BaseStyles.w100]}>
          <HelpItemView
            containerStyle={[HelpStyles.helpItemContainer]}
            titleStyle={[HelpStyles.helpItemTitleText]}
            touchableStyles={[HelpStyles.helpItemTouchable]}
            iconStyle={[HelpStyles.helpIcon]}
            title={_.lang.home_screen}>
            <View style={[HelpStyles.helpItemDescContainer]}>
              <View style={[HelpStyles.helpItemDescContentContainer]}>
                <Text>{_.lang.home_screen_hint}</Text>
              </View>
            </View>
          </HelpItemView>
          <HelpItemView
            containerStyle={[HelpStyles.helpItemContainer]}
            titleStyle={[HelpStyles.helpItemTitleText]}
            touchableStyles={[HelpStyles.helpItemTouchable]}
            iconStyle={[HelpStyles.helpIcon]}
            title={_.lang.profile_settings_screen}>
            <View style={[HelpStyles.helpItemDescContainer]}>
              <View style={[HelpStyles.helpItemDescContentContainer]}>
                <Text>{_.lang.profile_settings_screen_hint}</Text>
              </View>
            </View>
          </HelpItemView>
          <HelpItemView
            containerStyle={[HelpStyles.helpItemContainer]}
            titleStyle={[HelpStyles.helpItemTitleText]}
            touchableStyles={[HelpStyles.helpItemTouchable]}
            iconStyle={[HelpStyles.helpIcon]}
            title={_.lang.photo_gallery_screen}>
            <View style={[HelpStyles.helpItemDescContainer]}>
              <View style={[HelpStyles.helpItemDescContentContainer]}>
                <Text>{_.lang.photo_gallery_screen_hint}</Text>
              </View>
            </View>
          </HelpItemView>
          <HelpItemView
            containerStyle={[HelpStyles.helpItemContainer]}
            titleStyle={[HelpStyles.helpItemTitleText]}
            touchableStyles={[HelpStyles.helpItemTouchable]}
            iconStyle={[HelpStyles.helpIcon]}
            title={_.lang.photo_access_requests_screen}>
            <View style={[HelpStyles.helpItemDescContainer]}>
              <View style={[HelpStyles.helpItemDescContentContainer]}>
                <Text>{_.lang.photo_access_requests_screen_hint}</Text>
              </View>
            </View>
          </HelpItemView>
          <HelpItemView
            containerStyle={[HelpStyles.helpItemContainer]}
            titleStyle={[HelpStyles.helpItemTitleText]}
            touchableStyles={[HelpStyles.helpItemTouchable]}
            iconStyle={[HelpStyles.helpIcon]}
            title={_.lang.guests_screen}>
            <View style={[HelpStyles.helpItemDescContainer]}>
              <View style={[HelpStyles.helpItemDescContentContainer]}>
                <Text>{_.lang.guests_screen_hint}</Text>
              </View>
            </View>
          </HelpItemView>
          <HelpItemView
            containerStyle={[HelpStyles.helpItemContainer]}
            titleStyle={[HelpStyles.helpItemTitleText]}
            touchableStyles={[HelpStyles.helpItemTouchable]}
            iconStyle={[HelpStyles.helpIcon]}
            title={_.lang.search_screen}>
            <View style={[HelpStyles.helpItemDescContainer]}>
              <View style={[HelpStyles.helpItemDescContentContainer]}>
                <Text>{_.lang.search_screen_hint}</Text>
              </View>
            </View>
          </HelpItemView>
          <HelpItemView
            containerStyle={[HelpStyles.helpItemContainer]}
            titleStyle={[HelpStyles.helpItemTitleText]}
            touchableStyles={[HelpStyles.helpItemTouchable]}
            iconStyle={[HelpStyles.helpIcon]}
            title={_.lang.likes_screen}>
            <View style={[HelpStyles.helpItemDescContainer]}>
              <View style={[HelpStyles.helpItemDescContentContainer]}>
                <Text>{_.lang.likes_screen_hint}</Text>
              </View>
            </View>
          </HelpItemView>
          <HelpItemView
            containerStyle={[HelpStyles.helpItemContainer]}
            titleStyle={[HelpStyles.helpItemTitleText]}
            touchableStyles={[HelpStyles.helpItemTouchable]}
            iconStyle={[HelpStyles.helpIcon]}
            title={_.lang.chat_list_screen}>
            <View style={[HelpStyles.helpItemDescContainer]}>
              <View style={[HelpStyles.helpItemDescContentContainer]}>
                <Text>{_.lang.chat_list_screen_hint}</Text>
              </View>
            </View>
          </HelpItemView>
          <HelpItemView
            containerStyle={[HelpStyles.helpItemContainer]}
            titleStyle={[HelpStyles.helpItemTitleText]}
            touchableStyles={[HelpStyles.helpItemTouchable]}
            iconStyle={[HelpStyles.helpIcon]}
            title={_.lang.chat_screen}>
            <View style={[HelpStyles.helpItemDescContainer]}>
              <View style={[HelpStyles.helpItemDescContentContainer]}>
                <Text>{_.lang.chat_screen_hint}</Text>
              </View>
            </View>
          </HelpItemView>
        </ScrollView>
      </View>
    );
  }
}

export {HelpView};
