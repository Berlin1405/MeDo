import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
const ProfileScreen = () => {
  return (
    <LinearGradient
      colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
      className="flex-1 items-center justify-center"
    >
      {/* Profile Header */}
      <View className="w-11/12 justify-center items-center bg-white p-5 rounded-xl shadow-md mb-5">
        <Image
          source={require('./../../assets/images/gokul.png')}
          className="w-32 h-32 rounded-full mb-2 border-2 border-blue-300"
        />
        <Text className="text-2xl font-bold text-gray-800 mb-1">KAVIN S</Text>
        <Text className="text-sm text-gray-600">kavinrahul09@gmail.com | +91 8148741126</Text>
      </View>

      {/* Profile Options */}
      <View className="w-11/12 bg-white p-4 rounded-xl shadow-md">
        <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-200">
          <Text className="text-lg text-gray-800">Edit profile information</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-200">
          <Text className="text-lg text-gray-800">Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-200">
          <Text className="text-lg text-gray-800">Language</Text>
          <Text className="text-sm text-gray-600 ml-auto">English</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-200">
          <Text className="text-lg text-gray-800">Security</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-200">
          <Text className="text-lg text-gray-800">Theme</Text>
          <Text className="text-sm text-gray-600 ml-auto">Light mode</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-200">
          <Text className="text-lg text-gray-800">Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-200">
          <Text className="text-lg text-gray-800">Contact us</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-200">
          <Text className="text-lg text-gray-800">Privacy policy</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default ProfileScreen;
