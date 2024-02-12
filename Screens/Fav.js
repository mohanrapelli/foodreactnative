import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Fav() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Ionicons
                onPress={() => navigation.navigate("Profile")}
                    name="caret-back-outline"
                    size={27}
                    color="black"
                    style={styles.icon}
                />
                <Text style={styles.text}>My Favourite</Text>
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.blueBox}></View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Hangries</Text>
                    <Text style={styles.subtitle}>Fast Food</Text>
                    <View style={{flexDirection:'row'}}>
<Image source={require('../assets/star.png') }style={{width:30,height:30,marginTop:15,}}>

</Image>
<Text style={{marginTop:20}}>
    5.0 -  0.1km
</Text>
                </View>
  
                </View>
                <FontAwesome5 name="arrow-right" size={24} color="grey" style={{marginBottom:60,marginLeft:50}} />
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.blueBox}></View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Hangries</Text>
                    <Text style={styles.subtitle}>Fast Food</Text>
                    <View style={{flexDirection:'row'}}>
<Image source={require('../assets/star.png') }style={{width:30,height:30,marginTop:15,}}>

</Image>
<Text style={{marginTop:20}}>
    5.0 -  0.1km
</Text>
                </View>
  
                </View>
                <FontAwesome5 name="arrow-right" size={24} color="grey" style={{marginBottom:60,marginLeft:50}} />
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.blueBox}></View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Hangries</Text>
                    <Text style={styles.subtitle}>Fast Food</Text>
                    <View style={{flexDirection:'row'}}>
<Image source={require('../assets/star.png') }style={{width:30,height:30,marginTop:15,}}>

</Image>
<Text style={{marginTop:20}}>
    5.0 -  0.1km
</Text>
                </View>
  
                </View>
                <FontAwesome5 name="arrow-right" size={24} color="grey" style={{marginBottom:60,marginLeft:50}} />
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.blueBox}></View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Hangries</Text>
                    <Text style={styles.subtitle}>Fast Food</Text>
                    <View style={{flexDirection:'row'}}>
<Image source={require('../assets/star.png') }style={{width:30,height:30,marginTop:15,}}>

</Image>
<Text style={{marginTop:20}}>
    5.0 -  0.1km
</Text>
                </View>
  
                </View>
                <FontAwesome5 name="arrow-right" size={24} color="grey" style={{marginBottom:60,marginLeft:50}} />
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.blueBox}></View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Hangries</Text>
                    <Text style={styles.subtitle}>Fast Food</Text>
                    <View style={{flexDirection:'row'}}>
<Image source={require('../assets/star.png') }style={{width:30,height:30,marginTop:15,}}>

</Image>
<Text style={{marginTop:20}}>
    5.0 -  0.1km
</Text>
                </View>
  
                </View>
                <FontAwesome5 name="arrow-right" size={24} color="grey" style={{marginBottom:60,marginLeft:50}} />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        borderRadius: 30,
        height: 50,
        width: 330,
        marginTop: 25,
        alignSelf: 'center',
        justifyContent: 'center'
      },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 50,
    },
    icon: {
        marginLeft: 10,
        marginBottom:30
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        marginRight: 20,
        marginBottom:30
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -30
       
    },
    blueBox: {
        backgroundColor: '#ADD8E6',
        width: 100,
        height: 100,
        marginRight: 10,
        marginBottom:50
    },
    button: {
        backgroundColor: '#D3D3D3',
        borderRadius: 30,
        height: 50,
        width: 330,
        marginTop: 25,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    textContainer: {
       marginBottom:60,
       marginRight:60
        
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:7,
        

        
        
    },
    subtitle: {
        marginRight:20
    },
});
