import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {gs, colors} from '../../../styles'


// const photos = [
//     require("../../../assets/travel1.jpg"),
//     require("../../../assets/travel2.jpg"),
//     require("../../../assets/travel3.jpg"),
//     require("../../../assets/travel4.jpg"),
//     require("../../../assets/travel5.jpg"),
//     require("../../../assets/travel6.jpg"),
//     require("../../../assets/travel7.jpg"),
//     require("../../../assets/travel8.jpg"),
// ]


export default function Photos(){
    return(
        <View style={gs.sectionContainer, {marginTop: 8}}>
            <Text>Photos de Voyage</Text>
        </View>
    )
}


const styles =  StyleSheet.create({
    container:{

    }
})