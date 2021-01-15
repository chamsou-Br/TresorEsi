import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AboutScreen from '../screens/About';

const Stack = createStackNavigator();


const AboutStackScreens = () => {

    return(
        <Stack.Navigator headerMode="screen" screenOptions={{
            headerTintColor : '#FFF' ,
            headerStyle : {
                backgroundColor : '#001C34',
   
            }
        }} >
            <Stack.Screen  name='About' component={AboutScreen} />
        </Stack.Navigator>
    )

}
export default AboutStackScreens

