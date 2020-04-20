import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Account,
  Alarm,
  Chat,
  Configuration,
  Login,
  Medic,
  Polls,
  Registry,
} from './src/screens';
import { backgroundColor } from './src/config';
import store from './src/store';
import i18n from './src/translation';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function PrincipalFlow() {
  return (
    <Drawer.Navigator
      openByDefault
      drawerType="back"
      drawerStyle={{
        backgroundColor,
        width: 240,
      }}
      overlayColor="transparent"
      initialRouteName="Stats"
    >
      <Drawer.Screen name={i18n.t('account')} component={Account} />
      <Drawer.Screen name={i18n.t('alarm')} component={Alarm} />
      <Drawer.Screen name={i18n.t('chat')} component={Chat} />
      <Drawer.Screen name={i18n.t('configuration')} component={Configuration} />
      <Drawer.Screen name={i18n.t('medic')} component={Medic} />
      <Drawer.Screen name={i18n.t('polls')} component={Polls} />
    </Drawer.Navigator>
  );
}


const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registry" component={Registry} />
        <Stack.Screen name="PrincipalFlow" component={PrincipalFlow} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
