import React from 'react';
import { StyleSheet, ScrollView , } from 'react-native';
import { colors } from './styles'
import  HotelView from './Screens/HotelView'


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <HotelView/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.darkBg,
  },
});
