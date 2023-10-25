import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const SearchStyles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
    borderBottomColor: COLORS.BLURED_GRAY,
    borderBottomWidth: 0.4,
    flexDirection: 'row',
    paddingHorizontal: hp(15),
  },

  filterIcon: {
    resizeMode: 'contain',
    height: hp(28),
    width: hp(28),
  },

  filterButtonContainer: {
    paddingVertical: hp(20),
    paddingHorizontal: hp(5),
  },

  filterModalBackGround: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.BLURED_GRAY,
    alignItems: 'center',
  },

  filterModalContentContainer: {
    width: '90%',
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    marginTop: hp(40),
    borderRadius: 10,
    maxHeight: hp(600),
  },

  filterModalMainTilte: {
    fontWeight: 'bold',
    fontSize: hp(22),
    marginTop: hp(10),
    textTransform: 'capitalize',
  },

  filterModalCloseIcon: {
    resizeMode: 'contain',
    height: hp(28),
    width: hp(28),
  },

  filterModalCloseContainer: {
    position: 'absolute',
    top: hp(1),
    right: hp(1),
    padding: hp(5),
  },

  filterModalSubmitContainer: {
    paddingVertical: hp(9),
    paddingHorizontal: hp(30),
    borderRadius: 8,
    backgroundColor: COLORS.MAIN_BLUE,
    marginVertical: hp(12),
  },

  filterModalSubmitText: {
    fontWeight: 'bold',
    fontSize: hp(18),
    color: COLORS.WHITE,
  },

  filterModalAgeInputContainer: {
    borderRadius: 8,
    backgroundColor: COLORS.INPUT_BG,
    width: hp(40),
    marginHorizontal: hp(5),
    maxWidth: hp(70),
  },

  sendMessageModalUserContainer: {
    backgroundColor: COLORS.INPUT_ICON_BG,
    flexDirection: 'row',
    marginTop: hp(25),
    borderRadius: 10,
    width: '70%',
  },

  sendPhotoReportIconContainer: {
    height: hp(150),
    width: hp(150),
    resizeMode: 'cover',
    borderRadius: 12,
    marginTop: hp(15),
  },

  isOnlineView: {
    height: hp(15),
    width: hp(15),
    backgroundColor: COLORS.GREEN_BUTTON,
    borderRadius: 50,
    borderColor: COLORS.WHITE,
    borderWidth: 1,
  },

  lastOnlineText: {
    fontSize: hp(14),
    color: COLORS.PLACEHOLDER,
    marginLeft: hp(5),
  },

  itemIconsContainer: {
    position: 'absolute',
    top: hp(10),
    left: hp(10),
    flexDirection: 'row',
  },

  sendMessageModalTextInputContainer: {
    marginTop: hp(25),
    width: '70%',
  },

  sendMessageModalMessageInputText: {
    width: '100%',
    maxHeight: hp(180),
  },

  likeButtonContainer: {
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  likeButtonIcon: {
    resizeMode: 'contain',
    height: hp(30),
    width: hp(30),
  },

  likeButtonWrapper: {
    borderRadius: 5,
    height: '48%',
    width: '100%',
    backgroundColor: COLORS.MAIN_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchItemContainer: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    borderRadius: 12,
    width: '97%',
  },

  locationFilterContainer: {
    borderRadius: 10,
    borderColor: COLORS.PLACEHOLDER,
    borderWidth: 1,
    width: '95%',
    marginTop: hp(40),
    alignItems: 'center',
    marginLeft: hp(-90),
    padding: hp(5),
  },

  alcoPickerItemContainerInternal: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    padding: hp(5),
    paddingTop: hp(10),
    height: hp(130),
  },

  alcoPickerItemContainerExternal: {
    backgroundColor: COLORS.WHITE,
    marginBottom: hp(15),
    marginRight: hp(15),
    marginTop: hp(10),
    width: hp(180),
    height: hp(150),
  },

  additionalInfoButtotnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: hp(50),
  },

  mainTitleStyles: {
    color: COLORS.BLACK,
    fontSize: hp(22),
    fontWeight: 'bold',
  },

  goalsContainer: {
    width: '95%',
    alignItems: 'center',
    paddingBottom: hp(10),
    marginLeft: 40,
  },

  mainInfoConainer: {
    marginLeft: hp(-90),
  },
});

export {SearchStyles};
