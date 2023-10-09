import {
  TypedBaseComponent,
  baseComponentProps,
  componentPropsWithModel,
} from '../../Core/BaseComponent';
import React from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {ChatContextMenuModel} from '../../Models/ChatModels/ChatContextMenuModel';
import {ChatsStyles} from '../../Styles/ChatsStyles';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {ShadowWrapperView} from '../Components/Wrappers/ShadowWrapperView';

type chatContextMenuViewProps = baseComponentProps & {};

class ChatContextMenuView extends TypedBaseComponent<
  chatContextMenuViewProps,
  ChatContextMenuModel
> {
  constructor(props: componentPropsWithModel<chatContextMenuViewProps, ChatContextMenuModel>) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <Modal onRequestClose={this.model.close} transparent={true} visible={this.model.visible}>
        <TouchableOpacity
          style={[ChatsStyles.contextMenuModalContainer]}
          activeOpacity={1}
          onPress={this.model.close}>
          <View style={ChatsStyles.modalContentContainer}>
            <ShadowWrapperView>
              <SimpleButtonView
                styles={ChatsStyles.modalActionButton}
                {...this.childProps(this.model.deleteChatButton)}
              />
              <View style={ChatsStyles.modalActionButtonSeparator} />
              {this.model.blocked ? (
                <SimpleButtonView
                  styles={ChatsStyles.modalActionButton}
                  {...this.childProps(this.model.unBlockUserButton)}
                />
              ) : (
                <SimpleButtonView
                  styles={ChatsStyles.modalActionButton}
                  {...this.childProps(this.model.blockUserButton)}
                />
              )}
            </ShadowWrapperView>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

export {ChatContextMenuView};
