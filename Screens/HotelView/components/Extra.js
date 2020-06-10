import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { gs, colors } from '../../../styles'



export default function Extra(){
    const extras = [
        'Paiement Par Carte Banquaire',
        'Désactivation du WIFI après minuit',
        'Interdiction de nager après 22h',
        '10Kgs de bagages par personne',


    ]
    return(
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>En Savoir Plus</Text>

            <View style={styles.list}>
                {extras.map((extra, key)=>{
                    return(
                        <Text style={styles.listItem} key={key}>&mdash; {extra}</Text>
                    )
                })}
            </View>
            <View style={{marginTop: 32}}>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={{fontWeight: "700",color: "#fff"}}>Filter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        ...gs.sectionContainer,
        marginBottom: 64,
        marginTop: 8
    },
    list:{
        marginTop: 16,
        marginLeft: 8,

    },
    listItem:{
        color: colors.textSec,
        marginVertical: 8
    },
    filterButton:{
        ...gs.button,
        paddingVertical: 16
    }
})