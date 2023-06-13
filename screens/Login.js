import React,{useState} from 'react'; 
import { ImageBackground,Alert, StyleSheet, Text,Button, TextInput,KeyboardAvoidingView,Image ,TouchableOpacity, View } from 'react-native';
import {auth} from "../Firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signInAnonymously,onAuthStateChanged } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';

const Login =({navigation})=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
     
    const goToFirst = () => {
        navigation.navigate('First');
      };
      const goToSignup = () => {
        navigation.navigate('Signup');
      };
      const handleLogin = async () => {
        console.log('Handle log In');
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(username)) {
          Alert.alert("Invalid Email", "Please enter a valid email address.");
          return;
        }
      
        try {
          const userCredential = await signInWithEmailAndPassword(auth, username, password);
          const user = userCredential.user;
          global.userID = user.uid;
          console.log("user data,", user);
          goToFirst();
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/user-not-found") {
            Alert.alert("Invalid User", "User not registered. Please sign up.");
          } else {
            Alert.alert("Error", errorMessage);
          }
          throw new Error(errorMessage);
        }
      };
      
      
      
    
    const onChangeUser = (inputuser) => {
        setUsername(inputuser);
      };
      const onChangePassword = (inputPassword) => {
        setPassword(inputPassword);
      };
    return(
        
        <View style={styles.container}>
            
        <View>
        <Text style={{color:'black' ,  fontWeight:'bold',marginLeft:'35%',marginTop:70,marginBottom:-30, fontSize:28}} > 
       {"Welcome"}
        </Text >
        </View>
        <View style={{alignItems:'center', flex:0.30}}>

<View style={{ marginTop: 40, marginLeft: 16 }}>
  {/* <Image
    style={{ height: 60, width: 300 }}
    source={require("../assets/images/logo.png")}
  /> */}
</View>

</View>
            {/* <Text style={styles.text2}>Foodie Moodie </Text> */}
            

          
           <View >
           <TextInput style={styles.iii}
        placeholder="username"
      // placeholder="  password"
        onChangeText={onChangeUser}
        value={username}/>
        {/* <TextInput style={styles.three}
       // placeholder="  username"
       placeholder="password"
        onChangeText={onChangePassword}
        value={password}/> */}
         
        </View>


        <View  style={styles.inputContainer}>
        <TextInput
        style={styles.three}
          placeholder="Enter Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}/>
            <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setShowPassword(!showPassword)}
          title=""
        >
          <Ionicons style={{marginLeft:-13}}
            name={showPassword ? 'eye' : 'eye-off'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        </View>



        <View>
            <TouchableOpacity style={{marginLeft:250}}>
                <Text>Forgot password?
                    </Text>
                </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={styles.Login} onPress={handleLogin}>
        <View style={styles.Loginbutton}><Text style={styles.Logintext}>Login</Text></View>
      </TouchableOpacity>
        </View>
        <View style={{alignContent:'center',justifyContent:'center', marginTop:10}}>
        {/* <TouchableOpacity style={{marginLeft:160,justifyContent:'center', marginTop:10}}>
                <Text style={{fontSize:18,justifyContent:'center'}}>Or login with?
                    </Text>
                </TouchableOpacity> */}
        </View>
        <View>
        <TouchableOpacity style={styles.Loginn} onPress={goToSignup}>
        <View style={{marginTop:40,alignItems:'center'}}><Text style={{fontSize:18,paddingTop:10,fontWeight:'bold'}}>Don't have an account? Sign Up</Text></View>
      </TouchableOpacity>
        </View>


           </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    three: {
      // flex: '0%',
       padding:'1.5%',
       width:330,
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
    image:{
      flex: 1,
      height: '100%',
      width: '100%',
  
    },
    text1:{
        flex:0,
        fontSize: 23,
        fontWeight: 'bold',
        fontStyle: 'Bold',
        marginTop: '2%',
        marginLeft:0,
        marginBottom:9,
        //paddingHorizontal:1,
        paddingLeft: '20%',
        color: 'black'
        
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    //  borderBottomWidth: 1,
      borderColor: '#bdb76b',
      marginVertical: 0,
      padding:5
      
    },
    text2:{
      fontSize: 18,
      paddingLeft: 20,
      color: '#ff4500',
      marginTop: 5,
      alignContent:'center',
      alignItems:'center',
      justifyContent:'center',
      
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
  Signupbutton:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
    height: 40,
    
    
  },
  Signup:{
      width: 300,
      marginLeft: 50,
      marginTop: 10,
      borderColor: 'white',
      borderWidth: 18,
      borderRadius: 18
  },
  Signuptext:{
    fontSize: 19,
    color: 'white'
  },
  background:{
    ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
  });
export default Login;