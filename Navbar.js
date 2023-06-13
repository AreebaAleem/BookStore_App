import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { app } from './Firebase';
import { getDatabase, ref, onValue,set } from 'firebase/database';
import { NavigationContainer, } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

const NavBar = () => {
    const [option, setOption] = useState();

    
    
      const updateOrient = (screens) => {
        setOption(screens);
        const db = getDatabase(app);
        const dbRef = ref(db, 'Screens');
        set(dbRef, screens);
      };
    const navigation = useNavigation();

   
 
  handleH= () => {
    updateOrient('Flatlist')
    navigation.navigate('Flatlist');
  }
  handleS= () => {
    updateOrient('First')
    navigation.navigate('First');
  }
  handleSet = () => {
    updateOrient('Settings')
    navigation.navigate('Settings');
  }
  
  
    
      
  return (
    <View style={styles.container}>
      
      
        <TouchableOpacity onPress={handleH} >
          <Ionicons name="home-outline" size={24} color="white"  />
          
        </TouchableOpacity>
        <TouchableOpacity   onPress={handleS}>
          <Ionicons name="search-outline" size={24} color="white" />
          
        </TouchableOpacity>
        {/* <TouchableOpacity   onPress={handleSet}>
          <Ionicons name="settings-outline" size={24} color="white" />
          
        </TouchableOpacity> */}
     
    </View>
  );
};
export {NavBar}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#bdb76b',
      height: 55,
      paddingHorizontal: 30,
      justifyContent: 'space-between', // Align icons with equal spacing
      alignItems: 'center',
    },
  });