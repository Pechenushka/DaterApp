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

  chatMessageContainer: {
    paddingVertical: hp(5),
    paddingHorizontal: hp(10),
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    marginVertical: hp(6),
    maxWidth: '80%',
  },

  chatMessageWrapper: {
    width: '100%',
    paddingHorizontal: hp(10),
  },

  chatMessageText: {
    fontSize: hp(16),
    fontWeight: 'bold',
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

  chatMessageInputText: {},

  chatMessageSendButtonContainer: {
    width: hp(50),
    height: hp(50),
    backgroundColor: COLORS.MAIN_BLUE,
    borderRadius: 50,
  },

  chatMessageSendButtonIcon: {
    resizeMode: 'contain',
    width: hp(25),
    height: hp(25),
  },
});

export {ChatsStyles};
