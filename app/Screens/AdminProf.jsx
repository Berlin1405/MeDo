import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const HospitalCard = ({ name, location, rating, onEdit }) => {
  return (
    <View className="bg-white p-6 rounded-lg shadow-lg mb-4 w-full max-w-lg">
      <View className="flex-row items-center mb-4">
        {/* Hospital Image */}
        <Image
          source={{ uri: 'hospital_image_url' }} // Replace with the actual hospital image
          className="w-20 h-20 rounded-full mr-4"
        />
        <View className="flex-1">
          <Text className="text-2xl font-bold text-gray-900">{name}</Text>
          <Text className="text-base text-gray-500">{location}</Text>
        </View>
      </View>

      {/* Rating Section */}
      <View className="flex-row items-center mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            source={
              index < Math.floor(rating)
                ? require('./../../assets/images/starfil.png')
                : require('./../../assets/images/starun.png')
            }
            className="w-6 h-6 mr-1"
          />
        ))}
        <Text className="ml-2 text-lg text-gray-700">{rating}/5</Text>
      </View>

      {/* Edit Button */}
      <TouchableOpacity
        onPress={onEdit}
        className="bg-blue-600 py-3 rounded-lg shadow-md"
      >
        <Text className="text-center text-white text-lg font-semibold">Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const AdminProf = ({ navigation }) => {
  const handleEdit = () => {
    navigation.navigate('Inventory');
  };

  return (
    <View className="flex-1 bg-blue-50">
      <View className="p-5">
        <Text className="text-3xl font-bold text-blue-900">Hello, Welcome 👋</Text>
        <Text className="text-lg text-gray-600 mt-1">ABC Multi-Speciality</Text>
      </View>

      <View className="flex items-center justify-center mt-6">
        {/* HospitalCard Section */}
        <HospitalCard
          name="ABC Multi-Speciality Hospital"
          location="AVADI"
          rating={4.5} // Example rating
          onEdit={handleEdit} // Navigate to Inventory screen on Edit press
        />
      </View>
    </View>
  );
};

export default AdminProf;
