import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Feather} from '@expo/vector-icons'
import {gs , colors} from '../../../styles'

export default function Bookmark() {
    return (
        <View style={styles.bookmark}>
            <Feather name="bookmark" color={colors.pink} size={24}   />
        </View>
    )
}



const styles = StyleSheet.create({
    bookmark: {
        position: 'absolute',
        width: 50, 
        height: 50,
        right: 40, 
        top: -25,
        backgroundColor: '#fff',
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10
    }
})