import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, Button, Image, TextInput, TouchableOpacity, Touchable, ScrollView, ImageBackground, BackHandler} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';

function Login ({ navigation }) {
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()
  const [emailError, setEmailError] = React.useState("")
  const [passwordError, setPasswordError] = React.useState("")
  const [emailPasswordErrorValidLogin, setEmailPasswordErrorValidLogin] = React.useState("")
  const [emailPasswordValidLogin, setEmailPasswordValidLogin] = React.useState(true)

  const handleSubmit = () => {
      var emailValid = false;
      if(!email){
          setEmailError("Masukkan email anda");
      }         
      else{
          setEmailError("")
          emailValid = true
      }
  
      var passwordValid = false;
      if(!password){
          setPasswordError("Masukkan password anda");
      }          
      else{
          setPasswordError("")
          passwordValid = true
      }        


      if(emailValid && passwordValid){            
        setEmailPasswordErrorValidLogin(""); 
      }else{
        setEmailPasswordErrorValidLogin("Email atau Password Salah");
      }        
    }
    
  return (
    <View  style={{backgroundColor : '#000000', flex: 1}}> 
      <View style={{alignSelf: 'center', paddingTop: 60}}>
        <Image
        style={{
          resizeMode: "contain",
          height: 189,
          width: 198
        }} 
        source={require('./assets/skull.png')}/>
      </View>
      <View style={{width: 320, paddingTop: 20, alignSelf:'center'}}>
        <TextInput style={{borderRadius: 25, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15, backgroundColor:'#FFFFFF', elevation: 5}}
        placeholder= "Email"
        placeholderTextColor='#7D7B92'
        onChangeText={text => setEmail(text)}
        value={email}
        />
        {emailError.length > 0 &&
          <Text style={{ fontFamily: 'NotoSansTC-Medium-Alphabetic', color:'#FF3B30', fontSize: 12, paddingLeft: 5, paddingTop: 8}}>{emailError}</Text>
        }
      </View>
      <View style={{width: 320, alignSelf:'center', paddingTop: 16}}>
        <TextInput style={{borderRadius: 25, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15, backgroundColor:'#FFFFFF', elevation: 5}}
        placeholder= "Password"
        placeholderTextColor='#7D7B92'
        secureTextEntry= {true}
        onChangeText={text => setPassword(text)}
        value={password}
        />
        {passwordError.length > 0 &&
          <Text style={{ fontFamily: 'NotoSansTC-Medium-Alphabetic', color:'#FF3B30', fontSize: 12, paddingLeft: 5, paddingTop: 8}}>{passwordError}</Text>
        }
      </View>
      <View style={{width: 320, alignSelf:'center', marginTop: 440, position: 'absolute', zIndex: 1}}>
        <TouchableOpacity onPress={()=> {
          handleSubmit()
          if(email&&password){
            auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
            navigation.navigate('HomeScreen')
            setEmailPasswordErrorValidLogin("")
            })
            .catch((error) => {
              if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
                setEmailPasswordErrorValidLogin("Email atau password yang anda masukkan salah")
              }            
            })
          }
        }} 
          style={{backgroundColor: '#80DE68', paddingVertical: 16, borderRadius: 25, elevation: 5}}>
          <Text style={{fontSize: 16, fontFamily: 'NotoSansTC-Bold-Alphabetic', color: 'black', textAlign: 'center' }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingTop: 5, paddingLeft: 33}}>
      {emailPasswordValidLogin &&
          <Text style={{ fontFamily: 'NotoSansTC-Medium-Alphabetic', color:'#FF3B30', fontSize: 12, paddingLeft: 5, paddingTop: 8}}>{emailPasswordErrorValidLogin}</Text>
        }
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 100}}>
        <Text style={{ fontFamily: 'NotoSansTC-Medium-Alphabetic', color:'#ffffff', fontSize: 12, textAlign: 'center'}}>Tidak punya akun?</Text>
        <TouchableOpacity onPress={()=> {
          navigation.navigate('Register')
          }}>
          <Text style={{ fontFamily: 'NotoSansTC-Medium-Alphabetic', color:'#80DE68', fontSize: 12, textAlign: 'center'}}> Buat akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;