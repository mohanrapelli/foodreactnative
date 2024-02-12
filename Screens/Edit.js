import React from 'react';
import { View, Text, StyleSheet, Image ,TextInput,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function Edit(){
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Ionicons
                    name="caret-back-outline" 
                    size={27} 
                    color="black" 
                    style={styles.icon} 
                />
                <Text style={styles.text}>Edit Profile</Text>
            </View>  
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image} 
                    source={require('../assets/face.jpeg')}
                />
                <Feather name="edit" size={17} color="grey" 
                    style={styles.editIcon}
                />
            </View>
            <View style={styles.inputContainer}>
            <Text
          style={styles.input}
          
        >
Hunny Code
        </Text>
        <Text style={styles.overlappingText}>NAME</Text>
       
      </View>
      <View style={styles.inputContainer}>
      <Text
          style={styles.input}
          
        >
code.hunny@gmail.com
        </Text>
        <Text style={styles.overlappingText}>EMAIL</Text>
       
      </View>
      <View style={styles.inputContainer}>
      <Text
          style={styles.input}
          
        >
+91 1234567890
        </Text>
        <Text style={styles.overlappingText}>PHONE NUMBER</Text>
       
      </View>
      <View style={styles.inputContainer}>
        <Text
          style={styles.input}
          
        >
India
        </Text>
        <Text style={styles.overlappingText}>LOCATION</Text>
       
      </View>
      <TouchableOpacity
     
      style={styles.button}>
        <Text style={{ color: 'white', alignSelf: 'center' }}>SAVE CHANGES</Text>
      </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        backgroundColor:'white'
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
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 10, 
    },
    text: {
        fontSize: 18,
        flex: 1, 
        textAlign: 'center', 
        marginRight: 36,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    image: {
        borderRadius: 70,
        height: 100,
        width: 100,
        alignSelf: 'center',
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: 140,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
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
        top:10
        
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
});
