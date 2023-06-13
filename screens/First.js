import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { app } from '../Firebase';
import { getDatabase, ref, onValue } from 'firebase/database';

const First = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [books, setBooks] = useState ([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleSearch = () => {
    if (searchText.trim() === '') {
      setSearchResults([]);
      setErrorMessage('Please enter a book title or author.');
      return;
    }

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=AIzaSyBS3R-HtgLbBfs7eArHHXfZ0dz1V5_cvLw`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          const filteredBooks = data.items.filter((item) => {
            const volumeInfo = item.volumeInfo;
            const title = volumeInfo.title.toLowerCase();
            const authors = volumeInfo.authors ? volumeInfo.authors.map((author) => author.toLowerCase()) : [];
            const search = searchText.toLowerCase();

            return title.includes(search) || authors.includes(search);
          });

          const extractedBooks = filteredBooks.map((item) => {
            const volumeInfo = item.volumeInfo;
            return {
              id: item.id,
              title: volumeInfo.title,
              author: volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown',
              image: volumeInfo.imageLinks?.thumbnail,
              description: volumeInfo.description,
            };
          });

          setSearchResults(extractedBooks);
          setErrorMessage('');
        } else {
          setSearchResults([]);
          setErrorMessage('No books found matching your search.');
        }
      })
      .catch((error) => {
        console.error(error);
        setSearchResults([]);
        if (error.message === 'Failed to fetch') {
          setErrorMessage('An error occurred while fetching data. Please check your internet connection.');
        } else {
          setErrorMessage('An error occurred. Please try again later.');
        }
      });
  };

  const handleBookPress = (book) => {
    navigation.navigate('Second', { book });
  };

  const renderBookItem = ({ item }) => {
    const { id, title, author, image } = item;

    return (
      <TouchableOpacity style={styles.bookItem} onPress={() => handleBookPress(item)}>
        <Image source={{ uri: image }} style={styles.bookImage} />
        {/* <Text>hello</Text> */}
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{title}</Text>
          <Text style={styles.bookAuthor}>{author}</Text>
        </View>
        {/* <NavBar /> */}
      </TouchableOpacity>
     
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter book title or author"
          value={searchText}
          onChangeText={setSearchText}
        />
       
      
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      {errorMessage !== '' && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
      <FlatList
        data={searchResults}
        renderItem={renderBookItem}
        keyExtractor={(item) => item.id}
        style={styles.resultsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    
    borderColor: 'gray',
    marginRight: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#bdb76b',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultsContainer: {
    flex: 1,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bookImage: {
    width: 80,
    height: 120,
    marginRight: 10,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bookAuthor: {
    fontSize: 14,
    marginBottom: 5,
  },
  errorMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 10,
  },
});

export default First;
