import React from 'react';

import {
  baseComponentProps,
  componentPropsWithModel,
  TypedBaseComponent,
} from '../../../Core/BaseComponent';
import {Image, Modal, Text, View, TouchableOpacity} from 'react-native';
import {ICONS} from '../../../constants/icons';
import {DropDownModel} from '../../../Models/Components/Inputs/DropDownModel';
import {DropDownStyles} from '../../../Styles/DropDownStyles';
import {ScrollView} from 'react-native-gesture-handler';
import {BaseStyles} from '../../../Styles/BaseStyles';
import {ShadowWrapperView} from '../Wrappers/ShadowWrapperView';
import {_} from '../../../Core/Localization';

type dropDownViewProps = baseComponentProps & {};

class DropDownView extends TypedBaseComponent<dropDownViewProps, DropDownModel> {
  constructor(props: componentPropsWithModel<dropDownViewProps, DropDownModel>) {
    super(props);
  }
  render() {
    super.render();
    return (
      <TouchableOpacity
        disabled={this.model.disabled}
        onPress={this.model.open}
        style={[DropDownStyles.container]}>
        {this.model.value !== undefined ? (
          <Text style={[DropDownStyles.selectedItemText]}>{this.model.value.name}</Text>
        ) : (
          <Text style={[DropDownStyles.selectedItemText]}>{this.model.placeholder}</Text>
        )}
        <Image source={ICONS.dropDownIconWhite} style={DropDownStyles.actionIcon} />
        <Modal visible={this.model.opened} transparent={true}>
          <TouchableOpacity
            style={[DropDownStyles.modalContainer]}
            activeOpacity={1}
            onPress={this.model.close}>
            <View style={[DropDownStyles.modalContentContainer]}>
              {this.model.list.length === 0 && <Text>{_.lang.items_not_found}</Text>}
              <ScrollView
                style={BaseStyles.w100}
                contentContainerStyle={[BaseStyles.w100, BaseStyles.alignCenter]}>
                {this.model.list.map(item => {
                  return (
                    <ShadowWrapperView
                      key={item.id}
                      style={[BaseStyles.w90, BaseStyles.jc_c, BaseStyles.mv5]}>
                      <TouchableOpacity
                        style={[DropDownStyles.itemContainer]}
                        key={item.id}
                        onPress={() => this.model.selectItem(item)}>
                        <Text style={[DropDownStyles.selectedItemText]}>{item.name}</Text>
                      </TouchableOpacity>
                    </ShadowWrapperView>
                  );
                })}
              </ScrollView>
            </View>
          </TouchableOpacity>
        </Modal>
        {this.model.disabled && <View style={[DropDownStyles.disabledCover]} />}
      </TouchableOpacity>
    );
  }
}

export {DropDownView};
