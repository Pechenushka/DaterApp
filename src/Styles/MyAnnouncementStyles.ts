import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const MyAnnouncementStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.SCREEN_BG,
    alignItems: 'center',
  },

  scrollContentContainer: {
    paddingBottom: hp(70),
    alignItems: 'center',
  },

  inputFormContainer: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    padding: hp(8),
    borderRadius: 8,
    width: '95%',
    marginVertical: hp(3),
  },

  previewContainer: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    padding: hp(8),
    borderRadius: 8,
    width: '95%',
    marginVertical: hp(3),
    marginBottom: hp(20),
  },

  describeInputContainer: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'flex-end',
    borderWidth: 0.5,
    borderColor: COLORS.INPUT_BG,
    width: '95%',
    flexDirection: 'column',
  },

  describeInputText: {
    width: '100%',
    maxHeight: hp(240),
  },

  describeInputCounterContainer: {},

  describeInputCounterText: {
    color: COLORS.INPUT_BG,
    fontSize: hp(16),
    marginBottom: hp(5),
    marginRight: hp(5),
  },

  describeInputTitleText: {
    marginBottom: hp(7),
    fontSize: hp(20),
    fontWeight: 'bold',
    color: COLORS.BLACK,
    textTransform: 'capitalize',
  },

  mainTitleText: {
    marginTop: hp(35),
    marginBottom: hp(25),
    fontSize: hp(24),
    fontWeight: 'bold',
    color: COLORS.BLACK,
    textTransform: 'capitalize',
  },

  userNameText: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp(18),
    fontWeight: 'bold',
  },

  avatarContainer: {
    backgroundColor: COLORS.INPUT_BG,
    borderRadius: 90,
    borderColor: COLORS.INPUT_BG,
    borderWidth: 2,
    width: hp(110),
    height: hp(110),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarImage: {
    width: hp(120),
    height: hp(100),
    resizeMode: 'contain',
  },

  previewLocationContainer: {
    marginVertical: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
  },

  goalPreviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: hp(10),
  },

  previewMainTextWrapper: {
    width: '65%',
    justifyContent: 'center',
  },

  previewMainTextContainer: {
    backgroundColor: COLORS.INPUT_BG,
    padding: hp(4),
    borderRadius: 8,
    height: 'auto',
  },

  submitButtonContainer: {
    paddingHorizontal: hp(100),
    paddingVertical: hp(15),
    marginVertical: hp(5),
    backgroundColor: COLORS.MAIN_BLUE,
    borderRadius: 8,
  },

  submitButtonText: {
    fontWeight: 'bold',
    color: COLORS.WHITE,
    fontSize: hp(18),
    textTransform: 'capitalize',
  },

  likeButtonContainer: {
    borderRadius: 50,
    height: hp(45),
    width: hp(45),
    alignItems: 'center',
    justifyContent: 'center',
  },

  likeButtonWrapper: {
    borderRadius: 50,
    height: hp(45),
    width: hp(45),
  },

  likeButtonIcon: {
    resizeMode: 'contain',
    height: hp(30),
    width: hp(30),
  },
});

export {MyAnnouncementStyles};
