import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { gs, colors } from '../../../styles';
import {Entypo} from '@expo/vector-icons'


export default function Location(){
    return(
        <View style={styles.container}>

           <View style={{width: 75, height: 75}}>
                <Image 
                source={require("../../../assets/icon.png")}
                style={{flex: 1, width: 100}}
                resizeMode="center"
                 />
           </View>

           <View style={{flex: 1, margin: 5}}>
               <Text style={styles.location}>Abidjan, Cote-d'Ivoire</Text>
               <Text style={styles.distance}>322 462 km²</Text>
           </View>
           <Entypo name="chevron-right" size={24} color={colors.darkHl} />
           
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        ...gs.rowCenter,
        backgroundColor: colors.lighBg,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    location:{
        fontSize: 18,
        color: colors.text,
        fontWeight: "500"
    },
    distance:{
        ...gs.smallText,
        color: colors.darkHl,
        marginTop: 4,
        textTransform: "uppercase"
    }

})