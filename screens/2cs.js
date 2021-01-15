import React , {useState , useRef ,useEffect} from 'react' ;
import {View , Text , StyleSheet , TouchableOpacity , ScrollView , ImageBackground , Animated , Linking} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {AntDesign}  from '@expo/vector-icons'


const DeuxiemeCs = () => {
    const [index,setindex] = useState('2CS');
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
       <ImageBackground source={require('../assets/imageback4.jpg')} imageStyle={{borderRadius :20}} style={{width : 250 , height : 40,marginTop : 10,marginLeft:70,alignItems : 'center',justifyContent:'center'}}>
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
                                     setindex('Modules Optionnels')
                                 }else if (event.nativeEvent.contentOffset.x < 392) {
                                     AnimationFunc2()
                                     AnimationFunc5()
                                     setindex('2CS')
                                     setArrow('arrowright')
                                 }else if (event.nativeEvent.contentOffset.x >712) {
                                     AnimationFunc1()
                                     AnimationFunc4()
                                     setindex('Modules Optionnels')
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
                <ImageBackground imageStyle={{borderRadius : 30,resizeMode : 'cover'}} source={require('../assets/imageback4.jpg')} style={{width : '100%',height : '100%'}} >
                <View style={Styles.CoverModule}></View>
                <View style={{width : 180 , height : 40,marginTop : 10 , backgroundColor : '#001C34',borderRadius : 20,marginLeft: 30,marginTop : 15,marginBottom : 7,justifyContent:'center',alignItems : 'center'}}>
                <Text style={{color : '#FFF', fontSize : 24, fontWeight: 'bold'}}>2CS - SIQ</Text>
                </View>

           <TouchableOpacity style={Styles.Module1} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6kDnRIv9vK4T3lyaU5oUmRQSkE')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Semestre 01</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module1} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6kDnRIv9vK4ZXZVejRvRXJweEk')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Semestre 02</Text>
            </TouchableOpacity>

            <View style={{width : 180 , height : 40,marginTop : 10 , backgroundColor : '#001C34',borderRadius : 20,marginLeft: 30,marginTop : 5,marginBottom : 7,justifyContent:'center',alignItems : 'center'}}>
                <Text style={{color : '#FFF', fontSize : 24, fontWeight: 'bold'}}>2CS - SIT</Text>
                </View>

                <TouchableOpacity style={Styles.Module1} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4b1BYazI5eVppZFE')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Semestre 01</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module1} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4UjlaWGtQOHoxMk0')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Semestre 02</Text>
            </TouchableOpacity>

            <View style={{width : 180 , height : 40,marginTop : 10 , backgroundColor : '#001C34',borderRadius : 20,marginLeft: 30,marginTop : 5,marginBottom : 7,justifyContent:'center',alignItems : 'center'}}>
                <Text style={{color : '#FFF', fontSize : 24, fontWeight: 'bold'}}>2CS - SIL</Text>
            </View>

             <TouchableOpacity style={Styles.Module1} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0BwtFazHmunG0RVJJbmJ0RVFwaWM')
                 }}>
                <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                <Text style={Styles.ModuleText}>2CS - SIL</Text>
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
                <ImageBackground imageStyle={{borderRadius : 30,resizeMode : 'cover'}} source={require('../assets/imageback4.jpg')} style={{width : '100%',height : '100%'}} >
                
                <View style={Styles.CoverModule}></View>

            <TouchableOpacity style={[Styles.Module,{marginTop : 18}]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0BwtFazHmunG0WWJ3Z1AxaWRLcHM')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>AQUA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4VHhJNHUzTXBlTVk')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>AUDIT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/1jM-pydXD4USG1p3Xq8xQzIrw-ffuTzQV')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                <Text style={Styles.ModuleText}>BDM</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/1AnhI37xFKwWuUHjPimwdz2nWtdXZBGgD')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>BI</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4enItWlVpSnVsWXM')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>COFI</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/1RLrBTXZhEoxJRAu9E1Ig93NHjQ5NRMMT')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>HPC</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.Module]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4Mm1ERTN0bVdKYUU')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>IHM</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6kDnRIv9vK4ZUlmejVsQXlqVTQ')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>IMN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4aWZ2NlVlYkswZEE')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>IPLS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0BwtFazHmunG0c0IzUlRoZGljTE0')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>IPLS (SIL)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4bGc0cGNKZWkxUzQ')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>MNG</Text>
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
                <ImageBackground imageStyle={{borderRadius : 30,resizeMode : 'cover'}} source={require('../assets/imageback4.jpg')} style={{width : '100%',height : '100%'}} >
                
                <View style={Styles.CoverModule}></View>

            <TouchableOpacity style={[Styles.Module,{marginTop : 0}]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4Sms1UGNMY0lLOU0')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>PROG Mobile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B8k27wFtVXvnSDU3NHNGNGptdnc')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>PROG Web</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4VmJTUzNtdTQ2bk0')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>SEMB</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4WlNGYmtoeDdFaFE')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>SIG</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0BwtFazHmunG0VXNnYVVWZ0F1cEk')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>SIG (SIL)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0BwtFazHmunG0eUZsNk1ZZ3RSdjQ')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>TICO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0BwtFazHmunG0alVlclpwbV9OaXM')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>TPGO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.Module]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B4CW5zYPWVRzfmNnYUItRGdWZ2hLOExMc0NYWUhCMFpyM3Ruc3BSVWRuZDdkMHVxTEJOZ2s')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>TSG</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4QjAwaGlIZEp2OUU')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>URBA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/1QYizJTxHc--fvzH9jPqxtWEjsfkmsskp')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>VCL</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4Ukwxc1hDckNJc1U')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>VEILLE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0BwtFazHmunG0Y3g2YWtOTGl5SHc')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>VEILLE (SIL)</Text>
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
        height : 28,
        paddingLeft : 10,
        marginLeft : 25,
        marginBottom : 5,
    },
    Module1 : {
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

export default DeuxiemeCs