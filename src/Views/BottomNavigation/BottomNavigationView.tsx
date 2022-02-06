import {TypedBaseComponent, baseComponentProps, componentPropsWithModel} from '../../Core/BaseComponent';
import React from 'react';
import {View} from 'react-native';
import {BottomNavigationModel} from '../../Models/BottomNavigation/BottomNavigationModel';
import {SimpleButtonView} from '../Components/Buttons/SimpleButtonView';
import {BottomNavigationStyles} from '../../Styles/BottomNavigationStyles';

type bottomNavigationViewProps = baseComponentProps & {};

class BottomNavigationView extends TypedBaseComponent<bottomNavigationViewProps, BottomNavigationModel> {
  constructor(props: componentPropsWithModel<bottomNavigationViewProps, BottomNavigationModel>) {
    super(props);
  }

  public render() {
    super.render();
    return (
      <View style={[BottomNavigationStyles.bottomNavigationContainer]}>
        {/* <SimpleButtonView
          styles={[
            BottomNavigationStyles.navButtonContainer,
            this.model.activeIndex === 1 ? BottomNavigationStyles.navButtonContainerActive : {},
          ]}
          iconStyles={BottomNavigationStyles.navButtonIcon}
          counterStyles={BottomNavigationStyles.bottomNavigationCounter}
          counterTextStyles={BottomNavigationStyles.bottomNavigationCounterText}
          {...this.childProps(this.model.requestButton)}
        /> */}
        <SimpleButtonView
          styles={[
            BottomNavigationStyles.navButtonContainer,
            this.model.activeIndex === 2 ? BottomNavigationStyles.navButtonContainerActive : {},
          ]}
          counterStyles={BottomNavigationStyles.bottomNavigationCounter}
          counterTextStyles={BottomNavigationStyles.bottomNavigationCounterText}
          iconStyles={BottomNavigationStyles.navButtonIcon}
          {...this.childProps(this.model.chatButton)}
        />
        <SimpleButtonView
          styles={[
            BottomNavigationStyles.navButtonContainer,
            this.model.activeIndex === 3 ? BottomNavigationStyles.navButtonContainerActive : {},
          ]}
          counterStyles={BottomNavigationStyles.bottomNavigationCounter}
          counterTextStyles={BottomNavigationStyles.bottomNavigationCounterText}
          iconStyles={BottomNavigationStyles.navButtonIcon}
          {...this.childProps(this.model.homeButton)}
        />
        <SimpleButtonView
          styles={[
            BottomNavigationStyles.navButtonContainer,
            this.model.activeIndex === 4 ? BottomNavigationStyles.navButtonContainerActive : {},
          ]}
          counterStyles={BottomNavigationStyles.bottomNavigationCounter}
          counterTextStyles={BottomNavigationStyles.bottomNavigationCounterText}
          iconStyles={BottomNavigationStyles.navButtonIcon}
          {...this.childProps(this.model.searchButton)}
        />

        <SimpleButtonView
          styles={[
            BottomNavigationStyles.navButtonContainer,
            this.model.activeIndex === 5 ? BottomNavigationStyles.navButtonContainerActive : {},
          ]}
          counterStyles={BottomNavigationStyles.bottomNavigationCounter}
          counterTextStyles={BottomNavigationStyles.bottomNavigationCounterText}
          iconStyles={BottomNavigationStyles.navButtonIcon}
          {...this.childProps(this.model.likesButton)}
        />
      </View>
    );
  }
}

export {BottomNavigationView};
