import {BaseModel, baseModelProps} from './BaseModel';
import {Component} from 'react';
import {BaseScreen} from './BaseScreen';
import {BaseController} from '../Controllers/BaseController';
import {StackNavigationProp} from '@react-navigation/stack';

export type baseComponentProps = {
  key?: string;
  id: string;
  style?: object;
  parent?: TypedBaseComponent<baseComponentProps, BaseModel<baseModelProps>>;
  screen?: BaseScreen<BaseController>;
};

export type componentPropsWithModel<P extends baseComponentProps, T extends BaseModel<baseModelProps>> = P & {
  /**
   * Модель компонента @typeof T
   */
  model: T;
};

export type baseScreenProps = baseComponentProps & {
  /**
   * Имя скрина
   */
  // screenName: string;
  headerBackgroundColor?: string;

  navigation: StackNavigationProp<{}>;
  route: {
    params: {[key: string]: any};
  };
};

let currentKey = 0;

abstract class TypedBaseComponent<P extends baseComponentProps, T extends BaseModel<baseModelProps>> extends Component<
  componentPropsWithModel<P, T>,
  {},
  any
> {
  constructor(props: componentPropsWithModel<P, T>) {
    super(props);
    this.setComponent();
  }

  public nextKey() {
    return (++currentKey).toString();
  }

  public get id() {
    return this.props.id;
  }

  public get parent() {
    return this.props.parent;
  }

  public get screen() {
    return this.props.screen;
  }

  public get model() {
    return this.props.model;
  }

  public get style() {
    return this.props.style;
  }

  public childId<M extends BaseModel<baseModelProps>>(model: M) {
    return `${this.props.id}_${model.id}`;
  }

  public childProps<M extends BaseModel<baseModelProps>>(model: M, ...parentIds: string[]) {
    const props: componentPropsWithModel<baseComponentProps, M> = {
      id: this.childId(model),
      model,
      parent: this,
      screen: this.props.screen,
    };
    if (parentIds !== void 0 && parentIds.length !== 0) {
      props.id = `${props.id}_${parentIds.join('_')}`;
    }
    props.key = props.id;
    return props;
  }

  public childPropsWithFreeKey<M extends BaseModel<baseModelProps>>(model: M, ...parentIds: string[]) {
    const props = this.childProps(model, ...parentIds);
    props.key += this.nextKey();
    return props;
  }

  private setComponent() {
    if (this.props.model !== void 0) {
      this.props.model.setComponent(this);
    }
  }

  private unsetComponent() {
    if (this.props.model !== void 0) {
      this.props.model.unsetComponent(this);
    }
  }

  public get modified() {
    if (this.props.model !== void 0) {
      return this.props.model.getModified(this.id);
    }
    return true;
  }

  public set modified(value) {
    if (this.props.model !== void 0) {
      this.props.model.setModified(this.id, value);
    }
  }

  public get ref() {
    if (this.props.model !== void 0) {
      return this.props.model.getRef(this.id);
    }
    return null;
  }

  public set ref(ref: any) {
    if (this.props.model !== void 0) {
      this.props.model.setRef(this.id, ref);
    }
  }

  public componentDidMount() {
    this.setComponent();
  }

  public componentWillUnmount() {
    this.unsetComponent();
  }

  public UNSAFE_componentWillUpdate() {
    this.setComponent();
  }

  public shouldComponentUpdate(nextProps: Readonly<componentPropsWithModel<P, T>>) {
    this.setComponent();
    if (this.props.model === void 0) {
      return false;
    }
    if (this.props.model.id !== nextProps.model.id) {
      return true;
    }
    return this.props.model.getModified(this.props.id);
  }

  public render(): JSX.Element | null {
    if (this.props.model !== void 0) {
      this.model.setModified(this.props.id, false);
    }
    return null;
  }
}

export {TypedBaseComponent};
