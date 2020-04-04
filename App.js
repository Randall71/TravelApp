import React from 'react';
import { StyleSheet, Text, View , ScrollView , } from 'react-native';
import { colors } from './styles'
import  HotelView from './Screens/HotelView'


export default function App() {
  return (
    <View style={styles.container}>
      <HotelView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});