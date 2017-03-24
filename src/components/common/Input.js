import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText }) => (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{ width: 100, height: 20 }}
      />
    </View>
);

export { Input };
