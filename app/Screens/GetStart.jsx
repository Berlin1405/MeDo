import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const GetStart=()=> {
    const navigation = useNavigation();

    return (
        <View className="flex-1" style={{ backgroundColor: '#4F86F7' }}>
            <View className="flex-1">
                <View className="flex-1 justify-around my-4">
                    <Text className="text-white text-center text-4xl font-bold text-center">
                        MeDo Welcome's You
                    </Text>
                    <Text className="text-white font-bold  text-2xl text-center">
                        Let's Get Started!
                    </Text>
                    <View className="flex-row justify-center">
                        <Image
                            source={require('./../../assets/images/doctors.png')}
                            style={{ width: 350, height: 350 }}
                        />
                    </View>
                    <View className="space-y-4">
                        <TouchableOpacity
                            className="py-3 bg-zinc-900 rounded-xl mx-7"
                            onPress={() => navigation.navigate('AdminLogin')}
                        >
                            <Text className="text-white text-center font-bold">ADMIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="py-3 bg-zinc-900 rounded-xl mx-7"
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text className="text-white text-center font-bold">USERS</Text>
                        </TouchableOpacity>
                        {/* <View className="flex-row justify-center">
                            <Text className="text-white font-semibold">
                                Already have an account?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text className="font-semibold text-zinc-900"> Login</Text>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </View>
            </View>
        </View>
    );
}
export default GetStart;