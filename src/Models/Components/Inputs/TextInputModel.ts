import {ImageSourcePropType, TextInput} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {BaseModel, baseModelProps} from '../../../Core/BaseModel';
import {TextInputCounterModel} from './TextInputCounterModel';

type textInputModelProps = baseModelProps & {
  defaultValue?: string;
  editable?: boolean;
  keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
  maxLength?: number;
  onChangeText: (newValue: string) => Promise<void>;
  onSubmitEditing?: () => Promise<void>;
  onBlur?: () => Promise<void>;
  placeholder?: string;
  placeholderTextColor?: string;
  textAlign?: 'left' | 'center' | 'right';
  secure?: boolean;
  showLeftIcon?: boolean;
  leftIcon?: ImageSourcePropType;
  numberOfLines?: number;
  showCounter?: boolean;
};

class TextInputModel extends BaseModel<textInputModelProps> {
  private _defaultValue: string;
  private _editable: boolean;
  private _keyboardType: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
  private _maxLength: number;
  private _placeholder: string;
  private _placeholderTextColor: string;
  private _textAlign: 'left' | 'center' | 'right' = 'left';
  private _secure: boolean;
  private _showLeftIcon: boolean;
  private _leftIcon: ImageSourcePropType | null;
  private _value: string = '';
  private _numberOfLines: number = 1;
  private _showCounter: boolean = false;
  private _conterModel: TextInputCounterModel;
  public ref: TextInput | null = null;

  constructor(props: textInputModelProps) {
    super(props);
    this._defaultValue = this.props.defaultValue !== undefined ? this.props.defaultValue : '';
    this._editable = this.props.editable !== undefined ? this.props.editable : true;
    this._keyboardType = this.props.keyboardType !== undefined ? this.props.keyboardType : 'default';
    this._maxLength = this.props.maxLength !== undefined ? this.props.maxLength : 100;
    this._placeholder = this.props.placeholder !== undefined ? this.props.placeholder : '';
    this._placeholderTextColor =
      this.props.placeholderTextColor !== undefined ? this.props.placeholderTextColor : COLORS.PLACEHOLDER;
    this._textAlign = this.props.textAlign !== undefined ? this.props.textAlign : 'left';
    this._secure = this.props.secure !== undefined ? this.props.secure : false;
    this._showLeftIcon = this.props.showLeftIcon !== undefined ? this.props.showLeftIcon : false;
    this._leftIcon = this.props.leftIcon !== undefined ? this.props.leftIcon : null;
    this._numberOfLines = this.props.numberOfLines !== undefined ? this.props.numberOfLines : 1;
    this._showCounter = this.props.showCounter !== undefined ? this.props.showCounter : false;
    this._conterModel = new TextInputCounterModel({id: '_conterModel', maxLength: this._maxLength});
    this._value = this.props.defaultValue !== undefined ? this.props.defaultValue : '';
  }

  public get defaultValue() {
    return this._defaultValue;
  }

  public get editable() {
    return this._editable;
  }

  public get keyboardType() {
    return this._keyboardType;
  }

  public get maxLength() {
    return this._maxLength;
  }

  public get placeholder() {
    return this._placeholder;
  }

  public get placeholderTextColor() {
    return this._placeholderTextColor;
  }

  public get textAlign() {
    return this._textAlign;
  }

  public get secure() {
    return this._secure;
  }

  public get showLeftIcon() {
    return this._showLeftIcon;
  }

  public get leftIcon() {
    return this._leftIcon;
  }

  public get numberOfLines() {
    return this._numberOfLines;
  }

  public get showCounter() {
    return this._showCounter;
  }

  public get conterModel() {
    return this._conterModel;
  }

  public get value() {
    return this._value;
  }

  public set value(val) {
    this._value = val;
    this._conterModel.counter = val.length;
    this.forceUpdate();
  }

  public onChangeText = async (newValue: string) => {
    this._value = newValue;
    this._conterModel.counter = newValue.length;
    this.props.onChangeText && this.props.onChangeText(newValue);
    this.forceUpdate();
  };

  public onSubmitEditing = async () => {
    this.props.onSubmitEditing && this.props.onSubmitEditing();
  };

  public onBlur = async () => {
    this.props.onBlur && this.props.onBlur();
  };
}

export {TextInputModel};
