import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../b10/HomeScreen';
import ScanScreen from '../b10/ScanScreen';
import YourCart from '../b10/YourCart';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Cart" component={YourCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}