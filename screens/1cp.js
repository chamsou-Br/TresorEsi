import React , {useState , useRef ,useEffect} from 'react' ;
import {View , Text , StyleSheet , TouchableOpacity , ScrollView , ImageBackground , Animated ,Linking} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {AntDesign}  from '@expo/vector-icons'



const PremiereCp = () => {

    const [index,setindex] = useState('Semestre 01');
    const [Arrow , setArrow] = useState('arrowright')
    const AnimationVal1 = React.useRef(new Animated.Value(0)).current;
    const AnimationVal3 = React.useRef(new Animated.Value(0)).current;
    const AnimationVal4 = React.useRef(new Animated.Value(1)).current;
    
    const color = AnimationVal3.interpolate({
        inputRange:[0,1],
        outputRange:['#001C34','#FFF']
    })
    const color2 = AnimationVal3.interpolate({
        inputRange:[0,1],
        outputRange:['#FFF','#001C34']
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
       <ImageBackground source={require('../assets/imageback1.jpg')} imageStyle={{borderRadius :20}} style={{width : 180 , height : 40,marginTop : 15,marginLeft:100,alignItems : 'center',justifyContent:'center'}}>
        <View style={{position : 'absolute',width : '100%',height :'100%' , backgroundColor : 'rgba(255,255,255,0.5)',borderRadius : 20,borderWidth : 0.3}}></View><Text style={Styles.index}>{index}</Text>
       </ImageBackground> 
            <ScrollView horizontal={true}
                         showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        decelerationRate="fast"
                        pagingEnabled
                        style={{marginTop :10}}
                        onScroll={(event)=> {
                                 if (event.nativeEvent.contentOffset.x > 150) {
                                     AnimationFunc1();
                                     AnimationFunc4();
                                     setindex('Semestre 02');
                                     setArrow('arrowleft')
                                 }else if (event.nativeEvent.contentOffset.x < 150) {
                                     AnimationFunc2()
                                     AnimationFunc5()
                                     setindex('Semestre 01');
                                     setArrow('arrowright')
                                 }
                                 
                        }}
                        
                       
                        
                        >

                <Animated.View style={[Styles.Semestre1,{transform : [
                    {
                        scale : AnimationVal1.interpolate({
        inputRange : [0,1],
        outputRange : [1,0.8]
    })
                    }
                ]},{opacity : AnimationVal4.interpolate({
            inputRange: [0,1],
            outputRange : [0,1]
        })}]}>
                <ImageBackground imageStyle={{borderRadius : 30,resizeMode : 'cover'}} source={require('../assets/imageback1.jpg')} style={{width : '100%',height : '100%'}} >
                
                <View style={Styles.CoverModule}></View>
            
            <TouchableOpacity style={[Styles.Module,{marginTop : 23}]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWaTFiczNMbUVESEk')
                 }} >
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Analyse</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module}  onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWaE9JeUQ2WjZuMkU')
                 }} >
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Algebre</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWckZUek9jamNJLXM')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>ALSDS</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={[Styles.Module]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWYXRncHZNbGtOVjA')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>ARCHI</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/1hGS3qe10tzPhrmBatnFx807gPZ6AcW7o')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Anglais</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/1mrFaIF0ygRNEpON44_i4J3C16CR_u2sC')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>TEE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWY1NzSWY3RFNpMFk')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>ELECT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWdExZQVpCcnZXYmM')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>SYST</Text>
            </TouchableOpacity>


           </ImageBackground>
                </Animated.View>

                <Animated.View style={[Styles.semestre2,{transform : [
                    {
                        scale : AnimationVal1.interpolate({
                           inputRange : [0,1],
                           outputRange : [0.8,1]
                         })
                    }
                ]}
                ,{
                    opacity : AnimationVal4.interpolate({
                          inputRange: [0,1],
                            outputRange : [0,1]
                 })}
                ]}>
                <ImageBackground imageStyle={{borderRadius : 30,resizeMode : 'cover'}} source={require('../assets/imageback1.jpg')} style={{width : '100%',height : '100%'}} >
                
                <View style={Styles.CoverModule}></View>

            <TouchableOpacity style={[Styles.Module,{marginTop : 23}]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWVGk0Qk1xX1JCVGs')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Analyse2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWajBDYlR1VmF5WVE')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Algebre2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B01AfTHoqPyeTzJlN2ROVmVzMkk')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>ALSDD</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWS2VjcG5FYmFDMU0')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Beweb</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWN3NnWDd6Sm54dTA')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>ELECF 01</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.Module]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWOGFjUmZOeDU1S2s')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>MECA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B01AfTHoqPyeZWNXQk5WSEZpU2c')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>SYST2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/1GxZSrgKBdVCuMYL5yNwDqBWX7gVEULrf')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>TEO</Text>
            </TouchableOpacity>


           </ImageBackground>
                </Animated.View>

            </ScrollView>
            </Animated.View>
            <Animated.View style={{flexDirection : 'row' , marginLeft : 175, zIndex : 50
    }}>
                <Animated.View style={[Styles.page,{backgroundColor : color}]}></Animated.View>
                <Animated.View style={[Styles.page,,{backgroundColor : color2}]}></Animated.View>
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
        marginRight : 30,
        marginLeft : 70,
        borderRadius : 30,
        shadowColor : '#FFF',
        elevation : 10,
        shadowOpacity : 1,
        marginTop:5
    },
    semestre2 : {
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
        paddingLeft : 10,
        marginLeft : 25,
        marginBottom : 5,
    },
    ModuleText : {
        color : '#001C34' ,
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : 20,
        letterSpacing : 2
    },
    iconModule : {
        position : 'absolute',
        top: 8,
        left:5,
        fontWeight : 'bold'
    },
    CoverModule : {
        width : '100%' ,
        height : '100%',
        position : 'absolute',
        backgroundColor : 'rgba(0255,0255,0255,0.7)',
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

export default PremiereCp