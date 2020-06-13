import React from 'react';
import { StyleSheet, ScrollView , } from 'react-native';
import { colors } from './styles'
import  HotelView from './Screens/HotelView'
import ProfileView from './Screens/ProfileView'


export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* <HotelView/> */}
      <ProfileView/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.darkBg,
  },
});
