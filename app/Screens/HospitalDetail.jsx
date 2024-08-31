// HospitalDetail.jsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const HospitalDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // Extract parameters from route
  const { name, marker, rating, vacantBeds, occupiedBeds } = route.params || {};

  return (
    <View className="flex-1 bg-white p-4">
      <TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
        <Text className="text-blue-500">Back</Text>
      </TouchableOpacity>

      <Text className="text-2xl font-bold mb-2">{name}</Text>
      <Text className="text-gray-500 mb-4">{marker}</Text>

      <View className="bg-blue-100 p-4 rounded-md mb-4">
        <Text className="text-lg font-bold mb-2">Bed Status</Text>
        <View className="flex-row justify-between">
          <View className="items-center">
            <Text className="text-green-500 text-xl font-bold">{vacantBeds}</Text>
            <Text className="text-gray-500">Vacant Beds</Text>
          </View>
          <View className="items-center">
            <Text className="text-red-500 text-xl font-bold">{occupiedBeds}</Text>
            <Text className="text-gray-500">Occupied Beds</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HospitalDetail;
