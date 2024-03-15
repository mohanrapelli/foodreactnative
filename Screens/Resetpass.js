import { StyleSheet, Text, View,Image, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Resetpass() { 
  const navigation = useNavigation();
  return (
    <View style={styles.container}> 
    <Image style={styles.sendemailimgae} source={require("../assets/passwordreset.png") }/>
            <Text style={styles.sendmailtext}>Your password has been  reset!</Text>


            <TouchableOpacity>
              <Text
               onPress={() => navigation.navigate("Login")}
              style={styles.button}>SEND</Text>
            </TouchableOpacity>

       
    
    </View>
  );
}


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    height: 44,
    width: 134,
    paddingLeft:45,
    paddingTop:12,
    marginBottom:10,
    borderRadius: 100,
    marginTop:20,
    marginLeft:120,
    backgroundColor:'lightgray',
    color:'black',
    fontWeight:'bold',
    alignItems:'center'
    
  },
  sendmailtext:{
    textAlign:'center',
    fontSize:30,
    color:'black'
},
sendemailimgae:{
    width:250,
    height:250,
    marginTop:150,
    marginLeft:50,
},
});