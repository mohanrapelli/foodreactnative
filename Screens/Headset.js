import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Headset() { 
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Ionicons 
         style={{marginTop:60,marginLeft:10}}
         onPress={() => navigation.navigate('Bottom')}
        name="arrow-back" size={34} color="black" />
       
      
      <Image style={{width:300 , height:400,alignItems:'center',marginLeft:30}} source={require("../assets/hed1.png")}/>
      <Text style={styles.nametext}> Name : BoAt Nirvanaa 751 ANC </Text>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.detailstext}>Details :</Text> 
        <View>
        <Text style={styles.detailscomp1}>Wireless Headphone with 40mm</Text>
        <Text style={styles.detailscomp2}>drivers, 65 Hours (54 Hours with</Text>
        <Text style={styles.detailscomp3}>ANC), Type C, Dual Compatibility</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.pricename}>Price : </Text>
        <Image style={styles.rupee} source={require("../assets/gold.png")}/>
        <Text style={styles.pricetext}> 4999 </Text>
      </View>
      
      <TouchableOpacity >
      <Text style={styles.input}>Place Order</Text>
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  nametext:{
    paddingLeft:17,
    paddingTop:20,
    fontSize:16,
    fontWeight:'bold'
  },
  pricename:{
    paddingLeft:20,
    paddingTop:5,
    fontSize:16,
    fontWeight:'bold'
  },
  detailstext:{
    paddingLeft:20,
    paddingTop:5,
    fontSize:16,
    fontWeight:'bold'
  },
  detailscomp1:{
    paddingLeft:5,
    paddingTop:8,
    marginRight:5,
    fontWeight:'bold'
  },
  detailscomp2:{
    paddingLeft:5,
    paddingTop:1,
    marginRight:5,
    fontWeight:'bold'
  },
  detailscomp3:{
    paddingLeft:5,
    paddingTop:1,
    marginRight:5,
    fontWeight:'bold'
  },
  rupee:{
    width:15,
    height:15,
    marginTop:13,
    marginLeft:8,
    
  },
  pricetext:{
    paddingLeft:0,
    paddingTop:7,
    fontSize:16,
    fontWeight:'bold'
  },
  input: {
    height: 45,
    width:200,
    marginLeft:85,
    marginTop:20,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    textAlign:'center',
   paddingTop:10,
    backgroundColor:'purple',
    color:'white',
    fontSize:18,
    borderRadius:29,
    fontWeight:'bold'
    
  },
  
});
