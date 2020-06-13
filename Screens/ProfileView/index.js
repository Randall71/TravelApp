import React from 'react'
import {StyleSheet, View, ScrollView, Text, ActivityIndicator, StatusBar} from 'react-native'
import{gs, colors} from '../../styles'
import Header from './Components/Header'
import Stats from './Components/Stats'
import About from './Components/About'
import Location from './Components/Location'
import Photos from './Components/Photos'

export default class index extends React.Component{
   
   state = {
       user: {},
       isLoading: true
   }
   

   async componentDidMount (){

     try{
         let res = await fetch("https://randomuser.me/api/?inc=name,picture,location&noinfo")
         let users = await res.json()

         this.setState({user: users.results[0]},()=>{
             this.setState({isLoading: false})
         })
    }catch(err){
        console.log(err)
    }

   };
   
   
    render(){

        if(this.state.isLoading){
            return(
                <View style={[styles.container, gs.center]}>
                    <StatusBar barStyle="light-content" />
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <Header user={this.state.user}/>
                <Stats/>
                <About/>
                <Location/>
                <Photos/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.darkBg,

    }
})