import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Inventory = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSupplierPress = () => {
    navigation.navigate('Supplier');
  };

  const handleReportPress = () => {
    console.log('Report button pressed');
  };

  return (
    <View className="flex-1 bg-blue-100 p-5 justify-center items-center">
      <Text className="text-2xl font-bold text-blue-900 mb-5">Inventory Management</Text>
      
      <View className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-5">
        {/* Dropdown for selecting items */}
        <Text className="text-lg text-gray-800 mb-2">Select Item Category:</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedItem(value)}
          items={[
            { label: 'Surgical Items', value: 'Surgical Items' },
            { label: 'Personal Protective Equipment', value: 'PPE' },
            { label: 'Diagnostics Tools And Supplies', value: 'Diagnostics Tools' },
          ]}
          style={{
            inputIOS: {
              fontSize: 16,
              paddingVertical: 12,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: '#90CAF9',
              borderRadius: 5,
              color: '#0D47A1',
              marginTop: 10,
              marginBottom: 10,
              width: '100%',
            },
            inputAndroid: {
              fontSize: 16,
              paddingVertical: 12,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: '#90CAF9',
              borderRadius: 5,
              color: '#0D47A1',
              marginTop: 10,
              marginBottom: 10,
              width: '100%',
            },
          }}
          value={selectedItem}
          placeholder={{ label: 'Select a category', value: null }}
        />
      </View>

      {/* Supplier and Report buttons */}
      <View className="flex-row justify-around w-full max-w-md">
        <TouchableOpacity
          className="py-3 px-8 bg-blue-600 rounded-md"
          onPress={handleSupplierPress}
        >
          <Text className="text-white font-bold text-lg">Supplier</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="py-3 px-8 bg-gray-400 rounded-md"
          onPress={handleReportPress}
        >
          <Text className="text-white font-bold text-lg">Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Inventory;
