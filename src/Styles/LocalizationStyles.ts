import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const LocalizationStyles = StyleSheet.create({
  selectButtonContainer: {
    flexDirection: 'row',
  },

  selectButtonText: {
    marginLeft: hp(5),
  },

  selectButtonWrapper: {
    position: 'absolute',
    top: hp(10),
    left: hp(12),
  },

  selectButtonIcon: {
    resizeMode: 'contain',
    height: hp(25),
    width: hp(25),
  },

  modalBackGroung: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.BLURED_GRAY,
    alignItems: 'center',
  },

  modalContentContainer: {
    width: '90%',
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    marginTop: hp(40),
    borderRadius: 10,
  },

  countryButtonContainer: {
    backgroundColor: COLORS.SCREEN_BG,
    padding: hp(5),
    borderRadius: 10,
  },

  countryButtonsContainer: {
    justifyContent: 'space-around',
    width: '95%',
    flexDirection: 'row',
    marginVertical: hp(10),
  },

  countryButtonIcon: {
    resizeMode: 'contain',
    height: hp(55),
    width: hp(55),
  },
});

export {LocalizationStyles};
