import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HospitalDetail = ({ route, navigation }) => {
  const { hospital } = route.params;

  
  // console.log('Hospital Details:', hospital);

  if (!hospital) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>No hospital data available</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-blue-200 p-5 justify-center items-center">
      <Text className="text-xl font-bold mb-2">{hospital.name}</Text>
      <Text className="text-lg text-gray-700 mb-5">{hospital.location}</Text>
      <View className="flex-row justify-between w-4/5 mb-5">
        <View className="items-center">
          <Text className="text-2xl font-bold text-green-600">{hospital.vacantBeds}</Text>
          <Text>Vacant Beds</Text>
        </View>
        <View className="items-center">
          <Text className="text-2xl font-bold text-red-600">{hospital.occupiedBeds}</Text>
          <Text>Occupied Beds</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('BookingConfirmation', {
          hospitalName: hospital.name,
          patientName: 'Gokul Kanna',
        })}
        className="bg-purple-600 py-3 px-10 rounded-md"
      >
        <Text className="text-white font-bold text-lg">BOOK NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HospitalDetail;
