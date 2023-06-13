import React from 'react';
import {act, render, fireEvent} from '@testing-library/react-native';
import First from '../screens/First';

jest.mock ('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn (),
  }),
}));

describe ('First', () => {
  it ('should clear search results and display an error message when the search query is empty', () => {
    const route = {params: {book: {}}}; 
    const {getByPlaceholderText, getByText, queryByText} = render (
      <First route={route} />
    );
    const input = getByPlaceholderText ('Enter book title or author');
    const button = getByText ('Search');

    act (() => {
      fireEvent.changeText (input, '');
      fireEvent.press (button);
    });

    expect (queryByText ('No books found matching your search.')).toBeNull ();
    expect (queryByText ('Please enter a book title or author.')).toBeTruthy ();
  });
});