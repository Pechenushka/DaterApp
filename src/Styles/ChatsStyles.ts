import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {hp} from '../constants/Dimensions';

const ChatsStyles = StyleSheet.create({
  chatListMainContainer: {
    alignItems: 'center',
  },

  chatListItemContaiter: {
    alignItems: 'center',
    paddingVertical: hp(5),
    width: '94%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    marginVertical: hp(5),
    flexDirection: 'row',
    paddingHorizontal: hp(2),
  },

  chatListItemAvatarContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 90,
    borderColor: COLORS.WHITE,
    borderWidth: 2,
    width: hp(60),
    height: hp(60),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: hp(6),
  },

  chatListItemAvatarImage: {
    width: hp(120),
    height: hp(100),
    resizeMode: 'contain',
  },

  chatListItemUserName: {
    fontSize: hp(16),
    fontWeight: 'bold',
  },

  chatListItemLastMessageDate: {
    fontSize: hp(14),
    fontWeight: '400',
  },

  chatListItemUnreaaCountText: {
    fontSize: hp(16),
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },

  chatListItemUnreaaCountContainer: {
    borderRadius: 60,
    backgroundColor: COLORS.MAIN_BLUE,
    width: hp(25),
    height: hp(25),
    alignItems: 'center',
    justifyContent: 'center',
  },

  chatMainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  chatHeaderContainer: {
    alignItems: 'center',
    paddingVertical: hp(5),
    paddingHorizontal: hp(10),
    width: '100%',
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
  },

  chatMessageShadowContainer: {
    paddingVertical: hp(5),
    paddingHorizontal: hp(10),
    borderRadius: 10,
    marginVertical: hp(6),
    maxWidth: '80%',
  },

  chatMessageContainer: {
    paddingVertical: hp(5),
    paddingHorizontal: hp(10),
  },

  chatMessageWrapper: {
    width: '87%',
    paddingHorizontal: hp(10),
    flexDirection: 'row',
  },

  chatMessageContextMenuContainer: {
    width: '23%',
    paddingHorizontal: hp(3),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  chatMessageText: {
    fontSize: hp(16),
    fontWeight: 'bold',
  },

  chatMessageAuthorNameText: {
    fontSize: hp(16),
    color: COLORS.MAIN_BLUE,
  },

  chatMessageDateText: {
    fontSize: hp(12),
  },

  chatMessageInputContainer: {
    backgroundColor: COLORS.INPUT_BG,
    borderRadius: 10,
    width: '83%',
    height: '80%',
  },

  chatMessageInputWrapper: {
    backgroundColor: COLORS.WHITE,
    width: '100%',
    height: hp(70),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp(8),
  },

  chatMessageInputText: {
    width: '100%',
  },

  chatMessageSendButtonContainer: {
    width: hp(50),
    height: hp(50),
    backgroundColor: COLORS.MAIN_BLUE,
    borderRadius: 50,
    alignItems: 'center',
  },

  chatMessageSendButtonIcon: {
    resizeMode: 'contain',
    width: hp(28),
    height: hp(28),
    marginLeft: hp(5),
  },

  chatListHeaderContainer: {
    backgroundColor: COLORS.MAIN_BLUE,
    padding: hp(5),
    paddingHorizontal: hp(15),
    paddingVertical: hp(20),
    width: '100%',
    flexDirection: 'row',
  },

  chatListHeaderText: {
    fontSize: hp(18),
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: COLORS.WHITE,
  },

  chatListHeaderMenuButton: {},

  contextMenuModalContainer: {
    flex: 1,
  },

  modalContentContainer: {
    paddingHorizontal: hp(8),
    paddingVertical: hp(8),
    width: '55%',
    top: '7%',
    right: '2%',
    position: 'absolute',
  },

  modalActionButton: {
    borderRadius: 8,
    width: '100%',
    paddingVertical: hp(8),
  },

  modalActionButtonSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.BLURED_GRAY2,
  },
});

export {ChatsStyles};
