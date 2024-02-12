import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default function Search () {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Search Here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    backgroundColor: 'red',
        
    },Text:{
        marginTop:300,
        marginLeft:90,
        fontSize:30,
        color:'white'
    }})