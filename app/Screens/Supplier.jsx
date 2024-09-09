import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SuppliersScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-blue-100 p-5 justify-center items-center">
      <Text className="text-2xl font-bold text-blue-900 mb-5">Suppliers</Text>
      
      <View className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-5">
        <View className="flex-row justify-between py-2">
          <Text className="text-lg text-gray-800">Supplier 1</Text>
          <TouchableOpacity>
            <Text className="text-blue-500">Details</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between py-2">
          <Text className="text-lg text-gray-800">Supplier 2</Text>
          <TouchableOpacity>
            <Text className="text-blue-500">Details</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between py-2">
          <Text className="text-lg text-gray-800">Supplier 3</Text>
          <TouchableOpacity>
            <Text className="text-blue-500">Details</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Booking History */}
      <Text className="text-lg font-bold text-blue-900 mb-2">Booking History:</Text>
      <View className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <View className="flex-row justify-between">
          <Text className="text-gray-700">S.No</Text>
          <Text className="text-gray-700">Name</Text>
          <Text className="text-gray-700">Date</Text>
          <Text className="text-gray-700">Count</Text>
        </View>
        {/* Static Data for Example */}
        <View className="flex-row justify-between py-2">
          <Text className="text-gray-700">1</Text>
          <Text className="text-gray-700">ITEM 1</Text>
          <Text className="text-gray-700">17/3/2024</Text>
          <Text className="text-gray-700">1</Text>
        </View>
        <View className="flex-row justify-between py-2">
          <Text className="text-gray-700">2</Text>
          <Text className="text-gray-700">ITEM 2</Text>
          <Text className="text-gray-700">26/5/2024</Text>
          <Text className="text-gray-700">1</Text>
        </View>
        {/* Add more rows as needed */}
      </View>
    </View>
  );
};

export default SuppliersScreen;
