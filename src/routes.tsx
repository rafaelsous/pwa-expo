import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Main from './pages/Main';
import Camera from './pages/Camera';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <Feather name="home" size={20} color={color} />
          }}
          name="Main"
          component={Main}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <Feather name="camera" size={20} color={color} />,
          }}
          name="Camera"
          component={Camera} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});