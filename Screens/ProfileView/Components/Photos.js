import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {gs, colors} from '../../../styles'


const photos = [
    require("../../../assets/travel1.jpg"),
    require("../../../assets/travel2.jpg"),
    require("../../../assets/travel3.jpg"),
    require("../../../assets/travel4.jpg"),
    require("../../../assets/travel5.jpg"),
    require("../../../assets/travel6.png"),
    require("../../../assets/travel7.jpg"),
    require("../../../assets/travel8.jpeg"),
]


export default function Photos(){

  
    return(
        <View style={[gs.sectionContainer, {marginTop: 8 }]}>
            <Text style={gs.sectionTitle}>Mes Photos</Text>

            <View style={styles.photosContainer}>
                {photos.map((photo, index)=>{
                return <Image
                    source={photo} 
                    key={index} 
                    style={[styles.photo,{
                        marginRight: index + 1 % 3 === 0 ? 0 : 12
                    }]} 
                />
            })}
            </View>

        </View>
    )
}


const styles =  StyleSheet.create({
    photosContainer:{
        flexDirection: 'row',
        flexWrap: "wrap",
        marginTop: 16
    },
    photo:{
        width: 85,
        height: 85,
        borderRadius: 8,
    }
})