import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ImageBackground, TouchableOpacity,onPress, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Live() {
    const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' ,marginTop:15}}>
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
      <Text style={styles.text3}>
        Live
      </Text>
      <Text
      onPress={()=> navigation.navigate("Upcoming")}
      style={styles.text4}>
        Upcoming
      </Text>
    </View>
    <View>
      <Text style={styles.text5}>Lucky Draw</Text>
    </View>
   
         <ImageBackground source={require('../assets/Background.png')} style={styles.background}>
     
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text6}>Win 1000</Text>
        <Text style={styles.text7}>#1856186</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text8}>17:02:16</Text>
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
    <ImageBackground source={require('../assets/Background.png')} style={styles.background1}>
     
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text13}>Win 1000</Text>
        <Text style={styles.text14}>#1856456</Text>
        <TouchableOpacity style={styles.button3} onPress={onPress}>
      <Text style={styles.text15}>17:02:16</Text>
    </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text16}>Left:0/3000</Text>
        <Text style={styles.text17}>100% Failed</Text>
        </View>
        <View>
        <Image source={require('../assets/Rectangl.png')}
        style={styles.image5}/>
       
      </View>
      <View style={{ flexDirection: 'row' }}>
       
        <TouchableOpacity style={styles.button4} onPress={onPress}>
      <Text style={styles.text18}>Check Winner</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button5} onPress={onPress}>
      <Text style={styles.text19}>Get Free Entry</Text>
    </TouchableOpacity>
       
      </View>
    </ImageBackground>
    <ImageBackground source={require('../assets/Background.png')} style={styles.background1}>
     
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text13}>Win 1000</Text>
        <Text style={styles.text14}>#1856456</Text>
        <TouchableOpacity style={styles.button3} onPress={onPress}>
      <Text style={styles.text15}>17:02:16</Text>
    </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text16}>Left:0/3000</Text>
        <Text style={styles.text17}>100% Failed</Text>
        </View>
        <View>
        <Image source={require('../assets/Load.png')}
        style={styles.image5}/>
       
      </View>
      <View style={{ flexDirection: 'row' }}>
       
        <TouchableOpacity style={styles.button4} onPress={onPress}>
      <Text style={styles.text18}>Check Winner</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button5} onPress={onPress}>
      <Text style={styles.text19}>Get Free Entry</Text>
    </TouchableOpacity>
       
      </View>
    </ImageBackground>
    <ImageBackground source={require('../assets/Background.png')} style={styles.background1}>
     
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text13}>Win 1000</Text>
        <Text style={styles.text14}>#1856456</Text>
        <TouchableOpacity style={styles.button3} onPress={onPress}>
      <Text style={styles.text15}>17:02:16</Text>
    </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text16}>Left:0/3000</Text>
        <Text style={styles.text17}>100% Failed</Text>
        </View>
        <View>
        <Image source={require('../assets/Rectangl.png')}
        style={styles.image5}/>
       
      </View>
      <View style={{ flexDirection: 'row' }}>
       
        <TouchableOpacity style={styles.button4} onPress={onPress}>
      <Text style={styles.text18}>Check Winner</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button5} onPress={onPress}>
      <Text style={styles.text19}>Get Free Entry</Text>
    </TouchableOpacity>
       
      </View>
    </ImageBackground>
    <ImageBackground source={require('../assets/Background.png')} style={styles.background1}>
     
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text13}>Win 1000</Text>
        <Text style={styles.text14}>#1856456</Text>
        <TouchableOpacity style={styles.button3} onPress={onPress}>
      <Text style={styles.text15}>17:02:16</Text>
    </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text16}>Left:0/3000</Text>
        <Text style={styles.text17}>100% Failed</Text>
        </View>
        <View>
        <Image source={require('../assets/Rectangl.png')}
        style={styles.image5}/>
       
      </View>
      <View style={{ flexDirection: 'row' }}>
       
        <TouchableOpacity style={styles.button4} onPress={onPress}>
      <Text style={styles.text18}>Check Winner</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button5} onPress={onPress}>
      <Text style={styles.text19}>Get Free Entry</Text>
    </TouchableOpacity>
       
      </View>
    </ImageBackground>
    <ImageBackground source={require('../assets/Background.png')} style={styles.background1}>
     
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text13}>Win 1000</Text>
        <Text style={styles.text14}>#1856456</Text>
        <TouchableOpacity style={styles.button3} onPress={onPress}>
      <Text style={styles.text15}>17:02:16</Text>
    </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text16}>Left:0/3000</Text>
        <Text style={styles.text17}>100% Failed</Text>
        </View>
        <View>
        <Image source={require('../assets/Rectangl.png')}
        style={styles.image5}/>
       
      </View>
      <View style={{ flexDirection: 'row' }}>
       
        <TouchableOpacity style={styles.button4} onPress={onPress}>
      <Text style={styles.text18}>Check Winner</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button5} onPress={onPress}>
      <Text style={styles.text19}>Get Free Entry</Text>
    </TouchableOpacity>
       
      </View>
    </ImageBackground>
 
 
 
 
   
 
      <StatusBar style="auto" />
 
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
  color:"green",
  marginLeft:80,
 marginTop:15,
 
},
text4: {
  fontSize: 18,
  fontWeight: "bold",
  color: "white",
 marginLeft:50,
 marginTop:15,
 
},
text4: {
  fontSize: 19,
  fontWeight: "bold",
  color: "white",
 marginLeft:50,
 marginTop:15,
 
},
text5: {
  fontSize: 19,
  fontWeight: "bold",
  color: "black",
  marginRight:185,
 marginTop:15,
 
 
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
  marginLeft:24,
  width:55,
  justifyContent: 'center',
  alignItems: 'center',
},
text8: {
  fontSize: 11,
  color: "black",
  marginTop:35,
  marginLeft:11,
  width:50,
  height:50,
},
text9:{
  marginTop:20,
  marginLeft:20,
},
text10:{
  marginTop:20,
  marginLeft:90,
  color:"purple"
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
  fontSize: 15,
  color:"white"
 
 
 
 
},
background1: {
  flex: 1,
  resizeMode: 'cover',
  justifyContent: 'center',
  width:300,
  height:203,
  marginTop:20,
 
 
},
text13: {
  fontSize: 15,
 
  color: "black",
 
  marginLeft:22,
  marginBottom:4,
 
 
 
},
text14: {
  fontSize: 15,
  color: "black",
 
  marginLeft:50,
 
 
},
button3: {
  backgroundColor: 'white',
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 10,
  height:22,
  marginLeft:24,
  width:55,
  justifyContent: 'center',
  alignItems: 'center',
},
text15: {
  fontSize: 11,
  color: "black",
  marginTop:35,
  marginLeft:11,
  width:50,
  height:50,
},
 
text16:{
  marginTop:20,
  marginLeft:20,
},
text17:{
  marginTop:20,
  marginLeft:90,
  color:"purple"
},
image5:{
  marginTop:20,
  marginLeft:20,
  marginBottom:20,
},
 
button4: {
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
text18:{
  fontSize: 15,
 
 
 
  marginLeft:9,
 
},
button5: {
  backgroundColor: 'purple',
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 0,
   
  marginLeft:20,
 
  width:120,
  height:30,
},
text19:{
  fontSize: 15,
  color:"white"
 
 
 
 
},
 
 
 
})