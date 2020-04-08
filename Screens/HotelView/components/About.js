import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {gs , colors } from '../../../styles'


const hotel = {
    name: "Sofitel Hotel Ivoire",
    price: "XOF15000",
    location: "Abidjan , Cote-d'Ivoire",
    about: `Situé dans le quartier chic d’Abidjan, le Sofitel Abidjan Hotel Ivoire propose une connexion Wi-Fi gratuite, 4 restaurants, 5 bars et une piscine extérieure.

    Dotées d’un balcon et offrant une vue sur la ville, toutes les chambres comprennent la climatisation, une télévision et une machine à café. Leur salle de bains privative est pourvue d’une baignoire et d’une douche.
    
    Sur place, vous trouverez un court de tennis, une salle de sport (Sofitel Fit) et le spa Sofitel. De plus, le Sofitel Abidjan Hotel Ivoire dispose de 18 salles pour vos événements et d’un auditorium de 1 650 places.
    
    Vous bénéficierez aussi d’un parking gratuit. Par ailleurs, vous pourrez pratiquer de nombreuses activités sur place ou dans les environs, comme le golf.
    
    Enfin, sur demande, vous profiterez d’un service de navette pour l'aéroport Félix Houphouët-Boigny, accessible à 19 km du Sofitel Abidjan Hotel Ivoire.
    
    Ce quartier (Cocody) est un choix idéal pour les voyageurs qui s'intéressent à ces thèmes : la relaxation, la nourriture et la plage.`
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
       ...gs.sectionContainer
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