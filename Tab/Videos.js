import React,{Component} from 'react'
import {
     View,
     Text,
     StyleSheet,ScrollView,TouchableOpacity,Image, ImageBackground
} from 'react-native'
import { green100 } from 'react-native-paper/lib/typescript/styles/colors';
import  Icon from "react-native-vector-icons/MaterialIcons";
     
    class Box extends Component{
        render(){
            return(
                <View style={{height:300,width:350,backgroundColor:"white",marginTop:20,borderRadius:5}}>
          <ImageBackground source={require('../../assets/image.jpg')} style={{height:180,width:350,}} imageStyle={{borderTopRightRadius:5,borderTopLeftRadius:5}}>
                    <TouchableOpacity style={{backgroundColor:"#07e354",height:35,width:90,borderRadius:5,
                                  marginTop:130,marginLeft:240,alignItems:"center",justifyContent:"center"}} >
                                    <Text style={{fontSize:15,fontWeight:"bold",color:"white"}}>Biology</Text></TouchableOpacity>
                </ImageBackground>               
               
                
                    <Text style={styles.chaptername2}>long chapter name can be shown</Text>
                    <Text style={styles.chaptername3}>here</Text>
                    <View style={{height:40,width:0,backgroundColor:"red",flexDirection:'row',
                                  marginLeft:20,marginTop:7}}>
                                     <TouchableOpacity style={styles.buttonstyle1} > 
                        <View style={{flexDirection:"row",}}>
                             <Icon name="radio-button-on" size={18} color="grey"style={styles.icon2}/>
                             <Text style={styles.buttontext}>Chapter1</Text>
                        </View>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.buttonstyle1}> 
                        <View style={{flexDirection:"row"}}>
                             <Icon name="radio-button-on" size={18} color="grey"style={styles.icon2}/>
                             <Text style={styles.buttontext}> part 1</Text>
                        </View>
                     </TouchableOpacity> 
                    </View>  
               </View>

            )
        }

    }

 export default class VideosB extends Component{
render(){
    return (
       < View style={styles.viewstyle}>
             <ScrollView>
             <View style={{height:300,width:350,backgroundColor:"white",marginTop:20,borderRadius:5}}>
          <ImageBackground source={require('../../assets/image.jpg')} style={{height:180,width:350,}} imageStyle={{borderTopRightRadius:5,borderTopLeftRadius:5}}>
                    <TouchableOpacity style={{backgroundColor:"#07e354",height:35,width:90,borderRadius:5,
                                  marginTop:130,marginLeft:240,alignItems:"center",justifyContent:"center"}}
                                  onPress={()=>this.props.navigation.navigate("Biology")}>
                                    <Text style={{fontSize:15,fontWeight:"bold",color:"white"}}>Biology</Text></TouchableOpacity>
                </ImageBackground>               
               
                
                    <Text style={styles.chaptername2}>long chapter name can be shown</Text>
                    <Text style={styles.chaptername3}>here</Text>
                    <View style={{height:40,width:0,backgroundColor:"red",flexDirection:'row',
                                  marginLeft:20,marginTop:7}}>
                                     <TouchableOpacity style={styles.buttonstyle1} > 
                        <View style={{flexDirection:"row",}}>
                             <Icon name="radio-button-on" size={18} color="grey"style={styles.icon2}/>
                             <Text style={styles.buttontext}>Chapter1</Text>
                        </View>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.buttonstyle1}> 
                        <View style={{flexDirection:"row"}}>
                             <Icon name="radio-button-on" size={18} color="grey"style={styles.icon2}/>
                             <Text style={styles.buttontext}> part 1</Text>
                        </View>
                     </TouchableOpacity> 
                    </View>  
               </View>

                   <Box></Box>
                   <Box></Box>
             </ScrollView>
       </View>

    )
}
 }
 const styles=StyleSheet.create({

viewstyle:{ 
    height:'100%',
    width:'100%',
    backgroundColor:'#e9ebf0',
    alignItems:'center',
    justifyContent:'center'
},
textstyle:{
    color:'black',
    fontSize:20,
    fontWeight:'bold'
},

 viewstyle4:{  height:200, width:'100%', backgroundColor:'white', marginLeft:33,marginTop:12,
borderRadius:6},
chaptername2:{
    color:'#002233',
    fontSize:18,
    fontWeight:'bold',
    marginLeft:25,marginTop:15
},
chaptername3:{
    color:'#002233',
    fontSize:20,
    fontWeight:'bold',
    marginLeft:25
},
buttontext:{
    fontSize:11,
    color:'grey',
    fontWeight:'bold',
    marginTop:8,
    marginLeft:6 
   },
   buttonstyle1:{
    height:30,
    width:95,
    marginLeft:0,
    marginTop:0,
    backgroundColor:'white',marginRight:0,
  
   },
   icon2:{
    marginTop:6,
    marginLeft:0
  
   },

})
