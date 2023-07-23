import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput, fontWeight, TouchableOpacity, Touchable, ScrollView, ImageBackground, BackHandler} from 'react-native';

function Landing ({ navigation }) {
  return (
    <View  style={{backgroundColor : '#000000', flex: 1}}> 
    <View style={{paddingTop: 40 }}>
        <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#80DE68', fontSize: 30,textAlign: "center", fontWeight: "bold"}}>Vape Builder</Text>
      </View>
      <View style={{alignSelf: 'center', paddingTop: 50}}>
        <Image
        style={{
          resizeMode: "contain",
          height: 200
        }} 
        source={require('./assets/skull.png')}/>
      </View>

      <View style={{paddingLeft: 50, paddingTop: 15, paddingRight: 35}}>
        <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#d1d1d1', fontSize: 14,textAlign: "center"}}>Selamat datang di Aplikasi Vape Builder. Di aplikasi ini anda dapat merakit Vape sesuai kebutuhan anda dan dapat melihat kisaran harga </Text>
      </View>

      <View style={{alignSelf: 'center', paddingTop: 25}}>
        <TouchableOpacity style={{backgroundColor: '#80DE68', paddingVertical: 14, borderRadius: 25, width: 280,height:60}} 
        onPress={()=> {
          <Button >
            onPress={navigation}
            title="Get Started"
            color="#841584"
          </Button>
          navigation.navigate('Login')
            }}
          >
          <Text style={{fontSize: 20, fontFamily: 'NotoSansTC-Bold-Alphabetic', color: 'black', textAlign: 'center', fontWeight:'900'}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Landing;