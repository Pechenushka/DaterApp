import React from 'react';
import {TypedBaseComponent, baseScreenProps, componentPropsWithModel} from './BaseComponent';
import {BaseScreenModel} from './BaseScreenModel';
import {View, Text, BackHandler, NativeEventSubscription, SafeAreaView} from 'react-native';
import {BaseController, baseControllerProps} from '../Controllers/BaseController';
import {app} from './AppImpl';
import {BaseModel, baseModelProps} from './BaseModel';

export type baseScreenCreator = new (
  props: componentPropsWithModel<baseScreenProps, BaseScreenModel>,
  controllerImpl: new (props: baseControllerProps) => BaseController,
) => BaseScreen<BaseController>;

abstract class BaseScreen<C extends BaseController> extends TypedBaseComponent<baseScreenProps, BaseScreenModel> {
  /**
   *
   * @params C
   */
  private readonly _controller: C;
  private _onBackHandlerListener: NativeEventSubscription | undefined;
  private _onFocusListener: () => void;
  private _onBlurListener: () => void;

  /**
   *
   */
  public get screenName(): string {
    throw new Error('');
  }

  public get id() {
    return this.screenName;
  }

  /**
   *
   * @param props - props
   * @param controller - controller
   */
  constructor(
    props: componentPropsWithModel<baseScreenProps, BaseScreenModel>,
    controllerImpl: new (props: baseControllerProps) => C,
    controllerProps: {[key: string]: any} = {},
  ) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onBackPress = this.onBackPress.bind(this);
    this.handleBackPress = this.handleBackPress.bind(this);
    this._onFocusListener = () => {};
    this._onBlurListener = () => {};
    this._controller = new controllerImpl({
      name: this.screenName,
      id: this.screenName,
      onBackPress: this.onBackPress,
      ...controllerProps,
    });
    app.setScreen(this);
  }

  public childProps<M extends BaseModel<baseModelProps>>(model: M, ...parentIds: string[]) {
    return {...super.childProps(model, ...parentIds), screen: this};
  }

  public childPropsWithFreeKey<M extends BaseModel<baseModelProps>>(model: M, ...parentIds: string[]) {
    return {...super.childPropsWithFreeKey(model, ...parentIds), screen: this};
  }

  /**
   *
   * @params C - ccc
   */
  public get controller() {
    return this._controller;
  }

  public async onFocus() {
    this._onBackHandlerListener = BackHandler.addEventListener('hardwareBackPress', () => {
      return this.handleBackPress();
    });
  }

  public async onBlur() {
    if (this._onBackHandlerListener !== void 0) {
      this._onBackHandlerListener.remove();
    }
  }

  public onBackPress() {
    app.navigator.toGoBack();
  }

  public get allowGoBack() {
    return true;
  }

  public handleBackPress = () => {
    if (!this.allowGoBack) {
      return true;
    }
    this.onBackPress();
    return true;
  };

  public componentDidMount() {
    this._onFocusListener = this.props.navigation.addListener('focus', this.onFocus);
    this._onBlurListener = this.props.navigation.addListener('blur', this.onBlur);
  }

  public componentWillUnmount() {
    this._onFocusListener();
    this._onBlurListener();
  }

  public componentDidCatch() {}

  public header(): JSX.Element | null {
    return (
      <View style={[{height: 60, backgroundColor: 'yellow'}]}>
        <Text>Header of {this.screenName}</Text>
      </View>
    );
  }

  public content(): JSX.Element | null {
    return (
      <View>
        <Text>Content</Text>
      </View>
    );
  }

  public footer(): JSX.Element | null {
    return (
      <View style={[{height: 60, backgroundColor: 'aqua'}]}>
        <Text>Footer of {this.screenName}</Text>
      </View>
    );
  }

  public render() {
    return (
      <SafeAreaView style={[{flex: 1}]}>
        {this.header()}
        <View style={[{height: '100%'}]}>{this.content()}</View>
        {this.footer()}
      </SafeAreaView>
    );
  }
}

export {BaseScreen};
