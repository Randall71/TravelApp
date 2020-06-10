import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Image, } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import {gs, color} from '../../../styles'


export default function Adress(){
    return(
        <View> 
            <View style={{backgroundColor: "#000"}}>
                <Image source={require("../../../assets/hotel.jpg")} style={{height: 200, opacity: 0.2}} />
            </View>

            <View style={styles.adressContainer}>
                
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

})