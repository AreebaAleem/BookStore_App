import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Second = ({ route }) => {
  const { book } = route.params;
console.log (book);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image testID='book-image' style={styles.image} source={{uri: book.image}} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>Author: {book.author}</Text>
           <TouchableOpacity style={[styles.button, {backgroundColor: '#bdb76b'}]}>
        <Ionicons name="heart" size={20} color="white" />
        <Text style={styles.buttonText}>Add to Favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {backgroundColor: '#bdb76b'}]}>
        <Ionicons name="bookmark" size={20} color="white" />
        <Text style={styles.buttonText}>Add to Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {backgroundColor: '#bdb76b'}]}>
        <Ionicons name="cart" size={20} color="white" />
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
          <Text style={styles.description}> {book.description}</Text>
        </View>
      </View>

     
    </ScrollView>
  );
};


const styles = StyleSheet.create ({
  container: {
    flexGrow: 1,
    padding: 16,
    marginTop: 40,
  },
  contentContainer: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  imageContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    marginBottom: 20,
   // fontWeight: 200-300,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#bdb76b',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 5,
  },
});

export default Second;