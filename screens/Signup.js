import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword, signInAnonymously } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
 
  
  

  const handleSubmit = () => {
    if (password === '') {
      Alert.alert('Please enter a password');
    } else {
      alert(`Successfully signed in with password: ${password}`);
    }
  };

  // const goToFirst = () => {
  //   navigation.navigate('First');
  //   handleSubmit();
  // };
  const goToFirst = () => {
    navigation.navigate('Flatlist');
    handleSubmit();
  };

  const handleSignup = async () => {
    if (name === '' || email === '' || password === '' || Cpassword === '') {
      Alert.alert('Please fill in all the fields');
      return;
    }

    if (!checked) {
      Alert.alert('Please read and agree to the Terms and Conditions');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    Alert.alert('Please enter a valid email address');
    return;
  }
  if (password !== Cpassword) {
    Alert.alert('Passwords do not match');
    return;
  }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User data:', user);
      goToFirst();
    } catch (error) {
      console.log('Error Code:', error.code);
      console.log('Error Message:', error.message);
    }
  };

  const signInGuest = async () => {
    await signInAnonymously(auth)
      .then((userCredential) => {
        console.log('Done', userCredential);
      });
    goToFirst();
  };

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.text11}>Enter Name</Text>
          <TextInput
            style={styles.three}
            placeholder="Enter Name"
            onChangeText={setName}
            value={name}
          />
        </View>

        <View>
          <Text style={styles.text1}>Enter E-mail address</Text>
          <TextInput
            style={styles.three}
            placeholder="E-mail"
            onChangeText={setEmail}
            value={email}
          />
        </View>

        <Text style={styles.text1}>Enter Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.three}
            placeholder="Enter Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowPassword(!showPassword)}
            title=""
          >
            <Ionicons style={{ marginLeft: -13 }} name={showPassword ? 'eye' : 'eye-off'} size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.text1}>Confirm Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.three}
              placeholder="Confirm Password"
              secureTextEntry={!showCPassword}
              value={Cpassword}
              onChangeText={setCPassword}
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowCPassword(!showCPassword)}
              title=""
            >
              <Ionicons style={{ marginLeft: -13 }} name={showCPassword ? 'eye' : 'eye-off'} size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <CheckBox
          title='I have read and agreed to the *Terms and Conditions*'
          checked={checked}
          onPress={() => setChecked(!checked)}
        />

        <TouchableOpacity style={styles.Login} onPress={handleSignup}>
          <View style={styles.Loginbutton}>
            <Text style={styles.Logintext}>Signup</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Login} onPress={signInGuest}>
          <View style={styles.Loginbutton}>
            <Text style={styles.Logintext}>Sign in as Guest</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  three: {
    // flex: '0%',
     padding:'1.5%',
     width:350,
     margin:'5%',
    fontSize:20,
    // fontWeight:'bold',
     borderWidth:  1, 
      borderStyle:  'solid',
      borderColor:'#bdb76b',
      borderRadius:5,
    flexDirection:"row",
     backgroundColor: 'white',
    // alignItems: 'left',
     justifyContent: 'center',
     backgroundColor:'#dcdcdc',
     marginTop:1,
     padding:9,
   },
   iii: {
      // flex: '0%',
       padding:'1.5%',
       width:350,
       margin:'5%',
      fontSize:20,
      // fontWeight:'bold',
       borderWidth:  1, 
        borderStyle:  'solid',
        borderRadius:5,
      flexDirection:"row",
      borderColor:'#bdb76b',
       backgroundColor: 'white',
      // alignItems: 'left',
       justifyContent: 'center',
       backgroundColor:'#dcdcdc',
       marginTop:-11,
      
     },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    paddingLeft: '5%',
    color: 'black',
  },
  text11: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 0,
    padding: 0,
    paddingLeft: '5%',
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    marginVertical: 0,
    padding: 5,
  },
  Loginbutton:{
    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
    height: 40,
    borderColor: '#bdb76b',
    
  },
  Loginn:{
      width: 300,
      marginLeft: 50,
      marginTop: 20,
      borderColor:'#bdb76b'
  },
  Login: {
    width: 300,
    marginLeft: 50,
    marginTop: 20,
    borderColor: '#bdb76b',
    borderWidth: 3,
    borderRadius: 8,
  },
  Logintext:{
    fontSize: 20,
    color: 'black',
    fontWeight:'bold'
  },
  eyeButton: {
    marginLeft: -30,
  },
});

export default Signup;
