import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    'open-sans-regular': require('./src/assets/fonts/OpenSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
