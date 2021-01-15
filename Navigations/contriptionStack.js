import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ContribtionScreen from '../screens/Contribtion'

const Stack = createStackNavigator();


const ContribtionStackScreens = () => {

    return(
        <Stack.Navigator headerMode="screen" screenOptions={{
            headerTintColor : '#FFF' ,
            headerStyle : {
                backgroundColor : '#001C34',
   
            }
        }} >
            <Stack.Screen name='Contribtion' component={ContribtionScreen} />
        </Stack.Navigator>
    )

}

export default ContribtionStackScreens
