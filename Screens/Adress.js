import React from 'react';
import { View, Text, StyleSheet, Image ,TextInput,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Adress(){
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
                <Text style={styles.text}>My Address</Text>
            </View>
     <View style={{width:330,height:2,backgroundColor:'grey',marginTop:20}}>

     </View>
     <View style={{flexDirection:'row',marginRight:230,marginTop:15}}>
     <AntDesign name="home" size={24} color="grey" />
     <Text style={{marginLeft:20,fontWeight:'bold',fontSize:15}}>
        Home
     </Text>
     </View>
     <Text style={{marginTop:5,color:'grey',marginRight:5}}>
        Sec 16,Near Metro station,201301
     </Text>
     <View style={{width:330,height:2,backgroundColor:'grey',marginTop:20}}>

</View>
<View style={{flexDirection:'row',marginRight:230,marginTop:15}}>
<Feather name="briefcase" size={24} color="grey" />
<Text style={{marginLeft:20,fontWeight:'bold',fontSize:15}}>
   Work
</Text>
</View>
<Text style={{marginTop:5,color:'grey',marginRight:5}}>
   Sec 15,Near Metro station,201301
</Text>
<View style={{width:330,height:2,backgroundColor:'grey',marginTop:20}}>

</View>
<View style={{flexDirection:'row',marginRight:230,marginTop:15}}>
<Entypo name="location-pin" size={24} color="grey" />
<Text style={{marginLeft:20,fontWeight:'bold',fontSize:15}}>
   Other
</Text>
</View>
<Text style={{marginTop:5,color:'grey',marginRight:5}}>
   Sec 14,Near Metro station,201301
</Text>
<TouchableOpacity
           
            style={styles.button}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>ADD NEW ADDRESS</Text>
          </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        borderRadius: 30,
        height: 50,
        width: 330,
        marginTop: 45,
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
}})