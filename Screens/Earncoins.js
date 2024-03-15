import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Bottom from './Bottom';
 
export default function Earncoins() {
  const navigation = useNavigation();
  return (
    <View style={{ alignContent: 'center', justifyContent: 'center' }}>
      <ScrollView style={{ alignContent: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-between',
            marginTop: 20,
            flex: 1,
            margin: 15,
          }}>
          <AntDesign
          
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => navigation.navigate('Bottom')}
            style={{ alignItems: 'flex-start', flex: 0, alignSelf: 'center' ,marginRight:10}}
          />
 
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
          <View
            style={{
              alignSelf: 'right',
              alignContent: 'right',
              justifyContent: 'flex-start',
              flex: 1,
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 16,
                color: '#8F8B8B',
                textAlign: 'center',
                alignSelf: 'flex-end',
              }}>
              BALANCE
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/81a2/a8f9/71d6e559b109467bdcd1f5af771430b0?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TzPF1FO29TvxM8VTn5ACFesOpqFQkPrvE9SVra0UPLt2qGnuQtiFBXkWcfANiV1bQvovH~l05LWUZDN2tm6VJv78CTwWanCoE8bFapnZzbuD5RBDGHZRwOnuQcNqtgZDWIKYyZcNI5~7fiDk82EXOIGYDagsPhEtXxjAOgFxwXUPfiMiJix1DrtBVJ7awC4-R~mBWxBkaQO2ZTqZ-auqcozySchW4GPLbNvgfvQ17VSZ0khe3uchQ2oe4aFAFIHyvTob5kqpeAntHLgNrIdRLG99MM25vkwVSqFYwCjIeER~kdvocfUn1jX3Vy0AUS70DN1noGOpJ-4py0HHUADnyw__',
                }}
                style={{ width: 20, height: 20, borderRadius: 99 }}></Image>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 20,
                  color: '#F2A93B',
                  textAlign: 'center',
                  alignSelf: 'center',
                }}>
                125
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#75147C',
            width: '100%',
            height: 60,
            flex: 1,
          }}>
          <Text
            style={{
              fontWeight: 800,
              fontSize: 16,
              color: 'white',
              alignSelf: 'center',
              flex: 1,
              textAlign: 'center',
            }}
            onPress={() => navigation.navigate('Coin')}>
            Add Coins
          </Text>
          <Text
            style={{
              fontWeight: 800,
              fontSize: 16,
              color: '#47882E',
              alignSelf: 'center',
              flex: 1,
              textAlign: 'center',
            }}
            >
            Earn Coins
          </Text>
        </View>
        <View style={{ marginHorizontal: 18, marginTop: 37 }}>
          <Text style={{ fontWeight: '400', fontSize: 20, color: '#75147C' }}>
            Earn from
          </Text>
          <Text style={{ fontWeight: '700', fontSize: 32 }}>Offer Walls</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 35,
          }}>
          <View
            style={{
              width: 168,
              height: 197,
              borderRadius: 10,
              alignContent: 'center',
              alignSelf: 'center',
            }}>
            <ImageBackground
              source={require('../assets/ree.png')}
              style={{
                width: '100%',
                height: '100%',
                alignItems: 'left',
              }}>
              <View style={{ margin: 10 }}>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 16,
                    textAlign: 'left',
                    marginTop: 10,
                  }}>
                  Playtime Games
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 14,
                      textAlign: 'left',
                    }}>
                    Earn per Minute
                  </Text>
                  <Image
                    source={{
                      uri: 'https://s3-alpha-sig.figma.com/img/81a2/a8f9/71d6e559b109467bdcd1f5af771430b0?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TzPF1FO29TvxM8VTn5ACFesOpqFQkPrvE9SVra0UPLt2qGnuQtiFBXkWcfANiV1bQvovH~l05LWUZDN2tm6VJv78CTwWanCoE8bFapnZzbuD5RBDGHZRwOnuQcNqtgZDWIKYyZcNI5~7fiDk82EXOIGYDagsPhEtXxjAOgFxwXUPfiMiJix1DrtBVJ7awC4-R~mBWxBkaQO2ZTqZ-auqcozySchW4GPLbNvgfvQ17VSZ0khe3uchQ2oe4aFAFIHyvTob5kqpeAntHLgNrIdRLG99MM25vkwVSqFYwCjIeER~kdvocfUn1jX3Vy0AUS70DN1noGOpJ-4py0HHUADnyw__',
                    }}
                    style={{
                      width: 25,
                      height: 20.61,
                      borderRadius: 99,
                    }}></Image>
                </View>
                <TouchableOpacity>
                  <View
                    style={{
                      width: 96,
                      height: 28.85,
                      borderRadius: 20,
                      backgroundColor: '#EBCF49',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontWeight: '500',
                        fontSize: 16,
                        textAlign: 'center',
                        alignSelf: 'center',
                      }}
                      onPress={() => navigation.navigate('Play Time')}>
                      Play
                    </Text>
                  </View>
                </TouchableOpacity>
                <Image
                  source={{
                    uri: 'https://s3-alpha-sig.figma.com/img/81a2/a8f9/71d6e559b109467bdcd1f5af771430b0?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TzPF1FO29TvxM8VTn5ACFesOpqFQkPrvE9SVra0UPLt2qGnuQtiFBXkWcfANiV1bQvovH~l05LWUZDN2tm6VJv78CTwWanCoE8bFapnZzbuD5RBDGHZRwOnuQcNqtgZDWIKYyZcNI5~7fiDk82EXOIGYDagsPhEtXxjAOgFxwXUPfiMiJix1DrtBVJ7awC4-R~mBWxBkaQO2ZTqZ-auqcozySchW4GPLbNvgfvQ17VSZ0khe3uchQ2oe4aFAFIHyvTob5kqpeAntHLgNrIdRLG99MM25vkwVSqFYwCjIeER~kdvocfUn1jX3Vy0AUS70DN1noGOpJ-4py0HHUADnyw__',
                  }}
                  style={{
                    width: 25,
                    height: 20.61,
                    borderRadius: 99,
                    marginHorizontal: 90,
                  }}></Image>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Image
                    source={{
                      uri: 'https://s3-alpha-sig.figma.com/img/81a2/a8f9/71d6e559b109467bdcd1f5af771430b0?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TzPF1FO29TvxM8VTn5ACFesOpqFQkPrvE9SVra0UPLt2qGnuQtiFBXkWcfANiV1bQvovH~l05LWUZDN2tm6VJv78CTwWanCoE8bFapnZzbuD5RBDGHZRwOnuQcNqtgZDWIKYyZcNI5~7fiDk82EXOIGYDagsPhEtXxjAOgFxwXUPfiMiJix1DrtBVJ7awC4-R~mBWxBkaQO2ZTqZ-auqcozySchW4GPLbNvgfvQ17VSZ0khe3uchQ2oe4aFAFIHyvTob5kqpeAntHLgNrIdRLG99MM25vkwVSqFYwCjIeER~kdvocfUn1jX3Vy0AUS70DN1noGOpJ-4py0HHUADnyw__',
                    }}
                    style={{
                      width: 25,
                      height: 20.61,
                      borderRadius: 99,
                      marginHorizontal: 45,
                      marginTop: 10,
                    }}></Image>
                  <Image
                    source={require('../assets/playy.png')}
                    style={{ width: 75, height: 64.8, right: 40 }}></Image>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              width: 166,
              height: 198.09,
              borderRadius: 15,
              justifyContent: 'center',
              backgroundColor: '#66A5F1',
            }}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/17dc/e87d/4d275185b29e0113b11df1eae5402237?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WEVuO2OO2zXNb17L9kgoCBshxooA1hS9IkNGh7mfdAQqYP3Awm~5-IHo87nYiB57jV3W8ZmIypVGhDAvbf7~JyQ4p0IqnVBddcPnR-bauCr4YgqgxXhtBLHNTCHPR8OSo1YmlACJ5NPIHrJjQrZWDfd7mCY8-5EaJL6obsiIuGf-~NsL8h1got48nh5Kt6M4I3-z8YXyvUUSyeBnBWXdsjMQJzo3fRU0wAo17piwm70~JvaiJOZbyDIH~SgP~mJWLVoUj8hWINznkzu~P6qvo1sIyun3AoyihPfj-UMhcr44Jax7PJc9Wh2pOaJx6QVvOG5FFkLmKNbpYp3z192iug__',
              }}
              style={{
                width: 125.95,
                height: 105.51,
                borderRadius: 30,
                alignSelf: 'center',
                marginBottom: 30,
              }}></Image>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
                textAlign: 'center',
                color: 'white',
              }}>
              In-app Videos
            </Text>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 20,
                color: '#444444',
                textAlign: 'center',
              }}>
              Watch & Earn
            </Text>
          </View>
        </View>
        <Text style={styles.textofferwalls}>SDK OFFERWALLS</Text>
        <View style={styles.Hview}>
          <View style={styles.offerview}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/145a/4a62/928e110ce1caef7b6bce2eb6990a2ee6?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bJRk2-st13Cqy8YzGFw3KiT2W4SZUX6D-Jw0b~h4fAXrxqxq2BCPDvAEkAbHlTAGXme0xXXq0cZe5ZYgv-519j25LafqzoW4mocs8bUaG51Avf51lz7LK2c~3LQmHShU134e0SWmDEWdx~zlZr20Plo5nKZshmOswkuyZnMIqaHaMd7jZrUQl5f4Y51nGqaCmk7rTBAz8oXJoi3EgbNnua67pdVjXEj0tiHnDFca-9gaoWamK1RMA5Vc~2EmCea0jpSFxvKae0cIUJwnKKMT5CtVPm9K2lRv3elcRhLQ5UPttbDly5oVN~JGn79dwC7VzzDUsO5QL84j0B-L2wHZPw__',
              }}
              style={{
                width: 125.95,
                height: 105.51,
                borderRadius: 30,
                alignSelf: 'center',
              }}></Image>
            <Text style={styles.Heading}>Tapjoy</Text>
            <Text style={styles.subheadings}>Setup using backend</Text>
          </View>
          <View style={styles.offerview}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/f8d7/c5c1/a7205224e0c4c87fd0fd4f7f7ed3cee1?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YDN7fCYhFpl~drt8Lpd0ixz5Xxj8wH2jprnF~n9uThkNAvgv0Nujtk3uoNNDOFrftynTcSJypROxkrcKzMWCjDNInu2acUypNt8A6~Aijs-3UoTh0a7A1~~wjFMtotz6XnRDkDnR7yO~G67KzavZZRZkoaDLyi7QwtL4b4ckOsUNLoK3NXhv~pDT1STRnmjd5cPNFCUV2eXHAEXOhl5ypRuL-nZagoJfsmc3zes~RruXmCT6D6r1hYduaTLgTmsPeFzc6zVjYHj5Br6DM4cOpmmYujfVFqy7EFatdUD4loPPGFVfj~Cp9CFd4QnjUAWjKGOAUkGnbNxg70NMSQorSw__',
              }}
              style={{
                width: 125.95,
                height: 105.51,
                borderRadius: 30,
                alignSelf: 'center',
              }}></Image>
            <Text style={styles.Heading}>Fyber</Text>
            <Text style={styles.subheadings}>Add "APP ID" in the backend</Text>
          </View>
        </View>
        <Text style={styles.textofferwalls}>VIDEO OFFERS</Text>
        <View style={styles.Hview}>
          <View style={styles.offerview}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/9334/7698/0a2c6171a7f6497941d1e8c6ccc550b6?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=doVDxOqLNL9qE5kpXC~ZM2sV8Yqzdv~c7JMiIZ02EWC2fWXXoVyea-uOzOHfkSfmpSTbjPnkzfN8l3A3lX7xqHoM-llBTGK4adDjYB5~FixAU0b16mz7YRfbda1yiNRXAsxa2dQ05XJoapqD25t3v1ZTeMDOuovM5OEhDTA~VKDMOMjnrStN~KNv5Tvw5pz8M0U97ugwHTQgtBq3ePQCiebPg5NpXxpn2eoLq9a4uvlj-OmrM4w8YnfcLKVVvfou141IJRDZ5eJOrM8csbx3Wmph78cFI0NdES8-hZVNRoBEyu9ZQHVJFwhhVsL9VUZ-AVkWqb00feisjk-c22JJcQ__',
              }}
              style={{
                width: 125.95,
                height: 105.51,
                borderRadius: 30,
                alignSelf: 'center',
              }}></Image>
            <Text style={styles.Heading}>AdColony</Text>
            <Text style={styles.subheadings}>Demo ads serving</Text>
          </View>
          <View style={styles.offerview}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/3f70/5ac3/4c47584ec864d8bf5e70b77a7b13e763?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gc3yEtnlOo9zWo0Bexv1evJsCKCVbT3ORUY--hcJ8EPuo8T47HyPj6Y~orGPQozhGBnmD3H2EjmViEKiY6rpG9G634sy0AjnWUcRHTswNBFsnsqjIfJiYSOdXnH6B79~EIjeK1ffPOeN8x~-21mxKdZePBxKl0r--B6m-lkkMEKybAlTTESjZOLV1V6FQDyfXrK8AzshDvrCrqyHZ5sUkGhboydTIKZNHv2FNkBfDy82bhweapA7ZujBFLmiaNFpLY0IakETxa938Fw5OFU7tjWzpwC3KPGZVMDv4Z~8-EKE8nbFUCClQsUr~0WbT0OZv3Yzm6qkx-7KAjgRk1Dyog__',
              }}
              style={{
                width: 125.95,
                height: 105.51,
                borderRadius: 30,
                alignSelf: 'center',
              }}></Image>
            <Text style={styles.Heading}>IronSrc</Text>
            <Text style={styles.subheadings}>For demo ads</Text>
          </View>
        </View>
        <Text style={styles.textofferwalls}>API OFFERWALLS</Text>
        <View style={styles.Hview}>
          <View style={styles.offerview}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/eb2f/5029/2f9b79735f1cc9630f7396a659873df3?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hft2fKAKVJSCf2~-LEwoZxt4bh8v6WZx7zTQCfuhP23hyd307-08QSD2yiYE9KQougQpIMwyouaHz4W8-8rIUZ9rKfPB2n1LtrpbKVu4ufyViatvE0nO6P~8~0id5LoslDypkYWL7s7pYa~-1N3BYMyIlP86y7ULM2vIK1qCTgd-8kqSowtrXueDhVepe2-0bjb9T9weRoBJp7Edt4IHVXN0UAqfgzxCLJmwlayFAp6~p13zfMON41gadIWLd81FstJr949MvzbMrdB6vFHTl8LU8iPFLvcKAcqM6pxZl1oS8~6wzYZjEWu4xom22W80ziPiLT~HP7utuhCU4MKc0Q__',
              }}
              style={{
                width: 125.95,
                height: 105.51,
                borderRadius: 30,
                alignSelf: 'center',
              }}></Image>
            <Text style={styles.Heading}>CPA Lead</Text>
            <Text style={styles.subheadings}>Add/Update from backend</Text>
          </View>
          <View style={styles.offerview}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/c318/4cbd/f7ee6b9015721ed2a12087c44a07a1d2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CBlCbkOJvMBw8hyYWoT20V3xsmyfR0zEhZj-Oual7mkASQj3VzDEXqnVe6abixbY5wFKQ8DQXc5AkeoD5lPUSoIUi26WIK89lBujfRq6JApN1AyJMX50nRBNYv0uK0WyGFRufDBFpmSXqmcGbWjybnvpC0ytvduSEK85Swu2z28dM-9~R0M88FoykftLEc38tdm4X2o88bN0ucDoaodXxJJ9t-oFqK0ZDBoDWYnJM99h4tIxbqoRARWqu-w6Q3LbVvisEfPCdoaysklqKvaZaq2RXaMVl0ZVAns3BlG-ixIWdfi1-flbTKpY~0QaH77u1-8EDcOokfOYrruDeYu8PQ__',
              }}
              style={{
                width: 125.95,
                height: 105.51,
                borderRadius: 30,
                alignSelf: 'center',
              }}></Image>
            <Text style={styles.Heading}>OGAds</Text>
            <Text style={styles.subheadings}>Set up from backend</Text>
          </View>
        </View>
        <Text style={styles.textofferwalls}>WEB OFFERWALLS</Text>
        <View style={styles.Hview}>
          <View style={styles.offerview}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/abea/227a/5b50fced929ed328168cd9226fcddb92?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gpWO2Fnxxg9szZJBHPgoitAMrfD0ke-opckmJ8I9K~OgvtbFV-PLoNpwF2muOCGCT0VZ-tmpy7fKBz8Vda2BM3YK6BriumORZk8f97bAoN9wlXH6rkiz7ovrxJEgOjBSGdOi-jkFZPwsRpZt9PM6tDnCETGdxvamHb~G~OFnIuz1UmamiklrfQvtHqg36wHHOHcfHUs1ivThAgNhnmGspTUrK9e~qGE96WY9BD2MXvGqKOdcPaXmWM7Mw0Xk~Jx5n5joDd03y48S5XGg-3IqIn0UX3EyN60XATYyTyNzQup7F0adfaa-a9IgiuVgkGuzh~vCDPuwgv6WIihHdsIzTw__',
              }}
              style={{
                width: 125.95,
                height: 105.51,
                borderRadius: 30,
                alignSelf: 'center',
              }}></Image>
            <Text style={styles.Heading}>Adgem</Text>
            <Text style={styles.subheadings}>Administer from backend</Text>
          </View>
          <View style={styles.offerview}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/7444/3228/a30a9e35aca094e815dce8a009139310?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrL5uNj~0OQrLcj9kzPvUJvVGIOn3kpNfwf1X8V6E2BHF4iUjqnv0vs8Ceuiw5Zg2mZZ0XofFBw8GbdjuQVdAPiwjQxXX6mCKzxJfllNhuJnMTWNyydzUeEfVZ2jvfyCTDjXt~l-qKI0W176bZD7SkbF1-93gXvtx0f3tfF7R0rYYv80Jm4i1nQ8wJtkJPWTJSdeZPnAhZndk2h38~h2HBCXCO0OSOOqnJ7aeEPbLDvB3~O3iY0STd5KhE4Rt~TLrUF~6RX3QqtlydcUbY-hTMzxgG2M-G9OMhWZjmycvDph~06D2WDBLxPCH8T76NnHMKOM0FTp1GrHYBnpGE8hLg__',
              }}
              style={{
                width: 125.95,
                height: 105.51,
                borderRadius: 30,
                alignSelf: 'center',
              }}></Image>
            <Text style={styles.Heading}>Notik</Text>
            <Text style={styles.subheadings}>Administer from backend</Text>
          </View>
        </View>
 
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  textofferwalls: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    margin: 15,
  },
  subheadings: {
    fontSize: 10,
    fontWeight: '400',
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
  },
  Heading: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  offerview: {
    width: 160,
    height: 190.18,
    borderRadius: 15,
    backgroundColor: '#75147C',
    justifyContent: 'center',
  },
  Hview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
 