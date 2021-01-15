import * as React from 'react';
import { View, Text , StyleSheet , TouchableOpacity , ScrollView , ImageBackground , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import {FontAwesome5} from '@expo/vector-icons'


function SideBar(props) {
  return(
    <ScrollView>
        <ImageBackground source={require('./assets/back.jpg')} style={{width : undefined , padding : 16 , paddingTop : 48 }} >
          <Image source={require('./assets/chams.jpg')} style={{width: 80 , height : 80 , borderRadius : 40 , borderWidth : 3 , borderColor : '#fff'}} />
          <Text style={{color : '#FFF' , fontWeight : 'bold' , marginTop : 4}}>Chamsou.Br</Text>
        </ImageBackground>
        <View>
          <DrawerItemList {...props} />
        </View>
    </ScrollView>
  )
}

function Feed({ navigation }) {
  return (
    <View>
    <TouchableOpacity style={{marginTop : 50 , marginLeft : 340}} onPress={() => navigation.openDrawer()} >
        <FontAwesome5 name='bars' size={28} />
    </TouchableOpacity>
  
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , marginTop : '80%'}}>
      <Text>Feed Screen</Text>
    </View>
    </View>
  );
}

function Article({navigation}) {
  return (
    <View>
    <TouchableOpacity style={{marginTop : 50 , marginLeft : 340}} onPress={() => navigation.openDrawer()} >
        <FontAwesome5 name='bars' size={28} />
    </TouchableOpacity>
  
    <View style={{ alignItems: 'center' , marginTop : '80%'}}>
      <Text>Article Screen</Text>
    </View>
    </View>
  );
}

function Profile({navigation}) {
  return (
    <View>
    <TouchableOpacity style={{marginTop : 50 , marginLeft : 340}} onPress={() => navigation.openDrawer()} >
        <FontAwesome5 name='bars' size={28} />
    </TouchableOpacity>
  
    <View style={{ alignItems: 'center' , marginTop : '80%'}}>
      <Text>Profile Screen</Text>
    </View>
    </View>
  );
}

function Settings({navigation}) {
  return (
    <View>
    <TouchableOpacity style={{marginTop : 50 , marginLeft : 340}} onPress={() => navigation.openDrawer()} >
        <FontAwesome5 name='bars' size={28} />
    </TouchableOpacity>
  
    <View style={{ alignItems: 'center' , marginTop : '80%'}}>
      <Text>Settings Screen</Text>
    </View>
    </View>
  );
}

function AddFreinds({navigation}) {
  return (
    <View>
    <TouchableOpacity style={{marginTop : 50 , marginLeft : 340}} onPress={() => navigation.openDrawer()} >
        <FontAwesome5 name='bars' size={28} />
    </TouchableOpacity>
  
    <View style={{ alignItems: 'center' , marginTop : '80%'}}>
      <Text>AddFreinds Screen</Text>
    </View>
    </View>
  );
}

function LogOut({navigation}) {
  return (
    <View>
    <TouchableOpacity style={{marginTop : 50 , marginLeft : 340}} onPress={() => navigation.openDrawer()} >
        <FontAwesome5 name='bars' size={28} />
    </TouchableOpacity>
  
    <View style={{ alignItems: 'center' , marginTop : '80%'}}>
      <Text>LogOut Screen</Text>
    </View>
    </View>
  );
}




function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <SideBar {...props} />}  
      drawerStyle={{
    backgroundColor: '#ADD8E6',
    width: 290,
  }}
      drawerContentOptions={{
        activeTintColor: 'tomato',
        activeBackgroundColor : "#87CEFA",
        itemStyle: { marginHorizontal : 10 , marginTop : 10 },
      }}
    >
      <Drawer.Screen name="Feed"  options={{drawerIcon : ({tintColor}) => <FontAwesome5 name='bars' size={16} color={tintColor} />}} component={Feed}  />
      <Drawer.Screen name="Settings" options={{drawerIcon : ({tintColor}) => <FontAwesome5 name='cogs' size={16} color={tintColor} />}} component={Settings} />
      <Drawer.Screen name="Addfreinds" options={{drawerIcon : ({tintColor}) => <FontAwesome5 name='telegram' size={16} color={tintColor} />}} component={AddFreinds} />
      <Drawer.Screen name="Profile" options={{drawerIcon : ({tintColor}) => <FontAwesome5 name='user' size={16} color={tintColor} />}} component={Profile} />
      <Drawer.Screen name="Article" options={{drawerIcon : ({tintColor}) => <FontAwesome5 name='address-card' size={16} color={tintColor} />}} component={Article} />
      <Drawer.Screen name="LogOut" options={{drawerIcon : ({tintColor}) => <FontAwesome5 name='power-off' size={16} color={tintColor} />}} component={LogOut} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
