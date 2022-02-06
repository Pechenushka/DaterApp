import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const HomeScreenStyles = StyleSheet.create({
  searchButton: {
    width: hp(45),
    height: hp(45),
    borderRadius: 90,
    backgroundColor: 'orange',
    marginBottom: hp(30),
  },

  searchIcon: {
    resizeMode: 'contain',
    width: hp(20),
    height: hp(20),
  },

  mainContainer: {
    backgroundColor: COLORS.MAIN_BLUE,
  },

  contentContainer: {
    backgroundColor: COLORS.WHITE,
    width: '100%',
    height: '85%',
    marginTop: hp(160),
    borderRadius: 8,
    alignItems: 'center',
  },

  avatarContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 90,
    borderColor: COLORS.WHITE,
    borderWidth: 2,
    width: hp(150),
    height: hp(150),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contactsContainer: {
    borderRadius: 10,
    borderColor: COLORS.PLACEHOLDER,
    borderWidth: 1,
    width: hp(250),
    marginTop: hp(40),
    alignItems: 'center',
  },

  contactsTitleText: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp(18),
    fontWeight: 'bold',
    backgroundColor: COLORS.WHITE,
    top: hp(-14),
    width: hp(95),
    textAlign: 'center',
    textTransform: 'capitalize',
  },

  warningTitleText: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp(18),
    fontWeight: 'bold',
    color: COLORS.WHITE,
    marginTop: hp(120),
    textAlign: 'center',
    width: '80%',
  },

  infoItemContainer: {
    flexDirection: 'row',
    width: '94%',
    marginBottom: hp(10),
  },

  infoItemText: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp(16),
  },

  userInfoContent: {
    top: hp(-90),
    alignItems: 'center',
  },

  avatarImage: {
    width: hp(150),
    height: hp(150),
    resizeMode: 'contain',
  },

  fullScreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  fullScreenContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.BLURED_GRAY,
  },

  addAvatarIcon: {
    width: hp(100),
    height: hp(100),
    resizeMode: 'contain',
  },

  userNameText: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp(18),
    fontWeight: 'bold',
  },

  actionButtonContainer: {
    height: hp(60),
    width: hp(180),
    flexDirection: 'row',
  },

  actionButtonColum: {
    width: '50%',
    alignItems: 'center',
  },

  actionButtonWrapper: {
    marginTop: hp(20),
  },

  actionButtonIcon: {
    height: hp(20),
    width: hp(20),
    resizeMode: 'contain',
    marginRight: hp(10),
  },

  searchButtonWrapper: {
    marginTop: hp(40),
  },

  searchButtonContainer: {
    height: hp(60),
    width: hp(320),
    flexDirection: 'row',
  },
});

export {HomeScreenStyles};
