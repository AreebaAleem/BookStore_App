import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { app } from '../Firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import { NavBar } from '../Navbar';

const Flatlist = ({ navigation }) => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'books');

    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      setFood(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <FlatList
        data={food}
        keyExtractor={item => item.key}
        horizontal={true}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.img }} style={styles.image} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <NavBar />
    </View>
  );
}

export default Flatlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  flatListContainer: {
    alignItems: 'center',
    padding: 8,
  },
  itemContainer: {
    // backgroundColor: "#bdb76b",
    marginVertical: 4,
    marginRight: 4,
    width: 135,
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginBottom: 8,
    padding: 8,
  },
  image: {
    width: 130,
    height: 190,
    padding: 8,
    borderRadius: 5,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',

  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    marginBottom: 16,
    color: 'black', // Change the color to your preferred value
    textShadowColor: 'rgba(0, 0, 0, 0.3)', // Add a subtle text shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  
  
});
