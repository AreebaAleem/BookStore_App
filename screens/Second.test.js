import React from 'react';
import {render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import Second from './Second';

describe ('Second', () => {
  it ('should render book details correctly', () => {
    const book = {
      title: 'Book Title',
      author: 'Author Name',
      image: 'https://example.com/book.jpg',
      description: 'Book description',
    };

    const route = {params: {book}};
    const {getByText, getByTestId} = render (<Second route={route} />);


    const titleElement = getByText ('Book Title');
    expect (titleElement).toBeTruthy ();

    const authorElement = getByText ('Author: Author Name');
    expect (authorElement).toBeTruthy ();

    const imageElement = getByTestId ('book-image');
    expect (imageElement).toBeTruthy ();
    expect (imageElement.props.source.uri).toBe (
      'https://example.com/book.jpg'
    );

    const descriptionElement = getByText ('Book description');
    expect (descriptionElement).toBeTruthy ();
  });
});


describe ('Second Snapshot', () => {
  it ('should match the snapshot', () => {
    const book = {
      title: 'Book Title',
      author: 'Author Name',
      image: 'https://example.com/book.jpg',
      description: 'Book description',
    };

    const route = {params: {book}};
    const tree = renderer.create (<Second route={route} />).toJSON ();

   
 });
});