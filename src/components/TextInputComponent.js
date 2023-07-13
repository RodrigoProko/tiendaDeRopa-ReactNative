import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const TextInputComponent = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default TextInputComponent;
