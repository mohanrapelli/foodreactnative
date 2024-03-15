import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: 124, height: 100, left: 122, top: 130 }}
          source={require('../assets/joy.gif')}
        />
      </View>
      <View style={{ flexDirection: 'row', top: 137, left: 110 }}>
        <Text style={{ color: '#F2A93B', fontWeight: '800', fontSize: 30 }}>
          S
        </Text>
        <Text style={{ color: 'white', fontWeight: '800', fontSize: 30 }}>
          UPREME
        </Text>
      </View>
      <Text style={{ color: 'white', fontWeight: '800', fontSize: 14, top: 137, left: 95 }}>
        Play game and earn money
      </Text>
      <View style={styles.whiteBox} />
      
      <TouchableOpacity 
      onPress={()=> navigation.navigate("Register")}
      style={styles.registerButton}>
        <Image 
          style={{ width: 23, height: 24, top: 15, left: 10 }}
          source={require('../assets/mail.png')}
        />
        <Text style={styles.buttonText}>
          Register with email
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.registerButton}>
        <Image 
          style={{ width: 23, height: 24, top: 15, left: 10 }}
          source={require('../assets/google.png')}
        />
        <Text style={styles.buttonText}>
          Register with Google
        </Text>
      </TouchableOpacity>
      
      <View style={{ top: 368, flexDirection: 'row' }}>
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
  },
  whiteBox: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    top: 420,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  registerButton: {
    width: 287,
    height: 50,
    backgroundColor: '#D9D9D9',
    top: 344,
    alignSelf: 'center',
    borderRadius: 24,
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonText: {
    top: 13,
    left: 35,
    fontSize: 18,
    fontWeight: '800',
  },
  loginText: {
    left: 75,
    fontSize: 14,
    fontWeight: '800',
  },
  loginText1: {
    left: 95,
    fontSize: 14,
    fontWeight: '800',
  },
});
