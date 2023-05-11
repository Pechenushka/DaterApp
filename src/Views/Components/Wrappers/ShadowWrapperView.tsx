import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../../constants/colors';

type shadowWrapperProps = {
  children: React.ReactNode;
  internalShadow?: number;
  externalShadow?: number;
  style?: object;
  internalStyles?: object;
  borderRadius?: number;
};

const ShadowWrapperView = (props: shadowWrapperProps) => {
  const externalStyles = (elevation: number = 6) => {
    return {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: elevation,
    };
  };
  const internalStyles = (elevation: number = 8) => {
    return {
      backgroundColor: COLORS.WHITE,
      borderRadius: props.borderRadius !== undefined ? props.borderRadius : 12,
      elevation: elevation,
      overflow: 'hidden',
    };
  };
  return (
    <View
      style={[externalStyles(props.externalShadow), props.style !== undefined ? props.style : {}]}>
      <View
        style={[
          internalStyles(props.internalShadow),
          props.internalStyles !== undefined ? props.internalStyles : {},
        ]}>
        {props.children}
      </View>
    </View>
  );
};

export {ShadowWrapperView};
