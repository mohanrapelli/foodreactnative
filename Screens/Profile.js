import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.redContainer}>
        <Text style={styles.text}>
          MY PROFILE
        </Text>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Image 
            source={require('../assets/face.jpeg')} 
            style={styles.image} 
          />
          <View style={styles.textContent}>
            <Text style={styles.title}>Hunny Code</Text>
            <Text style={styles.subtitle}>code.hunny40@gmail.com</Text>
          </View>
          <Feather 
           onPress={() => navigation.navigate("Edit")}
          name="edit" size={24} color="black" style={styles.icon} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomItem}>
          <Feather name="shopping-bag" size={24} color="black" style={styles.bottomIcon} />
          <Text style={styles.bottomText}>Order History</Text>
        </View>
        <AntDesign
         onPress={() => navigation.navigate("Order")}
        name="arrowright" size={24} color="black" style={styles.bottomIcon} />
       
      </View>
      <View style={styles.viewline}>

</View>
<View style={styles.bottomContainer}>
        <View style={styles.bottomItem}>
        <MaterialIcons name="payment" size={24} color="black" style={styles.bottomIcon} />
          <Text style={styles.bottomText}>Payment Method</Text>
        </View>
        <AntDesign
         onPress={() => navigation.navigate("Payment")}
        name="arrowright" size={24} color="black" style={styles.bottomIcon} />
       
      </View>
      <View style={styles.viewline}>

</View>
<View style={styles.bottomContainer}>
        <View style={styles.bottomItem}>
        <EvilIcons name="location" size={24} color="black"  style={styles.bottomIcon} />
          <Text style={styles.bottomText}>My Address</Text>
        </View>
        <AntDesign 
        onPress={() => navigation.navigate("Adress")}
        name="arrowright" size={24} color="black" style={styles.bottomIcon} />
       
      </View>
      <View style={styles.viewline}>

</View>
<View style={styles.bottomContainer}>
        <View style={styles.bottomItem}>
        <Feather name="gift" size={24} color="black" style={styles.bottomIcon} />
          <Text style={styles.bottomText}>My Promocodes</Text>
        </View>
        <AntDesign name="arrowright" size={24} color="black" style={styles.bottomIcon} />
       
      </View>
      <View style={styles.viewline}>

</View>
<View style={styles.bottomContainer}>
        <View style={styles.bottomItem}>
        <AntDesign name="hearto" size={24} color="black"  style={styles.bottomIcon} />
          <Text style={styles.bottomText}>My favourite</Text>
        </View>
        <AntDesign
        onPress={() => navigation.navigate("Fav")}
        name="arrowright" size={24} color="black" style={styles.bottomIcon} />
       
      </View>
      <View style={styles.viewline}>

</View>
<View

style={styles.bottomContainer }>
        <View style={styles.bottomItem}>
        <AntDesign name="logout" size={24} color="black"  style={styles.bottomIcon} />
          <Text style={styles.bottomText}>Sign Out </Text>
        </View>
        <AntDesign
         onPress={() => navigation.navigate("SignIn")}
        name="arrowright" size={24} color="black" style={styles.bottomIcon} />
       
      </View>
      <View style={styles.viewline}>

</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  redContainer: {
    backgroundColor: 'red',
    width: '100%',
    height: '25%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 17,
    marginTop: 40,
    marginBottom: 20,
    color: 'white',
  },
  boxContainer: {
    marginTop: -50,
    width: 300,
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 10,
  },
  box: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 70,
    padding: 40,
    marginRight: 10,
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -5,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  bottomItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomIcon: {
    marginRight: 10,
  },
  bottomText: {
    fontSize: 16,
    fontWeight:'bold',
    color:'black'
  },
  viewline:{
    width:300,height:3,backgroundColor:'#D3D3D3',
  
    marginTop:20
  }
});
