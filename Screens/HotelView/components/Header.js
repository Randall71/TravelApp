import React from 'react';
import { View, StyleSheet , Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import {gs} from '../../../styles'
  

export default function Header() {
    return (
        <View> 
            <Image source={require("../../../assets/hotel.jpg")} style={{ width: "100%", height: 300 }} />
            
            <View style={styles.topButtons}>
                
                <AntDesign sign name="close" size={24} color="#fff" />
                
                
                <View style={{flexDirection: 'row', alignItems: 'center'}} >
                    <AntDesign name="save" size={24}  style={styles.topButtonRight}  />
                    <AntDesign name="sharealt" size={24}  style={styles.topButtonRight}  />
                    <AntDesign name="dots-three-vertical" size={24}  style={styles.topButtonRight} />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    topButtons: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        position: 'absolute',
        top: 35,
        left: 32,
        right: 32,
    },
    topButtonRight: {
        marginLeft: 12, 
        color: "#fff", 
    }
})


