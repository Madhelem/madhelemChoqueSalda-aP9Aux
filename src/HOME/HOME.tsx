import React, { Component } from "react";
import {createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import {View, Text,StyleSheet, Platform} from "react-native"; 
import {Appbar} from "react-native-paper"
import ListUsersPost from "./ListUsersPost";
import Reports from "../PROFIL/PROFIL";
import Order from "../NOTIFICATIONS/NOTIFICATIONS";
import TakePicture from "../screens/users/TakePicture";
import AppContext from "../context/AppContext";


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

var Stack = createStackNavigator();
class HOME extends Component<any, any> {
  test: any
  static contextType = AppContext
  constructor(props: any) {
    super(props);
    this.state = {
      dataUsers: []
    }
    
  }
  render() {
    const {searchbarVisible, changeSearchBarVisible} = this.context;
    return (
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen name="list" component={ListUsersPost} options={() => (
              {header: () => <Appbar.Header>
                <Appbar.Action icon="ninja" size={40} />
                <Appbar.Content title="Preciona para Buscar" subtitle={'Lista de Itens'} />
                 <Appbar.Action icon="magnify" size={30} onPress={() => {
                   changeSearchBarVisible(!searchbarVisible);
                 }} />
                 
                 <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
             </Appbar.Header >}
            )}/> 
           
          </Stack.Navigator>
        </NavigationContainer>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})
export default HOME;