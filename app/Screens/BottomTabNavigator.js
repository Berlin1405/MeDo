import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import MainInt from './MainInt';
import MapScreen from './MapScreen';
import ProfileScreen from './ProfileScreen';
import HelpServicesScreen from './HelpServicesScreen';
import HomeScreen from './HomeScreen';


const Tab = createBottomTabNavigator();


const iconMap = {
  Home: require('./../../assets/images/home.png'),
  Map: require('./../../assets/images/hospital.png'),
  Profile: require('./../../assets/images/placeholder.png'),
  'Help Services': require('./../../assets/images/user.png'),
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const iconName = iconMap[route.name] || require('./../../assets/images/home.png');
          return <Image source={iconName} style={{ width: 20, height: 20 }} />;
        },
        tabBarLabel: () => null,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#f8f8f8',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      <Tab.Screen name="Map" options={{ headerShown: false }} component={MainInt} />
      <Tab.Screen name="Profile" options={{ headerShown: false }} component={MapScreen} />
      <Tab.Screen name="Help Services" options={{ headerShown: false }} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
