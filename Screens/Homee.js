import React from 'react';
import { View, Text ,Image,StyleSheet,TouchableOpacity} from 'react-native';

export default function Homee () {
  return (
    <View style={styles.container}>
     <Image source={require('../assets/maps.jpg')} style={styles.image}/>
<Text style={styles.text}>
    Add new address
</Text>
<View style={styles.inputContainer}>
        <Text
          style={styles.input}
          
        >
          Home  
        </Text>
        <Text style={styles.overlappingText}>TITTLE</Text>

      </View>
      <View style={styles.inputContainer1}>
        <Text
          style={styles.input}
          
        >
          Sec 62,Noida
        </Text>
        <Text style={styles.overlappingText}>NEW ADDRESS</Text>

      </View>
      <TouchableOpacity
     style={styles.button}>
        <Text style={{ color: 'white', alignSelf: 'center' }}>SAVE</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    backgroundColor: 'white',
        
    },  button: {
        backgroundColor: 'red',
        borderRadius: 30,
        height: 50,
        width: 330,
        marginTop: 25,
        alignSelf: 'center',
        justifyContent: 'center'
      },overlappingText: {
        position: 'absolute',
        top: -8,
        left: 20,
        backgroundColor: 'white',
        paddingHorizontal: 5,
        color: '#A9A9A9',
      }, input: {
        flex: 1,
        paddingLeft: 10,
        top:8,
        fontSize: 16,
        height: 40,
      },inputContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginTop:26,
        borderRadius: 30,
        marginBottom: 20,
      },inputContainer1: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginTop:10,
        borderRadius: 30,
        marginBottom: 20,
      },image:{
       
        height: 330,
       

    },text:{
fontSize:17,
fontWeight:'bold',
marginTop:20,
marginLeft:10
    }
})
