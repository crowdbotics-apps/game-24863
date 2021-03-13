import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings214496Navigator from '../features/Settings214496/navigator';
import UserProfile214494Navigator from '../features/UserProfile214494/navigator';
import UserProfile4214467Navigator from '../features/UserProfile4214467/navigator';
import Leaderboard5214466Navigator from '../features/Leaderboard5214466/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
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
