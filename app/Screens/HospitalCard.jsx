import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HospitalCard = ({ name, location, rating, onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={onPress} className="flex-row justify-between items-center bg-blue-100 p-4 rounded-lg my-2">
      <View className="flex-1">
        <Text className="text-lg font-bold text-gray-800">{name}</Text>
        <Text className="text-base text-gray-600">{location}</Text>
        <View className="flex-row mt-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              source={
                index < Math.floor(rating)
                  ? require('./../../assets/images/starfil.png')
                  : require('./../../assets/images/starun.png')
              }
              className="w-4 h-4 mr-1"
            />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HospitalCard;
