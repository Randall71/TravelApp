import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {gs, colors} from '../../../styles'

export default function About(){
    return(
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>ABOUT ME</Text>
            <Text style={styles.about}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        margin: 25
    },
    about:{
        fontSize: 15,
        fontWeight: "500", 
        color: colors.darkHl,
        marginTop: 8,
        lineHeight: 22
    }
})