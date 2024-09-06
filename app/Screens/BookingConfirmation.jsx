import React, { useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const BookingConfirmation = ({ route, navigation }) => {
  const { hospitalName, patientName } = route.params;
  const [reservedCondition, setReservedCondition] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleReserveNow = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('BookingSuccessScreen', {
        hospitalName: hospitalName, 
        patientName: patientName, 
      });
    }, 2000);
  };


  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-blue-100">
        <ActivityIndicator size="large" color="#4F86F7" className="mb-4" />
        <Text className="text-lg text-blue-800">Processing...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-blue-200 p-5 justify-center items-center">
      <Text className="text-2xl font-bold text-blue-900 mb-5">Booking Confirmation</Text>
      <View className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-5">
        <Text className="text-lg text-gray-800 mb-2">Patient Name: {patientName}</Text>
        <Text className="text-lg text-gray-800 mb-2">Hospital: {hospitalName}</Text>
        <Text className="text-lg text-gray-800 mb-2">Reserved Condition:</Text>
        <RNPickerSelect
          onValueChange={(value) => setReservedCondition(value)}
          items={[
            { label: 'In Wellness Condition', value: 'Minor Surgery' },
            { label: 'Critical Condition', value: 'Cardiovascular Condition' },
            { label: 'Health Check', value: 'Wellness Check' },
            { label: 'Cold', value: 'Cold' },
            { label: 'Fever', value: 'Fever' },
            { label: 'Headache', value: 'Headache' },
            { label: 'Stomach Ache', value: 'Stomach Ache' },
            { label: 'Ortho Injury', value: 'Ortho Injury' },
            { label: 'Neurology', value: 'Neurology' },
            { label: 'ENT', value: 'ENT' },
            { label: 'Dental', value: 'Dental' },
            { label: 'Eye', value: 'Eye' },
            { label: 'Skin', value: 'Skin' },
            { label: 'General', value: 'General' },
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
          value={reservedCondition}
          placeholder={{ label: 'Select a condition', value: null }}
        />
      </View>
      <TouchableOpacity
        className={`py-3 px-8 rounded-md ${reservedCondition ? 'bg-blue-600' : 'bg-gray-400'}`}
        onPress={handleReserveNow}
        disabled={!reservedCondition}
      >
        <Text className="text-white font-bold text-lg">Reserve Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingConfirmation;
