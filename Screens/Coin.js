import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
 
 
export default function Coin() {
 
  const navigation = useNavigation();
  return (
 
    <View >
 
 
      <ScrollView
        style={{ alignContent: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-between',
            marginTop: 26,
            flex: 1,
            margin: 15,
          }}>
          <View
          style={{flex:1,alignSelf:'center',flexDirection: 'row',
            alignContent: 'space-between',
            }}>
         
         <AntDesign 
         onPress={()=> navigation.navigate("Bottom")}
         name="arrowleft" size={32} color="black" style={{marginRight:15}} />
          <Text
            style={{
              fontWeight: '800',
              fontSize: 20,
              color: '#F9D849',
              alignSelf: 'center',
              alignItems: 'left',
            }}>
            S
          </Text>
          <Text
            style={{
              fontWeight: '800',
              fontSize: 20,
              color: '#8E2CDF',
              alignSelf: 'center',
            }}>
            UPREME
          </Text>
          </View>
          <View
            style={{
              width:84,
              height:31,
              borderRadius:20,
              backgroundColor:'#EBD768',
              borderWidth:1,
              borderColor:'#F9D849',
              alignSelf: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              flexDirection:'row'
            }}>
           
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/81a2/a8f9/71d6e559b109467bdcd1f5af771430b0?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TzPF1FO29TvxM8VTn5ACFesOpqFQkPrvE9SVra0UPLt2qGnuQtiFBXkWcfANiV1bQvovH~l05LWUZDN2tm6VJv78CTwWanCoE8bFapnZzbuD5RBDGHZRwOnuQcNqtgZDWIKYyZcNI5~7fiDk82EXOIGYDagsPhEtXxjAOgFxwXUPfiMiJix1DrtBVJ7awC4-R~mBWxBkaQO2ZTqZ-auqcozySchW4GPLbNvgfvQ17VSZ0khe3uchQ2oe4aFAFIHyvTob5kqpeAntHLgNrIdRLG99MM25vkwVSqFYwCjIeER~kdvocfUn1jX3Vy0AUS70DN1noGOpJ-4py0HHUADnyw__',
                }}
                style={{ width: 25, height: 25,alignSelf:'center',alignItems:'center',}}></Image>
                 <Text
              style={{
                fontWeight: '800',
                fontSize: 16,
                color: 'black',
                textAlign: 'center',
                alignSelf: 'center',
                flex:0
              }}>
              100
            </Text>
           
             
            </View>
          </View>
       
        <View
          style={{ flexDirection: 'row', backgroundColor: "#75147C", width: '100%', height: 60, flex: 1 }}>
          <Text
          onPress={() => navigation.navigate('Coin')}
            style={{ fontWeight: 800, fontSize: 16,  color: '#47882E', alignSelf: 'center', flex: 1, textAlign: 'center' }}>
            Add Coins
 
          </Text>
          <Text
          onPress={() => navigation.navigate('Earncoins')}
            style={{ fontWeight: 800, fontSize: 16, color: 'white', alignSelf: 'center', flex: 1, textAlign: 'center' }}>
            Earn Coins
 
          </Text>
        </View>
 
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/f798/0438/9dda4cf2bb229542aa4dd01deb565dab?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mbEHE49GPlvScBNc81TaEHY-xF9reElbPTxNQnEkn2bK7bXNH2lE80Eo-Mrbee6ruh5AbqxhT-VD5i7vD99OWVXLA4LsWGgVyByNF-nnC8-jhifMCdClz87y6FIwmNfoa4Eua8Hqx5ll3lfQa8x7IzPaET4wzb0etlSG2B~OccLA-WvaDIqTR8ph73nrQRWwfkv0e11MoCZhkFFGiP-EkT2c5vfTZiAZTRPS2GetgTjv5VUnaQTvZ2CAbciokKrUgVY~gEOCW3QQl55nT9wlpBi0ViSIyMx097Tz3Qdv0RfsccBUqATJ8Snbc97bKkFv6BNvSRfwejIEPwBosCX40A__',
          }}
          style={{ width: '100%', height: 436 }}></Image>
        <Text
          style={{
            fontSize: 32,
            fontWeight: '800',
            color: '#000000',
            marginTop: 20,
            marginBottom: 20,
            textAlign: "auto",
            marginLeft: 27,
          }}>
          Offers
        </Text>
        <View style={styles.offer}>
          <View
            style={{ alignSelf: 'center', flex: 1 }}>
            <Image
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/29ce/6076/cf95f4fd0c3415774fe39d146caef7c9?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cd4YJna-nIJMD6QPG5ccbL2T31zfH48mNZBK3lbJPzFhsUDQD0CXXUfXdwpei~wIq21-YaoZIeQOq6jqunAwxJciQobgEqhIe-9XFy2C7kqEOTq5IhvWMWAu9YLAI0gFzGdX8SVMren3x1t3RFEyJQCdUz2ZBZu1h~60oNS-dISabLcjNZF3tavwk174Cs2tEaP29DJhXCiw7wtMz33jNWE1zPrJVWpiG2PV7QNWiLR4uGuexAZ8UsD~EN0wecKvyXswrd4t6OgD7Zr63c1AoudzvNs-SeALZ0ZNFvo-jYQACoQ9mLKkcQ4OaOMBo5EPuA7Eg8HCQjHsVq-rDNpgaA__"
              }}
              style={{ width: 116, height: 134, }}>
 
            </Image>
          </View>
          <View
            style={{ flex: 1, alignSelf: 'center' }}>
            <Text
              style={styles.text}>
              Newable
            </Text>
            <Text
              style={styles.text}
            >
              50 Coins</Text>
          </View>
          <View
            style={{ flex: 1, alignSelf: 'center' }}>
            <View
              style={{ width: 72, height: 36, borderRadius: 10, alignSelf: 'center', backgroundColor: 'white', justifyContent: 'center' }}>
              <Text
              onPress={()=> navigation.navigate('Paymentmethod')}
                style={[styles.text, style = { alignSelf: 'center', textAlign: 'center' }]}>
                $49
 
              </Text>
            </View>
          </View>
 
        </View >
        <View style={styles.offer}>
          <View
            style={{ alignSelf: 'center', flex: 1 }}>
            <Image
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/29ce/6076/cf95f4fd0c3415774fe39d146caef7c9?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cd4YJna-nIJMD6QPG5ccbL2T31zfH48mNZBK3lbJPzFhsUDQD0CXXUfXdwpei~wIq21-YaoZIeQOq6jqunAwxJciQobgEqhIe-9XFy2C7kqEOTq5IhvWMWAu9YLAI0gFzGdX8SVMren3x1t3RFEyJQCdUz2ZBZu1h~60oNS-dISabLcjNZF3tavwk174Cs2tEaP29DJhXCiw7wtMz33jNWE1zPrJVWpiG2PV7QNWiLR4uGuexAZ8UsD~EN0wecKvyXswrd4t6OgD7Zr63c1AoudzvNs-SeALZ0ZNFvo-jYQACoQ9mLKkcQ4OaOMBo5EPuA7Eg8HCQjHsVq-rDNpgaA__"
              }}
              style={{ width: 116, height: 134, }}>
 
            </Image>
          </View>
          <View
            style={{ flex: 1, alignSelf: 'center' }}>
            <Text
              style={styles.text}>
              Newable
            </Text>
            <Text
              style={styles.text}
            >
              50 Coins</Text>
          </View>
          <View
            style={{ flex: 1, alignSelf: 'center' }}>
            <View
              style={{ width: 72, height: 36, borderRadius: 10, alignSelf: 'center', backgroundColor: 'white', justifyContent: 'center' }}>
              <Text
                style={[styles.text, style = { alignSelf: 'center', textAlign: 'center' }]}>
                $49
 
              </Text>
            </View>
          </View>
 
        </View>
        <View style={styles.offer}>
          <View
            style={{ alignSelf: 'center', flex: 1 }}>
            <Image
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/29ce/6076/cf95f4fd0c3415774fe39d146caef7c9?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cd4YJna-nIJMD6QPG5ccbL2T31zfH48mNZBK3lbJPzFhsUDQD0CXXUfXdwpei~wIq21-YaoZIeQOq6jqunAwxJciQobgEqhIe-9XFy2C7kqEOTq5IhvWMWAu9YLAI0gFzGdX8SVMren3x1t3RFEyJQCdUz2ZBZu1h~60oNS-dISabLcjNZF3tavwk174Cs2tEaP29DJhXCiw7wtMz33jNWE1zPrJVWpiG2PV7QNWiLR4uGuexAZ8UsD~EN0wecKvyXswrd4t6OgD7Zr63c1AoudzvNs-SeALZ0ZNFvo-jYQACoQ9mLKkcQ4OaOMBo5EPuA7Eg8HCQjHsVq-rDNpgaA__"
              }}
              style={{ width: 116, height: 134, }}>
 
            </Image>
          </View>
          <View
            style={{ flex: 1, alignSelf: 'center' }}>
            <Text
              style={styles.text}>
              Newable
            </Text>
            <Text
              style={styles.text}
            >
              50 Coins</Text>
          </View>
          <View
            style={{ flex: 1, alignSelf: 'center' }}>
            <View
              style={{ width: 72, height: 36, borderRadius: 10, alignSelf: 'center', backgroundColor: 'white', justifyContent: "center" }}>
              <Text
                style={[styles.text, style = { alignSelf: 'center', textAlign: 'center' }]}>
                $49
 
              </Text>
            </View>
          </View>
 
        </View>
        <View style={{ height: 100 }}>
        </View>
 
      </ScrollView>
    </View>
 
 
  );
}
const styles = StyleSheet.create({
  offer: {
    width: "85%",
    height: 100,
    borderRadius: 20,
    marginBottom: 14,
    alignSelf: 'center',
    backgroundColor: '#D9D9D9',
    flexDirection: "row",
    alignContent: 'space-around',
    flex: 1
 
  },
  text: {
    fontWeight: '800',
    fontSize: 20,
  }
});
 
 