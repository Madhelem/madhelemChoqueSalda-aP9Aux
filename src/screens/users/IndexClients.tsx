import React, { Component } from "react";
import { NavigationContainer , DarkTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HOME from "../../HOME/HOME";

import prof from "../../PROFIL/PROFIL";
import Icons from "react-native-vector-icons/AntDesign";
import Icons2 from "react-native-vector-icons/Entypo";
import Icons3 from "react-native-vector-icons/Foundation";
import MyColors from "../../color/MyColors";
import NOTI from "../../NOTIFICATIONS/NOTIFICATIONS";
const Tab = createBottomTabNavigator();
class IndexClients extends Component {
  render() {
    return (
      <NavigationContainer theme={DarkTheme} independent={true}>
        <Tab.Navigator
        screenOptions={({route}) => ({
          
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Home': {
                if (focused) {
                  return <Icons2 name="home" size={23} color={MyColors.secondary} />;
                } else {
                  return <Icons2 name="home" size={23} color={MyColors.lastcolor} />;
                }
              }
              case 'Notifications': {
                if (focused) {
                  return <Icons name="bells" size={23} color={MyColors.secondary}/>;
                } else {
                  return <Icons name="bells" size={23} color={MyColors.lastcolor} />;
                }
              }
              case 'Profil': {
                if (focused) {
                  return (
                    <Icons2 name="man" size={23} color={MyColors.secondary} />
                  );
                } else {
                  return (
                    <Icons2 name="man" size={23} color={MyColors.lastcolor} />
                  );
                }
              }
            }
          },
        })}
        >
          <Tab.Screen name="Home" component={HOME} />
          <Tab.Screen name="Notifications" component={NOTI} />
          <Tab.Screen name="Profil" component={prof} />
        </Tab.Navigator>
      </NavigationContainer>)
  }
}
export default IndexClients;