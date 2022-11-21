import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const PhotoViewerStyles = StyleSheet.create({
  fullScreenContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.BLURED_GRAY,
  },

  fullScreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  previewModalCloseIcon: {
    resizeMode: 'contain',
    height: hp(45),
    width: hp(45),
  },

  modalCloseButtonContainer: {
    height: hp(50),
    width: hp(50),
    backgroundColor: COLORS.BLURED_GRAY3,
  },

  makeRequestButtonContainer: {
    backgroundColor: COLORS.MAIN_BLUE,
    width: '80%',
    borderRadius: 12,
    paddingVertical: hp(20),
    marginVertical: hp(10),
  },

  makeRequestButtonText: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: hp(20),
  },

  headerContainer: {
    paddingTop: hp(10),
    position: 'absolute',
    top: hp(0),
    width: '100%',
    flexDirection: 'row',
  },

  bottomContainer: {
    position: 'absolute',
    bottom: hp(0),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomContantContainer: {
    borderRadius: 12,
    width: '75%',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    marginBottom: hp(10),
  },

  anonIcon: {
    resizeMode: 'contain',
    height: hp(100),
    width: hp(100),
  },

  anonHint: {
    textAlign: 'center',
  },
});

export {PhotoViewerStyles};
