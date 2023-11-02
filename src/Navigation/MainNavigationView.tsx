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
import {PhotoViewerView} from '../Views/Components/PhotoViewer/PhotoViewerView';
import {PopupNotificationView} from '../Views/Components/Popups/PopupNotificationView';
import {Platform} from 'react-native';
import deviceInfoModule from 'react-native-device-info';

type mainNavigationViewProps = baseComponentProps & {};

class MainNavigationView extends TypedBaseComponent<mainNavigationViewProps, MainNavigationModel> {
  constructor(props: componentPropsWithModel<mainNavigationViewProps, MainNavigationModel>) {
    super(props);
  }

  public render() {
    super.render();
    console.log('app.navigator.navigation = ref');
    return (
      <NavigationContainer ref={ref => (app.navigator.navigation = ref)}>
        <app.stacks.stackDrawer.Navigator
          drawerPosition={'left'}
          drawerType={'front'}
          initialRouteName={Stacks.initialRouteName}
          screenOptions={{
            headerShown: false,
            gestureHandlerProps: {enabled: true},
            animationEnabled:
              Platform.OS == 'android' && parseInt(deviceInfoModule.getSystemVersion()) > 9
                ? false
                : true,
          }}
          drawerContent={() => (
            <DrawerContentView {...this.childProps(this.model.drawerContentModel)} />
          )}>
          {app.stacks.screens.map(item => {
            return (
              <app.stacks.stackDrawer.Screen
                key={item.Screen.screenName}
                name={item.Screen.screenName}
                options={item.options}>
                {props => {
                  return (
                    <item.Screen {...props} {...this.childProps(app.setScreenModel(item.Screen))} />
                  );
                }}
              </app.stacks.stackDrawer.Screen>
            );
          })}
        </app.stacks.stackDrawer.Navigator>
        <PhotoViewerView {...this.childProps(app.photoViewer)} />
        <PopupNotificationView {...this.childProps(app.notification)} />
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
