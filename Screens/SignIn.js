import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Modal, Button ,StatusBar} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function SignIn() {

  const [click, setClick] = useState(false); 
  const navigation = useNavigation();
 return (
  
    <View style={styles.container}>
       
      <Text style={styles.signInText}>Sign In</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          placeholderTextColor="#A9A9A9"
        />
        <Text style={styles.overlappingText}>EMAIL</Text>
        <Fontisto name="email" size={24} color="red" style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry={true}
        />
        <Text style={styles.overlappingText}>PASSWORD</Text>
        <Entypo name="eye-with-line" size={24} color="red" style={styles.icon} />
      </View>
      <Text
          onPress={() => navigation.navigate("Forgotpage")}
        style={styles.forgotpass}>Forgot Password ?</Text>
      <TouchableOpacity
      onPress={() => navigation.navigate("Home")}
      style={styles.button}>
        <Text style={{ color: 'white', alignSelf: 'center' }}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.account}>
        <Text style={{ color: 'black', marginLeft: 105, fontSize: 16 }}>Don't Have An Account?</Text>
        <Text
          onPress={() => setClick(true)}
          style={{ color: 'red', fontSize: 16 }}>Sign Up</Text>
      </View>
      <View style={styles.account1}>
      <Image source={require('../assets/face.png')} style={styles.image1} />
<Image source={require('../assets/twi.png')} style={styles.image2} />
<Image source={require('../assets/goog.png')} style={styles.image3} />

       
      </View>
    
      <Modal visible={click} onRequestClose={() => setClick(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.signUpText} styles={{ marginTop: 25 }}>Sign Up</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Name"
              placeholderTextColor="#A9A9A9"
            />
            <Text style={styles.overlappingText}>NAME</Text>
            <MaterialCommunityIcons name="account-cowboy-hat" size={24} color="red" style={styles.icon} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Email"
              placeholderTextColor="#A9A9A9"
            />
            <Text style={styles.overlappingText}>EMAIL</Text>
            <Fontisto name="email" size={24} color="red" style={styles.icon} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Password"
              placeholderTextColor="#A9A9A9"
            />
            <Text style={styles.overlappingText}>PASSWORD</Text>
            <Entypo name="eye-with-line" size={24} color="red" style={styles.icon} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#A9A9A9"
              secureTextEntry={true}
            />
            <Text style={styles.overlappingText}>CONFIRM PASSWORD</Text>
            <Entypo name="eye-with-line" size={24} color="red" style={styles.icon} />
          </View>
          <TouchableOpacity
            onPress={() => setClick(false)}
            style={styles.button}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.account}>
            <Text style={{ color: 'black', marginLeft: 15, fontSize: 16 }}>Already Have An Account?</Text>
            <Text
              onPress={() => setClick(false)}
              style={{ color: 'red', fontSize: 16 }}>Sign In</Text>

          </View>
          <View style={styles.account1}>
          
          <Image source={require('../assets/face.png')} style={styles.image1} />
<Image source={require('../assets/twi.png')} style={styles.image2} />
<Image source={require('../assets/goog.png')} style={styles.image3} />

          
            
          </View>
        </View>
      </Modal>
     

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  container1: {
    flex: 1,
    marginTop: 40,

  },
  signInText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 20,
    marginBottom: 30,

  },
  signUpText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginRight: 190,
    marginBottom: 30,
    marginTop: 150
  },
  textt: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 70,

    marginBottom: 30,

  },
  texttt: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 40,

    marginBottom: 30,

  },
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 30,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
    height: 40,
  },
  icon: {
    marginRight: 15
  },
  overlappingText: {
    position: 'absolute',
    top: -8,
    left: 20,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    color: '#A9A9A9',
  },
  forgotpass: {
    color: 'red',
    alignSelf: 'flex-end',
    fontSize: 16,
    marginRight: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 30,
    height: 50,
    width: 330,
    marginTop: 25,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  account: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: -95
  },
  account1: {
    flexDirection: 'row',
    marginBottom: 150,
    alignSelf: 'center'
  },
  image1: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginTop: 20
  },
  image2: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginTop: 4
  },
  image3: {
    width: 85,
    height: 85,
    borderRadius: 10,
    marginTop: -5
  },
  image4: {
    width: 15,
    height: 15,
    marginLeft: 10,


    marginTop: -5
  },
  imageStyle: {
    width: 140,
    height: 140,
    margin: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotpage: {
    flexDirection: 'row'
  }, iconn: {
    marginLeft: 10
  },
  text2: {
    color: '#808080',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20
  },
  textt2: {
    color: '#808080',
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 20
  },
  flag: {
    fontSize: 15,
    marginLeft: 10
  },
  v: {
    backgroundColor: '#808080',
    width: 2,
    height: 30,
    marginLeft: 10
  },
  reoundtextinput: {
    width: 50,
    height: 50,
    backgroundColor: '#D1CCCB',
    margin: 5,
    borderRadius: 90,
    alignContent: 'center',
    textAlign: 'center',

    fontSize: 18
  },
  roundview: {
    flexDirection: 'row',
    alignSelf: 'center'
  }
});
