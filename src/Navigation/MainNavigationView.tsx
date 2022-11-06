import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  baseComponentProps,
  componentPropsWithModel,
  TypedBaseComponent,
} from '../Core/BaseComponent';
import {app} from '../Core/AppImpl';
import {Stacks} from '../Controllers/Stacks';
import {DrawerContentView} from './DrawerContent/DrawerContentView';
import {MainNavigationModel} from './MainNavigationModel';

type mainNavigationViewProps = baseComponentProps & {};

class MainNavigationView extends TypedBaseComponent<mainNavigationViewProps, MainNavigationModel> {
  constructor(props: componentPropsWithModel<mainNavigationViewProps, MainNavigationModel>) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <NavigationContainer ref={ref => (app.navigator.navigation = ref)}>
        <app.stacks.stackDrawer.Navigator
          drawerPosition={'left'}
          drawerType={'front'}
          screenOptions={{headerShown: false, gestureHandlerProps: {enabled: true}}}
          drawerContent={() => (
            <DrawerContentView {...this.childProps(this.model.drawerContentModel)} />
          )}
          initialRouteName={Stacks.initialRouteName}>
          {app.stacks.screens.map(item => (
            <app.stacks.stackDrawer.Screen
              key={item.Screen.name}
              name={item.Screen.name}
              options={item.options}>
              {props => (
                <item.Screen {...props} {...this.childProps(app.setScreenModel(item.Screen))} />
              )}
            </app.stacks.stackDrawer.Screen>
          ))}
        </app.stacks.stackDrawer.Navigator>
      </NavigationContainer>
    );
  }
}
export const horizontalAnimation = {
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

export {MainNavigationView};
