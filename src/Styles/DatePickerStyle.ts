import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const DatePickerStyle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.INPUT_BG,
    paddingHorizontal: hp(10),
    paddingVertical: hp(5),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueText: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp(18),
    marginRight: hp(7),
  },
});

export {DatePickerStyle};
