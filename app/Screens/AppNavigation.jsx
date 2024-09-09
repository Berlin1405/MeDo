import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import GetStart from './GetStart';
import SignUp from './Signup';
import Login from './Login';
import HospitalDetail from './HospitalDetail';
import BookingConfirmation from './BookingConfirmation';
import BookingSuccessScreen from './BookingSuccessScreen';
import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';
import MapScreen from './MapScreen';
import AdminProf from './AdminProf'
import Inventory from './Inventory'
import Supplier from './Supplier'


const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="GetStart">
        <Stack.Screen name="GetStart" options={{ headerShown: false }} component={GetStart} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="BottomTabs" options={{ headerShown: false }} component={BottomTabNavigator} />
        <Stack.Screen name="MainInt" options={{ headerShown: false }} component={BottomTabNavigator} />
        <Stack.Screen name="HospitalDetail" options={{ headerShown: false }} component={HospitalDetail} />
        <Stack.Screen name="BookingConfirmation"  options={{ headerShown: false }} component={BookingConfirmation} />
        <Stack.Screen name="BookingSuccessScreen"  options={{ headerShown: false }} component={BookingSuccessScreen} />
        <Stack.Screen name="AdminLogin" options={{ headerShown: false }} component={AdminLogin} />
        <Stack.Screen name="AdminSignup" options={{ headerShown: false }} component={AdminSignup} />
        <Stack.Screen name="MapScreen" options={{ headerShown: false }} component={MapScreen} />
        <Stack.Screen name="AdminProf" options={{ headerShown: false }} component={AdminProf} />
        <Stack.Screen name="Inventory" options={{ headerShown: false }} component={Inventory} />
        <Stack.Screen name="Supplier" options={{ headerShown: false }} component={Supplier} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
