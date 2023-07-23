import React, { Component } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { View, Text, Image, TouchableOpacity} from 'react-native';

function Profile({ navigation }) {
    const [namaLengkap, setNamaLengkap] = React.useState()
    const [email, setemail] = React.useState()
    const [noHP, setnoHP] = React.useState()
  
    React.useEffect( () => {
      var user = auth().currentUser;
      database()
      .ref('User')
      .child(user.uid)
      .on('value', snapshot => {
        let data=snapshot.val()
        setNamaLengkap(data.username)
        setemail(data.email)
        setnoHP(data.noHP)
      });
    }, [])
    return (
      <View style={{backgroundColor : '#000000', flex: 1}}>
          <Image
        style={{
          resizeMode: "contain",
          alignSelf: "center",
          height: 120,
          width: 100
        }} 
        source={require('./assets/skull.png')}/>
        <View style={{marginTop: 25, paddingHorizontal: 25}}>
          <View style={{alignItems: 'center', backgroundColor: '#c4c4c4', paddingTop: 30, paddingBottom: 30, borderRadius: 25}}>
            <Image source={require('./assets/user-profile.png')}/>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 20, marginTop: 3, paddingTop: 5, color: 'black', fontWeight: 'bold'}}>Username : {namaLengkap}</Text>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 20, marginTop: 3, paddingTop: 5, color: 'black', fontWeight: 'bold'}}>Email : {email}</Text>          
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 20, marginTop: 3, paddingTop: 5, paddingBottom: 8, color: 'black', fontWeight: 'bold'}}>No HP : {noHP}</Text>
          </View>
        </View>

        <View style={{alignSelf: 'center', paddingTop: 40}}>
        <TouchableOpacity style={{backgroundColor: '#c4c4c4', paddingVertical: 15, borderRadius: 15, width: 330, elevation: 10}} 
        onPress={()=> {
          navigation.navigate('Login')
            }}
          >
          <Text style={{fontSize: 14, fontFamily: 'NotoSansTC-Bold-Alphabetic', color: 'black', textAlign: 'center', fontWeight:'700'}}>Log Out</Text>
        </TouchableOpacity>
      </View>
      </View>

      
    );
  }
export default Profile;