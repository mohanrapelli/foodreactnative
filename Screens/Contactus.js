import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function Contactus() {
  const navigation = useNavigation();
  return (
<SafeAreaView style = {styles.container}>
 
      <View style = {styles.tabcontainer}>
 
       <TouchableOpacity>
<AntDesign
 onPress={() => navigation.navigate('Bottom')}
name="arrowleft" size={35} color="black" />
</TouchableOpacity>

<Text style = {{fontWeight:700, alignSelf:"center", marginLeft:75 ,fontSize:25}}>
        Contact us
</Text>
 
      </View>
<View style={styles.container1} >
<Image style = {styles.supportimage} source = {require('../assets/suport.gif')}  />
<Text style = {{alignSelf:"center",fontSize:25, fontWeight:700, marginTop:-10}}>
        Support@supreme.com
</Text>

</View>
<View style={styles.container2} >
<Image style = {styles.callimage1} source = {require('../assets/call.gif')}  />
<Text style = {{alignSelf:"center",fontSize:25, fontWeight:700 ,marginTop:-10}}>
        0866-2334567
</Text>

</View>
</SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
 
  tabcontainer: {
    marginTop:40,
    marginLeft:20,
    flexDirection:"row"
 
 
 
  },
  container1: {
    height:150,
    width:330,
    borderRadius:15,
    alignSelf:"center",
    marginTop:60,
    backgroundColor:"#bdc3c7"
  },
  supportimage: {
    alignSelf:"center",
    height:100,
    width:75,

  },
  container2: {
    height:150,
    width:330,
    borderRadius:15,
    alignSelf:"center",
    marginTop:50,
    backgroundColor:"#bdc3c7"
  },
  callimage1: {
    alignSelf:"center",
    height:100,
    width:75
  }


});