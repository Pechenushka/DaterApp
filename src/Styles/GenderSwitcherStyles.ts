import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const GenderSwitcherStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.INPUT_BG,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  itemContainer: {
    paddingHorizontal: hp(10),
    paddingVertical: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemContainerActive: {
    backgroundColor: COLORS.WHITE,
    borderWidth: 0.7,
    borderRadius: 8,
    borderColor: COLORS.PLACEHOLDER,
  },
});

export {GenderSwitcherStyles};
