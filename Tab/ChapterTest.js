import React,{Component} from 'react'
import {
     View,
     StyleSheet,
     ImageBackground,
     Image,
     Text,
     TextInput,
     TouchableHighlight
} from 'react-native'

export default class About_us extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textview}>hi this is about us page</Text>
            </View>
        )
    }

    
}


const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
        
    },textview:{
        fontSize:20,
        fontWeight:"bold",
      //  marginTop:20,
        color:'#ffffff'
    }
})