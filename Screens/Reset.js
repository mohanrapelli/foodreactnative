import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Modal, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Reset() {


    const navigation = useNavigation();

    return (

        <View style={styles.container2}>

            <Image source={require('../assets/reset.png')} style={styles.image5} />

            <TouchableOpacity
                onPress={() => navigation.navigate("SignIn")}
                style={styles.button}>
                <Text
                    style={{ color: 'white', alignSelf: 'center' }}>DONE</Text>
            </TouchableOpacity>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        backgroundColor: 'white',
        paddingTop: 20,
    },
    container1: {
        flex: 1,
        marginTop: 40,
        backgroundColor: 'white',

    }, container2: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white',



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
    image5: {
        width: 300,
        height: 300,
        alignSelf: 'center'

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
