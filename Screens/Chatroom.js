import {
    Text,
    View,
    ScrollView,
    Image,
    StyleSheet,TextInput,
    ImageBackground,
    TouchableOpacity,
  } from 'react-native';
  import { AntDesign } from '@expo/vector-icons';
  import { Fontisto } from '@expo/vector-icons';
  import { Feather } from '@expo/vector-icons';
  import { useNavigation } from '@react-navigation/native';
   
  export default function Chatroom() {
    const navigation=useNavigation();
    return (
      <View
      style={{alignContent:'center',flex:1}}>
     
              <ScrollView  contentContainerStyle={{ justifyContent: 'space-between', flexGrow: 1 }}>
   
        <View>
          <View
            style={{
              width: '100%',
              height: 81.14,
              backgroundColor: '#75147C',
              flexDirection: 'row',
              alignContent: 'center',
              flex: 1,
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <View style={{ marginTop: 20, flexDirection: 'row', flex: 1 }}>
              <AntDesign

onPress={()=> navigation.navigate('Bottom')}
                name="arrowleft"
                size={24}
                color="black"
                style={{
                  flex: 0,
                  alignSelf: 'center',
                  alignItems: 'center',
                  color: 'white',
                }}
              />
   
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 18,
                  color: 'white',
                  alignSelf: 'center',
                  textAlign: 'center',
                  flex: 1,
                }}>
                Chat Room
              </Text>
              <Fontisto
                name="radio-btn-active"
                size={15}
                color="#72C87A"
                style={{ height: 15, fontWeight: 15, alignSelf: 'center' }}
              />
            </View>
           
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'flex-end',margin:15 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom: 20,
              }}>
              <View
                style={{
                  width: 160,
                  height: 45.12,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  backgroundColor: '#75147C',
                  alignItems: 'flex-start',
                  marginBottom:5,
                  paddingBottom:5,
                  alignSelf: 'left',
                  padding: 5,
                  paddingBottom: 10,
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: '#5959F6',
                    textAlign: 'center',
                    alignSelf: 'left',
                  }}>
                  Sam
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: 'white',
                    textAlign: 'center',
                    marginBottom:5,
                   
                  }}>
                  Hello
                </Text>
              </View>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/b9b7/fe71/1eebbc093607af17897c9c1cc82fee29?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCrZY2KKjXhX30~jmiArfTDnBnemF5UuP7HqyrQTaJC9eB5M6Zry7KjD1Cn5c-B9sfQg4OIjho~oK4Ztlhk-InbR6wXOlEKJNSoNejV8i1RNM9h-v30~8BjLFhACEgObaHnYFwSb2lDG2BEz5as89JKkZXQpUKOM2EvlL2kRH1q36Z~n7E-NDeb9f9-jZR1pZWqv8VrgcQLbyXd8fAD7kuS~1-T2Youb9o~pxujNp2ZZY7Fy0qOEUh7Cpj-smRmh7WXdg80SRH1h4bfhk7dK33Ww7tsfqty5lSS1iiI0tmhyzNVrhoO5yGHXttISqXK2Ma3btKEok7sQx5dJmNN9Dw__',
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 99,
                  alignSelf: 'center',
                }}></Image>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom: 20,
              }}>
              <View
                style={{
                  width: 160,
                  height: 45.12,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  backgroundColor: '#75147C',
                  alignItems: 'flex-start',
                  alignSelf: 'left',
                  padding: 5,
                  paddingBottom: 10,
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: '#5959F6',
                    textAlign: 'center',
                    alignSelf: 'left',
                  }}>
                  Satvika
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: 'white',
                    textAlign: 'center',
                    alignSelf: 'left',
                  }}>
                  Hello
                </Text>
              </View>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/b9b7/fe71/1eebbc093607af17897c9c1cc82fee29?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCrZY2KKjXhX30~jmiArfTDnBnemF5UuP7HqyrQTaJC9eB5M6Zry7KjD1Cn5c-B9sfQg4OIjho~oK4Ztlhk-InbR6wXOlEKJNSoNejV8i1RNM9h-v30~8BjLFhACEgObaHnYFwSb2lDG2BEz5as89JKkZXQpUKOM2EvlL2kRH1q36Z~n7E-NDeb9f9-jZR1pZWqv8VrgcQLbyXd8fAD7kuS~1-T2Youb9o~pxujNp2ZZY7Fy0qOEUh7Cpj-smRmh7WXdg80SRH1h4bfhk7dK33Ww7tsfqty5lSS1iiI0tmhyzNVrhoO5yGHXttISqXK2Ma3btKEok7sQx5dJmNN9Dw__',
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 99,
                  alignSelf: 'center',
                }}></Image>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom: 20,
              }}>
              <View
                style={{
                  width: 160,
                  height: 45.12,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  backgroundColor: '#75147C',
                  alignItems: 'flex-start',
                  alignSelf: 'left',
                  padding: 5,
                  paddingBottom: 10,
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: '#5959F6',
                    textAlign: 'center',
                    alignSelf: 'left',
                  }}>
                  raju rana
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: 'white',
                    textAlign: 'center',
                   
                    
                  }}>
                  hi
                </Text>
              </View>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/b9b7/fe71/1eebbc093607af17897c9c1cc82fee29?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCrZY2KKjXhX30~jmiArfTDnBnemF5UuP7HqyrQTaJC9eB5M6Zry7KjD1Cn5c-B9sfQg4OIjho~oK4Ztlhk-InbR6wXOlEKJNSoNejV8i1RNM9h-v30~8BjLFhACEgObaHnYFwSb2lDG2BEz5as89JKkZXQpUKOM2EvlL2kRH1q36Z~n7E-NDeb9f9-jZR1pZWqv8VrgcQLbyXd8fAD7kuS~1-T2Youb9o~pxujNp2ZZY7Fy0qOEUh7Cpj-smRmh7WXdg80SRH1h4bfhk7dK33Ww7tsfqty5lSS1iiI0tmhyzNVrhoO5yGHXttISqXK2Ma3btKEok7sQx5dJmNN9Dw__',
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 99,
                  alignSelf: 'center',
                }}></Image>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom: 20,
              }}>
              <View
                style={{
                  width: 160,
                  height: 45.12,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  backgroundColor: '#75147C',
                  alignItems: 'flex-start',
                  alignSelf: 'left',
                  padding: 5,
                  paddingBottom: 10,
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: '#5959F6',
                    textAlign: 'center',
                    alignSelf: 'left',
                  }}>
                  venky
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: 'white',
                    textAlign: 'center',
                    alignSelf: 'left',
                  }}>
                  good evening
                </Text>
              </View>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/b9b7/fe71/1eebbc093607af17897c9c1cc82fee29?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCrZY2KKjXhX30~jmiArfTDnBnemF5UuP7HqyrQTaJC9eB5M6Zry7KjD1Cn5c-B9sfQg4OIjho~oK4Ztlhk-InbR6wXOlEKJNSoNejV8i1RNM9h-v30~8BjLFhACEgObaHnYFwSb2lDG2BEz5as89JKkZXQpUKOM2EvlL2kRH1q36Z~n7E-NDeb9f9-jZR1pZWqv8VrgcQLbyXd8fAD7kuS~1-T2Youb9o~pxujNp2ZZY7Fy0qOEUh7Cpj-smRmh7WXdg80SRH1h4bfhk7dK33Ww7tsfqty5lSS1iiI0tmhyzNVrhoO5yGHXttISqXK2Ma3btKEok7sQx5dJmNN9Dw__',
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 99,
                  alignSelf: 'center',
                }}></Image>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom: 20,
              }}>
              <View
                style={{
                  width: 160,
                  height: 45.12,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  backgroundColor: '#75147C',
                  alignItems: 'flex-start',
                  alignSelf: 'left',
                  padding: 5,
                  paddingBottom: 10,
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: '#5959F6',
                    textAlign: 'center',
                    alignSelf: 'left',
                  }}>
                  neha
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: 'white',
                    textAlign: 'center',
                    alignSelf: 'left',
                  }}>
                  good evening
                </Text>
              </View>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/b9b7/fe71/1eebbc093607af17897c9c1cc82fee29?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCrZY2KKjXhX30~jmiArfTDnBnemF5UuP7HqyrQTaJC9eB5M6Zry7KjD1Cn5c-B9sfQg4OIjho~oK4Ztlhk-InbR6wXOlEKJNSoNejV8i1RNM9h-v30~8BjLFhACEgObaHnYFwSb2lDG2BEz5as89JKkZXQpUKOM2EvlL2kRH1q36Z~n7E-NDeb9f9-jZR1pZWqv8VrgcQLbyXd8fAD7kuS~1-T2Youb9o~pxujNp2ZZY7Fy0qOEUh7Cpj-smRmh7WXdg80SRH1h4bfhk7dK33Ww7tsfqty5lSS1iiI0tmhyzNVrhoO5yGHXttISqXK2Ma3btKEok7sQx5dJmNN9Dw__',
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 99,
                  alignSelf: 'center',
                }}></Image>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom: 20,
              }}>
              <View
                style={{
                  width: 160,
                  height: 45.12,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  backgroundColor: '#75147C',
                  alignItems: 'flex-start',
                  alignSelf: 'left',
                  padding: 5,
                  paddingBottom: 10,
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: '#5959F6',
                    textAlign: 'center',
                    alignSelf: 'left',
                  }}>
                  Sanjana
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: 'white',
                    textAlign: 'center',
                    alignSelf: 'left',
                  }}>
                  good evening
                </Text>
              </View>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/b9b7/fe71/1eebbc093607af17897c9c1cc82fee29?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCrZY2KKjXhX30~jmiArfTDnBnemF5UuP7HqyrQTaJC9eB5M6Zry7KjD1Cn5c-B9sfQg4OIjho~oK4Ztlhk-InbR6wXOlEKJNSoNejV8i1RNM9h-v30~8BjLFhACEgObaHnYFwSb2lDG2BEz5as89JKkZXQpUKOM2EvlL2kRH1q36Z~n7E-NDeb9f9-jZR1pZWqv8VrgcQLbyXd8fAD7kuS~1-T2Youb9o~pxujNp2ZZY7Fy0qOEUh7Cpj-smRmh7WXdg80SRH1h4bfhk7dK33Ww7tsfqty5lSS1iiI0tmhyzNVrhoO5yGHXttISqXK2Ma3btKEok7sQx5dJmNN9Dw__',
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 99,
                  alignSelf: 'center',
                }}></Image>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom: 20,
              }}>
              <View
                style={{
                  width: 160,
                  height: 45.12,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  backgroundColor: '#75147C',
                  alignItems: 'flex-start',
                  alignSelf: 'left',
                  padding: 5,
                  paddingBottom: 10,
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: '#5959F6',
                    textAlign: 'center',
                    alignSelf: 'left',
                  }}>
                  ramana
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: 'white',
                    textAlign: 'center',
                    alignSelf: 'left',
                  }}>
                  good evening
                </Text>
              </View>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/b9b7/fe71/1eebbc093607af17897c9c1cc82fee29?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCrZY2KKjXhX30~jmiArfTDnBnemF5UuP7HqyrQTaJC9eB5M6Zry7KjD1Cn5c-B9sfQg4OIjho~oK4Ztlhk-InbR6wXOlEKJNSoNejV8i1RNM9h-v30~8BjLFhACEgObaHnYFwSb2lDG2BEz5as89JKkZXQpUKOM2EvlL2kRH1q36Z~n7E-NDeb9f9-jZR1pZWqv8VrgcQLbyXd8fAD7kuS~1-T2Youb9o~pxujNp2ZZY7Fy0qOEUh7Cpj-smRmh7WXdg80SRH1h4bfhk7dK33Ww7tsfqty5lSS1iiI0tmhyzNVrhoO5yGHXttISqXK2Ma3btKEok7sQx5dJmNN9Dw__',
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 99,
                  alignSelf: 'center',
                }}></Image>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom: 20,
              }}>
              <View
                style={{
                  width: 160,
                  height: 45.12,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  backgroundColor: '#75147C',
                  alignItems: 'flex-start',
                  alignSelf: 'left',
                  padding: 5,
                  paddingBottom: 10,
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: '#5959F6',
                    textAlign: 'center',
                    alignSelf: 'left',
                  }}>
                  ashok
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: 'white',
                    textAlign: 'center',
                    alignSelf: 'left',
                  }}>
                  good evening
                </Text>
              </View>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/b9b7/fe71/1eebbc093607af17897c9c1cc82fee29?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCrZY2KKjXhX30~jmiArfTDnBnemF5UuP7HqyrQTaJC9eB5M6Zry7KjD1Cn5c-B9sfQg4OIjho~oK4Ztlhk-InbR6wXOlEKJNSoNejV8i1RNM9h-v30~8BjLFhACEgObaHnYFwSb2lDG2BEz5as89JKkZXQpUKOM2EvlL2kRH1q36Z~n7E-NDeb9f9-jZR1pZWqv8VrgcQLbyXd8fAD7kuS~1-T2Youb9o~pxujNp2ZZY7Fy0qOEUh7Cpj-smRmh7WXdg80SRH1h4bfhk7dK33Ww7tsfqty5lSS1iiI0tmhyzNVrhoO5yGHXttISqXK2Ma3btKEok7sQx5dJmNN9Dw__',
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 99,
                  alignSelf: 'center',
                }}></Image>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom: 20,
              }}>
              <View
                style={{
                  width: 160,
                  height: 45.12,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  backgroundColor: '#75147C',
                  alignItems: 'flex-start',
                  alignSelf: 'left',
                  padding: 5,
                  paddingBottom: 10,
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: '#5959F6',
                    textAlign: 'center',
                   
                  }}>
                  raghu
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: 'white',
                    textAlign: 'center',
                    alignSelf: 'left',
                  }}>
                  good night
                </Text>
              </View>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/b9b7/fe71/1eebbc093607af17897c9c1cc82fee29?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCrZY2KKjXhX30~jmiArfTDnBnemF5UuP7HqyrQTaJC9eB5M6Zry7KjD1Cn5c-B9sfQg4OIjho~oK4Ztlhk-InbR6wXOlEKJNSoNejV8i1RNM9h-v30~8BjLFhACEgObaHnYFwSb2lDG2BEz5as89JKkZXQpUKOM2EvlL2kRH1q36Z~n7E-NDeb9f9-jZR1pZWqv8VrgcQLbyXd8fAD7kuS~1-T2Youb9o~pxujNp2ZZY7Fy0qOEUh7Cpj-smRmh7WXdg80SRH1h4bfhk7dK33Ww7tsfqty5lSS1iiI0tmhyzNVrhoO5yGHXttISqXK2Ma3btKEok7sQx5dJmNN9Dw__',
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 99,
                  alignSelf: 'center',
                }}></Image>
            </View>
          </View>
          </View>
         
          </ScrollView>
          <View style={styles.chatBox}>
          <TouchableOpacity style={styles.chatButton}>
            <Feather name="smile" size={24} color="white" style={{flex:0,alignSelf:'center',alignItems:'center'}} />
           <TextInput
        placeholder="Write here..."
        style={{fontWeight:'400',fontSize:16,alignItems:'center',textAlign:'center',color:'white',flex:1}}
        placeholderTextColor="white"
       />
        <Feather name="link" size={24} color="white" />
        <Feather name="mic" size={24} color="white" />
          </TouchableOpacity>
        </View>
        </View>
       
       
     
    );
  }
  const styles = StyleSheet.create({
    chatBox: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: 'transparent',
    },
    chatButton: {
      width: '90%',
      height: 50.09,
      borderRadius: 33,
      backgroundColor: '#75417C',
      flexDirection: 'row',
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      padding:10
       // Adjust margin as needed
    },
  });
   