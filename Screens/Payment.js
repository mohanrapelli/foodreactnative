import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Payment() {
    const navigation = useNavigation();
    const [add, setAdd] = useState(false);

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
                <Text style={styles.text}>Payment Method</Text>
            </View>
            <View style={styles.view1}>
                <Text style={styles.textt}>
                    Credit cards
                </Text>
                <Text
                    onPress={() => setAdd(true)}
                    style={styles.textt1}>
                    Add +
                </Text>
            </View>
            <View style={styles.view1}>
                <View style={styles.greenbox}>
                    <Text style={styles.text1}>
                        9897 6562 3232 3232
                    </Text>
                    <View style={styles.view1}>
                        <Text style={styles.text2}>
                            Titanium Debit
                        </Text>
                        <Text style={styles.text3}>
                            Exp.12/25
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <TouchableOpacity style={styles.iconContainer}>
                            <FontAwesome6 name="cc-paypal" size={24} color="blue" style={{ marginRight: 30 }} />
                        </TouchableOpacity>
                        <View style={styles.iconContainer}>
                            <Entypo name="edit" size={24} color="black" style={{ marginLeft: 40 }} />
                        </View>
                    </View>
                    <View style={styles.box1}>
                        <TouchableOpacity style={styles.iconContainer}>
                            <FontAwesome5 name="amazon-pay" size={24} color="blue" style={{ marginRight: 30 }} />
                        </TouchableOpacity>
                        <View style={styles.iconContainer}>
                            <Ionicons name="wallet-outline" size={24} color="black" style={{ marginLeft: 40 }} />
                        </View>
                    </View>
                </View>
            </View>
            <Modal visible={add} onRequestClose={() => setAdd(false)}>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Ionicons
                            onPress={() => setAdd(false)}
                            name="caret-back-outline"
                            size={27}
                            color="black"
                            style={styles.icon}
                        />
                        <Text style={styles.text}>Add new Card</Text>
                    </View>
                    <View style={styles.greenbox1}>
                        <Text style={styles.text1}>
                            9897 6562 3232 3232
                        </Text>
                        <View style={styles.view1}>
                            <Text style={styles.text2}>
                                Titanium Debit
                            </Text>
                            <Text style={styles.text3}>
                                Exp.12/25
                            </Text>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Your Name"
                            placeholderTextColor="#A9A9A9"
                        />
                        <Text style={styles.overlappingText}>Name</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Your Card Number"
                            placeholderTextColor="#A9A9A9"
                        />
                        <Text style={styles.overlappingText}>CARD NUMBER</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.inputContainer1}>
                            <TextInput
                                style={styles.input}
                                placeholder=" Expiry Date"
                                placeholderTextColor="#A9A9A9"
                            />
                            <Text style={styles.overlappingText}>MM/YY</Text>
                        </View>
                        <View style={styles.inputContainer1}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Your CVV"
                            
                    placeholderTextColor="#A9A9A9"
                            />
                            <Text style={styles.overlappingText}>CVV</Text>
                        </View>
                    </View>
                    <TouchableOpacity
   
      style={styles.button}>
        <Text style={{ color: 'white', alignSelf: 'center' }}>SAVE CHANGES</Text>
      </TouchableOpacity>
                </View>
            </Modal>
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
    inputContainer1: {
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
        flex: 1,
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 16,
        height: 40,
    },
    textt: {
        fontWeight: 'bold',
        marginTop: 20,
        marginRight: 170,
        fontSize: 17,
        marginBottom: 20
    },
    textt1: {
        fontWeight: 'bold',
        marginTop: 20,
        color: 'red',
        fontSize: 17
    },
    text1: {
        color: 'white',
        marginLeft: 20,
        marginTop: 25
    },
    text2: {
        color: 'white',
        marginLeft: 20,
        marginTop: 75
    },
    text3: {
        color: 'white',
        marginLeft: 90,
        marginTop: 75
    },
    greenbox: {
        marginTop: 20,
        backgroundColor: 'red',
        width: 330,
        height: 170,
        borderRadius: 30
    },
    greenbox1: {
        marginTop: 20,
        backgroundColor: '#90EE90',
        width: 330,
        height: 170,
        borderRadius: 30,
        marginBottom: 20
    },
    box: {
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 23,
        flexDirection: 'row',
        left: 17,
        justifyContent: 'space-between',
        marginTop: 90,
        width: 300,
    },
    box1: {
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 23,
        flexDirection: 'row',
        left: 17,
        justifyContent: 'space-between',
        marginTop: 50,
        width: 300,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
    },
    view1: {
        flexDirection: 'row'
    },

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        alignItems: 'center',
        paddingTop: 50,
    },
    icon: {
        marginLeft: 10,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
        marginRight: 20,
    }
});
