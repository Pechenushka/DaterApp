import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const LikesScreenStyles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
  },

  tabsContainer: {
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: COLORS.WHITE,
    marginVertical: hp(15),

    overflow: 'hidden',
  },

  tabsElementContainer: {
    paddingHorizontal: hp(9),
    paddingVertical: hp(10),
    borderRightColor: COLORS.PLACEHOLDER,
    borderRightWidth: 0.4,
  },

  tabsActiveEvlementContainer: {backgroundColor: COLORS.MAIN_BLUE},

  tabsText: {
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },

  tabsActiveText: {
    color: COLORS.WHITE,
  },
});

export {LikesScreenStyles};
