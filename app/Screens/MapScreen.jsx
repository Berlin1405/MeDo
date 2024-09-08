import React, { useEffect, useState, useRef } from 'react';
import { View, TouchableOpacity, Image, Alert, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function MapScreen() {
  const [location, setLocation] = useState(null); // User's current location
  const [searchedLocation, setSearchedLocation] = useState(null); // Location from search
  const mapRef = useRef(null);  // Reference to the MapView

  useEffect(() => {
    getCurrentLocation();
  }, []);

  // Function to get the user's current location
  const getCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
      if (mapRef.current) {
        // Recenter the map to the user's location
        mapRef.current.animateToRegion({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }, 1000);
      }
    } catch (error) {
      Alert.alert('Error', 'Could not fetch location');
    }
  };

  // Function to handle the place search and animate the map to the searched location
  const handleSearchPlace = (details) => {
    if (!details || !details.geometry) {
      Alert.alert('Error', 'Location details could not be fetched.');
      return;
    }

    // Extract latitude and longitude from the search result
    const { lat, lng } = details.geometry.location;
    const newLocation = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

    // Recenter the map to the searched location
    if (mapRef.current) {
      mapRef.current.animateToRegion(newLocation, 1000);
    }
    setSearchedLocation(newLocation); // Update state with the new location
  };

  // If location is not available yet, render an empty map
  if (!location) {
    return (
      <View className="flex-1">
        <MapView className="flex-1" />
      </View>
    );
  }

  return (
    <View className="flex-1">
      {/* Search Bar */}
      <View className="absolute top-2 w-11/12 self-center flex-row items-center z-10">
        <GooglePlacesAutocomplete
          placeholder="Search for places"
          fetchDetails={true}
          onPress={(data, details = null) => {
            handleSearchPlace(details);  // Handle search result
          }}
          query={{
            key: 'AIzaSyDuj4oa_OrbYAm5OkhKc58M2iAGHvNmSRA', // Replace with your Google Places API Key
            language: 'en',
          }}
          styles={{
            container: {
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            },
            textInputContainer: {
              backgroundColor: '#fff',
              borderRadius: 10,
              paddingHorizontal: 10,
              flex: 1,
            },
            textInput: {
              height: 40,
              color: '#333',
              fontSize: 16,
            },
            listView: {
              backgroundColor: '#fff',
            },
          }}
        />
      </View>

      {/* Map */}
      <MapView
        ref={mapRef}
        className="flex-1"
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={searchedLocation || {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Marker for the current location */}
        {location && (
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title="Your Location"
            description="This is where you are currently located"
          />
        )}
        
        {/* Marker for the searched location */}
        {searchedLocation && (
          <Marker
            coordinate={{ latitude: searchedLocation.latitude, longitude: searchedLocation.longitude }}
            title="Searched Location"
            description="This is the location you searched for"
          />
        )}
      </MapView>

      {/* Button to recenter map to current location */}
      <TouchableOpacity
        className="absolute bottom-5 right-5 bg-white p-3 rounded-full shadow-lg"
        onPress={getCurrentLocation}
      >
        <Image
          source={require('./../../assets/images/placeholder.png')} // Replace with your icon path
          className="w-7 h-7"
        />
      </TouchableOpacity>
    </View>
  );
}
  