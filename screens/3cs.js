import React , {useState , useRef ,useEffect} from 'react' ;
import {View , Text , StyleSheet , TouchableOpacity , ScrollView , ImageBackground , Animated,Linking} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {AntDesign}  from '@expo/vector-icons'

const TroixiemeCs = () => {
    const [index,setindex] = useState('Master');
    const [Arrow , setArrow] = useState('arrowright')
    const AnimationVal1 = React.useRef(new Animated.Value(0)).current;
    const AnimationVal3 = React.useRef(new Animated.Value(0)).current;
    const AnimationVal4 = React.useRef(new Animated.Value(1)).current;
    
    const color = AnimationVal3.interpolate({
        inputRange:[0,0.5,1],
        outputRange:['#001C34','#FFF','#FFF']
    })
    const color2 = AnimationVal3.interpolate({
        inputRange:[0,0.5,1],
        outputRange:['#FFF','#001C34','#FFF']
    })
    const color3 = AnimationVal3.interpolate({
        inputRange:[0,0.5,1],
        outputRange:['#FFF','#FFF','#001C34']
    })
    const AnimationFunc4 = () => {
        Animated.timing(AnimationVal3,{
            toValue : 1,
            duration: 1000,
            useNativeDriver : false,
        }).start()
    }
    const AnimationFunc5 = () => {
        Animated.timing(AnimationVal3,{
            toValue : 0,
            duration: 1000,
            useNativeDriver : false,
        }).start()
    }
    const AnimationFunc9 = () => {
        Animated.timing(AnimationVal3,{
            toValue : 0.5,
            duration: 1000,
            useNativeDriver : false,
        }).start()
    }
    const AnimationFunc6 = () => {
        Animated.timing(AnimationVal4,{
            toValue : 1,
            duration : 3000,
            useNativeDriver : false,
        }).start()
    }
    

    const AnimationFunc1 = () => {

        Animated.timing(AnimationVal1,{
            toValue : 1, 
            duration : 500,
            useNativeDriver : false
        }).start();
         
    }
    const AnimationFunc2 = () => {

        Animated.timing(AnimationVal1,{
            toValue : 0, 
            duration : 500,
            useNativeDriver : false
        }).start();
         
    } 
    const AnimationFunc8 = () => {

        Animated.timing(AnimationVal1,{
            toValue : 0.5, 
            duration : 500,
            useNativeDriver : false
        }).start();
         
    }
    const AnimationValue2 = React.useRef(new Animated.Value(0)).current;
    const AnimationFunc3 = () => {
        Animated.timing(AnimationValue2 , {
            toValue : 1,
            duration : 2000 ,
            useNativeDriver : false

        }).start(() => {
            Animated.timing(AnimationValue2 , {
                toValue : 0,
                duration : 2000,
                useNativeDriver : false
            }).start(() => AnimationFunc3())
        })
    }
    useEffect(() => {
        AnimationFunc3();
        AnimationFunc6();
    })
    return(
        <Animated.View style={{backgroundColor : '#FFf' , flex :1}} >
       <View style={Styles.intro}>
            <Text style={Styles.introText}>Explore Your Module</Text>
            <Text style={Styles.introText2} >Click to choose one module</Text>
       <Animated.View style={[Styles.introicon,{
            opacity : AnimationValue2.interpolate({
                        inputRange : [0,1],
                        outputRange : [1, 1]
                    })
       }]} > 
                        
                                     
                        
       <AntDesign  color='tomato'     name={Arrow} size={28} />
                        </Animated.View>  
        </View>
        <View style={Styles.introplus}></View>
        <Animated.View style={[Styles.ScrollView]}>
       <ImageBackground source={require('../assets/imageback5.jpg')} imageStyle={{borderRadius :20}} style={{width : 250 , height : 40,marginTop : 10,marginLeft:70,alignItems : 'center',justifyContent:'center'}}>
       <View style={{position : 'absolute',width : '100%',height :'100%' , backgroundColor : 'rgba(255,255,255,0.2)',borderRadius : 20,borderWidth:0.3}}></View><Text style={Styles.index}>{index}</Text>
       </ImageBackground> 
            <ScrollView horizontal={true}
                         showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={30}
                        decelerationRate="fast"
                        pagingEnabled
                        style={{marginTop :15}}
                        onScroll={(event)=> {
                                 if (event.nativeEvent.contentOffset.x > 392 && event.nativeEvent.contentOffset.x < 712) {
                                     AnimationFunc8();
                                     AnimationFunc9();
                                     setindex('Master')
                                 }else if (event.nativeEvent.contentOffset.x < 392) {
                                     AnimationFunc2()
                                     AnimationFunc5()
                                     setindex('Master')
                                     setArrow('arrowright')
                                 }else if (event.nativeEvent.contentOffset.x >712) {
                                     AnimationFunc1()
                                     AnimationFunc4()
                                     setindex('DoctoraT')
                                     setArrow('arrowleft');
                                 }
                                 
                        }}
                        
                       
                        
                        >

                <Animated.View style={[Styles.Semestre1,{transform : [
                    {
                        scale : AnimationVal1.interpolate({
        inputRange : [0,0.5 , 1],
        outputRange : [1,0.8,0.8]
    })
                    }
                ]},{opacity : AnimationVal4.interpolate({
            inputRange: [0,1],
            outputRange : [0,1]
        })}]}>
                <ImageBackground imageStyle={{borderRadius : 30,resizeMode : 'cover'}} source={require('../assets/imageback5.jpg')} style={{width : '100%',height : '100%'}} >
                <View style={Styles.CoverModule}></View>
                
                    <TouchableOpacity style={[Styles.Module,{marginTop : 50}]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4QlhVQ2JhSFBlOE0')
                 }} >
                        <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={12} color='#001C34' />
                        <Text style={Styles.ModuleText}>Introduction à la méthodologie de recherche</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B4CW5zYPWVRzTzRUSXZjUlRZVEk')
                 }} >
                        <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={12} color='#001C34' />
                        <Text style={Styles.ModuleText}>Architectures des Systèmes d'Information</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[Styles.Module]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4VkZuY0dIdXhOS1U')
                 }} >
                        <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={12} color='#001C34' />
                        <Text style={Styles.ModuleText}>Réseaux Avancés et Simulation</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4aXlOOGdzY0NXOG8')
                 }} >
                        <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={12} color='#001C34' />
                        <Text style={Styles.ModuleText}>Schéma Directeur Informatique</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4aHB3NnVKSmpNcjg')
                 }} >
                        <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={12} color='#001C34' />
                        <Text style={Styles.ModuleText}>Recherche documentaire et la communication de la recherche</Text>
                    </TouchableOpacity>

           


           </ImageBackground>
                </Animated.View>

                <Animated.View style={[Styles.semestre2,{transform : [
                    {
                        scale : AnimationVal1.interpolate({
                            inputRange : [0,0.5 , 1],
                           outputRange : [0.8,1,0.8]
                         })
                    }
                ]}
                ,{
                    opacity : AnimationVal4.interpolate({
                          inputRange: [0,1],
                            outputRange : [0,1]
                 })}
                ]}>
                <ImageBackground imageStyle={{borderRadius : 30,resizeMode : 'cover'}} source={require('../assets/imageback5.jpg')} style={{width : '100%',height : '100%'}} >
                
                <View style={Styles.CoverModule}></View>

                   <TouchableOpacity style={[Styles.Module , {marginTop : 37}]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B4CW5zYPWVRzSzU5NXB5LURRVFU')
                 }} >
                         <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={12} color='#001C34' />
                         <Text style={Styles.ModuleText}>Intelligence Artificielle</Text>
                   </TouchableOpacity>

                    <TouchableOpacity style={[Styles.Module]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B4CW5zYPWVRzN1l5VXVJSURpMmM')
                 }} >
                        <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={12} color='#001C34' />
                        <Text style={Styles.ModuleText}>Machine Learning</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B4CW5zYPWVRzTElXWTByR1hVeGM')
                 }} >
                        <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={12} color='#001C34' />
                        <Text style={Styles.ModuleText}>Recherche d'information</Text>
                   </TouchableOpacity>

                    <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B4CW5zYPWVRzenh3dnQwb3dHdjQ')
                 }} >
                        <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={12} color='#001C34' />
                        <Text style={Styles.ModuleText}>Systèmes distribués</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B4CW5zYPWVRzNVdDbG9sXzUxWnM')
                 }} >
                        <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={12} color='#001C34' />
                        <Text style={Styles.ModuleText}>Technologie Agents</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4VGZxU3Mxd0w4TkU')
                 }} >
                        <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={12} color='#001C34' />
                        <Text style={Styles.ModuleText}>Valorisation de la recherche</Text>
                    </TouchableOpacity>


             </ImageBackground>
                </Animated.View>
                <Animated.View style={[Styles.semestre3,{transform : [
                    {
                        scale : AnimationVal1.interpolate({
                            inputRange : [0,0.5 , 1],
                            outputRange : [0.8,0.8,1]   
                         })
                    }
                ]}
                ,{
                    opacity : AnimationVal4.interpolate({
                          inputRange: [0,1],
                            outputRange : [0,1]
                 })}
                ]}>
                <ImageBackground imageStyle={{borderRadius : 30,resizeMode : 'cover'}} source={require('../assets/imageback5.jpg')} style={{width : '100%',height : '100%'}} >
                
                <View style={Styles.CoverModule}></View>

            <TouchableOpacity style={[Styles.Module1,{marginTop : 120}]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4SkdfUkc2LU41c1U')
                 }} >
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule1} size={18} color='#001C34' />
                   <Text style={[Styles.ModuleText,{fontSize : 22}]}>Option Système d'Information (SI)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module1} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4TlJSN1FQZDhZVEk')
                 }} >
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule1} size={18} color='#001C34' />
                   <Text style={[Styles.ModuleText,{fontSize : 22}]}>Option Systèmes Informatiques (SIQ)</Text>
            </TouchableOpacity>
           


           </ImageBackground>
                </Animated.View>

            </ScrollView>
            </Animated.View>
            <Animated.View style={{flexDirection : 'row' , marginLeft : 155, zIndex : 50
    }}>
                <Animated.View style={[Styles.page,{backgroundColor : color}]}></Animated.View>
                <Animated.View style={[Styles.page,,{backgroundColor : color2}]}></Animated.View>
                <Animated.View style={[Styles.page,,{backgroundColor : color3}]}></Animated.View>
            </Animated.View>
        </Animated.View>
    )
}

const Styles = StyleSheet.create({
 
    intro : {
        backgroundColor : '#001C34',
        width : '100%',
        height : 120,
        borderBottomLeftRadius : 50,
        alignItems : 'center'
    },
    introplus : {
        top: 100,
      position : 'absolute',
      width : 100 ,
      height : 100 ,
      borderBottomLeftRadius : 70 ,
      backgroundColor : '#001C34' ,
      zIndex : 1,
      left : 320
      
    },
    introicon : {
        width : 40 ,
        height :40,
        backgroundColor:'#FFF',
        borderRadius :40,
        marginTop: 10,
        justifyContent : 'center',
        alignItems: 'center'


    },
    index : {
       fontSize : 22,
       fontWeight:"bold",
       letterSpacing : 2,
       color : '#001C34'
    },
    introText : {
       fontSize : 22,
       fontWeight : 'bold',
       color : '#FFF',
       textAlign : 'center',
       opacity :0.9,
       letterSpacing : 1.2
    },
    introText2 : {
        fontSize : 16,
        marginTop: 5,
       fontWeight : 'bold',
       color : '#FFF',
       textAlign : 'center',
       opacity :0.6
    },
    ScrollView : {
        zIndex : 5,
        borderTopRightRadius : 70 ,
        backgroundColor : '#FFF',
        height : 500
    },
    Semestre1 :{
        width : 250,
        height : 400,
        marginRight :75,
        marginLeft : 70,
        borderRadius : 30,
        shadowColor : '#FFF',
        elevation : 10,
        shadowOpacity : 1,
        marginTop : 5
    },
    semestre2 : {
        marginLeft : 70,
        width : 250,
        height :400 ,
        backgroundColor : '#001C34',
        marginRight : 70,
        borderRadius : 30,
        shadowColor : '#FFF',
        elevation : 10,
        shadowOpacity : 1,
        marginTop : 5
  
    },
    semestre3 : {
        width : 250,
        height :400 ,
        backgroundColor : '#001C34',
        marginRight : 70,
        borderRadius : 30,
        shadowColor : '#FFF',
        elevation : 10,
        shadowOpacity : 1,
        marginTop : 5
  
    },
    Module : {
        height : 40,
        marginLeft : 10,
        marginBottom : 20,
    },
    Module1 : {
        height : 80,
        paddingLeft : 10,
        marginLeft : 25,
        marginBottom : 5,
    },
    ModuleText : {
        color : '#001C34' ,
        fontSize : 14,
        fontWeight : 'bold',
        marginLeft : 10,
        letterSpacing : 1
    },
    iconModule : {
        position : 'absolute',
        top: 5,
        left : -5,
        fontWeight : 'bold'
    },
    iconModule1 : {
        position : 'absolute',
        top: 7,
        fontWeight : 'bold',
        left : -4
    },
    CoverModule : {
        width : '100%' ,
        height : '100%',
        position : 'absolute',
        backgroundColor : 'rgba(0255,0255,0255,0.4)',
        borderRadius : 30
    },
    page : {
        width : 20 ,
        height: 6,
        borderWidth :1,
        marginRight: 10,
        zIndex:50
    }
})

export default TroixiemeCs