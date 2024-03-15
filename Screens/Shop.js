import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,Image, horizontalLine,ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
 
export default function Shop() {
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.container}>
      <View  style={{ flexDirection: 'row',marginTop:-28}}>
       
      <Image source={require('../assets/left.png')}
        style={styles.image}/>
        <Text style={styles.text}>Shop</Text>
       
       
      </View>
     
     
    <ImageBackground 
     onPress={() => navigation.navigate('Headset')}
    source={require('../assets/bg.png')} style={styles.background}>
<View>
  <TouchableOpacity>
  <Image
   onPress={() => navigation.navigate('Headset')}
  source={require('../assets/headphone.png')}
        style={styles.image1}/>
       </TouchableOpacity>
</View>
<View style={{ flexDirection: 'row' }}>
<Text
 onPress={() => navigation.navigate('Headset')}
style={styles.text1}>Headset</Text>
 <Image source={require('../assets/price.png')}
        style={styles.image2}/>
         
</View>
    </ImageBackground>
    <ImageBackground source={require('../assets/bg.png')} style={styles.background}>
<View>
  <Image source={require('../assets/Time.png')}
        style={styles.image4}/>
       
</View>
<View style={{ flexDirection: 'row' }}>
<Text 
  onPress={() => navigation.navigate('Watch')}
style={styles.text1}>Watch</Text>
 <Image source={require('../assets/Rupee.png')}
        style={styles.image2}/>
         
</View>
    </ImageBackground>
    <ImageBackground source={require('../assets/bg.png')} style={styles.background}>
<View>
  <Image source={require('../assets/Mobile.png')}
        style={styles.image3}/>
       
</View>
<View style={{ flexDirection: 'row' }}>
<Text 
  onPress={() => navigation.navigate('Phone')}
style={styles.text1}>Mobile</Text>
 <Image source={require('../assets/cost.png')}
        style={styles.image2}/>
         
</View>
    </ImageBackground>
    </View>
    </ScrollView>
     
     
     
     
   
 
);
}
 
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 
},
image:{
  width:25,
  marginTop:55,
  height:25,
  marginRight:40,
 
 
},
text:{
  fontSize:22,
  marginTop:50,
  marginRight:190,
 
 
  fontWeight:"bold",
 
 
},
background: {
  flex: 1,
  resizeMode: 'cover', // or 'contain', 'stretch', 'repeat', 'center'
  justifyContent: 'center',
  width:310,
 
  height:220,
  marginTop:30,
 
 
},
image1:{
  marginTop:29,
  width:197,
 
  height:145,
 
  marginLeft:60,
 
 
},
text1:{
  fontSize:22,
 
 
marginLeft:60,
color:"white",
  fontWeight:"bold",
 
 
},
image2:{
  marginLeft:30,
  marginBottom:20,
  alignItems: 'center',
 
},
image3:{
 
 
 
  marginLeft:80,
  marginTop:10,
 
},
image4:{
 
 height:160,
 width:150,
 
  marginLeft:80,
  marginTop:10,
 
 
},
 
 
})
