 import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import {
    View,
    StyleSheet,
    ImageBackground,
    Image,                 //otp verification
    Text,
    TextInput,
    TouchableHighlight
} from 'react-native'




import Subscription from './src/Drawer/Subscription';
import ShareApp from './src/Drawer/ShareApp';
import Referrals from './src/Drawer/Referrals';
import Notification from './src/Drawer/Notification';
import Logout from './src/Drawer/Logout';
import Downloads from './src/Drawer/Downloads';
import DrawerBarDesign from './src/Drawer/DrawerBarDesign';

import Chat from './src/BottomTab/Chat'
import Final from './src/BottomTab/Final';
import Home from './src/BottomTab/Home';
import Pause from './src/BottomTab/Profile';
import Profile from './src/BottomTab/Pause';

import Icon from 'react-native-vector-icons/Ionicons';

import Firsttab from './src/Firsttab';
 import Secondtab from './src/Secondtab';
 import Thirdtab from './src/Thirdtab';
 import Fourthtab from './src/Fourthtab';
 import Fifthtab from './src/Fifthtab';
 import Sixthtab from './src/Sixthtab';
 import Seventhtab from './src/Seventhtab';
 import Eighthtab from './src/Eighthtab';

 import ChapterTest from './src/Tab/ChapterTest';
import QNBank from './src/Tab/QNBank';
import Resourses from './src/Tab/Resources';
import Videos from './src/Tab/Videos';
import Biology from './src/Biology'






const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createMaterialTopTabNavigator()
const bottom = createBottomTabNavigator()


function Mystack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name = 'Firsttab'
            component={Firsttab}
            options={{headerShown:false}}/>
            
            <Stack.Screen
            name = 'Secondtab'
            component={Secondtab}
            options={{headerShown:false}}/>

            <Stack.Screen
            name = 'Thirdtab'
            component={Thirdtab}
            options={{headerShown:false}}/>

            <Stack.Screen
            name = 'Fourthtab'
            component={Fourthtab}
            options={{headerShown:false}}/>

            <Stack.Screen
            name = 'Fifthtab'
            component={Fifthtab}
            options={{headerShown:false}}/>

<           Stack.Screen
            name = 'Sixthtab'
            component={Sixthtab}
            options={{headerShown:false}}/>

            <Stack.Screen
            name = 'Seventhtab'
            component={Seventhtab}
            options={{headerShown:false}}/>

            <Stack.Screen
            name = 'Eighthtab'
            component={Eighthtab}
            options={{headerShown:false}}/>

            <Stack.Screen
            name = 'bottom'
            component={MybottomTab}
            options={{headerShown:false}}/>

            <Stack.Screen
            name = 'Drawer'
            component={MyDrawer}
            options={{headerShown:false}}/>
            
            <Stack.Screen
            name = 'Tab'
            component={MyTab}
            options={{headerShown:false}}/>

            <Stack.Screen
            name = 'Biology'
            component={Biology}
            options={{headerShown:false}}/>


        </Stack.Navigator>
    )
}

function MyDrawer(){
    return(
        <Drawer.Navigator
        drawerContent={(props)=><DrawerBarDesign{...props}/>}>
            <Drawer.Screen
            name='Subscription'
            component={Subscription}
            headerShown={{headerShown:false}}/>
            <Drawer.Screen
            name='Downloads'
            component={Downloads}
            headerShown={{headerShown:false}}/>
            <Drawer.Screen
            name='Notification'
            component={Notification}
            headerShown={{headerShown:false}}/>
            <Drawer.Screen
            name='Referrals'
            component={Referrals}
            headerShown={{headerShown:false}}/>
            <Drawer.Screen
            name='ShareApp'
            component={ShareApp}
            headerShown={{headerShown:false}}/>
            <Drawer.Screen
            name='Logout'
            component={Logout}
            headerShown={{headerShown:false}}/>
        </Drawer.Navigator>
    )
}

function MyTab(){
    return(
    <View style={{flex:1}}>
        <View style={{backgroundColor:'#002233',width:'100%',height:270}}>
        <View style={{ flexDirection:"row"}}>
                    <View style={{height:35,width:35,backgroundColor:"#002233",borderRadius:5,borderColor:"white",borderWidth:1.5,
                                    alignItems:"center",justifyContent:"center",marginTop:40,marginLeft:30,}}>
                    <Icon name="today" size={16} color="#24fc03" style={{marginLeft:4}}/>  
                    </View>
                    <Text style={{fontSize:22,fontWeight:"400",color:"white",marginLeft:100,marginTop:41}}>Biology</Text>
            </View>
                    <Text style={{fontSize:25,fontWeight:"900",color:"white",marginLeft:30,marginTop:30}}>Long chapter name can</Text>
                    <Text style={{fontSize:25,fontWeight:"900",color:"white",marginLeft:30,marginTop:0}}>be shown here</Text>
                    <View style={{height:40,width:300,backgroundColor:"#002233",flexDirection:"row",marginLeft:20,marginTop:3}}>
                        
                            <View style={{flexDirection:"row",marginLeft:9}}>
                                 <Icon name="radio-button-on" size={18} color="#07e354"style={{ marginTop:6,
                                                                                       marginLeft:0}}/>
                                 <Text style={{ fontSize:11,
                                                color:'#07e354',
                                                fontWeight:'bold',
                                                marginTop:8,
                                                marginLeft:3}}>Chaper 1</Text>

                                 <Icon name="radio-button-on" size={18} color="#07e354"style={{ marginTop:6,
                                                                                       marginLeft:15}}/>
                                 <Text style={{ fontSize:11,
                                                color:'#07e354',
                                                fontWeight:'bold',
                                                marginTop:8,
                                                marginLeft:3}}>3 parts</Text>
                            </View>
                        
                    </View>

        </View>

        <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle:{fontSize:14},
            tabBarIconStyle:{width:100},
            tabBarStyle:{backgroundColor:'#002233'}
            
        }}>
            <Tab.Screen
            name='Videos'
            component={Videos}
            options={{
                tabBarActiveTintColor:'blue',
                tabBarInactiveTintColor:'white',
                tabBarIcon: ({focused})=> 
                focused ? <Icon name="play-circle" size={24} color='blue'/>:<Icon name='play-circle' size={24} color='grey'/>
            }}/>
             
            
            <Tab.Screen
            name='ChapterTest'
            component={ChapterTest}
            options={{
                tabBarActiveTintColor:'blue',
                tabBarInactiveTintColor:'white',
                tabBarIcon: ({focused})=> 
                focused ? <Icon name='today' size={24} color='blue'/>:<Icon name='today' size={24} color='grey'/>
            }}
            />
            <Tab.Screen
            name='Resources'
            component={Resourses}
            options={{
                tabBarActiveTintColor:'blue',
                tabBarInactiveTintColor:'white',   
                tabBarIcon: ({focused})=> 
                focused ? <Icon name='today' size={24} color='blue'/>:<Icon name='today' size={24} color='grey'/>
                
            }}

            />
            <Tab.Screen
            name='QNBank'
            component={QNBank}
            options={{
                tabBarActiveTintColor:'blue',
                tabBarInactiveTintColor:'white',
                tabBarIcon: ({focused})=>
                focused ? <Icon name='search' size={24} color='blue'/>:<Icon name='search' size={24} color='grey'/> 
            }}
            />
        </Tab.Navigator>
        </View>
    )
}

function MybottomTab(){
    return(
    <bottom.Navigator
        screenOptions={{
            tabBarLabelStyle:{fontSize:14},
            tabBarIconStyle:{width:100},
                tabBarStyle:{backgroundColor:'white',position:"absolute",bottom:15,height:70,width:369,borderRadius:10,shadowColor:"black",shadowOpacity:0.05,marginHorizontal:17,shadowOffset:{width:10,height:10}}
            
        }}>
            <bottom.Screen
            name='Chat'
            component={Chat}
            options={{
                headerShown:false,
                tabBarLabel: '',tabBarLabelStyle:{ fontSize:13},
                tabBarIcon: ({focused})=> 
             <View style={{flexDirection:"row",position:"absolute",top:15,marginLeft:0,backgroundColor:"white"}}>
                <View>
                    <Icon name={focused ? 'home':'home-outline'} size={22} color={focused ? '#00cc00':'grey'} style={{marginTop:focused ? -5:3,marginLeft:0}}/>
                    <Icon name="ios-ellipse" size={6} color={focused ? 'black':'white'} style={{marginTop:3,marginLeft:8}}/>
                </View>
                <Text style={{fontSize:focused ?1:9,color:focused ? "white":"grey",marginLeft:3,marginTop:8}}>Home</Text>
            </View>
            }}/>
             
            
            <bottom.Screen
            name='Final'
            component={Final}
            options={{
                headerShown:false,
                tabBarLabel: '',tabBarLabelStyle:{ fontSize:13},
                tabBarIcon: ({focused})=> 
             <View style={{flexDirection:"row",position:"absolute",top:15,marginLeft:0,backgroundColor:"white"}}>
                <View>
                    <Icon name={focused ? 'play':'play-outline'} size={22} color={focused ? '#00cc00':'grey'} style={{marginTop:focused ? -5:3,marginLeft:0}}/>
                    <Icon name="ios-ellipse" size={6} color={focused ? 'black':'white'} style={{marginTop:3,marginLeft:8}}/>
                </View>
                <Text style={{fontSize:focused ?1:9,color:focused ? "white":"grey",marginLeft:3,marginTop:8,marginRight:9}}>Resend</Text>
            </View>
            }}
            />
            <bottom.Screen
            name='Home'
            component={Home}
            options={{
                headerShown:false,
                tabBarLabel: '',tabBarLabelStyle:{ fontSize:13},
                tabBarIcon: ({focused})=> 
             <View style={{flexDirection:"row",position:"absolute",top:15,marginLeft:0,backgroundColor:"white"}}>
                <View>
                    <Icon name={focused ? 'reader':'reader-outline'} size={22} color={focused ? '#00cc00':'grey'} style={{marginTop:focused ? -5:3,marginLeft:0}}/>
                    <Icon name="ios-ellipse" size={6} color={focused ? 'black':'white'} style={{marginTop:3,marginLeft:8}}/>
                </View>
                <Text style={{fontSize:focused ?1:9,color:focused ? "white":"grey",marginLeft:3,marginTop:10}}>Exams</Text>
            </View>
            }}

            />
            <bottom.Screen
            name='Pause'
            component={Pause}
            options={{
                headerShown:false,
                tabBarLabel: '',tabBarLabelStyle:{ fontSize:13},
                tabBarIcon: ({focused})=> 
             <View style={{flexDirection:"row",position:"absolute",top:15,marginLeft:0,backgroundColor:"white"}}>
                <View>
                    <Icon name={focused ? 'ios-person':'ios-person-outline'} size={22} color={focused ? '#00cc00':'grey'} style={{marginTop:focused ? -5:3,marginLeft:0}}/>
                    <Icon name="ios-ellipse" size={6} color={focused ? 'black':'white'} style={{marginTop:3,marginLeft:8}}/>
                </View>
                <Text style={{fontSize:focused ?1:9,color:focused ? "white":"grey",marginLeft:3,marginTop:8}}>Profile</Text>
            </View>
            }}
            />
            <bottom.Screen
            name='Profile'
            component={Profile}
            options={{
                headerShown:false,
                tabBarLabel: '',tabBarLabelStyle:{ fontSize:13},
                tabBarIcon: ({focused})=> 
             <View style={{flexDirection:"row",position:"absolute",top:15,marginLeft:0,backgroundColor:"white"}}>
                <View>
                    <Icon name={focused ? 'mail':'mail-outline'} size={22} color={focused ? '#00cc00':'grey'} style={{marginTop:focused ? -5:3,marginLeft:0}}/>
                    <Icon name="ios-ellipse" size={6} color={focused ? 'black':'white'} style={{marginTop:3,marginLeft:9}}/>
                </View>
                <Text style={{fontSize:focused ?1:9,color:focused ? "white":"grey",marginLeft:3,marginTop:8}}>Contact</Text>
            </View>
            }}
            />
        </bottom.Navigator>
    )

}



export default function App(){
    return(
        <NavigationContainer>
            <Mystack/>
        </NavigationContainer>
       
    )
}
