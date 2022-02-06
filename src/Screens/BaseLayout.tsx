import {baseScreenProps, componentPropsWithModel} from '../Core/BaseComponent';

import React from 'react';

import {BaseScreenModel} from '../Core/BaseScreenModel';
import {BaseScreen} from '../Core/BaseScreen';
import {AccountController} from '../Controllers/AccountController';
import {View} from 'react-native';
import {baseControllerProps} from '../Controllers/BaseController';

class BaseLayoutView<C extends AccountController> extends BaseScreen<C> {
  constructor(
    props: componentPropsWithModel<baseScreenProps, BaseScreenModel>,
    controllerImpl: new (props: baseControllerProps) => C,
    controllerProps: {[key: string]: any} = {},
  ) {
    super(props, controllerImpl, controllerProps);
  }

  public get headerTitle() {
    return 'default';
  }
  public get headerTitleSmall() {
    return null;
  }

  public get headerBackgroundColor() {
    return '#2D9CDB';
  }

  public get showHeaderLeftComponent() {
    return true;
  }
  public get showHeaderRightComponent() {
    return true;
  }
  public get shadowHeader() {
    return true;
  }

  public header() {
    return <></>;
  }

  public footer() {
    return <View />;
  }
}

export {BaseLayoutView};
