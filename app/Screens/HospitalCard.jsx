// HospitalCard.jsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HospitalCard = ({ name, marker, rating, vacantBeds, occupiedBeds }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('HospitalDetail', {
        name,
        marker,
        rating,
        vacantBeds,
        occupiedBeds,
      })}
      className="flex-row items-center bg-blue-100 p-4 rounded-md mb-4"
    >
      <Image
        source={require('./../../assets/images/hosbulid.png')}
        className="w-20 h-20 rounded-md"
      />
      <View className="ml-4">
        <Text className="text-lg font-bold">{name}</Text>
        <Text className="text-gray-500">{marker}</Text>
        <View className="flex-row items-center">
          <Text className="text-yellow-500">⭐ {rating}</Text>
          <Text className="ml-2 text-gray-500">Reviews</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HospitalCard;
