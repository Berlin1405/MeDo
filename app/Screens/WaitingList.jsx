import React from 'react';
import { View, Text, Image } from 'react-native';

export default function WaitingList() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-400">
      <Text className="text-white text-lg">You have been added to the waiting list!</Text>
      <Image
        source={require('./../../assets/images/doctors.png')} // Replace with the path to your check icon
        className="w-40 h-40 my-8"
      />
      <Text className="text-white">Kindly be patient 😊</Text>
    </View>
  );
}
