import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const BottomNavigationStyles = StyleSheet.create({
  navButtonContainer: {
    height: hp(65),
    width: '25%',
  },

  navButtonContainerActive: {
    backgroundColor: COLORS.INPUT_BG,
  },
  navButtonIcon: {
    resizeMode: 'contain',
    height: hp(27),
    width: hp(27),
  },
  bottomNavigationContainer: {
    height: hp(65),
    position: 'absolute',
    width: '100%',
    bottom: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: hp(10),
    backgroundColor: COLORS.WHITE,
  },

  bottomNavigationCounter: {
    position: 'absolute',
    top: hp(2),
    right: hp(6),
    backgroundColor: COLORS.MAIN_BLUE,
    borderRadius: 50,
    height: hp(20),
    width: hp(20),
  },

  bottomNavigationCounterText: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
});

export {BottomNavigationStyles};
