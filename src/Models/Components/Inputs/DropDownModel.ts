import {BaseModel, baseModelProps} from '../../../Core/BaseModel';
import {_} from '../../../Core/Localization';
import {ICONS} from '../../../constants/icons';
import {SimpleButtonModel} from '../Buttons/SimpleButtonModel';
import {TextInputModel} from './TextInputModel';

type dropDownModelProps = baseModelProps & {
  placeholder: string;
  listLoader?: (...params: any[]) => Promise<Array<dropDownItem>>;
  list: Array<dropDownItem>;
  onSelectionChange: (item: dropDownItem) => Promise<void>;
  disabled?: boolean;
  defaultItem?: dropDownItem;
  onListReady?: () => Promise<any>;
  needSearch?: boolean;
};

export type dropDownItem = {id: number; name: string};

class DropDownModel extends BaseModel<dropDownModelProps> {
  private _list: Array<dropDownItem>;
  private _placeholder: string;
  private _value: dropDownItem | undefined = undefined;
  private _opened: boolean = false;
  private _disabled: boolean;
  private _searchInput: TextInputModel;
  private _searchResult: Array<dropDownItem> = [];
  private _clearSearchButton: SimpleButtonModel;
  constructor(props: dropDownModelProps) {
    super(props);
    this._list = props.defaultItem !== undefined ? [props.defaultItem, ...props.list] : props.list;
    this._placeholder = props.placeholder;
    this._disabled = props.disabled !== undefined ? props.disabled : false;
    this._searchInput = new TextInputModel({
      id: '_searchInput',
      onChangeText: this.onSeacrhInputChange,
      placeholder: _.lang.search,
      secure: false,
      showLeftIcon: true,
      leftIcon: ICONS.searchIconBlack,
      maxLength: 50,
    });
    this._clearSearchButton = new SimpleButtonModel({
      id: '_clearSearchButton',
      onPress: this.onClearSearchPress,
      icon: ICONS.closeIcon,
    });
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

  public get searchInput() {
    return this._searchInput;
  }

  public get needSearch() {
    return this.props.needSearch;
  }

  public get searchResult() {
    return this._searchResult;
  }

  public get clearSearchButton() {
    return this._clearSearchButton;
  }

  public set listLoader(Val: () => Promise<dropDownItem[]>) {
    this.props.listLoader = Val;
    this.initValues();
  }

  public set onListReady(Val: () => Promise<any>) {
    this.props.onListReady = Val;
  }

  public initValues = async () => {
    if (this.props.listLoader !== undefined) {
      this._list =
        this.props.defaultItem !== undefined
          ? [this.props.defaultItem, ...(await this.props.listLoader())]
          : await this.props.listLoader();
      this.forceUpdate();
      this.props.onListReady && this.props.onListReady();
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
    this.forceUpdate();
  };

  public setItem = async (item: dropDownItem) => {
    this._value = item;
    this.forceUpdate();
  };

  public setToDefault = async () => {
    this._value = undefined;
    this._list = [];
  };

  public onSeacrhInputChange = async (newVal: string) => {
    const serchRes = this._list.filter(item => {
      return item.name.includes(newVal);
    });
    this._searchResult = serchRes;
    this.forceUpdate();
  };

  public onClearSearchPress = () => {
    this._searchInput.value = '';
    this._searchResult = [];
    this.forceUpdate();
  };
}

export {DropDownModel};
