import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import PremiereCp from '../screens/1cp';
import DeuxiemeCp from '../screens/2cp';
import PremiereCs from '../screens/1cs';
import TroixiemeCs from '../screens/3cs';
import DeuxiemeCs from '../screens/2cs';
import DeuxiemeCpAutre from '../screens/2cpAutre';

const Stack = createStackNavigator();


const HomeStackScreens = () => {

    return(
        <Stack.Navigator mode='card' screenOptions={{
            headerTintColor : '#FFF' ,
            gestureDirection : 'horizontal',
            headerStyle : {
                backgroundColor : '#001C34',
   
            }
        }}  >
            <Stack.Screen options={{gestureDirection : 'horizontal', headerTitleStyle : { letterSpacing : 1.5}}} name='Home' component={HomeScreen} />
            <Stack.Screen name='1Cp' component={PremiereCp} options={{headerTitleStyle : { letterSpacing : 1.5}}} />
            <Stack.Screen name='2Cp' component={DeuxiemeCp} options={{headerTitleStyle : { letterSpacing : 1.5}}} />
            <Stack.Screen name='1Cs' component={PremiereCs} options={{headerTitleStyle : { letterSpacing : 1.5}}} />
            <Stack.Screen name='2Cs' component={DeuxiemeCs} options={{headerTitleStyle : { letterSpacing : 1.5}}} />
            <Stack.Screen name='3Cs' component={TroixiemeCs} options={{headerTitleStyle : { letterSpacing : 1.5}}}  />
        </Stack.Navigator>
    )

}

export default HomeStackScreens

