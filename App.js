import React from 'react';
import { StyleSheet, Text, View , ScrollView } from 'react-native';
import {colors} from './styles'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello wedorld</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});