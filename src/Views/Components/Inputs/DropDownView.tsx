import React from 'react';

import {
  baseComponentProps,
  componentPropsWithModel,
  TypedBaseComponent,
} from '../../../Core/BaseComponent';
import {Image, Modal, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {ICONS} from '../../../constants/icons';
import {DropDownModel} from '../../../Models/Components/Inputs/DropDownModel';
import {DropDownStyles} from '../../../Styles/DropDownStyles';
import {BaseStyles} from '../../../Styles/BaseStyles';
import {ShadowWrapperView} from '../Wrappers/ShadowWrapperView';
import {_} from '../../../Core/Localization';
import {TextInputView} from './TextInputView';
import {SimpleButtonView} from '../Buttons/SimpleButtonView';

type dropDownViewProps = baseComponentProps & {};

class DropDownView extends TypedBaseComponent<dropDownViewProps, DropDownModel> {
  constructor(props: componentPropsWithModel<dropDownViewProps, DropDownModel>) {
    super(props);
  }
  render() {
    super.render();
    return (
      <View>
        <TouchableOpacity
          disabled={this.model.disabled}
          onPress={this.model.open}
          style={[DropDownStyles.container]}>
          {this.model.value !== undefined ? (
            <View style={[BaseStyles.w90]}>
              <Text numberOfLines={2} style={[DropDownStyles.selectedItemText]}>
                {this.model.value.name}
              </Text>
            </View>
          ) : (
            <View style={[BaseStyles.w90]}>
              <Text numberOfLines={2} style={[DropDownStyles.selectedItemText]}>
                {this.model.placeholder}
              </Text>
            </View>
          )}
          <Image source={ICONS.dropDownIconWhite} style={DropDownStyles.actionIcon} />
          <Modal visible={this.model.opened} transparent={true}>
            <TouchableOpacity
              style={[DropDownStyles.modalContainer]}
              activeOpacity={1}
              onPress={this.model.close}>
              <View style={[DropDownStyles.modalContentContainer]}>
                {this.model.needSearch && (
                  <View style={[BaseStyles.w100, BaseStyles.row]}>
                    <TextInputView
                      styles={{
                        container: DropDownStyles.searchInputContainer,
                        text: DropDownStyles.searchInputText,
                        icon: {},
                      }}
                      {...this.childProps(this.model.searchInput)}
                    />
                    <SimpleButtonView
                      iconStyles={DropDownStyles.searchClearButtonIcon}
                      styles={DropDownStyles.searchClearButtonContainer}
                      {...this.childProps(this.model.clearSearchButton)}
                    />
                  </View>
                )}
                {this.model.searchResult.length ? (
                  <FlatList
                    style={BaseStyles.w100}
                    contentContainerStyle={[BaseStyles.w100]}
                    renderItem={({item}) => {
                      return (
                        <View style={[BaseStyles.w100, BaseStyles.ai_c]}>
                          <ShadowWrapperView
                            key={item.id}
                            style={[BaseStyles.w90, BaseStyles.jc_c, BaseStyles.mv5]}>
                            <TouchableOpacity
                              style={[DropDownStyles.itemContainer]}
                              key={item.id}
                              onPress={() => this.model.selectItem(item)}>
                              <Text numberOfLines={2} style={[DropDownStyles.selectedItemText]}>
                                {item.name}
                              </Text>
                            </TouchableOpacity>
                          </ShadowWrapperView>
                        </View>
                      );
                    }}
                    data={this.model.searchResult}
                    maxToRenderPerBatch={10}
                    initialNumToRender={10}
                    windowSize={5}
                    ListEmptyComponent={<Text>{_.lang.items_not_found}</Text>}
                  />
                ) : (
                  <FlatList
                    style={BaseStyles.w100}
                    contentContainerStyle={[BaseStyles.w100]}
                    renderItem={({item}) => {
                      return (
                        <View style={[BaseStyles.w100, BaseStyles.ai_c]}>
                          <ShadowWrapperView
                            key={item.id}
                            style={[BaseStyles.w90, BaseStyles.jc_c, BaseStyles.mv5]}>
                            <TouchableOpacity
                              style={[DropDownStyles.itemContainer]}
                              key={item.id}
                              onPress={() => this.model.selectItem(item)}>
                              <Text numberOfLines={2} style={[DropDownStyles.selectedItemText]}>
                                {item.name}
                              </Text>
                            </TouchableOpacity>
                          </ShadowWrapperView>
                        </View>
                      );
                    }}
                    data={this.model.list}
                    maxToRenderPerBatch={10}
                    initialNumToRender={10}
                    windowSize={5}
                    ListEmptyComponent={<Text>{_.lang.items_not_found}</Text>}
                  />
                )}
              </View>
            </TouchableOpacity>
          </Modal>
        </TouchableOpacity>
        {this.model.disabled && <View style={[DropDownStyles.disabledCover]} />}
      </View>
    );
  }
}

export {DropDownView};
