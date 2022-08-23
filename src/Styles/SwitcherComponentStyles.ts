import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';
import {ICONS} from '../constants/icons';

const SwitcherComponentStyles = StyleSheet.create({
  itemContainer: {
    width: hp(22),
    height: hp(22),
    borderColor: COLORS.DARK_GARY,
    borderWidth: 1,
    borderRadius: 5,
  },

  itemContainerActive: {
    width: hp(22),
    height: hp(22),
    borderColor: COLORS.DARK_GARY,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: COLORS.MAIN_BLUE,
  },
});

export {SwitcherComponentStyles};
