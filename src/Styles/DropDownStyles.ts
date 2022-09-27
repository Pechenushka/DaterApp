import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const DropDownStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MAIN_BLUE,
    borderRadius: 8,
    height: hp(30),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  disabledCover: {
    backgroundColor: COLORS.BLURED_GRAY2,
    position: 'absolute',
    height: hp(30),
    width: '100%',
  },

  selectedItemText: {
    fontSize: hp(16),
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },

  itemContainer: {
    width: '100%',
    paddingVertical: hp(8),
    backgroundColor: COLORS.MAIN_BLUE,
    alignItems: 'center',
    borderRadius: 8,
  },

  actionIcon: {
    resizeMode: 'contain',
    height: hp(13),
    width: hp(13),
    position: 'absolute',
    right: hp(5),
  },

  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.BLURED_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalContentContainer: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    paddingHorizontal: hp(8),
    paddingVertical: hp(2),
    width: '85%',
    borderRadius: 8,
    maxHeight: '80%',
  },
});

export {DropDownStyles};
