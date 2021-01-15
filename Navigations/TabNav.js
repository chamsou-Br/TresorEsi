import * as React from 'react';
import {useRef , useEffect , useState} from 'react';
import{createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {FontAwesome5} from '@expo/vector-icons'
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import contriptionStack from './contriptionStack';
import { View , Text , TouchableOpacity , Animated} from 'react-native';

const Tab = createBottomTabNavigator();


const TabNavScreens = () => {

    const [opacity,SetOpacisy] = useState(0);
    useEffect(()=> {
        setTimeout(() => {
            SetOpacisy(1);
        },5000)
    })
    return(
        <Tab.Navigator tabBarOptions={
            {      

                activeTintColor : 'tomato',        
                style : {
                    backgroundColor : '#001C34',
                    color : 'white',
                    height : 70,
                    borderTopLeftRadius : 40 ,
                    borderTopRightRadius : 40
                },
                labelStyle : {
                    marginBottom : 15,
                    fontSize: 12,
                    
                },
                iconStyle : {
                    marginTop : 15
                }

            }
        }
      >
            <Tab.Screen name='Home' component={HomeStack}  options={{tabBarIcon : ({focused}) => {
                const   Color = focused ? 'tomato' : '#fff' ;
                return <FontAwesome5 name='home' size={22} color={Color} /> 
            }  }} />
            <Tab.Screen name='About' component={AboutStack} options={{tabBarIcon : ({focused}) => {
                const   Color = focused ? 'tomato' : '#FFF' ;
                return <FontAwesome5 name='cogs' size={22} color={Color} /> 
            }   }}/>
            <Tab.Screen name='Contribtion' component={contriptionStack} options={{tabBarIcon : ({focused}) => {
                const   Color = focused ? 'tomato' : '#FFF' ;
                return <FontAwesome5 name='telegram' size={22} color={Color} /> 
            }   }} />
        </Tab.Navigator>
    )
}


const  TabNav = () => {
    return (
        <NavigationContainer >
            <TabNavScreens />
        </NavigationContainer>

    )
}
export default TabNav
