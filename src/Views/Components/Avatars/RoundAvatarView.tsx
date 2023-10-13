import {baseComponentProps} from '../../../Core/BaseComponent';
import React from 'react';
import {Image, Platform, View} from 'react-native';
import {ICONS} from '../../../constants/icons';
import {appSettings} from '../../../Common/AppSettings';
import {AvatarStyles} from '../../../Styles/AvatarStyles';

type roundAvatarViewProps = baseComponentProps & {
  size: number;
  imagePath: string | undefined;
  isOnline?: boolean;
  isPublicChat?: boolean;
};

const getOnlineStatusPosition = (size: number) => {
  if (size > 80) {
    return {bottom: size / 11.14, right: size / 11.14};
  }
  return {bottom: size / 15.14, right: size / 15.14};
};

const getOnlineStatusSize = (size: number) => {
  if (size > 80) {
    return {height: size / 7.14, width: size / 7.14};
  }
  return {height: size / 4.14, width: size / 4.14};
};

const RoundAvatarView = (props: roundAvatarViewProps) => {
  let imgRef: Image | null;
  return (
    <View style={{height: props.size, width: props.size}}>
      <View style={[AvatarStyles.roundAvatarContainer, {height: props.size, width: props.size}]}>
        <Image
          ref={ref => {
            imgRef = ref;
          }}
          source={
            props.imagePath === undefined || props.imagePath === '' || props.imagePath === null
              ? ICONS.profileIcon
              : {
                  uri: `${appSettings.apiEndpoint}${props.imagePath}`,
                  cache: 'reload',
                }
          }
          style={[AvatarStyles.roundAvatarImage, {height: props.size, width: props.size}]}
          onError={() => {
            const nativeProp = Platform.OS === 'ios' ? 'source' : 'src';
            imgRef &&
              imgRef.setNativeProps({
                [nativeProp]: [
                  Image.resolveAssetSource(
                    props.isPublicChat ? ICONS.publicChatIcon : ICONS.profileIcon,
                  ),
                ], // array
              });
          }}
        />
      </View>
      {props.isOnline && (
        <View
          style={[
            AvatarStyles.isOnlineView,
            getOnlineStatusPosition(props.size),
            getOnlineStatusSize(props.size),
          ]}
        />
      )}
    </View>
  );
};

export {RoundAvatarView};
