import {TypedBaseComponent, baseComponentProps} from './BaseComponent';

type baseModelProps = {
  id: string | number;
};

class WrapComponent<P extends baseComponentProps, T extends BaseModel<baseModelProps>> {
  private _id: string;
  private _ref: any;
  private _modified: boolean;
  private _component: TypedBaseComponent<P, T> | undefined;

  constructor(id: string) {
    this._id = id;
    this._ref = void 0;
    this._modified = true;
    this._component = void 0;
  }

  public get id() {
    return this._id;
  }

  public get component() {
    return this._component;
  }

  public set component(value) {
    this._component = value;
  }

  public get modified() {
    return this._modified;
  }

  public set modified(value) {
    this._modified = value;
  }

  public get ref() {
    return this._ref;
  }

  public set ref(value) {
    this._ref = value;
  }

  public forceUpdate(callback: () => void = () => {}) {
    if (this._component !== void 0) {
      this._component.forceUpdate(callback);
    } else {
      callback();
    }
  }
}

abstract class BaseModel<P extends baseModelProps> {
  private _props: P;
  private _components: Map<string, WrapComponent<baseComponentProps, BaseModel<baseModelProps>>>;

  constructor(props: P) {
    this._props = props;
    //ensure id is string
    this._props.id = this.props.id.toString();
    // this._props.id = this.props.id;
    this._components = new Map<string, WrapComponent<baseComponentProps, BaseModel<baseModelProps>>>();
  }

  public get props() {
    return this._props;
  }

  public set props(props) {
    this._props = props;
  }
  public get id() {
    return this._props.id.toString();
  }

  private getWrapComponent(id: string) {
    return this._components.get(id);
  }

  public setComponent<CP extends baseComponentProps, T extends BaseModel<P>>(component: TypedBaseComponent<CP, T>) {
    let wrap = this.getWrapComponent(component.id);
    if (wrap === void 0) {
      wrap = new WrapComponent(component.id);
      this._components.set(wrap.id, wrap);
    }
    wrap.component = component;
  }

  public unsetComponent<CP extends baseComponentProps, T extends BaseModel<P>>(component: TypedBaseComponent<CP, T>) {
    let wrap = this.getWrapComponent(component.id);
    if (wrap !== void 0) {
      wrap.component = void 0;
    }
  }

  public set modified(value: boolean) {
    this._components.forEach(component => (component.modified = value));
  }

  public getModified(id: string) {
    const wrap = this.getWrapComponent(id);
    if (wrap !== void 0) {
      return wrap.modified;
    }
    return true;
  }

  public setModified(id: string, modified: boolean) {
    const wrap = this.getWrapComponent(id);
    if (wrap !== void 0) {
      wrap.modified = modified;
    }
  }

  public getRef(id: string) {
    const component = this.getWrapComponent(id);
    if (component !== void 0) {
      return component.ref;
    }
    return null;
  }

  public setRef(id: string, ref: any) {
    const component = this.getWrapComponent(id);
    if (component !== void 0) {
      component.ref = ref;
    }
  }

  public async forceUpdate(callback?: () => void) {
    this._components.forEach(component => component.forceUpdate(callback));
  }

  public findView<TP extends baseComponentProps, T extends BaseModel<P>>(
    parentId: string,
  ): TypedBaseComponent<TP, T> | undefined {
    var wrap = this.getWrapComponent(`${parentId}_${this.id}`);
    if (wrap !== void 0 && wrap.component !== void 0) {
      return wrap.component as TypedBaseComponent<TP, T>;
    }
    return void 0;
  }
}

export {BaseModel};
export type {baseModelProps};
