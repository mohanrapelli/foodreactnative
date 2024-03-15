import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Screens/Welcome';
import Register from './Screens/Register';
import Bottom from './Screens/Bottom';
import Coin from './Screens/Coin';
import Resetpass from './Screens/Resetpass';
import Referal from './Screens/Referal';
import Shop from './Screens/Shop';
import Profile from './Screens/Profile';
import Googleplay from './Screens/Googleplay';
import Email from './Screens/Email';
import Flipcart from './Screens/Flipcart';
import Upcoming from './Screens/Upcoming';
import Live from './Screens/Live';
import Earncoins from './Screens/Earncoins';
import Confrimpass from './Screens/Confrimpass';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Settings from './Screens/Settings';
import Language from './Screens/Language';
import Usdt from './Screens/Usdt';
import Watch from './Screens/Watch';
import Color from './Screens/Color';
import Redeem from './Screens/Redeem';
import State from './Screens/State';
import Country from './Screens/Country';
import Help from './Screens/Help';
import Chatroom from './Screens/Chatroom';
import Paymentmethod from './Screens/Paymentmethod';
import Contactus from './Screens/Contactus';
import Headset from './Screens/Headset';
import Phone from './Screens/Phone';
import Placeorder from './Screens/Placeorder';
import Orderhistory from './Screens/Orderhistory';
import Rewards from './Screens/Rewards';
import Freefire from './Screens/Freefire';
import Upicash from './Screens/Upicash';
import Verifyphone from './Screens/Verifyphone';
import Otp from './Screens/Otp';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer
    >
      <Stack.Navigator initialRouteName="Welcome"

        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Verifyphone"
          component={Verifyphone}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Confrimpass"
          component={Confrimpass}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Resetpass"
          component={Resetpass}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Upicash"
          component={Upicash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Email"
          component={Email}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Freefire"
          component={Freefire}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Flipcart"
          component={Flipcart}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Googleplay"
          component={Googleplay}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Usdt"
          component={Usdt}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Redeem"
          component={Redeem}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Rewards"
          component={Rewards}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Orderhistory"
          component={Orderhistory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Placeorder"
          component={Placeorder}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Phone"
          component={Phone}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Headset"
          component={Headset}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chatroom"
          component={Chatroom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Watch"
          component={Watch}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Paymentmethod"
          component={Paymentmethod}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Contactus"
          component={Contactus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Help"
          component={Help}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Country"
          component={Country}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Color"
          component={Color}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="State"
          component={State}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Language"
          component={Language}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Earncoins"
          component={Earncoins}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Live"
          component={Live}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Upcoming"
          component={Upcoming}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bottom"
          component={Bottom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Coin"
          component={Coin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Shop"
          component={Shop}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Referal"
          component={Referal}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
