import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ImageBackground, TouchableOpacity,onPress, ScrollView ,Button,handlePress} from 'react-native';
 
export default function Upcoming() {
    const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={{ flexDirection: 'row',marginTop:15 }}>
        <Text style={styles.text}>S</Text>
        <Text style={styles.text1}>UPREME</Text>
 
        <Image
     
      source={require('../assets/Group.png')}
        style={styles.image}/>
      </View>
      <View style={{ backgroundColor: 'purple', width: 400, height: 60 , flexDirection:'row',marginTop:14,}}>
      <Text
      onPress={()=> navigation.navigate("Bottom")}
      style={styles.text2}>
        Winner
      </Text>
      <Text
      onPress={()=> navigation.navigate("Live")}
      style={styles.text3}>
        Live
      </Text>
      <Text style={styles.text4}>
        Upcoming
      </Text>
    </View>
   
   
         <ImageBackground source={require('../assets/Background.png')} style={styles.background}>
     
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text6}>Win 1000</Text>
        <Text style={styles.text7}>#1856186</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text8}>Start at 8pm</Text>
    </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text9}>Left: 59/100</Text>
        <Text style={styles.text10}>100% Failed</Text>
        </View>
        <View>
        <Image source={require('../assets/Rectangl.png')}
        style={styles.image3}/>
       
      </View>
      <View style={{ flexDirection: 'row' }}>
       
        <TouchableOpacity style={styles.button1} onPress={onPress}>
      <Text style={styles.text11}>Check Winner</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button2} onPress={onPress}>
      <Text style={styles.text12}>Get Free Entry</Text>
    </TouchableOpacity>
       
      </View>
    </ImageBackground>
    <ImageBackground source={require('../assets/Background.png')} style={styles.background}>
     
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text6}>Win 1000</Text>
        <Text style={styles.text7}>#1856186</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text8}>Tomorrow</Text>
    </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text9}>Left: 59/100</Text>
        <Text style={styles.text10}>100% Failed</Text>
        </View>
        <View>
        <Image source={require('../assets/Load.png')}
        style={styles.image3}/>
       
      </View>
      <View style={{ flexDirection: 'row' }}>
       
        <TouchableOpacity style={styles.button1} onPress={onPress}>
      <Text style={styles.text11}>Check Winner</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button3} onPress={onPress}>
      <Text style={styles.text5}>Full</Text>
    </TouchableOpacity>
       
      </View>
    </ImageBackground>
    <View>
      <Text style={styles.text13}>Earn More Tickets</Text>
    </View>
    <View style={styles.container1}>
      <View style={{ flexDirection: 'row' }}>
      <Image source={require('../assets/play.png')}
        style={styles.image5}/>
        <Text style={styles.text14}>
          Video Task
        </Text>
        <View style={styles.container3}>
        <Text style={styles.text15}>Watch</Text>
        </View>
      </View>
     
    </View>
    <View style={styles.container1}>
      <View style={{ flexDirection: 'row' }}>
      <Image source={require('../assets/share.png')}
        style={styles.image5}/>
        <Text style={styles.text14}>
          Ref
        </Text>
        <View style={styles.container4}>
        <Text style={styles.text15}>Watch</Text>
        </View>
      </View>
     
    </View>
    <View style={styles.container1}>
      <View style={{ flexDirection: 'row' }}>
      <Image source={require('../assets/settings.png')}
        style={styles.image5}/>
        <Text style={styles.text14}>
          Task Offers
        </Text>
        <View style={styles.container3}>
        <Text style={styles.text15}>Watch</Text>
        </View>
      </View>
     
    </View>
 
 
 
 
   
 
</View>
 
</ScrollView>
 
);
}
 
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'top',
},
container1: {
    width: 300, // Width of the View
    height: 70, // Height of the View
    borderWidth: 0.5, // Border width
    borderColor: 'black', // Border color
    borderRadius: 1, // Border radius
    marginTop:10,
  },
 
  container3: {
    width: 80,
    height: 25,
    borderWidth: 1,
    backgroundColor:"purple",
    borderRadius: 10,
marginTop:22,
marginLeft:39,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container4: {
    width: 80,
    height: 25,
    borderWidth: 1,
    backgroundColor:"purple",
    borderRadius: 10,
marginTop:22,
marginLeft:90,
    justifyContent: 'center',
    alignItems: 'center',
  },
text: {
fontSize: 22,
fontWeight: "bold",
color: "orange",
marginTop:40,
},
text1: {
fontSize: 22,
fontWeight: "bold",
color: "purple",
marginTop:40,
},
image: {
marginTop:40,
marginLeft:150,
 
 
},
text2: {
fontSize: 18,
fontWeight: "bold",
color: "white",
marginLeft:50,
marginTop:15,
 
 
},
text3: {
fontSize: 18,
fontWeight: "bold",
color: "white",
marginLeft:80,
marginTop:15,
 
},
text4: {
fontSize: 18,
fontWeight: "bold",
color: "white",
marginLeft:50,
color:"green",
marginTop:15,
 
},
button3: {
  backgroundColor: 'purple',
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 0,
   
  marginLeft:20,
 
  width:120,
  height:30,
},
text5:{
  color:"white",
  marginLeft:42,
 
},
 
 
 
 
image1 : {
marginTop:15,
 
},
text6: {
fontSize: 15,
 
color: "black",
 
marginLeft:20,
 
 
 
 
},
background: {
flex: 1,
resizeMode: 'cover', // or 'contain', 'stretch', 'repeat', 'center'
justifyContent: 'center',
width:300,
height:203,
marginTop:20,
},
text7: {
fontSize: 15,
 
color: "black",
 
marginLeft:50,
marginBottom:4,
 
 
 
},
button: {
backgroundColor: 'white',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 10,
height:22,
marginLeft:1,
marginTop:40,
width:80,
justifyContent: 'center',
alignItems: 'center',
},
text8: {
fontSize: 11,
color: "black",
marginTop:35,
marginLeft:20,
width:80,
height:50,
},
text9:{
marginTop:20,
marginLeft:20,
},
text10:{
marginTop:20,
marginLeft:90,
},
image3:{
marginTop:20,
marginLeft:20,
marginBottom:20,
},
image4:{
 
marginLeft:30,
 
},
button1: {
backgroundColor: 'white',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 0,
borderColor: 'purple',
marginLeft:20,
marginBottom:10,
width:130,
height:30,
},
text11:{
fontSize: 15,
 
marginLeft:9,
 
},
button2: {
  backgroundColor: 'purple',
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 0,
   
  marginLeft:20,
 
  width:120,
  height:30,
},
text12:{
color:"white",
marginLeft:10,
},
text13:{
  marginLeft:-130,
  fontSize: 21,
  marginTop:10,
  fontWeight:"bold"
 
},
image5:{
  marginLeft:15,
  marginTop:17,
},
text14:
{
  marginLeft:40,
  marginTop:23,
},
text15:
{
  color:"white",
 
 
 
},
})