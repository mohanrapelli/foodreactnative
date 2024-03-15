
 
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
 
export default function Help() {
  const navigation=useNavigation();
  return (
    <ScrollView>

    
    <View >
    <View style={styles.container1}>
    <AntDesign
    onPress={()=> navigation.navigate('Bottom')}
    name="arrowleft" size={24} color="black" />
   
     <Text style={{fontWeight:'bold',fontSize:25}}> Help & FAQ</Text>
     </View>
     <View style={{marginLeft:15,marginTop:10}}>

     
     <Text style={{fontWeight:'bold',}}> 1.Why Transaction is Pending?</Text>
     <Text style={{color:'red',padding:10}}>     It will take upto 48 hours to transfer the request,
             sometimes it will take even more.please be patient. </Text>
      <Text style={{fontWeight:'bold'}}> 2.Why Transaction is Pending?</Text>
     <Text style={{color:'red',padding:10}}>     It will take upto 48 hours to transfer the request,sometimes it will take even more.please be patient. </Text>
      <Text style={{fontWeight:'bold'}}> 3.Why Transaction is Pending?</Text>
     <Text style={{color:'red',padding:10}}>     It will take upto 48 hours to transfer the request,sometimes it will take even more.please be patient.
     It will take upto 48 hours to transfer the request,sometimes it will take even more.please be patient. </Text>
      <Text style={{fontWeight:'bold'}}> 4.Why Transaction is Pending?</Text>
     <Text style={{color:'red',padding:10}}>     It will take upto 48 hours to transfer the request,sometimes it will take even more.please be patient.
     It will take upto 48 hours to transfer the request,sometimes it will take even more.please be patient. </Text>
      <Text style={{fontWeight:'bold'}}> 5.Why Transaction is Pending?</Text>
     <Text style={{color:'red',padding:10}}>     It will take upto 48 hours to transfer the request,
             sometimes it will take even more.please be patient. </Text>
              <Text style={{fontWeight:'bold'}}> 6.Why Transaction is Pending?</Text>
     <Text style={{color:'red',padding:10}}>     It will take upto 48 hours to transfer the request,
             sometimes it will take even more.please be patient. </Text>
      <Text style={{fontWeight:'bold'}}> 7.Why Transaction is Pending?</Text>
     <Text style={{color:'red',padding:10}}>     It will take upto 48 hours to transfer the request,
             sometimes it will take even more.please be patient. </Text>
             </View>
     
    </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
 
  container1: {
    flexDirection: 'row',
    // justifyContent: 'center',
    marginTop:40,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
});
