import React , {useState , useRef , useEffect} from 'react' ;
import {View , Text , Animated , TouchableOpacity , StyleSheet , Easing ,Image } from 'react-native';
import {MaterialIcons } from '@expo/vector-icons' ;
import {AntDesign}  from '@expo/vector-icons'


const HomeModal = ({VisibilFunc , AnimationFunc1}) => {

    

    const AnimationValue = React.useRef(new Animated.Value(0)).current;
    const AnimationValue2 = React.useRef(new Animated.Value(0)).current;
    const AnimationFunc2 = () => {
        Animated.timing(AnimationValue2 , {
            toValue : 1,
            duration : 2000 ,
            useNativeDriver : false

        }).start(() => {
            Animated.timing(AnimationValue2 , {
                toValue : 0,
                duration : 2000,
                useNativeDriver : false
            }).start(() => AnimationFunc2())
        })
    }
    useEffect(() => {
        AnimationFunc2();
    })
    const [index , setIndex] = useState(false);
    const AnimationFunc = (newValue) =>  Animated.timing(AnimationValue , {
            toValue : newValue ,
            duration : 2000 ,
            useNativeDriver : false
        });
        const BackGroundContainer = AnimationValue.interpolate({
            inputRange : [0 , 0.001 , 0.5 , 0.501 , 1],
            outputRange : ['#001C34','#001C34','#001C34','#FFF','#FFF']
        })
        const colorIcon = AnimationValue.interpolate({
            inputRange : [0 , 0.001  ,0.5 , 0.501 , 1],
            outputRange : ['#001C34' ,'#001C34', '#001C34' , '#FFF' ,  '#FFF']
        })
        const BackGroundView = AnimationValue.interpolate({
            inputRange : [0 , 0.001 , 0.5 , 0.501 , 1],
            outputRange : ['#FFF','#FFF','#FFF','#001C34','#001C34']
        })
    const OnPressFunc = () => {
        AnimationFunc(1).start(() => {VisibilFunc();AnimationFunc1()});
    

        
    }
    return(
        <Animated.View >
        <Animated.View style={{backgroundColor : '#FFF' , height : 330 , borderBottomRightRadius : 100 , zIndex : 2 }}>
                <Animated.Image style={[styles.image,{opacity : AnimationValue.interpolate({
                    inputRange : [0,0.41 ,1],
                    outputRange : [1 ,0, 0]
                })}]} source={require('../assets/logo1.png')} />
        </Animated.View>
        <Animated.View style={{position : 'absolute', width : 150 , height : 100 , backgroundColor :colorIcon , zIndex : 1, top : 230 ,left : 290}}></Animated.View>

        <Animated.View style={[styles.ViewContainer , {backgroundColor : BackGroundContainer , zIndex : 3} ]} >
        <View style={styles.ViewTitle}>
                <Text style={styles.TextTitle}>Welcom To tresor Esi</Text>
                <Text style={[styles.TextTitle,{marginBottom : 20}]}>Let's Start</Text>
                <Text style={styles.TextDescription}>
                « LE SAVOIR EST LA SEULE RICHESSE QU'ON NE PERD PAS
                    QUAND ON LA PARTAGE AVEC AUTRUI » 
                </Text>
                <Text style={styles.TextDescription}>ADAGE AFRICAIN</Text> 
        </View>
          
                <Animated.View style={[styles.ViewAnimated,{backgroundColor : BackGroundView} ,{transform : 
                [
                    {
                        perspective : 370
                    },
                    {
                        rotateY : AnimationValue.interpolate({
                        inputRange : [0 , 0.5 , 1 ],
                        outputRange : ['0deg', '-90deg' , '-180deg']
                    })
                    },
                    {
                        scale : AnimationValue.interpolate({
                            inputRange : [0 , 0.5 , 1],
                            outputRange : [1 , 8 , 0]
                        })
                    },
                    {
                        translateX : AnimationValue.interpolate({
                            inputRange : [0 , 0.5 , 1],
                            outputRange : [0 , 0.5 , 0]
                        })
                    }
                ]
                }]}>
                
                    <TouchableOpacity style={{width : '100%' , height : '100%'}} onPress={OnPressFunc}>
                    <Animated.View style={[styles.Viewicon,{transform : [
                        {
                            scale : AnimationValue2.interpolate({
                        inputRange : [0,0.5,1],
                        outputRange : [1 , 1.3 , 0.8]
                    })
                        }
                        ]}]}  ><AntDesign  color='tomato'  name='arrowright' size={34} /></Animated.View>
                    </TouchableOpacity>
                    
                </Animated.View>
            
        </Animated.View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    image : {
      width : 300 ,
      height : 300,
      top :30,
      left : 40,
      borderRadius : 150,
      zIndex : 2  
    },
    ViewContainer : {
        width : '100%' ,
        height : '100%',
        borderTopLeftRadius : 100 ,
        

    },
    ViewAnimated : {
        top : 30 ,
        left : '40%',
        color : 'white',
        width : 90 ,
        height :90, 
        borderRadius : 100,
        backgroundColor : '#87CEEB',
        
    },
    Viewicon : {
        flex : 1,
        textAlign : 'center' ,
        alignItems : 'center' ,
        justifyContent : 'center',
        zIndex : 8
      
    },
    ViewTitle : {
        
        textAlign : "center",
        alignItems : 'center',
        marginTop : 80,
    },
    TextTitle : {
        textAlign : 'center',
        fontSize : 27 ,
        fontWeight : "bold",
        color : '#FFF',
        letterSpacing : 2
    },
    TextDescription : {
        
        paddingHorizontal : 10,
        fontSize : 14 ,
        fontWeight : '200',
        opacity : .6,
        color : '#FFF',
        letterSpacing : 1.2,
        textAlign : "center"

    }
})
export default HomeModal

