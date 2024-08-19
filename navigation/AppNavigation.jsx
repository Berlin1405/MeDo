import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStart from './app/Screens/GetStart';
import SignUp from './app/Screens/SignUp';
import Login from './app/Screens/Login';


const Stack = createStackNavigator();

export function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="GetStart">
                <Stack.Screen name="GetStart" options={{headerShown:false}} component={GetStart} />
                <Stack.Screen name="SignUp" options={{headerShown:false}} component={SignUp} />
                <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}