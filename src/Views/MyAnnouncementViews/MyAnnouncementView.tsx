import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {Image, Text, View, ScrollView, ActivityIndicator, Platform} from 'react-native';
import {BaseStyles} from '../../Styles/BaseStyles';
import {MyAnnouncementModel} from '../../Models/MyAnnouncementModels/MyAnnouncementModel';
import {MyAnnouncementStyles} from '../../Styles/MyAnnouncementStyles';
import {TextInputView} from '../Components/Inputs/TextInputView';
import {DropDownView} from '../Components/Inputs/DropDownView';
import {RegistrationScreenStyles} from '../../Styles/RegistrationScreenStyles';
import {app} from '../../Core/AppImpl';
import {ICONS} from '../../constants/icons';
import {LabelView} from '../Components/Labels/LabelView';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {COLORS} from '../../constants/colors';
import {appSettings} from '../../Common/AppSettings';
import {_} from '../../Core/Localization';
import {getAge} from '../../Common/Helpers';

type myAnnouncementViewProps = baseComponentProps & {};

class MyAnnouncementView extends TypedBaseComponent<myAnnouncementViewProps, MyAnnouncementModel> {
  private imgRef: Image | null = null;
  constructor(props: componentPropsWithModel<myAnnouncementViewProps, MyAnnouncementModel>) {
    super(props);
  }

  public getExpectationsIcon() {
    if (this.model.sexSelection.value?.id === 0) {
      return <Image source={ICONS.maleIcon} style={[BaseStyles.defaultIcon]} />;
    }

    if (this.model.sexSelection.value?.id === 1) {
      return <Image source={ICONS.femaleIcon} style={[BaseStyles.defaultIcon]} />;
    }

    if (this.model.sexSelection.value?.id === 2) {
      return (
        <View style={[BaseStyles.row]}>
          <Image source={ICONS.maleIcon} style={[BaseStyles.defaultIcon]} />
          <Text>{_.lang.or}</Text>
          <Image source={ICONS.femaleIcon} style={[BaseStyles.defaultIcon]} />
        </View>
      );
    }

    return (
      <Image
        source={app.currentUser.gender === 'male' ? ICONS.femaleIcon : ICONS.maleIcon}
        style={[BaseStyles.defaultIcon]}
      />
    );
  }

  public render() {
    super.render();
    if (this.model.loading) {
      return (
        <View style={[BaseStyles.w100, BaseStyles.h100, BaseStyles.alignCenter]}>
          <ActivityIndicator size={30} color={COLORS.PLACEHOLDER} />
        </View>
      );
    }
    return (
      <View style={[MyAnnouncementStyles.mainContainer, BaseStyles.container]}>
        <ScrollView
          style={BaseStyles.w100}
          contentContainerStyle={[MyAnnouncementStyles.scrollContentContainer]}>
          <Text style={[MyAnnouncementStyles.mainTitleText]}>
            {this.model.editMode ? _.lang.your_announcement : 'Create announcement'}
          </Text>
          <View style={[MyAnnouncementStyles.inputFormContainer]}>
            <View style={BaseStyles.w95}>
              <Text style={[MyAnnouncementStyles.describeInputTitleText]}>
                {_.lang.announcement_text}
              </Text>
            </View>

            <TextInputView
              styles={{
                container: MyAnnouncementStyles.describeInputContainer,
                icon: {},
                text: MyAnnouncementStyles.describeInputText,
              }}
              counterConteinerStyles={MyAnnouncementStyles.describeInputCounterContainer}
              counterTextStyles={MyAnnouncementStyles.describeInputCounterText}
              {...this.childProps(this.model.discribeInput)}
            />

            <View style={[RegistrationScreenStyles.locationContainer]}>
              <Text style={[RegistrationScreenStyles.locationTitleText]}>{_.lang.location}</Text>

              <View style={[RegistrationScreenStyles.infoItemWrapper]}>
                <View style={[RegistrationScreenStyles.infoItemContainer]}>
                  <Text style={[RegistrationScreenStyles.infoItemText]}>{_.lang.country}:</Text>
                </View>
                <View style={[RegistrationScreenStyles.selectionsItemContainer]}>
                  <DropDownView {...this.childProps(this.model.countrySelection)} />
                </View>
              </View>

              <View style={[RegistrationScreenStyles.infoItemWrapper]}>
                <View style={[RegistrationScreenStyles.infoItemContainer]}>
                  <Text style={[RegistrationScreenStyles.infoItemText]}>{_.lang.region}:</Text>
                </View>
                <View style={[RegistrationScreenStyles.selectionsItemContainer]}>
                  <DropDownView {...this.childProps(this.model.regionSelection)} />
                </View>
              </View>

              <View style={[RegistrationScreenStyles.infoItemWrapper]}>
                <View style={[RegistrationScreenStyles.infoItemContainer]}>
                  <Text style={[RegistrationScreenStyles.infoItemText]}>{_.lang.city}:</Text>
                </View>
                <View style={[RegistrationScreenStyles.selectionsItemContainer]}>
                  <DropDownView {...this.childProps(this.model.citySelection)} />
                </View>
              </View>
            </View>

            <View style={[RegistrationScreenStyles.goalsContainer]}>
              <Text style={[RegistrationScreenStyles.mainTitleStyles]}>
                {_.lang.your_expectations}
              </Text>
              <View style={RegistrationScreenStyles.goalsItem}>
                <View style={RegistrationScreenStyles.goaltTitleItem}>
                  <Text>{_.lang.i_looking_for}:</Text>
                </View>
                <View style={[RegistrationScreenStyles.goalSelectionItem]}>
                  <DropDownView {...this.childProps(this.model.sexSelection)} />
                </View>
              </View>
              <View style={RegistrationScreenStyles.goalsItem}>
                <View style={RegistrationScreenStyles.goaltTitleItem}>
                  <Text>{_.lang.your_dating_goals}:</Text>
                </View>

                <View style={[RegistrationScreenStyles.goalSelectionItem]}>
                  <DropDownView {...this.childProps(this.model.goalsSelection)} />
                </View>
              </View>
            </View>
          </View>
          {/** PREWIEV */}
          <Text style={[MyAnnouncementStyles.mainTitleText]}>{_.lang.preview}</Text>
          <View style={[MyAnnouncementStyles.previewContainer]}>
            <View style={[BaseStyles.w100, BaseStyles.ai_fs]}>
              <View style={[BaseStyles.row, BaseStyles.w100, BaseStyles.jc_sb]}>
                <View style={[BaseStyles.ai_c, BaseStyles.w30]}>
                  <View style={[MyAnnouncementStyles.avatarContainer]}>
                    <Image
                      ref={ref => {
                        this.imgRef = ref;
                      }}
                      source={
                        app.currentUser.avatar === undefined ||
                        app.currentUser.avatar === '' ||
                        app.currentUser.avatar === null
                          ? ICONS.profileIcon
                          : {
                              uri: `${appSettings.apiEndpoint}${
                                app.currentUser.avatar.split('.')[0]
                              }-compressed.${app.currentUser.avatar.split('.').pop()}`,
                              cache: 'reload',
                            }
                      }
                      style={MyAnnouncementStyles.avatarImage}
                      onError={() => {
                        const nativeProp = Platform.OS === 'ios' ? 'source' : 'src';
                        this.imgRef &&
                          this.imgRef.setNativeProps({
                            [nativeProp]: [Image.resolveAssetSource(ICONS.profileIcon)], // array
                          });
                      }}
                    />
                  </View>
                </View>
                <View style={[BaseStyles.jc_c, BaseStyles.w100]}>
                  <View style={[BaseStyles.row, BaseStyles.pb5]}>
                    <Text style={MyAnnouncementStyles.userNameText}>
                      {app.currentUser.userName}{' '}
                    </Text>
                    <Image
                      source={app.currentUser.gender === 'male' ? ICONS.maleIcon : ICONS.femaleIcon}
                      style={[BaseStyles.defaultIcon]}
                    />
                    <Text> {getAge(app.currentUser.birthDate || 0)} y.o </Text>
                  </View>
                  <View style={[MyAnnouncementStyles.goalPreviewContainer]}>
                    <Text> {_.lang.i_looking_for} </Text>
                    {this.getExpectationsIcon()}
                    {this.model.goalsSelection.value !== undefined && (
                      <Text>
                        {' '}
                        {_.lang.for} {this.model.goalsSelection.value.name}
                      </Text>
                    )}
                  </View>
                  <View style={MyAnnouncementStyles.previewMainTextWrapper}>
                    {this.model.previewLabelModel.text !== '' && (
                      <View style={MyAnnouncementStyles.previewMainTextContainer}>
                        <LabelView {...this.childProps(this.model.previewLabelModel)} />
                      </View>
                    )}
                  </View>
                  {app.currentUser.location && (
                    <View style={[MyAnnouncementStyles.previewLocationContainer]}>
                      <Image source={ICONS.locationIcon} style={[BaseStyles.defaultIcon]} />
                      <LabelView
                        textStyles={[BaseStyles.ta_c]}
                        {...this.childProps(this.model.previewLocationLabelModel)}
                      />
                    </View>
                  )}
                </View>
              </View>
            </View>
          </View>
          {this.model.editMode ? (
            <SimpleButtonView
              styles={MyAnnouncementStyles.submitButtonContainer}
              textStyles={MyAnnouncementStyles.submitButtonText}
              {...this.childProps(this.model.editButton)}
            />
          ) : (
            <SimpleButtonView
              styles={MyAnnouncementStyles.submitButtonContainer}
              textStyles={MyAnnouncementStyles.submitButtonText}
              {...this.childProps(this.model.submitButton)}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}

export {MyAnnouncementView};
