import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
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
    backgroundColor: '#D9D9D9', borderRadius:25,alignSelf:'center',justifyContent:'center',marginBottom:10}}>
        <Text style={styles.registerText}>Register</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
       onPress={()=> navigation.navigate("Login")}
      style={styles.registerButton}>
        <Text style={styles.buttonText}>
          Submit
        </Text>
      </TouchableOpacity>
      <View style={{ top: 498, flexDirection: 'row',alignSelf:'center' }}>
        <Text style={styles.loginText}>
          Already Registered?
        </Text>
        <Text 
         onPress={()=> navigation.navigate("Login")}
        style={[styles.loginText1, { color: '#F2A93B' }]}>
          Login
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
      left: 105,
      fontSize: 14,
      fontWeight: '800',
    },
  },
  whiteBox: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    top: 320,
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
   fontWeight:'800',
    alignSelf:'center',
    
  },
  registerButton: {
    width: 134,
    height: 42,
    backgroundColor: '#D9D9D9',
    top: 504,
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
