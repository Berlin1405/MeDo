import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import HospitalCard from './HospitalCard';

const MainInt = ({ navigation }) => {
  const [selectedHospital, setSelectedHospital] = useState(null);

  const hospitals = [
    { name: 'Hospital 1', marker: 'Marker-01', rating: 4.5, vacantBeds: 10, occupiedBeds: 40 },
    { name: 'Hospital 2', marker: 'Marker-02', rating: 4.0, vacantBeds: 15, occupiedBeds: 35 },
    { name: 'Hospital 3', marker: 'Marker-03', rating: 3.5, vacantBeds: 20, occupiedBeds: 30 },
    { name: 'Hospital 4', marker: 'Marker-04', rating: 3.0, vacantBeds: 25, occupiedBeds: 25 },
    { name: 'Hospital 5', marker: 'Marker-05', rating: 2.5, vacantBeds: 30, occupiedBeds: 20 },
  ];

  return (
    <View className="flex-1 bg-white">
      {selectedHospital ? (
        <HospitalDetail
          hospital={selectedHospital}
          onBack={() => setSelectedHospital(null)}
        />
      ) : (
        <>
          <View className="bg-blue-500 p-4">
            <View className="flex-row items-center">
              <TextInput
                className="flex-1 bg-white p-2 rounded-md"
                placeholder="Search hospitals"
              />
              <TouchableOpacity className="ml-2 p-2">
                <Text className="text-white">Filter</Text>
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView className="p-4">
            {hospitals.map((hospital, index) => (
              <HospitalCard
                key={index}
                name={hospital.name}
                marker={hospital.marker}
                rating={hospital.rating}
                onPress={() => setSelectedHospital(hospital)}
              />
            ))}
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default MainInt;
