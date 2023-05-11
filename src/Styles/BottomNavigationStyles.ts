import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const BottomNavigationStyles = StyleSheet.create({
  navButtonContainer: {
    height: hp(85),
    width: hp(85),
  },

  navButtonContainerActive: {
    backgroundColor: COLORS.MAIN_BLUE,
    borderRadius: 50,
    width: hp(85),
    height: hp(85),
  },
  navButtonIcon: {
    resizeMode: 'contain',
    height: hp(37),
    width: hp(37),
  },
  bottomNavigationContainer: {
    height: hp(85),
    position: 'absolute',
    width: '100%',
    bottom: 5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomNavigationCounter: {
    position: 'absolute',
    top: hp(2),
    right: hp(6),
    backgroundColor: COLORS.MAIN_BLUE,
    borderRadius: 50,
    height: hp(25),
    width: hp(25),
  },

  bottomNavigationCounterActive: {
    backgroundColor: COLORS.WHITE,
  },

  bottomNavigationCounterText: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },

  bottomNavigationCounterTextActive: {
    color: COLORS.BLACK,
  },
  bottomNavigationShadowWrapper: {
    width: '96%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomNavigationShadowWrapperInernal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export {BottomNavigationStyles};
