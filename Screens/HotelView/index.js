import React from 'react';
import { View, StyleSheet , StatusBar, ScrollView } from 'react-native';
import {colors} from '../../styles'
import Header from './components/Header'
import Bookmark from './components/Bookmark'
import About from './components/About'
import Stats from './components/Stats'
import Amenities from './components/Amenities'
import Adress from './components/Adress'
import Extra from './components/Extra'

export default function index() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Header />
            
            <View>
                <Bookmark />
                <About />
                <Stats />
                <Amenities/>
                <Extra/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1, 
        //Quand j'active alignItems tout disparait comportement à revoir
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: colors.darkBg
    }
})