import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const DropDownStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.INPUT_BG,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  disabledCover: {
    backgroundColor: COLORS.BLURED_GRAY2,
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },

  selectedItemText: {
    fontSize: hp(14),
  },

  itemContainer: {
    width: '90%',
    paddingVertical: hp(5),
    backgroundColor: COLORS.INPUT_BG,
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: hp(3),
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
