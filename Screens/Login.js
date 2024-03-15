import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: 124, height: 100, left: 122, top: 100 }}
          source={require('../assets/joy.gif')}
        />
      </View>
      <View style={{ flexDirection: 'row', top: 117, left: 110 }}>
        <Text style={{ color: '#F2A93B', fontWeight: '800', fontSize: 30 }}>
          S
        </Text>
        <Text style={{ color: 'white', fontWeight: '800', fontSize: 30 }}>
          UPREME
        </Text>
      </View>
      <Text style={{ color: 'white', fontWeight: '800', fontSize: 14, top: 117, left: 95 }}>
        Play game and earn money
      </Text>
      <View style={styles.whiteBox}>
        <View style={{  width: 134,
    height: 43,
    backgroundColor: '#D9D9D9', borderRadius:25,alignSelf:'center',justifyContent:'center',marginBottom:18}}>
        <Text style={styles.registerText}>Login</Text>
        </View>
      
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
       
        <TextInput
          style={styles.input}
          placeholder="Password"
          
          secureTextEntry={true}
        />
       <Text
       onPress={()=> navigation.navigate("Email")}
       style={{color:'#F2A93B',marginLeft:20}}>
        Forgot Password?
       </Text>
      </View>

      <TouchableOpacity
        onPress={()=> navigation.navigate("Bottom")}
      style={styles.registerButton}>
        <Text
       
        style={styles.buttonText}>
          Submit
        </Text>
      </TouchableOpacity>
      <View style={{ top: 488, flexDirection: 'row',alignSelf:'center' }}>
        <Text style={styles.loginText}>
          Didnt Register?
        </Text>
        <Text 
 onPress={()=> navigation.navigate("Register")}
        style={[styles.loginText1, { color: '#F2A93B' }]}>
          Register
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#75147C',

    loginText: {
      left: 75,
      fontSize: 14,
      fontWeight: '800',
    },
    loginText1: {
      left: 125,
      fontSize: 14,
      fontWeight: '800',
    },
  },
  whiteBox: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    top: 420,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  registerText: {
    fontSize: 18,
    fontWeight: 'bold',
   textAlign:'center',
    

  },
  input: {
    height: 40,
    width:287,
   backgroundColor:'#D9D9D9',
   borderRadius: 25,
    marginBottom: 12,
   paddingLeft:10,
   fontWeight:'900',
    alignSelf:'center',
    
  },
  registerButton: {
    width: 134,
    height: 52,
    backgroundColor: '#D9D9D9',
    top: 484,
    alignSelf: 'center',
    alignItems:'center',
    borderRadius: 24,
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonText: {
    
    left: 35,
    fontSize: 18,
    fontWeight: '800',
  },
});
