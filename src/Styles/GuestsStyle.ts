import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const GuestsStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },

  taberContainer: {
    flexDirection: 'row',
    marginTop: hp(20),
    backgroundColor: COLORS.WHITE,
    borderRadius: 25,
    overflow: 'hidden',
  },
  taberText: {
    fontSize: hp(18),
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  taberElementContainer: {
    paddingHorizontal: hp(15),
    paddingVertical: hp(8),
  },
  taberElementActiveContainer: {
    backgroundColor: COLORS.MAIN_BLUE,
  },
  taberElementActiveText: {
    fontSize: hp(18),
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },

  guestItemMainContainer: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    marginVertical: hp(3),
    height: 70,
    flexDirection: 'row',
  },

  userNameText: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp(16),
    fontWeight: 'bold',
    maxWidth: '60%',
  },

  guestWayText: {
    fontSize: hp(13),
    color: COLORS.BLURED_GRAY,
  },

  dateText: {
    fontSize: hp(10),
    color: COLORS.BLURED_GRAY,
  },

  helpText: {
    fontSize: hp(14),
    marginLeft: hp(10),
  },
});

export {GuestsStyle};
