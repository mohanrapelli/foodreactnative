import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Referral() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.text1}>Referral System</Text>
          <Text style={styles.text1}>Refer your friends</Text>
          <Text style={{
            textAlign: 'center',
            color: '#ffffff',
            fontSize: 24,
            fontWeight: '800',
            marginBottom:17
          }}>and earn</Text>
        </View>

        <View style={styles.card11}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require('../assets/boxgift.gif')}
          />
        </View>

        <View style={styles.card12}>
          <Image
            style={{ width: 40, height: 30 }}
            source={require('../assets/starrr.gif')}
          />
          <Text style={styles.text7}>100</Text>
        </View>

        <View>
          <Text style={styles.text2}>Your Friends gets 10 coins on signup and</Text>
          <Text style={styles.text2}>You get 100 coins every time</Text>
        </View>

        <View style={styles.card1}>
          <Text style={styles.text3}>Your Referral code</Text>
          <Text style={styles.text4}>1234567trewquhvyftf</Text>
        </View>

        <View>
          <Text style={styles.text5}>Share Your Referral Link via</Text>
        </View>

        <View style={styles.box}>
          <Image
            style={{ width: 150, height: 50, marginLeft: 20 }}
            source={require('../assets/whatsapp.gif')}
          />
          <Image
            style={{ width: 150, height: 50, marginLeft: 20 }}
            source={require('../assets/facebook.gif')}
          />
        </View>
        <View style={styles.box}>
          <Image
            style={{ width: 150, height: 50, marginLeft: 20 }}
            source={require('../assets/insta.gif')}
          />
          <Image
            style={{ width: 150, height: 50, marginLeft: 20 }}
            source={require('../assets/telegram.gif')}
          />

        </View>
      </View>

      <View style={styles.rh}>
        <Text style={styles.text6}>Referral History</Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#75147C',

    borderColor: '#75147C',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingBottom: 50,

  },
  text1: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 0,
    marginTop: 20,
    
  },

  text2: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '800',
  },
  card1: {
    backgroundColor: '#D9D9D9',
    width: 200,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    alignItems: 'center',
    alignSelf:'center',
    marginTop: 10,
  },
  text3: {
    textAlign: 'center',
    color: '#0000F5',
    fontWeight: '800',
    marginTop: 5,
  },

  text4: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: '800',
    marginTop: 2,
  },

  text5: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '800',
    marginTop: 20,
    fontSize: 15,
  },

  box: {
    flexDirection: 'row',
    marginTop: 30,
  },

  card11: {
    width: 120,
    height: 100,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    left: 120,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 10,
  },

  card12: {
    flexDirection: 'row',
    width: 80,
    height: 50,
    backgroundColor: 'yellow',
    margin: 10,
    left: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'yellow',
    borderRadius: 10,
  },

  rh: {
    width: 250,
    height: 70,
    backgroundColor: 'green',
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginLeft: 50,
    borderColor: 'green',
    borderRadius: 25,
  },
  text6: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 20
  },

  text7: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: '900',
    fontSize: 15,
    marginRight: 15
  }
});
