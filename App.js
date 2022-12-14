import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import DriverScan from './Components/DriverScan';
import Home from './Components/Home';
import React from 'react';
import BottomNavBar from './Components/BottomNavBar';
//const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen
    //         name="Home"
    //         component={Home}
    //       />
    //       <Stack.Screen
    //         name="About"
    //         component={About}
    //       />
    //       <Stack.Screen
    //         name="Payment"
    //         component={Payment}
    //       />
    //       <Stack.Screen
    //         name="InspectorScan"
    //         component={InspectorScan}
    //       />
    //     </Stack.Navigator>
    //
    // </NavigationContainer>
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            name="Easy Going"
            component={BottomNavBar}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <BottomNavBar /> */}
    </>
  );
}


