import React from 'react';
import { View, TextInput, ScrollView, TouchableOpacity, Text } from 'react-native';
import HospitalCard from './HospitalCard';

const MainInt = ({ navigation }) => {
  const hospitals = [
    { name: 'ABC Multi-Specialty Hospital', location: 'AVADI', rating: 4.5, vacantBeds: 10, occupiedBeds: 40 },
    { name: 'Kaveri Multi-Speciality Hospital', location: 'Ambathur', rating: 4.5, vacantBeds: 15, occupiedBeds: 35 },
    { name: 'Yeltzin Multi-Specialty Hospital', location: 'Kavaraipettai', rating: 4.5, vacantBeds: 10, occupiedBeds: 40 },
    { name: 'Appolo Multi-Specialty Hospital', location: 'Marina Road', rating: 4.5, vacantBeds: 0, occupiedBeds: 50 },
    { name: 'KMC Multi-Specialty Hospital', location: 'Guindy', rating: 4.5, vacantBeds: 10, occupiedBeds: 40 },
    { name: 'Avadi Iyyambakam Multi-Specialty Hospital', location: 'Ashok Pillar', rating: 4.5, vacantBeds: 10, occupiedBeds: 40 },
    { name: 'Akash Multi-Specialty Hospital', location: 'Koyambedu', rating: 4.5, vacantBeds: 10, occupiedBeds: 40 },
    { name: 'Thanush Multi-Specialty Hospital', location: 'Thambaram', rating: 4.5, vacantBeds: 10, occupiedBeds: 40 },
    { name: 'Avlo Multi-Specialty Hospital', location: 'Pallavaram', rating: 4.5, vacantBeds: 10, occupiedBeds: 40 },
  ];

  return (
    <View className="flex-1 bg-blue-200">
      <View className="flex-row items-center bg-white rounded-lg m-4 p-2">
        <TextInput
          className="flex-1 text-lg pl-2"
          placeholder="Search Hospital"
        />
        <TouchableOpacity className="p-2">
          <Text className="text-lg text-gray-600">filter</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="px-4">
        {hospitals.map((hospital, index) => (
          <HospitalCard
            key={index}
            name={hospital.name}
            location={hospital.location}
            rating={hospital.rating}
            vacantBeds={hospital.vacantBeds}
            occupiedBeds={hospital.occupiedBeds}
            onPress={() => navigation.navigate('HospitalDetail', { hospital })}
            onBookPress={() => console.log('Book Pressed')}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MainInt;
