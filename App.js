import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './Screens/SignIn';
import Forgotpage from './Screens/Forgotpage';
import Home from './Screens/Home';
import Search from './Screens/Search';
import Order from './Screens/Order';
import Profile from './Screens/Profile';
import Homee from './Screens/Homee';
import Edit from './Screens/Edit';
import Payment from './Screens/Payment';
import Fav from './Screens/Fav';
import Reset from './Screens/Reset';
import Changepass from './Screens/Changepass';
import Phoneone from './Screens/Phoneone';
import Phonetwo from './Screens/Phonetwo';
import Adress from './Screens/Adress';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer
  >
      <Stack.Navigator initialRouteName="SignIn"
      
      screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgotpage"
          component={Forgotpage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Homee"
          component={Homee}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Order"
          component={Order}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Edit"
          component={Edit}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Adress"
          component={Adress}
          options={{ headerShown: false }}
        />
        
         <Stack.Screen
          name="Fav"
          component={Fav}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Phoneone"
          component={Phoneone}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Phonetwo"
          component={Phonetwo}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Reset"
          component={Reset}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Changepass"
          component={Changepass}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
