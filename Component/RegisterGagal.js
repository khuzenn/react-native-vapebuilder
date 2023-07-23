import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput, TouchableOpacity, Touchable, ScrollView, ImageBackground, BackHandler} from 'react-native';

function RegisterGagal ({ navigation }) {
  return (
    <View  style={{backgroundColor : '#000000', flex: 1}}> 
      <View style={{alignSelf: 'center', paddingTop: 100}}>
        <Image
        style={{
          resizeMode: "contain",
          height: 250
        }} 
        source={require('./assets/skull.png')}/>
      </View>

      <View style={{paddingLeft: 35, paddingTop: 15, paddingRight: 35}}>
        <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#d1d1d1', fontSize: 14,textAlign: "center"}}>Pendaftaran Akun Anda gagal dibuat silahkan daftar kembali</Text>
      </View>

      <View style={{alignSelf: 'center', paddingTop: 25}}>
        <TouchableOpacity style={{backgroundColor: '#80DE68', paddingVertical: 14, borderRadius: 25, width: 280,height:60}} 
        onPress={()=> {
          <Button >
            onPress={navigation}
            title="Get Started"
            color="#841584"
          </Button>
          navigation.navigate('Register')
            }}
          >
          <Text style={{fontSize: 20, fontFamily: 'NotoSansTC-Bold-Alphabetic', color: 'black', textAlign: 'center', fontWeight:'900'}}>Kembali</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default RegisterGagal;