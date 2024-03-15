import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
 
export default function Profile() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <View style={styles.boxContainer}>
          <View
            style={{ marginLeft: 25, }}>
            <View style={styles.box}>
              <Image
                source={require('../assets/menimage.png')
                }
                style={styles.image}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.title}>Abhishek Sharma</Text>
                <View style={{ margin: 10, flexDirection: 'row' }}>
                  <Text style={{ fontWeight: '400', fontSize: 13 }}>8MGEqhaAXg</Text>
                  <Foundation
                    name="page-copy"
                    size={13}
                    color="black"
                    style={{ marginLeft: 5 }} />
                </View>
              </View>
            </View>
            <View
              style={{
                width: 135, marginLeft: 15, height: 80, borderRadius: 15,
                backgroundColor: '#FAF2C3', borderWidth: 0.5, borderColor: '#F2A93B',
                alignSelf: 'flex-start', flexDirection: 'row', flex: 1, alignItems: 'center'
              }}>
              <View
                style={{ flex: 1, alignItems: 'center' }}>
                <Text
                  style={{ fontWeight: '800', fontSize: 18, color: '#EAD04A' }}>100
                </Text>
                <Text
                  style={{ fontWeight: '400', fontSize: 18, color: '#EAD04A' }}>Coins
 
                </Text>
              </View>
              <Image
              source={require('../assets/coin.gif')}
                style={{ width: 100, height: 70, flex: 1, alignSelf: 'center' }}></Image>
 
            </View>
          </View>
          <View style={styles.bottomContainer}>
 
            <View
             onPress={() => navigation.navigate('Orderhistory')}
            style={styles.bottomItem}>
              <Image
                source={require('../assets/Vector.png')}
                style={styles.bottomIcon1}
              />
              <Text
               onPress={() => navigation.navigate('Orderhistory')}
              style={styles.bottomText}>Order History</Text>
 
            </View>
            <Image
              source={require('../assets/arrow.png')}
              onPress={() => navigation.navigate('Orderhistory')}
              style={styles.bottomIcon}
            >
 
            </Image>
 
          </View>
          <View style={styles.viewline}></View>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomItem}>
              <Image
                source={require('../assets/cup.png')}
                style={styles.bottomIcon1}
              />
              <Text
              onPress={()=> navigation.navigate('Redeem')}
              style={styles.bottomText}>Redeem</Text>
            </View>
            <Image
              source={require('../assets/arrow.png')}
              onPress={() => navigation.navigate('Redeem')}
              style={styles.bottomIcon}
            />
 
          </View>
          <View style={styles.viewline}></View>
          <View style={styles.bottomContainer}>
            <View
            onPress={() => navigation.navigate('Help')}
            style={styles.bottomItem}>
              <Ionicons name="help-circle-outline" size={24} color="black"
                style={styles.bottomIcon} />
 
 
 
              <Text 
              onPress={() => navigation.navigate('Help')}
              style={styles.bottomText}>Help & FAQ</Text>
            </View>
            <Image
              source={require('../assets/arrow.png')}
              onPress={() => navigation.navigate('Help')}
              style={styles.bottomIcon}
            />
          </View>
          <View style={styles.viewline}></View>
          <View style={styles.bottomContainer}>
            <View
             onPress={() => navigation.navigate('Chatroom')}
            style={styles.bottomItem}>
              <Image
                source={require('../assets/chat.png')}
                style={styles.bottomIcon} />
              <Text
               onPress={() => navigation.navigate('Chatroom')}
              style={styles.bottomText}>Chat Room</Text>
            </View>
            <Image
              source={require('../assets/arrow.png')}
              onPress={() => navigation.navigate('Chatroom')}
              style={styles.bottomIcon}
            />
          </View>
          <View style={styles.viewline}></View>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomItem}>
              <Image
                source={require('../assets/tag.png')}
                style={styles.bottomIcon}
              />
              <Text 
               onPress={() => navigation.navigate('Earncoins')}
              style={styles.bottomText}>Earn Coins</Text>
            </View>
            <TouchableOpacity  onPress={() => navigation.navigate('Earncoins')}>

            
            <Image
              source={require('../assets/arrow.png')}
             
              style={styles.bottomIcon}
            />
            </TouchableOpacity>
          </View>
          <View style={styles.viewline}></View>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomItem}>
              <Image
               onPress={() => navigation.navigate('Settings')}
                source={require('../assets/setting.png')}
                style={styles.bottomIcon}
              />
              <Text 
               onPress={() => navigation.navigate('Settings')}
              style={styles.bottomText}>Settings</Text>
            </View>
            <Image
              source={require('../assets/arrow.png')}
              onPress={() => navigation.navigate('Settings')}
              style={styles.bottomIcon}
            />
          </View>
          <View style={styles.viewline}></View>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomItem}>
              <Image
                source={require('../assets/contact.png')}
                style={styles.bottomIcon}
              />
              <Text
                onPress={() => navigation.navigate('Contactus')}
              style={styles.bottomText}>Contact Us</Text>
            </View>
            <Image
              source={require('../assets/arrow.png')}
              onPress={() => navigation.navigate('Contactus')}
              style={styles.bottomIcon}
            />
          </View>
          <View style={styles.viewline}></View>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomItem}>
              <Image
                source={require('../assets/reward.png')}
                style={styles.bottomIcon}
              />
              <Text
                onPress={() => navigation.navigate('Rewards')}
              style={styles.bottomText}>Rewards</Text>
            </View>
            <Image
              source={require('../assets/arrow.png')}
              onPress={() => navigation.navigate('Rewards')}
              style={styles.bottomIcon}
            />
          </View>
          <View style={styles.viewline}></View>
          <View style={styles.bottomContainer}>
            <View
          
            style={styles.bottomItem}>
              <MaterialIcons
                onPress={()=> navigation.navigate('Login')}
              name="logout" size={24} color="black"
                style={styles.bottomIcon} />
              <Text
                onPress={()=> navigation.navigate('Login')}
              style={styles.bottomText}>Log Out </Text>
            </View>
            <Image
              onPress={()=> navigation.navigate('Login')}
              source={require('../assets/arrow.png')}
             
              style={styles.bottomIcon}
            />
 
          </View>
          <View style={styles.viewline}></View>
          <View
            style={{
              width: '85%', height: 284.23, backgroundColor: '#EEECEC',
              borderRadius: 15, alignSelf: 'center', marginTop: 80, alignContent: 'space-around', justifyContent: 'space-around'
            }}>
            <View
              style={styles.socialview}>
              <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/f3ec/45e6/3fff1ba1a6e0f721c0a8b269cca5c099?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gXju-NG~cr-p5HttOyhX3gOQ-7WyG33KCDcI1nGLBI1mSmuKxdcKBr7UduFwgTYxp5uwKz3TPh5SfTAERNAz8wG7rVj1nwh8Y0r46lbHytgjD4egaC8X6KP7~OA00bg11o~Qc4S-ul0OrNSw6BdtgAJPe5FQpBqGXZ~0YAkhf4nsiJVyPRzszlTg6jilKDa6Urp5iBnfxiGqR7RgfxeAgVWAI9F4Ag~f5vgnDgoI~ElD9fLn8z7q0qt1irspgLoIGHtysdcOeTAOrqkEx-64f9Ra9ckwCfSvOPjSIeaW7jlFBqsIcdLdvsHFEv1okUj0ckcDXnG4FyMokII2bEcWww__' }}
                style={styles.logoimages}
              ></Image>
              <Text
                style={styles.socialtext}>Facebook</Text>
                <TouchableOpacity>
              <View
                style={styles.likeus}
                >
                <Text
                  style={{ fontWeight: '400', fontSize: 14, alignSelf: 'center', color: 'white', textAlign: 'center' }}>Like us</Text>
              </View>
              </TouchableOpacity>
 
            </View>
            <View
              style={styles.socialview}>
              <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/8c63/d1d7/43da51cda0ee35407535b72b7b9215b9?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BsZK-zulIKEcA6ktjoVhzlk~WcJk3LXMxAaEwqmq5DLizoFyMtqNvxeIHOhPbEBSQzbIMH4Mqj8hGDO9BSYi786kFThPV5NZig1A9R3q2I9Pbmt-USKHAJU6tSXznfkU0qhWeXudBXBZIjo7K3jAvnTeZ4Yax3xVxB0gaPPSEf7Kl8A0oS0Spt~IxXDH5gZfUZkoN6QxmIe28Hvc~nfPfkKvlM1Y-~tqUHnlk59N40MFC6YxC45TCJXOh4pUiGnUPKLqjj-Cbfepy-pmXxOLaL~CEDQzMoi9C0idJmIrIc8VuIiTjZAX4GDFCe2asI1swJiTZppmUnIzKAe2a1rAxA__' }}
                style={styles.logoimages}
              ></Image>
              <Text
                style={styles.socialtext}>Instagram</Text>
                <TouchableOpacity>
              <View
                style={styles.likeus}>
                <Text
                  style={{ fontWeight: '400', fontSize: 14, alignSelf: 'center', color: 'white', textAlign: 'center' }}>Follow Us</Text>
              </View>
              </TouchableOpacity>
 
            </View>
            <View
              style={styles.socialview}>
              <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/5cc6/7697/1d10b1bed5abdf9350f3e12bbcbb6f09?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kT7EuHhfCd7k-PocGVDLiTD9eRx03wJZZEVX6XjgSIG6UqBF6pfN7Yu53V-yOnkw4xCAbgZ4V0k-ktA0p~k7~1MJW8DlB3lGFvFtTGcr1~95UlEDhG16U0UKsb1DZMn0POgDInMCAe5S5prbY0Iu3R72YfjsA9lpuqwd9HJbUp8jw4VBwfxiMXimNojbtJ9hVOTfj9Xm8h7rL-mbIR~dBrEuFL6Pv9zGyLEorUUc9kAZ-lT6rDuJKN5I2O5guf5C8UUqxCNpCHplrxg5mLGiGf1~XUHQQ8Q~fQuEAoXZs3oo4Sq5bjuHnaIbei-mqhPjzxf~9v6d2tDEMmzJxY75BA__' }}
                style={styles.logoimages}
              ></Image>
              <Text
                style={styles.socialtext}>Telegram</Text>
                <TouchableOpacity>
              <View
                style={styles.likeus}>
                <Text
                  style={{ fontWeight: '400', fontSize: 14, alignSelf: 'center', color: 'white', textAlign: 'center' }}>Join Us</Text>
              </View>
              </TouchableOpacity>
 
            </View>
            <View
              style={styles.socialview}>
              <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/dafd/86af/fc86550808e7e83ee798d61dafa2d8c3?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDlzu1SSvBA0Nw-9RSge9K4ypJuyVLoRaCk6i6~Gg7GDFQ1DWeMvbNyyFAuP0cQmeZInLPii6RoV4oL83Il~aSlxfVYvLErSH1soQQoli1Bah~NPCHttSPHvY8Iz~23G2TlK25wA4wV1iRwc8-SNj2nhg~4Z9arlRJHWJitjpmLXMrkqKmnHjEXYIHiSHm97oBnBzdCeWqadtBXabOhfoRrT30jinqUqcAs~uAdHd82Jz-HApgQ16235FIB4Ci2BCufvhy~biu8fbs~U7CvnNz~bc2pKHb2-h4ZymM9L~Frym165vJ8GQgIOFvrGc1fXgQyutEUc283Us8gGtO5Ycw__' }}
                style={styles.logoimages}
              ></Image>
              <Text
                style={styles.socialtext}>Youtube</Text>
                <TouchableOpacity>
              <View
                style={styles.likeus}>
                <Text
                  style={{ fontWeight: '400', fontSize: 14, alignSelf: 'center', color: 'white', textAlign: 'center' }}>Subscribe</Text>
              </View>
              </TouchableOpacity>
 
            </View>
 
 
          </View>
        </View>
        <View
          style={{ margin: 30 }}>
 
        </View>
      </ScrollView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  boxContainer: {
    marginTop: 20,
    width: '95%',
    alignSelf: 'center',
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
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 79.37,
    borderRadius: 70,
    marginTop: 44,
    marginRight:14
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    marginTop: 61,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    width: '85%',
    paddingHorizontal: 20,
    marginTop: 20,
    flex: 1
  },
  bottomItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  bottomIcon1: {
    alignSelf: 'flex-start',
    flex: 0
 
  },
  bottomIcon: {
    alignSelf: 'flex-end',
    flex: 0
  },
  bottomText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
    alignSelf: 'auto',
    textAlign: 'justify',
    paddingLeft: 10,
    flex: 1
  },
  viewline: {
    width: '85%',
    height: 1,
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',
 
    marginTop: 20,
  },
  logoimages: {
    width: 22.74,
    height: 22.74,
    borderRadius: 99,
 
    alignSelf: 'center'
  },
  socialview: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    alignContent: 'space-around',
    alignSelf: 'center',
    padding: 15,
 
  },
  socialtext: {
    fontWeight: "400",
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
 
  },
  likeus: {
    width: 83.76,
    height: 28.43,
    borderRadius: 30,
    backgroundColor: '#601FC6',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 0
  }
});
 