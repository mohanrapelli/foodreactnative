import React from 'react';
import { View, Text, StyleSheet, Image ,TouchableOpacity, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Order() {
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.content}>
                <Ionicons
                    name="caret-back-outline" 
                    size={27} 
                    color="black" 
                    style={styles.icon} 
                />
                <Text style={styles.text}>Order History</Text>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.box}>
                    <Image 
                        source={require('../assets/food.jpg')} 
                        style={styles.image} 
                    />
                    <View style={styles.textContent}>
                        <Text style={styles.title}>Desert Snow Cafe</Text>
                        <Text style={styles.subtitle}>Jul 15, 2021 - 11:05 AM</Text>
                        <View style={styles.view2}>
                            <Text style={styles.greenText}>Delivered</Text>
                            <Text style={styles.dollarText}>$36.42</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.view3}>
            <Text style={styles.greenText1}>Momos x 1</Text>
                            <Text style={styles.dollarText}>$12.75</Text>
            </View>
            <View style={styles.view3}>
            <Text style={styles.greenText1}>Chicken x 1</Text>
                            <Text style={styles.dollarText}>$14.41</Text>
            </View>
            <View style={styles.view3}>
            <Text style={styles.greenText1}>Noodled x 1</Text>
                            <Text style={styles.dollarText}>$6.34</Text>
            </View>
            <TouchableOpacity
     style={styles.button}>
        <Text style={{ color: 'red', alignSelf: 'center' }}>REPEAT ORDER</Text>
      </TouchableOpacity>
      <View style={styles.boxContainer}>
                <View style={styles.box}>
                    <Image 
                        source={require('../assets/food1.jpg')} 
                        style={styles.image} 
                    />
                    <View style={styles.textContent}>
                        <Text style={styles.title}>Woof Woof</Text>
                        <Text style={styles.subtitle}>Jul 15, 2021 - 11:05 AM</Text>
                        <View style={styles.view2}>
                            <Text style={styles.greenText2}>Cancelled</Text>
                            <Text style={styles.dollarText}>$36.42</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.box}>
                    <Image 
                        source={require('../assets/food2.jpg')} 
                        style={styles.image} 
                    />
                    <View style={styles.textContent}>
                        <Text style={styles.title}>Tommy Yummy</Text>
                        <Text style={styles.subtitle}>Jul 15, 2021 - 11:05 AM</Text>
                        <View style={styles.view2}>
                            <Text style={styles.greenText}>Delivered</Text>
                            <Text style={styles.dollarText}>$36.42</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.box}>
                    <Image 
                        source={require('../assets/food3.jpg')} 
                        style={styles.image} 
                    />
                    <View style={styles.textContent}>
                        <Text style={styles.title}>Mega Rolls</Text>
                        <Text style={styles.subtitle}>Jul 15, 2021 - 11:05 AM</Text>
                        <View style={styles.view2}>
                            <Text style={styles.greenText}>Delivered</Text>
                            <Text style={styles.dollarText}>$36.42</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.box}>
                    <Image 
                        source={require('../assets/food4.jpg')} 
                        style={styles.image} 
                    />
                    <View style={styles.textContent}>
                        <Text style={styles.title}>Desert Snow Cafe</Text>
                        <Text style={styles.subtitle}>Jul 15, 2021 - 11:05 AM</Text>
                        <View style={styles.view2}>
                            <Text style={styles.greenText}>Delivered</Text>
                            <Text style={styles.dollarText}>$36.42</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
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
    },
    boxContainer: {
        marginTop: 40,
        width:300,
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 1, 
        shadowRadius: 5, 
        elevation: 5,
        marginBottom:10
    },
    box: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
    },
    image: {
        width: 90,
        height: 100,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
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
    view2: {
        flexDirection: 'row',
        marginTop: 5,
    }, view3: {
        flexDirection: 'row',
        marginTop: 10,
    },
    greenText: {
        color: 'green',
        marginRight: 10,
        marginTop:10
    },
    greenText2: {
        color: 'red',
        marginRight: 10,
        marginTop:10
    },
    greenText1: {
        
    marginRight: 120,
        marginTop:10
    },
    dollarText: {
        fontSize: 14,
        marginTop:10,
        marginLeft:70

    }, container1: {
        flex: 1,
        marginTop: 40,

    }, container2: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',



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
        backgroundColor: '#D3D3D3',
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

