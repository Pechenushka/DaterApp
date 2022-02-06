import {BaseModel, baseModelProps} from '../../../Core/BaseModel';

type datePickerModelProps = baseModelProps & {
  mode: 'date' | 'time';
  maximumDate?: Date;
  minimumDate?: Date;
  value?: Date;
};

class DatePickerModel extends BaseModel<datePickerModelProps> {
  private _isVisible: boolean;
  private _value: Date;

  constructor(props: datePickerModelProps) {
    super(props);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.onChange = this.onChange.bind(this);
    this._isVisible = false;
    this._value = this.props.value || new Date();
  }
  public get maximumDate() {
    return this.props.maximumDate;
  }
  public set maximumDate(value) {
    this.props.maximumDate = value;
  }
  public get minimumDate() {
    return this.props.minimumDate;
  }
  public set minimumDate(value) {
    this.props.minimumDate = value;
  }
  public async show() {
    if (!this._isVisible) {
      this._isVisible = true;
      await this.forceUpdate();
    }
  }

  public async hide() {
    if (this._isVisible) {
      this._isVisible = false;
      await this.forceUpdate();
    }
  }
  public get mode() {
    return this.props.mode;
  }

  public async onChange(event: Event, selectedDate?: Date | undefined) {
    if (selectedDate === undefined) {
      await this.hide();
      return;
    }
    this._value = selectedDate;
    await this.hide();
  }

  public get isVisible() {
    return this._isVisible;
  }

  public get value() {
    return this._value;
  }

  public set value(value) {
    this._value = value;
  }
}

export {DatePickerModel};
