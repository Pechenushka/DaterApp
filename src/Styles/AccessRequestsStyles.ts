import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const AccessRequestsStyles = StyleSheet.create({
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
  requestItemContainer: {
    backgroundColor: COLORS.WHITE,
    height: 115,
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: hp(5),
    marginBottom: hp(10),
  },

  requestItemNameText: {
    textAlign: 'center',
    width: '60%',
  },

  requestItemStatusText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },

  aproveRejectButtons: {
    paddingHorizontal: hp(15),
    paddingVertical: hp(9),
    overflow: 'hidden',
  },

  changeMyMindButtons: {
    paddingHorizontal: hp(25),
    paddingVertical: hp(9),
    overflow: 'hidden',
  },

  helpText: {
    fontSize: hp(14),
    marginLeft: hp(10),
  },
});

export {AccessRequestsStyles};
