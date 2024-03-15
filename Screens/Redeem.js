import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button,SectionList } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useRef } from 'react';


export default function Redeem() {
    const navigation = useNavigation();
  const giftRef = useRef();
  const coinRef = useRef();
  useEffect(() =>{
    giftRef.current?.play(null);

   
    giftRef.current?.play(30,120);
 },[]);
 useEffect(() =>{
  coinRef.current?.play(null);

  
  coinRef.current?.play(30,120);
},[]);
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
      <Feather
      onPress={()=> navigation.navigate('Bottom')}
               name="arrow-left"
               size={27}
               color="black"
                style={{ marginTop:15,marginLeft: 10}}
                />
      <Text style={styles.headtxt}>Redeem</Text>
     {/* <LottieView style={{height:60,width:60, position: 'absolute',right:0,bottom:5}}
         ref={giftRef}
         source={require('./assets/gift-box.json')}
         autoPlays
         loop
         /> */}
           <Image
                       style={{height:60,width:60, position: 'absolute',right:0,bottom:5}}
                        source={require('../assets/boxgift.gif')}>

                    </Image>
    </View>
    <Text style={styles.text}>Referred by me</Text>
    
    <View style={styles.box}>
     <View style={{flexDirection:'row'}}>
     <Text style={styles.name}>Rakesh</Text>
     {/* <LottieView style={styles.coin}
         ref={coinRef}
         source={require('./assets/coin.json')}
         autoPlays
         loop
         /> */}
         
          <Image
                      style={styles.coin}
                        source={require('../assets/coinpayment.gif')}>

                    </Image>
    <Text style={styles.score}>200</Text>
    </View>
      </View>
      <View style={styles.box}>
     <View style={{flexDirection:'row'}}>
     <Text style={styles.name}>Sarala</Text>
     {/* <LottieView style={styles.coin}
         ref={coinRef}
         source={require('./assets/coin.json')}
         autoPlays
         loop
         /> */}
          <Image
                      style={styles.coin}
                        source={require('../assets/coinpayment.gif')}>

                    </Image>
    <Text style={styles.score}>200</Text>
    </View>
      </View>

      <View style={styles.box}>
     <View style={{flexDirection:'row'}}>
     <Text style={styles.name}>Radha</Text>
     {/* <LottieView style={styles.coin}
        ref={coinRef}
        source={require('./assets/coin.json')}
         autoPlays
         loop
         /> */}
        <Image
                      style={styles.coin}
                        source={require('../assets/coinpayment.gif')}>

                    </Image>
    <Text style={styles.score}>200</Text>
    </View>
      </View>

      <View style={styles.box}>
     <View style={{flexDirection:'row'}}>
     <Text style={styles.name}>Ashok</Text>
     {/* <LottieView style={styles.coin}
        ref={coinRef}
        source={require('./assets/coin.json')}
         autoPlays
         loop
         /> */}
          <Image
                      style={styles.coin}
                        source={require('../assets/coinpayment.gif')}>

                    </Image>
    <Text style={styles.score}>200</Text>
    </View>
      </View>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 16,
  },
  sectionHeader: {
    flexDirection:'row',
    height:60,
    width:330,
    marginTop:10,
    marginBottom:20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text :{
    fontSize: 20,
    fontWeight:'bold',
    marginTop:10,
    marginRight:15,
  },

name :{
  fontSize: 16,
  fontWeight:'normal',
  marginTop:3,
  marginRight:12,
},
coin:{
  height:30,
  width:40, 
  position: 'absolute',
  right:50,
  bottom:40,
  top:0,
 },
score :{
  fontSize: 16,
  fontWeight:'bold',
  marginTop:3,
  marginRight:20,
  position:'absolute',
  right:0
},
 box: {
    height:50,
    width:330,
    marginTop:10,
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius:20
  },
  headtxt: {
    marginTop:15,
    fontSize: 20,
    fontWeight:'bold',
    textAlign:'center',
    marginLeft:80
  },
  });
