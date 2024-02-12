import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile'; 
import Search from './Search';
import Homee from './Homee';
import Order from './Order';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'red',
        }}
      >
        <Tab.Screen
          name="Homee"
          component={Homee}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
            headerShown: false, 
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Order"
          component={Order}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart" color={color} size={size} />
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
      </Tab.Navigator>
   
  );
}
