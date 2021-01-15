import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>  Profile!</Text>
      </View>
    );
  }

  function TelegramScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Telegram!</Text>
      </View>
    );
  }

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator  
    
    tabBarOptions={{
      activeTintColor : 'tomato' ,
      activeBackgroundColor : '#ADD8E6',
      showLabel : true,
      style : {
        height : 55,
        backgroundColor : "#EEE"
      },
      labelStyle: {
        marginBottom : 6
      }


    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon : ({focused}) => {
        let color = focused ? 'tomato' : null ;
      return <FontAwesome5 name='home' size={24} color={color} />
      }, tabBarAccessibilityLabel: 'SearchScreen'}} />
      <Tab.Screen name="Profile" component={ProfileScreen}  options={{tabBarIcon : ({focused}) => {
        let color = focused ? 'tomato' : null ;
      return <FontAwesome5 name='user' size={24} color={color} />
      }}} /> 
      <Tab.Screen name="Telegram" component={TelegramScreen}  options={{tabBarIcon : ({focused}) => {
        let color = focused ? 'tomato' : null ;
      return <FontAwesome5 name='telegram' size={24} color={color} />
      }}}/>
     
      <Tab.Screen name="Settings" component={SettingsScreen}  options={{tabBarIcon : ({focused}) => {
        let color = focused ? 'tomato' : null ;
      return <FontAwesome5 name='cogs' size={24} color={color} />
      }}}/>
      
    </Tab.Navigator>
  );
}

export default function TabNav() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
