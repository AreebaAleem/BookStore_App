import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Home from './Home';

test('renders Login and Signup buttons', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };

  const { getByTestId } = render(<Home navigation={mockNavigation} />);
  
  // Find the Login and Signup buttons
  const loginButton = getByTestId('login-button');
  const signupButton = getByTestId('signup-button');
  
  // Assert that the buttons are present
  expect(loginButton).toBeTruthy();
  expect(signupButton).toBeTruthy();
});


test('navigates to Login screen when Login button is pressed', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };

  const { getByTestId } = render(<Home navigation={mockNavigation} />);
  
  // Find the Login button
  const loginButton = getByTestId('login-button');
  
  // Simulate clicking the Login button
  fireEvent.press(loginButton);
  
  // Check if the navigate function is called with the correct screen name
  expect(mockNavigation.navigate).toHaveBeenCalledWith('Login');
});

test('navigates to Signup screen when Signup button is pressed', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };

  const { getByTestId } = render(<Home navigation={mockNavigation} />);
  
  // Find the Signup button
  const signupButton = getByTestId('signup-button');
  
  // Simulate clicking the Signup button
  fireEvent.press(signupButton);
  
  // Check if the navigate function is called with the correct screen name
  expect(mockNavigation.navigate).toHaveBeenCalledWith('Signup');
});
it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
