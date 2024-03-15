import { StyleSheet, Text, View,TextInput,Button, TouchableOpacity, } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Email() { 
    const navigation = useNavigation();
  return (
    <View style={styles.container}> 
    <Feather
    onPress={() => navigation.navigate('Login')}
    name="arrow-left"
    size={34}
    color="black"
    style={{ marginTop: 55, marginLeft: 10 }}
/>

    <View style={{margin:20,marginTop:100}}>
            <Text style={{fontSize:15,color:'gray',fontWeight:'800'}}>Please enter your email address. You will receive a link to create a new password via email.</Text>

            <TextInput 
            placeholder='Email'
            style={styles.forgotpasstext}/>

            <TouchableOpacity
            onPress={()=> navigation.navigate('Verifyphone')}>
              <Text style={styles.button}>SEND</Text>
            </TouchableOpacity>
            

        </View>   
    
    </View>
  );
}


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  forgotpasstext:{
       
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal:10,
    marginBottom: 20,
    borderRadius: 20, 
    marginTop:30
  },
  button: {
    height: 44,
    width: 134,
    paddingLeft:45,
    paddingTop:12,
    marginBottom:10,
    borderRadius: 100,
    marginTop:20,
    marginLeft:100,
    backgroundColor:'lightgray',
    color:'black',
    fontWeight:'bold',
    alignItems:'center'
    
  },
});