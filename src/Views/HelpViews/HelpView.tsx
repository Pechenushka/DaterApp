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
      </View>
    );
  }
}

export {HelpView};
