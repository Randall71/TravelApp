import React from 'react';
import { View, Text, StyleSheet , Image } from 'react-native';



export default function Header() {
    return (
        <View>
            <Image source={require("../../../assets/hotel.jpg")} style={{width: "100%" , height: 300}} />
        </View>
    )
}


