import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: '#4F86F7' }}>
      <View className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
            <Image
              source={require('./../../assets/images/back.png')}
              className="bg-slate-100 rounded-tr-2xl rounded-bl-2xl"
            />
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Image
              source={require('./../../assets/images/doctor_02.png')}
              style={{ width: 280, height: 200 }}
            />
          </View>
        </View>
      </View>
      <View
        className="flex-1 bg-white px-5 pt-5"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <Text className="text-gray-700 ml-4 p-2">Email Address :</Text>
        <TextInput
          className="p-4 bg-gray-100 rounded-2xl mb-3"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your Email"
        />
        <Text className="text-gray-700 ml-4 p-2">Password :</Text>
        <TextInput
          className="p-4 bg-gray-100 rounded-2xl mb-3"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your Password"
          secureTextEntry
        />
        <TouchableOpacity className="flex items-end p-5">
          <Text className="text-gray-700">Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-zinc-900 p-4 rounded-2xl mx-4"
          onPress={() => navigation.navigate('Home')}
        >
          <Text className="text-white text-center font-bold">Log In</Text>
        </TouchableOpacity>
      <Text className="text-center text-gray-700 font-bold py-5">
        Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-50 rounded-2xl">
            <Image
              source={require('./../../assets/images/google.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-50 rounded-2xl">
            <Image
              source={require('./../../assets/images/google.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-50 rounded-2xl">
            <Image
              source={require('./../../assets/images/google.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-700">Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text className="text-cyan-500"> Sign Up</Text>
          </TouchableOpacity>
        </View>
  
      </View>
    </View>
  );
}
