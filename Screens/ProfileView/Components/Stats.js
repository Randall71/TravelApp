import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {gs, colors} from '../../../styles'

export default function Stats(){
    return(
        <View style={styles.container}>

            <View style={styles.statContainer}>
                <Text style={styles.statNumber}>47k</Text>
                <Text style={styles.stat}>Followers</Text>
            </View>

            <View style={[styles.statContainer, styles.divider]}>
                <Text style={styles.statNumber}>47k</Text>
                <Text style={styles.stat}>Followers</Text>
            </View>

            <View style={styles.statContainer}>
                <Text style={styles.statNumber}>47k</Text>
                <Text style={styles.stat}>Followers</Text>
            </View>


            
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        ...gs.sectionContainer,
        ...gs.rowBetween,
        marginHorizontal: 16,
        borderRadius: 16,
        marginTop: -40
    },
    statContainer:{
        ...gs.center,
        flex: 1,
    },
    statNumber:{
       fontSize: 20,
       fontWeight: "600",
       color: colors.text 
    },
    stat:{
        fontSize: 11,
        fontWeight: "600",
        letterSpacing: 1,
        textTransform: "uppercase",
        color: colors.lightHL,
        marginTop: 6,

    },
    divider:{
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: colors.darkHl
    }

})