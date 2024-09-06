import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Card, Avatar } from 'react-native-elements';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      
      <View style={{ backgroundColor: '#007AFF', padding: 50, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Avatar
              rounded
              size="medium"
              source={require('./../../assets/images/gokul.png')}
            />
            <Text style={{ color: 'white', marginLeft: 10, fontWeight: 'bold' }}>Hello, Welcome 🎉</Text>
          </View>
          <Image
            source={require('./../../assets/images/user.png')} 
            style={{ width: 24, height: 24 }}
          />
        </View>
        <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 10 }}>KAVIN S</Text>
      </View>

    
      <ScrollView style={{ padding: 20 }}>
        
        <Card containerStyle={{ borderRadius: 15, padding: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('./../../assets/images/hospital.png')} style={{ width: 50, height: 50, marginRight: 15 }} />
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Active Hospital: 1,014</Text>
          </View>
        </Card>

       
        <Card containerStyle={{ borderRadius: 15, padding: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('./../../assets/images/user.png')} style={{ width: 50, height: 50, marginRight: 15 }} />
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Total OPD Transaction: 77,539,313</Text>
          </View>
        </Card>

        
      </ScrollView>
    </View>
  );
};


