import React from 'react';
import { View, Text, Image } from 'react-native';

const BookingSuccessScreen = ({ route }) => {
  const { hospitalName, patientName } = route.params || {}; 

  return (
    <View className="flex-1 bg-blue-100 justify-center items-center p-4">
      <Image
        source={require('./../../assets/images/success_tick1.gif')} F
        className="w-30 h-30 mb-6"
      />
      <Text className="text-2xl font-bold text-green-600 mb-4 text-center">BOOKING CONFIRMED!</Text>
      <View className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <Text className="text-lg text-gray-800 mb-2 text-center">Patient Name: {patientName || 'Not Provided'}</Text>
        <Text className="text-lg text-gray-800 mb-2 text-center">Hospital Name: {hospitalName || 'Not Provided'}</Text>
        <Text className="text-lg text-gray-800 mb-2 text-center">Alloted Bed No: 46</Text>
        <Text className="text-lg text-gray-800 mb-2 text-center">Time: 3:00 PM</Text>
      </View>
    </View>
  );
};

export default BookingSuccessScreen;
