import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import NotificationList215679Navigator from '../features/NotificationList215679/navigator';
import Settings215678Navigator from '../features/Settings215678/navigator';
import Settings215670Navigator from '../features/Settings215670/navigator';
import UserProfile215668Navigator from '../features/UserProfile215668/navigator';
import BlankScreen77214544Navigator from '../features/BlankScreen77214544/navigator';
import UserProfile214534Navigator from '../features/UserProfile214534/navigator';
import Tutorial214533Navigator from '../features/Tutorial214533/navigator';
import NotificationList214505Navigator from '../features/NotificationList214505/navigator';
import Settings214504Navigator from '../features/Settings214504/navigator';
import Settings214496Navigator from '../features/Settings214496/navigator';
import UserProfile214494Navigator from '../features/UserProfile214494/navigator';
import UserProfile4214467Navigator from '../features/UserProfile4214467/navigator';
import Leaderboard5214466Navigator from '../features/Leaderboard5214466/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
NotificationList215679: { screen: NotificationList215679Navigator },
Settings215678: { screen: Settings215678Navigator },
Settings215670: { screen: Settings215670Navigator },
UserProfile215668: { screen: UserProfile215668Navigator },
BlankScreen77214544: { screen: BlankScreen77214544Navigator },
UserProfile214534: { screen: UserProfile214534Navigator },
Tutorial214533: { screen: Tutorial214533Navigator },
NotificationList214505: { screen: NotificationList214505Navigator },
Settings214504: { screen: Settings214504Navigator },
Settings214496: { screen: Settings214496Navigator },
UserProfile214494: { screen: UserProfile214494Navigator },
UserProfile4214467: { screen: UserProfile4214467Navigator },
Leaderboard5214466: { screen: Leaderboard5214466Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
