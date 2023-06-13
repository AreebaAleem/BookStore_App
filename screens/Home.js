import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, Button, Image, TouchableOpacity, View } from 'react-native';

const Home = ({ navigation }) => {

  const goToLogin = () => {
    navigation.navigate('Login');
  };
  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/bg7.png')} style={styles.image}>
        <Text style={styles.text1}>
          WELCOME TO EBOOKSTORE
        </Text>

        <TouchableOpacity testID='login-button' style={styles.Login} onPress={goToLogin}>
          <View style={styles.Loginbutton}><Text style={styles.Logintext}>Login</Text></View>
        </TouchableOpacity>

        <TouchableOpacity testID='signup-button' style={styles.Signup} onPress={goToSignup}>
          <View style={styles.Signupbutton}><Text style={styles.Signuptext}>Sign up</Text></View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 33,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: '90%',
    paddingLeft: 20,
    color: 'black',
    borderColor: '#bdb76b',
  },
  Loginbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    height: 40
  },
  Login: {
    width: 300,
    marginLeft: 50,
    marginTop: 50,
    borderColor: '#bdb76b',
    borderWidth: 3,
    borderRadius: 12,
  },
  Logintext: {
    fontSize: 19,
    color: 'black',
    fontWeight: 'bold',
  },
  Signupbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    borderColor:'#bdb76b',
    height: 40,
  },
  Signup: {
    width: 300,
    marginLeft: 50,
    marginTop: 10,
    borderColor: '#bdb76b',
    borderWidth: 3,
    borderRadius: 12,
  },
  Signuptext: {
    fontSize: 19,
    color: 'black',
    fontWeight: 'bold',
  }
});

export default Home;
