import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../../Core/BaseComponent';
import React from 'react';
import {STYLES} from '../../../Styles/Styles';
import {GoogleSignInModel} from '../../../Models/Components/AuthComponents/GoogleSignInModel';
import {GoogleSigninButton} from 'react-native-google-signin';

type googleSignInViewProps = baseComponentProps & {
  styles?: Object;
};

class GoogleSignInView extends TypedBaseComponent<googleSignInViewProps, GoogleSignInModel> {
  constructor(props: componentPropsWithModel<googleSignInViewProps, GoogleSignInModel>) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <GoogleSigninButton
        style={[this.props.styles ? this.props.styles : {}, STYLES.BaseStyles.alignCenter]}
        color={GoogleSigninButton.Color.Light}
        onPress={this.model.onPress}></GoogleSigninButton>
    );
  }
}

export {GoogleSignInView};
