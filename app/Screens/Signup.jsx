import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');

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
                            source={require('./../../assets/images/doctor_03.png')}
                            style={{ width: 280, height: 200 }}
                        />
                    </View>
                </View>
            </View>
            <View
                className="flex-1 bg-white px-5 pt-5"
                style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
            >
                <Text className="text-gray-700 ml-4 p-2">Full Name :</Text>
                <TextInput
                    className="p-4 bg-gray-100 rounded-2xl mb-3"
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter your Full Name"
                />
                <Text className="text-gray-700 ml-4 p-2">Mobile Number :</Text>
                <TextInput
                    className="p-4 bg-gray-100 rounded-2xl mb-3"
                    value={mobile}
                    onChangeText={setMobile}
                    placeholder="Enter your Mobile Number"
                />
                <Text className="text-gray-700 ml-4 p-2">Enter  Address :</Text>
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

                <TouchableOpacity
                    className="bg-zinc-900 p-4 rounded-2xl mx-4"
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text className="text-white text-center font-bold">Sign Up</Text>
                </TouchableOpacity>
                
               
               
            </View>
        </View>
    );
}
