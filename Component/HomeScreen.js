import React, {useState, useEffect} from 'react';
import {View,Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';


export default function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const data_coil = [
    { key: '1', value: 'Gear Alien Optimus Ni80', price: 35500 },
    { key: '2', value: 'Gear Nichrome 80 Ni80 30 feet', price: 28000 },
    { key: '3', value: 'Ni80 Clapton Wire', price: 20000 },
    { key: '4', value: 'Stear Coil Fused Tm Ni80', price: 18000 },
    { key: '5', value: 'Temco Ni80 28GA', price: 10000 },
    { key: '6', value: 'Phoenic Nichrome Wire', price: 15000 },
  ];
  const data_mod = [
    { key: '1', value: 'Aegis X', price: 300000 },
    { key: '2', value: 'Hex Ohm', price: 2000000 },
    { key: '3', value: 'Voopoo Drag 2', price: 900000 },
  ];
  const data_kapas = [
    { key: '1', value: 'Cotton Bacon Prime', price: 50000 },
    { key: '2', value: 'Holly Fiber', price: 60000 },
    { key: '3', value: 'Kendo', price: 45000 },
  ];
  const data_baterai = [
    { key: '1', value: 'VTC', price: 120000 },
    { key: '2', value: 'AWT', price: 120000 },
    { key: '3', value: 'MXJO', price: 80000 },
  ];

  const handleSelection = (val) => {
    setSelectedItems((prevItems) => [...prevItems, val]);
    // Lakukan sesuatu dengan nilai terpilih
    console.log('Selected value:', val);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    selectedItems.forEach((item) => {
      const data = getDataByValue(item);
      if (data) {
        totalPrice += data.price;
      }
    });
    setTotalPrice(totalPrice);
  };
  
  useEffect(() => {
    getTotalPrice(); // Hitung total harga saat komponen dirender
  }, [selectedItems]);
  

  const getDataByValue = (value) => {
    const allData = [...data_coil, ...data_mod, ...data_kapas, ...data_baterai];
    return allData.find((data) => data.value === value);
  };

  const handleReset = () => {
    setSelectedItems([]);
  };
  
  return(
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <Text style={{ paddingTop: 20, fontFamily: 'ABeeZee-Regular', color: '#fff', fontSize: 18, textAlign: "center", fontWeight: 'bold' }}>
        Silahkan Memilih Komponen Vape Yang Ingin Anda Rakit
      </Text>
      <View style={{ paddingTop: 5, paddingHorizontal: 20 }}>
        <Text style={{ paddingLeft: 5, fontFamily: 'ABeeZee-Regular', color: '#fff', fontSize: 16, textAlign: "left" }}>Silahkan Pilih Coil</Text>
        <SelectList
          boxStyles={{ backgroundColor: 'white' }}
          setSelected={handleSelection}
          data={data_coil}
          save="value"
          dropdownStyles={{ backgroundColor: 'white' }}
        />
      </View>
      <View style={{ paddingTop: 5, paddingHorizontal: 20 }}>
      <Text style={{ paddingLeft: 5, fontFamily: 'ABeeZee-Regular', color: '#fff', fontSize: 16, textAlign: "left" }}>Silahkan Pilih Mod</Text>
        <SelectList
          boxStyles={{ backgroundColor: 'white' }}
          setSelected={handleSelection}
          data={data_mod}
          save="value"
          dropdownStyles={{ backgroundColor: 'white' }}
        />
      </View>
      <View style={{ paddingTop: 5, paddingHorizontal: 20 }}>
      <Text style={{ paddingLeft: 5, fontFamily: 'ABeeZee-Regular', color: '#fff', fontSize: 16, textAlign: "left" }}>Silahkan Pilih Kapas</Text>
        <SelectList
          boxStyles={{ backgroundColor: 'white' }}
          setSelected={handleSelection}
          data={data_kapas}
          save="value"
          dropdownStyles={{ backgroundColor: 'white' }}
        />
      </View>
      <View style={{ paddingTop: 5, paddingHorizontal: 20 }}>
      <Text style={{ paddingLeft: 5, fontFamily: 'ABeeZee-Regular', color: '#fff', fontSize: 16, textAlign: "left" }}>Silahkan Pilih Baterai</Text>
        <SelectList
          boxStyles={{ backgroundColor: 'white' }}
          setSelected={handleSelection}
          data={data_baterai}
          save="value"
          dropdownStyles={{ backgroundColor: 'white' }}
        />
      </View>

        <View style={{marginTop: 25, paddingHorizontal: 20}}>
          <View style={{ backgroundColor: '#c4c4c4', paddingTop: 10, paddingBottom: 10, borderRadius: 20}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 20, marginTop: 1, marginLeft: 15, paddingTop: 1, color: 'blue', fontWeight: 'bold'}}>Total Harga</Text>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 25, marginTop: 1, marginLeft: 15, paddingTop: 1, color: 'blue', fontWeight: 'bold'}}>{totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</Text>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, marginTop: 1, marginLeft: 15, paddingTop: 1, color: 'blue', fontWeight: 'bold'}}>*Harga Relatif Berbeda di Setiap Vape Store</Text>
          </View>
          <View>
            <Text></Text>
          </View>
          <Button title="Reset" color='#80DE68' onPress={handleReset}/>
          
        </View>
    </View>
  );

};
