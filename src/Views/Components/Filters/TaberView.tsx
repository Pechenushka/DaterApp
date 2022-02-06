import {TypedBaseComponent, baseComponentProps, componentPropsWithModel} from '../../../Core/BaseComponent';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TaberModel} from '../../../Models/Components/Filters/TaberModel';

type taberViewProps = baseComponentProps & {
  textStyles?: Object;
  containerStyles?: Object;
  elementContainerStyles?: Object;
  elementActiveContainerStyles?: Object;
  elementActiveTextStyles?: Object;
};

class TaberView extends TypedBaseComponent<taberViewProps, TaberModel> {
  constructor(props: componentPropsWithModel<taberViewProps, TaberModel>) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <View style={[this.props.containerStyles !== undefined ? this.props.containerStyles : {}]}>
        {this.model.tabs.map((tab, index) => {
          const isActive = this.model.activeIndex === index;
          return (
            <TouchableOpacity
              key={tab}
              style={[
                this.props.elementContainerStyles !== undefined ? this.props.elementContainerStyles : {},
                isActive && this.props.elementActiveContainerStyles !== undefined ? this.props.elementActiveContainerStyles : {},
                index === this.model.tabs.length - 1 && {borderRightWidth: 0},
              ]}
              onPress={() => {
                this.model.changeSelectedItem(index);
              }}>
              <Text
                style={[
                  this.props.textStyles !== undefined ? this.props.textStyles : {},
                  isActive && this.props.elementActiveTextStyles !== undefined ? this.props.elementActiveTextStyles : {},
                ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

export {TaberView};
