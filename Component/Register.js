import * as React from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput, TouchableOpacity, Touchable, ScrollView, ImageBackground, BackHandler} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

function Register({navigation}) {
  const [username, setUsername] = React.useState()
  const [email, setEmail] = React.useState()
  const [alamat, setAlamat] = React.useState()
  const [noHP, setNoHP] = React.useState()
  const [password, setPassword] = React.useState()

  function pushDataLogin(){
      auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        var user = auth().currentUser;
        database()
        .ref('User')
        .child(user.uid)
        .set({
        username : username,
        email: email,
        alamat: alamat,
        noHP: noHP,
        password: password,
       })
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      navigation.navigate('RegisterGagal')
      // console.error(error);
        });

  }
  
  return (
    <View  style={{backgroundColor : '#000000', flex: 1}}> 
      <Image
        style={{
          resizeMode: "contain",
          alignSelf: "center",
          height: 120,
          width: 100
        }} 
        source={require('./assets/skull.png')}/>
      <View style={{width: 320, paddingTop: 20, alignSelf:'center'}}>
        <TextInput style={{borderRadius: 25, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15, backgroundColor:'#FFFFFF', elevation: 5}}
        placeholder= "Username"
        placeholderTextColor='#7D7B92'
        onChangeText={text => setUsername(text)}
        value={username}
          />
        </View>
      <View style={{width: 320, alignSelf:'center', paddingTop: 16}}>
        <TextInput style={{borderRadius: 25, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15, backgroundColor:'#FFFFFF', elevation: 5}}
        placeholder= "Email"
        placeholderTextColor='#7D7B92'
        onChangeText={text => setEmail(text)}
        value={email}
        />
      </View>
      <View style={{width: 320, alignSelf:'center', paddingTop: 16}}>
        <TextInput style={{borderRadius: 25, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15, backgroundColor:'#FFFFFF', elevation: 5}}
        placeholder= "Alamat"
        placeholderTextColor='#7D7B92'
        onChangeText={text => setAlamat(text)}
        value={alamat}
        />
      </View>
      <View style={{width: 320, alignSelf:'center', paddingTop: 16}}>
        <TextInput style={{borderRadius: 25, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15, backgroundColor:'#FFFFFF', elevation: 5}}
        placeholder= "Nomor Ponsel"
        placeholderTextColor='#7D7B92'
        onChangeText={text => setNoHP(text)}
        value={noHP}
        />
      </View>
      <View style={{width: 320, alignSelf:'center', paddingTop: 16}}>
        <TextInput style={{borderRadius: 25, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15, backgroundColor:'#FFFFFF', elevation: 5}}
        placeholder= "Password"
        placeholderTextColor='#7D7B92'
        secureTextEntry= {true}
        onChangeText={text => setPassword(text)}
        value={password}
        />
      </View>
      <View style={{alignSelf: 'center', paddingTop: 30}}>
        <TouchableOpacity style={{backgroundColor: '#80DE68', paddingVertical: 10, borderRadius: 25, width: 320, elevation: 10}} 
        onPress={()=> {
          pushDataLogin()
          navigation.navigate('RegisterBerhasil')
            }}
          >
          <Text style={{fontSize: 14, fontFamily: 'NotoSansTC-Bold-Alphabetic', color: 'black', textAlign: 'center', fontWeight:'700'}}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingLeft: 35, paddingTop: 15}}>
        <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#d1d1d1', fontSize: 13}}>Dengan mendaftar, Anda menyetujui </Text>
        <View style={{position: 'absolute', paddingLeft: 250, paddingTop: 15}}>
          <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#80DE68', fontSize: 13}}>Persyaratan</Text>
        </View>
        <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#80DE68', fontSize: 13}}>Layanan kami</Text>
        <View style={{position: 'absolute', paddingLeft: 120, paddingTop: 33}}>
          <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#d1d1d1', fontSize: 13}}>dan telah membaca dan mengakui </Text>
        </View>
        <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#80DE68', fontSize: 13, paddingLeft: 80}}>Pernyataan Privasi kami</Text>      
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 10}}>
        <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#d1d1d1', fontSize: 14}}>Sudah punya akun? </Text>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Login')
            }}>
          <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#80DE68', fontSize: 14}}>Masuk</Text> 
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register;