import React from 'react';
import {Alert, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {hp, wp} from '../../constants/Dimensions';
import {app} from '../../Core/AppImpl';
import {
  TypedBaseComponent,
  componentPropsWithModel,
  baseComponentProps,
} from '../../Core/BaseComponent';
import {_} from '../../Core/Localization';
import {loadData, UserDataProvider} from '../../DataProvider/UserDataProvider';
import {LoginScreen} from '../../Screens/LoginScreen';
import {PrivacyScreen} from '../../Screens/PrivacyScreen';
import {TermsOfUseScreen} from '../../Screens/TermsOfUseScreen';
import {BaseStyles} from '../../Styles/BaseStyles';
import {LocalizationView} from '../../Views/Components/LocalizationViews/LocalizationView';
import {DrawerContentModel} from './DrawerContentModel';
import {HelpScreen} from '../../Screens/HelpScreen';

type drawerContentViewProps = baseComponentProps & {};

class DrawerContentView extends TypedBaseComponent<drawerContentViewProps, DrawerContentModel> {
  constructor(props: componentPropsWithModel<drawerContentViewProps, DrawerContentModel>) {
    super(props);
  }

  public onContactUsPress = async () => {
    Linking.openURL('mailto:smsoftfeedback@gmail.com');
  };

  public onTelegramPress = async () => {
    Linking.openURL('http://t.me/dater_dates');
  };

  public onDeleteAccPress = async () => {
    Alert.alert(_.lang.warning, _.lang.delete_accaunt_question, [
      {
        text: _.lang.no,
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: _.lang.yes,
        onPress: async () => {
          await loadData(UserDataProvider.DeleteUserById, {});
          app.currentUser.clearUser();
          app.navigator.navigate(LoginScreen);
        },
      },
    ]);
  };

  public onPrivacyPress = async () => {
    app.navigator.navigate(PrivacyScreen);
  };

  public onHelpPress = async () => {
    app.navigator.navigate(HelpScreen);
  };

  public onTermsPress = async () => {
    app.navigator.navigate(TermsOfUseScreen);
  };

  render() {
    return (
      <View style={[]}>
        <LocalizationView {...this.childProps(app.localization)} />
        <View style={[BaseStyles.mt30]}>
          <View style={this.styles.container}>
            <TouchableOpacity style={this.styles.button} onPress={this.onContactUsPress}>
              <Text style={this.styles.label}>{_.lang.feedback}</Text>
            </TouchableOpacity>
          </View>
          <View style={this.styles.container}>
            <TouchableOpacity style={this.styles.button} onPress={this.onPrivacyPress}>
              <Text style={this.styles.label}>{_.lang.privacy_rules}</Text>
            </TouchableOpacity>
          </View>
          <View style={this.styles.container}>
            <TouchableOpacity style={this.styles.button} onPress={this.onTermsPress}>
              <Text style={this.styles.label}>{_.lang.terms_of_use_title}</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={this.styles.container}>
            <TouchableOpacity style={this.styles.button} onPress={this.onTelegramPress}>
              <Text style={this.styles.label}>{_.lang.our_telegram}</Text>
            </TouchableOpacity>
          </View> */}
          <View style={this.styles.container}>
            <TouchableOpacity style={this.styles.button} onPress={this.onHelpPress}>
              <Text style={this.styles.label}>{_.lang.help}</Text>
            </TouchableOpacity>
          </View>
          <View style={this.styles.container}>
            <TouchableOpacity style={this.styles.button} onPress={this.onDeleteAccPress}>
              <Text style={this.styles.label}>{_.lang.delete_accaunt}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      width: '100%',
      marginTop: hp(10),
      paddingHorizontal: wp(25),
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingVertical: hp(5),
      borderRadius: hp(5),
    },
    label: {
      color: 'rgba(0, 0, 0, 0.8)',
      fontSize: wp(16),
      textTransform: 'capitalize',
    },
  });
}
export {DrawerContentView};
