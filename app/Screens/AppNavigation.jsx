import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStart from './GetStart';
import SignUp from './Signup';
import Login from './Login';
import MainInt from './MainInt'; // Added missing import
import HospitalDetail from './HospitalDetail';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="GetStart">
        <Stack.Screen name="GetStart" options={{ headerShown: false }} component={GetStart} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="MainInt" options={{ headerShown: false }} component={MainInt} />
        <Stack.Screen name="HospitalDetail" options={{ headerShown: false }} component={HospitalDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
