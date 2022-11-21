import {baseComponentProps} from '../../../Core/BaseComponent';
import React from 'react';
import {Image, Platform, View} from 'react-native';
import {ICONS} from '../../../constants/icons';
import {appSettings} from '../../../Common/AppSettings';
import {AvatarStyles} from '../../../Styles/AvatarStyles';

type coverAvatarViewProps = baseComponentProps & {
  imagePath: string | undefined;
};

const CoverAvatar = (props: coverAvatarViewProps) => {
  let imgRef: Image | null;
  return (
    <View style={[AvatarStyles.coverAvatarContainer]}>
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
        style={[AvatarStyles.coverAvatarImage]}
        onError={() => {
          const nativeProp = Platform.OS === 'ios' ? 'source' : 'src';
          imgRef &&
            imgRef.setNativeProps({
              [nativeProp]: [Image.resolveAssetSource(ICONS.profileIcon)], // array
            });
        }}
      />
    </View>
  );
};

export {CoverAvatar};
