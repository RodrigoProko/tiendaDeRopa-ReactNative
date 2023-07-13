import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import Colors from '../constants/Colors';
import products from '../products';

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [fontsLoaded] = useFonts({
    'open-sans-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
  });

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchText.toLowerCase()) ||
          product.description.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleProductSelect = (product) => {
    navigation.navigate('Product', { product });
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductSelect(item)}>
      <View style={styles.productItem}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>$ {item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Clothing Store!</Text>
      <TextInput
        style={styles.input}
        placeholder="Search products..."
        onChangeText={setSearchText}
        value={searchText}
      />
      <Button title="Search" onPress={handleSearch} color={Colors.primary} />
      {filteredProducts.length > 0 ? (
        <FlatList
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>No products found.</Text>
      )}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'open-sans-regular',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: 'open-sans-regular',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default HomeScreen;
