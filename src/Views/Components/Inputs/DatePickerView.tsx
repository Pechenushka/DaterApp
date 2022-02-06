import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {baseComponentProps, componentPropsWithModel, TypedBaseComponent} from '../../../Core/BaseComponent';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {dateTimeToDateString} from '../../../Common/dateParse';
import {ICONS} from '../../../constants/icons';
import {BaseStyles} from '../../../Styles/BaseStyles';
import {DatePickerModel} from '../../../Models/Components/Inputs/DatePickerModel';
import {DatePickerStyle} from '../../../Styles/DatePickerStyle';

type datePickerViewProps = baseComponentProps & {};

class DatePickerView extends TypedBaseComponent<datePickerViewProps, DatePickerModel> {
  constructor(props: componentPropsWithModel<datePickerViewProps, DatePickerModel>) {
    super(props);
  }
  render() {
    super.render();
    return (
      <View style={[DatePickerStyle.container]}>
        <TouchableOpacity onPress={this.model.show}>
          <View style={[BaseStyles.row, BaseStyles.alignCenter]}>
            <Text style={[DatePickerStyle.valueText]}>{dateTimeToDateString(this.model.value)}</Text>
            <Image source={ICONS.calendarIcon} style={BaseStyles.defaultIcon} />
          </View>
        </TouchableOpacity>
        {this.model.isVisible && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.model.value}
            mode={this.model.mode}
            is24Hour={true}
            display="default"
            maximumDate={this.model.maximumDate}
            minimumDate={this.model.minimumDate}
            onChange={this.model.onChange}
          />
        )}
      </View>
    );
  }
}

export {DatePickerView};
