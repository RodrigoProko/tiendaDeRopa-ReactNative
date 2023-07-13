import React from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans-regular': require('./src/assets/fonts/OpenSans-Regular.ttf'),
  });
};


const App = () => {
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
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
