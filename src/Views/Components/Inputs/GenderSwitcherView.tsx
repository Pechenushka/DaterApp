import React from 'react';

import {baseComponentProps, componentPropsWithModel, TypedBaseComponent} from '../../../Core/BaseComponent';
import {Image, TouchableOpacity, View} from 'react-native';
import {GenderSvitcherModel} from '../../../Models/Components/Inputs/GenderSvitcherModel';
import {ICONS} from '../../../constants/icons';
import {BaseStyles} from '../../../Styles/BaseStyles';
import {GenderSwitcherStyles} from '../../../Styles/GenderSwitcherStyles';

type genderSwitcherProps = baseComponentProps & {};

class GenderSwitcherView extends TypedBaseComponent<genderSwitcherProps, GenderSvitcherModel> {
  constructor(props: componentPropsWithModel<genderSwitcherProps, GenderSvitcherModel>) {
    super(props);
  }
  render() {
    super.render();
    return (
      <View style={[GenderSwitcherStyles.container]}>
        <TouchableOpacity
          style={[
            GenderSwitcherStyles.itemContainer,
            this.model.value === 'male' ? GenderSwitcherStyles.itemContainerActive : {},
          ]}
          onPress={() => {
            this.model.setGender('male');
          }}>
          <Image source={ICONS.maleIcon} style={BaseStyles.defaultIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            GenderSwitcherStyles.itemContainer,
            this.model.value === 'female' ? GenderSwitcherStyles.itemContainerActive : {},
          ]}
          onPress={() => {
            this.model.setGender('female');
          }}>
          <Image source={ICONS.femaleIcon} style={BaseStyles.defaultIcon} />
        </TouchableOpacity>

        {this.model.allMode && (
          <TouchableOpacity
            style={[
              GenderSwitcherStyles.itemContainer,
              this.model.value === 'all' ? GenderSwitcherStyles.itemContainerActive : {},
            ]}
            onPress={() => {
              this.model.setGender('all');
            }}>
            <Image source={ICONS.allGendersIcon} style={BaseStyles.defaultIcon} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export {GenderSwitcherView};
