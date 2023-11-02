import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {BaseScreen} from '../Core/BaseScreen';
import {SplashController} from '../Controllers/SplashController';
import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';
import {BaseScreenModel} from '../Core/BaseScreenModel';
import {CONSTANTS} from '../Styles/Variables';

class LoaderScreen extends BaseScreen<SplashController> {
  constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) {
    super(props, SplashController);
  }

  static screenName = 'LoaderScreen';

  public get screenName() {
    return 'LoaderScreen';
  }

  public render() {
    return (
      <View style={[]}>
        <ActivityIndicator size="large" color={CONSTANTS.BLUE} />
      </View>
    );
  }
}

export {LoaderScreen};
