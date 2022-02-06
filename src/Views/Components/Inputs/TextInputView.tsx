import {TypedBaseComponent, baseComponentProps, componentPropsWithModel} from '../../../Core/BaseComponent';
import React from 'react';
import {Image, TextInput, View} from 'react-native';
import {TextInputModel} from '../../../Models/Components/Inputs/TextInputModel';
import {BaseStyles} from '../../../Styles/BaseStyles';
import {TextInputCounterView} from './TextInputCounterView';

type textInputViewProps = baseComponentProps & {
  styles?: {
    container: Object;
    text: Object;
    icon: Object;
  };
  counterConteinerStyles?: Object;
  counterTextStyles?: Object;
};

class TextInputView extends TypedBaseComponent<textInputViewProps, TextInputModel> {
  constructor(props: componentPropsWithModel<textInputViewProps, TextInputModel>) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <View style={[BaseStyles.InputContainer, this.props.styles !== undefined ? this.props.styles.container : {}]}>
        {this.model.showLeftIcon && this.model.leftIcon !== null && (
          <View style={BaseStyles.defaultIconContainer}>
            <Image
              style={[this.props.styles !== undefined ? this.props.styles.icon : {}, BaseStyles.defaultIcon]}
              source={this.model.leftIcon}
            />
          </View>
        )}
        <TextInput
          ref={ref => {
            this.model.ref = ref;
          }}
          maxLength={this.model.maxLength}
          editable={this.model.editable}
          keyboardType={this.model.keyboardType}
          onChangeText={this.model.onChangeText}
          onSubmitEditing={this.model.onSubmitEditing}
          placeholder={this.model.placeholder}
          placeholderTextColor={this.model.placeholderTextColor}
          textAlign={this.model.textAlign}
          style={[this.props.styles !== undefined ? this.props.styles.text : {}, {paddingHorizontal: 5, paddingVertical: 0}]}
          secureTextEntry={this.model.secure}
          multiline={this.model.numberOfLines > 1}
          textAlignVertical={this.model.numberOfLines > 1 ? 'top' : 'center'}
          value={this.model.value}
          onBlur={this.model.onBlur}
        />
        {this.model.showCounter && (
          <TextInputCounterView
            countContainerStyles={[this.props.counterConteinerStyles !== undefined ? this.props.counterConteinerStyles : {}]}
            countTextStyles={[this.props.counterTextStyles !== undefined ? this.props.counterTextStyles : {}]}
            {...this.childProps(this.model.conterModel)}
          />
        )}
      </View>
    );
  }
}

export {TextInputView};
