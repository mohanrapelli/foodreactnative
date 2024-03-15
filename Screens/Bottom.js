import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Coin from './Coin';
import Referal from './Referal';
import Shop from './Shop';
import Profile from './Profile';


const Tab = createBottomTabNavigator();

export default function Bottom() {
  return (

    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#75147C',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="game-controller" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Referal"
        component={Referal}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="gift" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="shopping-cart" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
       <Tab.Screen
        name="Coin"
        component={Coin}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="trophy" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>

  );
}
