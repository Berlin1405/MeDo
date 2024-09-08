import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdminSignup = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = () => {
        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }

        setLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                // Optionally save user info
                AsyncStorage.setItem('user', JSON.stringify(user));
                navigation.navigate('Success');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

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
                <Text className="text-gray-700 ml-4 p-2">Enter Address:</Text>
                <TextInput
                    className="p-4 bg-gray-100 rounded-2xl mb-3"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your Email"
                />
                <Text className="text-gray-700 ml-4 p-2">Password:</Text>
                <TextInput
                    className="p-4 bg-gray-100 rounded-2xl mb-3"
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your Password"
                    secureTextEntry
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: '#1F2937',
                        padding: 16,
                        borderRadius: 20,
                        marginHorizontal: 16,
                    }}
                    onPress={handleChange}
                >
                    <Text style={{ color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold' }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center mt-7">
          <Text className="text-gray-700">Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AdminLogin')}>
            <Text className="text-cyan-500"> Login </Text>
          </TouchableOpacity>
        </View>
                {error && <Text style={{ color: 'red' }}>{error}</Text>}
            </View>
        </View>
    );
}

export default AdminSignup;
