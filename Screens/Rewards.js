
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button,SectionList,TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import DATA from './data1.json'


export default function Rewards() {
  const navigation = useNavigation();

    const handleRewardPress = (item) => {
        
        switch (item.name) {
          case "UPI Cash":
            navigation.navigate('Upicash');
            break;
          case "Google Play Voucher":
            navigation.navigate('Googleplay');
            break;
          case "Flipcart Voucher":
            navigation.navigate('Flipcart');
            break;
          case "USDT Crypto":
            navigation.navigate('Usdt');
            break;
          case "FreeFire Diamonds":
            navigation.navigate('Freefire');
            break;
          default:
            
            break;
        }
      };
    
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
      <Text style={styles.headtxt}>Rewards</Text>
      </View>
      
      <View style={styles.box}>
      <View style={{flexDirection:'column'}}>
      <Text style={styles.boxtxt}>100</Text>
      <Text style={{ fontSize: 20,fontWeight:'bold',}}>Coins</Text>
      </View>
     <Image 
     style={{height:100,width:120, position: 'absolute',right:0}}
     source={require('../assets/coinpayment.gif')}
     
     >

     </Image>
      </View>
      <View style={styles.box1}>
      <Text style={styles.boxtxt1}>Rewards History</Text>
      </View>


      <SectionList
        sections={DATA}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleRewardPress(item)}>
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={{flexDirection:'column'}}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text1}>{item.des}</Text>
          </View>
         </View>
          </TouchableOpacity>
      )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.txt}>{title}</Text>
        )}
      />
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
  box: {
    flexDirection:'row',
    height:100,
    width:330,
    marginTop:20,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#F2F555',
    padding: 10,
    borderRadius:20
  },
  box1: {
    height:80,
    width:330,
    marginTop:20,
    backgroundColor: '#71F2F4',
    padding: 10,
    borderRadius:20
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    fontWeight:'bold'
  },
  text1: {
    fontSize: 14,
    color:'#800080',
  },
  txt: {
    marginTop:20,
    fontSize: 20,
    fontWeight:'bold',
  },
  headtxt: {
    marginTop:15,
    fontSize: 20,
    fontWeight:'bold',
    textAlign:'center',
    marginLeft:80
  },
  boxtxt1: {
    fontSize: 20,
    fontWeight:'bold',
    marginTop:15
  },
  boxtxt: {
    fontSize: 20,
    fontWeight:'bold',
    marginTop:12
  },
  
  
});
