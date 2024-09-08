import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebaseConfig';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import { signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

const AdminLogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [HosId, setHosId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  


  

  const handleLogin = () => {
    if (!email || !password) {
      setError("Email and password cannot be empty.");
      return;
    }

    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('MainInt'); 
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleForgotPassword = () => {
    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Password reset email sent!');
        setError('Password reset email sent! Check your inbox.');
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
        <Text className="text-gray-700 ml-4 p-2">Email Address:</Text>
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
        <Text className="text-gray-700 ml-4 p-2">Hospital Id:</Text>
        <TextInput
          className="p-4 bg-gray-100 rounded-2xl mb-3"
          value={HosId}
          onChangeText={setHosId}
          placeholder="Enter your Hospital Id"
        />
        
        <TouchableOpacity className="flex items-end p-5" onPress={handleForgotPassword}>
          <Text className="text-gray-700">Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#1F2937',
            padding: 16,
            borderRadius: 20,
            marginHorizontal: 16,
          }}
          onPress={handleLogin}
        >
          <Text style={{ color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold' }}>
            Login
          </Text>
        </TouchableOpacity>
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
        <Text className="text-center text-gray-700 font-bold py-5">
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
        <TouchableOpacity  style={{ padding: 8, backgroundColor: '#f5f5f5', borderRadius: 16 }}>
    <Image
      source={require('./../../assets/images/google.png')}
      style={{ width: 40, height: 40 }}
    />
  </TouchableOpacity>
          {/* <TouchableOpacity className="p-2 bg-gray-50 rounded-2xl">
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
          </TouchableOpacity> */}
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-700">Register Your Hospital</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AdminSignup')}>
            <Text className="text-cyan-500"> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default AdminLogin;
