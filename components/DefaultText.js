import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const DefaultText = ({ children, style }) => {
  return <Text style={{ ...style, ...styles.text }}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
  },
});

export default DefaultText;
