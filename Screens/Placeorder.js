import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,  TextInput,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Placeorder() { 
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
          <Ionicons 
         style={{marginTop:30,marginLeft:10}}
         onPress={() => navigation.navigate('Phone')}
        name="arrow-back" size={34} color="black" />
      
      
      <View style={styles.rectangle1}>
      <View style={{flexDirection:'row'}}>
        <Image style={styles.mobile} source={require("../assets/mobile1.png")}/>
              <View>
                <Text style={styles.prodname}>Samsung Galaxy S22+</Text>
                <View style={{flexDirection:'row'}}>
                  <Image style={styles.rupee} source={require("../assets/gold.png")}/>
                  <Text style={styles.pricetext}> 19999 </Text>
                </View>
              </View>
      </View>
      </View>

      <TextInput style={styles.rectangle2}placeholder='Name..'></TextInput>

      <TextInput style={styles.rectangle3} placeholder='Address...'></TextInput>

      <Text style={styles.rectangle4}>Pay from balance  19999</Text>

      <TouchableOpacity>
      <Text style={styles.input}>Confirm order</Text>
      </TouchableOpacity>

      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  rectangle1: {
    width: 300,
    height: 120,
    backgroundColor: 'white',
    marginTop:100,
    borderWidth:0.5,
    marginLeft:30,
    borderRadius:15,
    borderColor:'gray'
    
  },
  mobile:{
    width:100,
    height:100
  },
  prodname:{
    fontWeight:'bold',
    fontSize:16,
    paddingTop:18
  },
  rupee:{
    width:20,
    height:20,
    marginTop:20,
    marginLeft:8,
    
  },
  pricetext:{
    paddingLeft:0,
    paddingTop:15,
    fontSize:18,
    fontWeight:'bold'
  },
  rectangle2:{
    width: 300,
    height: 50,
    backgroundColor: 'white',
    marginTop:30,
    borderWidth:0.5,
    marginLeft:30,
    borderRadius:15,
    borderColor:'gray',
    paddingLeft:20,
    paddingTop:10,
    fontWeight:'bold',
    color:'gray',
    fontSize:20
  },
  rectangle3:{
    width: 300,
    height: 120,
    backgroundColor: 'white',
    marginTop:30,
    borderWidth:0.5,
    marginLeft:30,
    borderRadius:15,
    borderColor:'gray',
    paddingLeft:20,
    paddingTop:10,
    fontWeight:'bold',
    color:'gray',
    fontSize:20
  },
  rectangle4:{
    width: 300,
    height: 50,
    backgroundColor: 'white',
    marginTop:30,
    borderWidth:0.5,
    marginLeft:30,
    borderRadius:15,
    borderColor:'gray',
    paddingLeft:20,
    paddingTop:10,
    fontWeight:'bold',
    color:'black',
    fontSize:20
  },
  input: {
    height: 45,
    width:200,
    marginLeft:85,
    marginTop:20,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 1,
    textAlign:'center',
    paddingTop:8,
    backgroundColor:'purple',
    color:'white',
    fontSize:18,
    borderRadius:29,
    fontWeight:'bold'
    
  },

  
});
