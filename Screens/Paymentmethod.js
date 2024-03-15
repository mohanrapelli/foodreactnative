import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
 
export default function Paymentmethod(){
    const navigation = useNavigation();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('paypalpayment');
 
  const handleOptionChange = (option) => {
    setSelectedPaymentMethod(option);
  };
 
  return (
    <SafeAreaView style={styles.container}>
 
      <View style = {styles.tabcontainer}>
 
       <TouchableOpacity>
<AntDesign 
onPress={()=> navigation.navigate('Bottom')}
name="arrowleft" size={35} color="black" />
</TouchableOpacity>
 
<Text style = {{fontWeight:700, alignSelf:"center", marginLeft:50 ,fontSize:25}}>
        Payment Method
</Text>
 
      </View>
      <View style={styles.container1}>
        <Image style={styles.coinimage} source={require('../assets/coinpayment.gif')} />
        <Text style={{ marginTop: 25, fontWeight: 700, marginLeft: -10, width: 120, marginTop: 45, fontSize: 15 }}>
          Manual Purchase 28coins
        </Text>
        <View style={{ height: 35, width: 65, backgroundColor: 'white', marginTop: 50, marginLeft: 20, borderRadius: 10 }}>
          <Text style={{ fontWeight: 700, alignSelf: 'center', marginTop: 3, fontSize: 20 }}>
            $ 49
          </Text>
        </View>
      </View>
 
      <View>
        <Text style={{ marginLeft: 25, marginTop: 30, fontWeight: 700, fontSize: 20 }}>
          Select Payment Method :
        </Text>
      </View>
 
      <TouchableOpacity onPress={() => handleOptionChange('paypal')}>
        <View style={styles.inputcontainer}>
          <Image style={styles.image1} source={require('../assets/paypal.png')} />
          <Text style={{ fontSize: 25, fontWeight: '700', alignSelf: 'center', marginLeft: 30 }}>paypal</Text>
          <View style = {{marginStart:50}}>
          <RadioButton
            value="paypal"
            status={selectedPaymentMethod === 'paypal' ? 'checked' : 'unchecked'}
            onPress={() => handleOptionChange('paypal')}
          />
          </View>
        </View>
      </TouchableOpacity>
 
      <TouchableOpacity onPress={() => handleOptionChange('razopay')}>
        <View style={styles.inputcontainer}>
          <Image style={styles.image1} source={require('../assets/razopaypayment.png')} />
          <Text style={{ fontSize: 25, fontWeight: '700', alignSelf: 'center', marginLeft: 50 }}>razopay</Text>
          <View style = {{marginStart:37}}>
          <RadioButton
            value="razopay"
            status={selectedPaymentMethod === 'razopay' ? 'checked' : 'unchecked'}
            onPress={() => handleOptionChange('razopay')}
          />
          </View>
        </View>
      </TouchableOpacity>
 
      <TouchableOpacity onPress={() => handleOptionChange('UPI')}>
        <View style={styles.inputcontainer}>
          <Image style={styles.image1} source={require('../assets/upipayment.png')} />
          <Text style={{ fontSize: 25, fontWeight: '700', alignSelf: 'center', marginLeft: 25 }}>UPI</Text>
          <View style = {{marginStart:80}}>
          <RadioButton
            value="UPI"
            status={selectedPaymentMethod === 'UPI' ? 'checked' : 'unchecked'}
            onPress={() => handleOptionChange('UPI')}
          />
          </View>
        </View>
      </TouchableOpacity>
 
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 
  tabcontainer: {
    marginTop:40,
    marginLeft:20,
    flexDirection:"row"
 
 
 
  },
 
  container1: {
    height: 130,
    width: 330,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "#bdc3c7"
  },
  coinimage: {
    height: 180,
    width: 150,
    marginTop: -25,
    marginLeft: -25,
    alignItems: "center",
    alignContent: "center"
  },
  inputcontainer: {
    height: 100,
    width: 330,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 25,
    flexDirection: "row",
    backgroundColor: "#bdc3c7",
    alignItems: 'center', // Center vertically
  },
  image1: {
    alignSelf: "center",
    marginLeft: 25,
  }
});