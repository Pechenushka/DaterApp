import {BaseModel, baseModelProps} from '../../../Core/BaseModel';

type dropDownModelProps = baseModelProps & {
  placeholder: string;
  listLoader?: (...params: any[]) => Promise<Array<dropDownItem>>;
  list: Array<dropDownItem>;
  onSelectionChange: (item: dropDownItem) => Promise<void>;
  disabled?: boolean;
  defaultItem?: dropDownItem;
};

export type dropDownItem = {id: number; name: string};

class DropDownModel extends BaseModel<dropDownModelProps> {
  private _list: Array<dropDownItem>;
  private _placeholder: string;
  private _value: dropDownItem | undefined = undefined;
  private _opened: boolean = false;
  private _disabled: boolean;
  constructor(props: dropDownModelProps) {
    super(props);
    this._list = props.defaultItem !== undefined ? [props.defaultItem, ...props.list] : props.list;
    this._placeholder = props.placeholder;
    this._disabled = props.disabled !== undefined ? props.disabled : false;
    this.initValues();
  }

  public get list() {
    return this._list;
  }

  public get placeholder() {
    return this._placeholder;
  }

  public get value() {
    return this._value;
  }

  public get opened() {
    return this._opened;
  }

  public set opened(Val) {
    if (this._opened === Val) {
      return;
    }
    this._opened = Val;
    this.forceUpdate();
  }

  public get disabled() {
    return this._disabled;
  }

  public set disabled(Val) {
    if (this._disabled === Val) {
      return;
    }
    this._disabled = Val;
    this.forceUpdate();
  }

  public set listLoader(Val: () => Promise<dropDownItem[]>) {
    this.props.listLoader = Val;
    this.initValues();
  }

  public initValues = async () => {
    if (this.props.listLoader !== undefined) {
      this._list =
        this.props.defaultItem !== undefined
          ? [this.props.defaultItem, ...(await this.props.listLoader())]
          : await this.props.listLoader();
      this.forceUpdate();
    }
  };

  public open = () => {
    this.opened = true;
  };

  public close = () => {
    this.opened = false;
  };

  public selectItem = async (item: dropDownItem | undefined) => {
    this._value = item;
    item && this.props.onSelectionChange(item);
    this.close();
  };

  public setToDefault = async () => {
    this._value = undefined;
    this._list = [];
  };
}

export {DropDownModel};
