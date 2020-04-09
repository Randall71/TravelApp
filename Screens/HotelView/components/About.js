import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {gs , colors } from '../../../styles'


const hotel = {
    name: "Sofitel Hotel Ivoire",
    price: "XOF15000",
    location: "Abidjan , Cote-d'Ivoire",
    about: `Situé dans le quartier chic d’Abidjan, le Sofitel Abidjan Hotel Ivoire propose une connexion Wi-Fi gratuite, 4 restaurants, 5 bars et une piscine extérieure.`
    

} 


export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{hotel.name}</Text>
            <Text style={styles.info}>{hotel.price} &#8226; {hotel.location}</Text>
            <View style={styles.divider} />

            <Text style={styles.sectionTitle}>About {hotel.name}</Text>

            <Text style={styles.about}>{hotel.about} </Text>
         </View>
    )
}


const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg
    },
    title: {
        fontSize: 30,
        color: colors.text,
    },
    info: {
        color: colors.textSec,
        fontWeight: "600",
        marginTop: 4
    },
    divider: {
        borderBottomColor: "#444",
        borderBottomWidth: 1,
        marginVertical: 24
    },
    sectionTitle: {
        ...gs.sectionTitle
    },
    about: {
        fontSize: 13,
        fontWeight: "600",
        color: colors.textSec,
        marginTop: 6,
        lineHeight: 20
    }
})