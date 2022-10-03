import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const GenderSwitcherStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.INPUT_BG,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },

  itemContainer: {
    paddingHorizontal: hp(16),
    paddingVertical: hp(5),
    borderWidth: 0.7,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemContainerActive: {
    backgroundColor: COLORS.WHITE,
    borderWidth: 0.7,
    borderColor: COLORS.MAIN_BLUE,
  },
});

export {GenderSwitcherStyles};
