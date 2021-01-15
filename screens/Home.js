import React , {useState , useRef , useEffect }from 'react';
import {View,Text , TouchableOpacity , Modal ,StyleSheet , ImageBackground , Animated } from 'react-native';
import HomeModal from './HomeModal';
import {FontAwesome5} from '@expo/vector-icons'

const HomeScreen = ({navigation}) => {

    const AnimationValue1 = React.useRef(new Animated.Value(0)).current;
    const AnimationValue2 = React.useRef(new Animated.Value(0)).current;
    const AnimationValue3 = React.useRef(new Animated.Value(0)).current;
    const AnimationValue4 = React.useRef(new Animated.Value(0)).current;
    const AnimationValue5 = React.useRef(new Animated.Value(0)).current;
    const AnimationValue6 = React.useRef(new Animated.Value(0)).current;
    const [VisibiliteModal , SetVisibilite] = useState(true);
    const VisibilFunc = () => {
        SetVisibilite(false);
    }
    const AnimationFunc2 = (name) => {
        
        Animated.timing(AnimationValue2 , {
            toValue :1,
            duration :100,
            useNativeDriver:true
        }).start(()=> {
            Animated.timing(AnimationValue2 , {
                toValue :0,
                duration :100,
                useNativeDriver:true
            }).start(()=> {
                navigation.navigate(name);
            })
        });
    }

        const AnimationFunc3 = (name) => {
        
            Animated.timing(AnimationValue3 , {
                toValue :1,
                duration :100,
                useNativeDriver:true
            }).start(()=> {
                Animated.timing(AnimationValue3 , {
                    toValue :0,
                    duration :100,
                    useNativeDriver:true
                }).start(()=> {
                    navigation.navigate(name);
                })
            });

        }

            const AnimationFunc4 = (name) => {
        
                Animated.timing(AnimationValue4 , {
                    toValue :1,
                    duration :100,
                    useNativeDriver:true
                }).start(()=> {
                    Animated.timing(AnimationValue4 , {
                        toValue :0,
                        duration :100,
                        useNativeDriver:true
                    }).start(()=> {
                        navigation.navigate(name);
                    })
                });
            }

            const AnimationFunc5 = (name) => {
        
                Animated.timing(AnimationValue5 , {
                    toValue :1,
                    duration :100,
                    useNativeDriver:true
                }).start(()=> {
                    Animated.timing(AnimationValue5 , {
                        toValue :0,
                        duration :100,
                        useNativeDriver:true
                    }).start(()=> {
                        navigation.navigate(name);
                    })
                });
            }

            const AnimationFunc6 = (name) => {
        
                Animated.timing(AnimationValue6 , {
                    toValue :1,
                    duration :100,
                    useNativeDriver:true
                }).start(()=> {
                    Animated.timing(AnimationValue6 , {
                        toValue :0,
                        duration :100,
                        useNativeDriver:true
                    }).start(()=> {
                        navigation.navigate(name);
                    })
                });
            }
        
    const AnimationFunc1 = () => {
        Animated.timing(AnimationValue1 , {
            toValue : 1 ,
            duration : 2500,
            useNativeDriver:true
        }).start();
    }    
    return(
        <View>
      <Modal visible={VisibiliteModal}>
            <HomeModal VisibilFunc={VisibilFunc} AnimationFunc1={AnimationFunc1} />
        </Modal> 

        <Animated.View style={Styles.listeModule}>
            <TouchableOpacity style={{transform : [{translateX : AnimationValue1.interpolate({
                inputRange : [0,0.2,0.4,0.6,0.8 , 1],
                outputRange : [340 , 0,0,0,0,0]
            })},
            {
                scale : AnimationValue2.interpolate({
                    inputRange : [0,0.5,1],
                    outputRange : [1,0.9,0.8]
                })
            }]}} onPress={() => {AnimationFunc2('1Cp')}}>
            <ImageBackground   imageStyle={{borderTopLeftRadius  : 20 , borderTopRightRadius : 20 , borderRadius : 30}} style={Styles.ImageBackground} source={require('../assets/1cp.jpg')}>
                <View style={Styles.YearEtude} >
                  <ImageBackground imageStyle={{borderRadius : 30}} source={require('../assets/imageback1.jpg')} style={{width : '100%' , height :'100%'}}>
                    <Text style={Styles.YearEtudeText}> 1CPI</Text> 
                    <View style={Styles.icon}>
                        <FontAwesome5 name='chevron-right' color='tomato' size={24} />
                    </View>
                 </ImageBackground>
                </View>
            </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity  style={{transform : [{translateX : AnimationValue1.interpolate({
                inputRange : [0,0.2,0.4,0.6,0.8 , 1],
                outputRange : [-340 , -340,0,0,0,0]
            })},
            {
                scale : AnimationValue3.interpolate({
                    inputRange : [0,0.5,1],
                    outputRange : [1,0.9,0.8]
                })
            }]}} onPress={() => {AnimationFunc3('2Cp');}}>
            <ImageBackground  imageStyle={{borderTopLeftRadius  : 20 , borderTopRightRadius : 20 , borderRadius : 30}} style={Styles.ImageBackground} source={require('../assets/2cp.jpg')}>
                <View style={Styles.YearEtude}>
                  <ImageBackground imageStyle={{borderRadius : 30}} source={require('../assets/imageback2.jpg')} style={{width : '100%' , height :'100%'}}>
                    <Text style={Styles.YearEtudeText}> 2CPI</Text> 
                    <View style={Styles.icon}>
                        <FontAwesome5 name='chevron-right' color='tomato' size={24} />
                    </View>
                 </ImageBackground>
                </View>
            </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity  style={{transform : [{translateX : AnimationValue1.interpolate({
                inputRange : [0,0.2,0.4,0.6,0.8 , 1],
                outputRange : [340 , 340,340,0,0,0]
            })},
            {
                scale : AnimationValue4.interpolate({
                    inputRange : [0,0.5,1],
                    outputRange : [1,0.9,0.8]
                })
            }]}} onPress={() => {AnimationFunc4('1Cs');}}>
            <ImageBackground  imageStyle={{borderTopLeftRadius  : 20 , borderTopRightRadius : 20 , borderRadius : 30}} style={Styles.ImageBackground} source={require('../assets/1cs.jpeg')}>
                <View style={Styles.YearEtude}>
                  <ImageBackground imageStyle={{borderRadius : 30}} source={require('../assets/imageback3.jpg')} style={{width : '100%' , height :'100%'}}>
                    <Text style={Styles.YearEtudeText}> 1CSI</Text> 
                    <View style={Styles.icon}>
                        <FontAwesome5 name='chevron-right' color='tomato' size={24} />
                    </View>
                 </ImageBackground>
                </View>
            </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity  style={{transform : [{translateX : AnimationValue1.interpolate({
                inputRange : [0,0.2,0.4,0.6,0.8 , 1],
                outputRange : [-340 , -340,-340,-340,0,0]
            })},
            {
                scale : AnimationValue5.interpolate({
                    inputRange : [0,0.5,1],
                    outputRange : [1,0.9,0.8]
                })
            }]}} onPress={() => {AnimationFunc5('2Cs');}}>
            <ImageBackground  imageStyle={{borderTopLeftRadius  : 20 , borderTopRightRadius : 20 , borderRadius : 30}} style={Styles.ImageBackground} source={require('../assets/2cs.jpg')}>
                <View style={Styles.YearEtude}>
                  <ImageBackground imageStyle={{borderRadius : 30}} source={require('../assets/imageback4.jpg')} style={{width : '100%' , height :'100%'}}>
                    <Text style={Styles.YearEtudeText}> 2CSI</Text> 
                    <View style={Styles.icon}>
                        <FontAwesome5 name='chevron-right' color='tomato' size={24} />
                    </View>
                 </ImageBackground>
                </View>
            </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity  style={{transform : [{translateX : AnimationValue1.interpolate({
                inputRange : [0,0.2,0.4,0.6,0.8 , 1],
                outputRange : [340 , 340,340,340,340,0]
            })},
            {
                scale : AnimationValue6.interpolate({
                    inputRange : [0,0.5,1],
                    outputRange : [1,0.9,0.8]
                })
            }]}} onPress={() => {AnimationFunc6('3Cs');}}>
            <ImageBackground  imageStyle={{borderTopLeftRadius  : 20 , borderTopRightRadius : 20 , borderRadius : 30}} style={Styles.ImageBackground} source={require('../assets/3cs.jpg')}>
                <View style={Styles.YearEtude}>
                  <ImageBackground imageStyle={{borderRadius : 30}} source={require('../assets/imageback5.jpg')} style={{width : '100%' , height :'100%'}}>
                    <Text style={Styles.YearEtudeText}> 3CSI</Text> 
                    <View style={Styles.icon}>
                        <FontAwesome5 name='chevron-right' color='tomato' size={24} />
                    </View>
                 </ImageBackground>
                </View>
            </ImageBackground>
            </TouchableOpacity>
        
        </Animated.View>

        </View>
    )
}

const Styles = StyleSheet.create({
    HomeScreen : {
        marginTop : 400,
        alignItems : 'center' ,
        backgroundColor:'red'
    },
    listeModule : {
    paddingTop : 15 ,
    backgroundColor : '#FFF',
    alignItems : 'center'
    },
    ImageBackground : {
        width : 270 ,
        height : 100,
        resizeMode : 'cover',
        marginBottom : 30
    },
    YearEtude : {
        position : 'absolute',
        width :270,
        height : 60,
        backgroundColor : '#FFF',
        borderTopRightRadius : 30 ,
        borderTopLeftRadius : 30 ,
        borderBottomLeftRadius : 30 ,
        borderBottomRightRadius : 30,
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 20,
        shadowOffset: { width: 10, height: 5 },
        top : 40,
        justifyContent : 'center'
    },
    YearEtudeText : {
        color : '#FFF',
        backgroundColor :"#001C34",
        width : 70 ,
        borderRadius : 20 ,
        fontWeight :'bold',
        marginLeft : 10 ,
        fontSize:20,
        paddingHorizontal : 5,
        marginTop : 17
    }, 
    icon : {
          position : 'absolute',
          left : 210 ,
           top : 12, 
           width : 35 ,
           height : 35 , 
           backgroundColor :'rgb(255, 255, 255)' , 
           alignItems : 'center',
           justifyContent : 'center' ,
            borderRadius : 10,
            shadowColor: 'black',
            shadowOpacity: 0.9,
            elevation:20,

    }
})
export default HomeScreen


