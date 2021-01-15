import React , {useState , useRef ,useEffect} from 'react' ;
import {View , Text , StyleSheet , TouchableOpacity , ScrollView , ImageBackground , Animated , Linking} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {AntDesign}  from '@expo/vector-icons'

const DeuxiemeCp = () => {
    const [index,setindex] = useState('Semestre 01');
    const [Arrow , setArrow] = useState('arrowright')
    const AnimationVal1 = React.useRef(new Animated.Value(0)).current;
    const AnimationVal3 = React.useRef(new Animated.Value(0)).current;
    const AnimationVal4 = React.useRef(new Animated.Value(1)).current;
    
    const color = AnimationVal3.interpolate({
        inputRange:[0,0.2,0.4,0.6,0.8,1],
        outputRange:['#001C34','#FFF','#FFF','#FFF','#FFF','#FFF']
    })
    const color2 = AnimationVal3.interpolate({
        inputRange:[0,0.2,0.4,0.6,0.8,1],
        outputRange:['#FFF','#001C34','#FFF','#FFF','#FFF','#FFF']
    })
    const color3 = AnimationVal3.interpolate({
        inputRange:[0,0.2,0.4,0.6,0.8,1],
        outputRange:['#FFF','#FFF','#001C34','#FFF','#FFF','#FFF']
    })
    const color4 = AnimationVal3.interpolate({
        inputRange:[0,0.2,0.4,0.6,0.8,1],
        outputRange:['#FFF','#FFF','#FFF','#001C34','#FFF','#FFF']
    })
    const color5 = AnimationVal3.interpolate({
        inputRange:[0,0.2,0.4,0.6,0.8,1],
        outputRange:['#FFF','#FFF','#FFF','#FFF','#001C34','#FFF']
    })
    const color6 = AnimationVal3.interpolate({
        inputRange:[0,0.2,0.4,0.6,0.8,1],
        outputRange:['#FFF','#FFF','#FFF','#FFF','#FFF','#001C34']
    })
    const AnimationFunc4 = () => {
        Animated.timing(AnimationVal3,{
            toValue : 0,
            duration: 1000,
            useNativeDriver : false,
        }).start()
    }
    const AnimationFunc5 = () => {
        Animated.timing(AnimationVal3,{
            toValue : 0.2,
            duration: 1000,
            useNativeDriver : false,
        }).start()
    }
    const AnimationFunc9 = () => {
        Animated.timing(AnimationVal3,{
            toValue : 0.4,
            duration: 100,
            useNativeDriver : false,
        }).start()
    }
    const AnimationFunc13 = () => {
        Animated.timing(AnimationVal3,{
            toValue : 0.6,
            duration: 100,
            useNativeDriver : false,
        }).start()
    }
    const AnimationFunc14 = () => {
        Animated.timing(AnimationVal3,{
            toValue : 0.8,
            duration: 100,
            useNativeDriver : false,
        }).start()
    }
    const AnimationFunc15 = () => {
        Animated.timing(AnimationVal3,{
            toValue : 1,
            duration: 100,
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
            toValue : 0, 
            duration : 500,
            useNativeDriver : false
        }).start();
         
    }
    const AnimationFunc2 = () => {

        Animated.timing(AnimationVal1,{
            toValue : 0.2, 
            duration : 500,
            useNativeDriver : false
        }).start();
         
    } 
    const AnimationFunc8 = () => {

        Animated.timing(AnimationVal1,{
            toValue : 0.4, 
            duration : 500,
            useNativeDriver : false
        }).start();
         
    }
    const AnimationFunc12 = () => {

        Animated.timing(AnimationVal1,{
            toValue : 0.6, 
            duration : 500,
            useNativeDriver : false
        }).start();
         
    }
    const AnimationFunc10 = () => {

        Animated.timing(AnimationVal1,{
            toValue : 0.8, 
            duration : 500,
            useNativeDriver : false
        }).start();
         
    }
    const AnimationFunc11 = () => {

        Animated.timing(AnimationVal1,{
            toValue : 1, 
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
       <ImageBackground source={require('../assets/imageback2.jpg')} imageStyle={{borderRadius :20}} style={{width : 250 , height : 40,marginTop : 10,marginLeft:70,alignItems : 'center',justifyContent:'center'}}>
       <View style={{position : 'absolute',width : '100%',height :'100%' , backgroundColor : 'rgba(255,255,255,0.2)',borderRadius : 20,borderWidth:0.3}}></View><Text style={Styles.index}>{index}</Text>
       </ImageBackground> 
            <ScrollView horizontal={true}
                         showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={30}
                        decelerationRate="fast"
                        pagingEnabled
                        style={{marginTop :15}}
                        onScroll={(event)=> {
                                 if (event.nativeEvent.contentOffset.x > 392 && event.nativeEvent.contentOffset.x < 785) {
                                     AnimationFunc2();
                                     AnimationFunc5();
                                     setindex('Semestre 02')
                                 }else if (event.nativeEvent.contentOffset.x < 392) {
                                     AnimationFunc1()
                                     AnimationFunc4()
                                     setindex('Semestre 01')
                                     setArrow('arrowright')
                                 }else if (event.nativeEvent.contentOffset.x > 785 && event.nativeEvent.contentOffset.x < 1178) {
                                     AnimationFunc8()
                                     AnimationFunc9()
                                     setindex('Concours')
                                 }else if (event.nativeEvent.contentOffset.x > 1178 && event.nativeEvent.contentOffset.x < 1570) {
                                     AnimationFunc12()
                                     AnimationFunc13()
                                     setindex('Resumes')
                                 }else if (event.nativeEvent.contentOffset.x > 1570 && event.nativeEvent.contentOffset.x < 1952) {
                                     AnimationFunc10()
                                     AnimationFunc14()
                                     setindex('ESI-SBA')
                                 }else if (event.nativeEvent.contentOffset.x > 1952 ) {
                                     AnimationFunc11()
                                     AnimationFunc15()
                                     setindex('ESI-SBA')
                                     setArrow('arrowleft')
                                 }
                                 
                        }}
                        
                       
                        
                        >

                <Animated.View style={[Styles.Semestre1,{transform : [
                    {
                        scale : AnimationVal1.interpolate({
        inputRange : [0,0.2,0.4,0.6,0.8,1],
        outputRange : [1,0.8,0.8,0.8,0.8,0.8]
    })
                    }
                ]},{opacity : AnimationVal4.interpolate({
            inputRange: [0,1],
            outputRange : [0,1]
        })}]}>
                <ImageBackground imageStyle={{borderRadius : 30,resizeMode : 'cover'}} source={require('../assets/imageback2.jpg')} style={{width : '100%',height : '100%'}} >
                <View style={Styles.CoverModule}></View>

                <TouchableOpacity style={[Styles.Module,{marginTop : 23}]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWRWJWOU1iV0dFbUk')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Analyse 03</Text>
                </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWaTJoNlplWnJ4Sms')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Algebre 03</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0BysicRmAN2aGeEZrbldJNEM5bW8')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Anglais 02</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.Module]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWVnd0TWFtLXZrRm8')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>ARCHI 02</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWRDA1QldNRFJac2M')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>ECON</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWMW5tYnpnd2ZUWDg')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>ELECF 02</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWX3pYcy1xUDl5REk')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>PRST 01</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWNnBneFJ0d21RbDQ')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>SFSD</Text>
            </TouchableOpacity>


           </ImageBackground>
                </Animated.View>

                <Animated.View style={[Styles.semestre2,{transform : [
                    {
                        scale : AnimationVal1.interpolate({
                            inputRange : [0,0.2,0.4,0.6,0.8,1],
                           outputRange : [0.8,1,0.8,0.8,0.8,0.8]
                         })
                    }
                ]}
                ,{
                    opacity : AnimationVal4.interpolate({
                          inputRange: [0,1],
                            outputRange : [0,1]
                 })}
                ]}>
                <ImageBackground imageStyle={{borderRadius : 30,resizeMode : 'cover'}} source={require('../assets/imageback2.jpg')} style={{width : '100%',height : '100%'}} >
                
                <View style={Styles.CoverModule}></View>

                <TouchableOpacity style={[Styles.Module,{marginTop : 23}]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWVlhiN2YzQlMtRDQ')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Analyse 04 </Text>
               </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWZXpROGEyYWFnTUk')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Anglais 03</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWaUxxUFFIWDl5VUk')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>LOGM</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWcHd2WGd3WVZYbW8')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>OPTOE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWUVhTTDVlYTZERU0')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>POO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B6ANTtDVbRt4UWk3VHVpRXA2c28')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>PRJP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.Module]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWNER5RjkyR0diSms')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>PRST2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0Bzi2TjHEHGMWNnRyUVlqVmR3eE0')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>SINF</Text>
            </TouchableOpacity>




           </ImageBackground>
                </Animated.View>
                <Animated.View style={[Styles.semestre3,{transform : [
                    {
                        scale : AnimationVal1.interpolate({
                            inputRange : [0,0.2,0.4,0.6,0.8,1],
                            outputRange : [0.8,0.8,1,0.8,0.8,0.8]   
                         })
                    }
                ]}
                ,{
                    opacity : AnimationVal4.interpolate({
                          inputRange: [0,1],
                            outputRange : [0,1]
                 })}
                ]}>
                <ImageBackground imageStyle={{borderRadius : 30,resizeMode : 'cover'}} source={require('../assets/imageback2.jpg')} style={{width : '100%',height : '100%'}} >
                
                <View style={Styles.CoverModule}></View>

            <TouchableOpacity style={[Styles.Module,{marginTop : 7}]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B5eU6Vxc3-f7cHhKN1pwbGNaQzQ')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>2011</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B5eU6Vxc3-f7ZlUtQlFpMzJ2cnM')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>2012</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B5eU6Vxc3-f7VEdHRXJHMm9GVlU')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>2013</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B5eU6Vxc3-f7QXZOX0tnZVpCR0E')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>2014</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B5eU6Vxc3-f7UGZKaFV6VkhLMnc')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>2015</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B5Ld87QWqdKsVXhQZldBZWU2LTQ')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>2016</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.Module]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B5eU6Vxc3-f7LXF1TFJIOUk4dFk')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>2017</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/1EbJ8jfBZiqxMBQks7ldiSnRm3co_9Siy')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>2018</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/1tWHHM1ws2_tAOncjaMXY1V82Hg5_iqTx')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>2019</Text>
            </TouchableOpacity>
            

           </ImageBackground>
                </Animated.View>

                <Animated.View style={[Styles.semestre3,{transform : [
                    {
                        scale : AnimationVal1.interpolate({
                            inputRange : [0,0.2,0.4,0.6,0.8,1],
                            outputRange : [0.8,0.8,0.8,1,0.8,0.8]   
                         })
                    }
                ]}
                ,{
                    opacity : AnimationVal4.interpolate({
                          inputRange: [0,1],
                            outputRange : [0,1]
                 })}
                ]}>
                <ImageBackground imageStyle={{borderRadius : 30,resizeMode : 'cover'}} source={require('../assets/imageback2.jpg')} style={{width : '100%',height : '100%'}} >
                
                <View style={Styles.CoverModule}></View>

            <TouchableOpacity style={[Styles.Module,{marginTop : 7}]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/16PsPbMKBq_K0gy0tnTfC7xIk_7D19GSi')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>ANA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/1LR8nc95rhRHYKZu-Q66SVxQOsNixNI1j')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>ALG</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/1IFEXSZHXge2KlucIIoEuuvGyx280U9bP')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>ARCHI</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/12EmSvNt-S2O5luBQ_JD0J4L-Ig4H-S3g')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>ECON</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/1lllibDkTduC70GdIFC1jm9pDBLlmqM85')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>ELECF</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/1sDZxkAbkqmXwCqvIOQQsaUrfqhMlb6GT')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>OPTOE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.Module]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/1pqPeW4WlnxZPDiSGue0nMK3Ih_BJXJoG')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>PRST</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/1_BMbFIRWmvxBLl7n_Tv81HnwM9bCC_Va')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>POO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/1TNp6N6B1vdSy1bxmSLQMxnih8fnr-DoB')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>SFSD</Text>
            </TouchableOpacity>
            

           </ImageBackground>
                </Animated.View>


                <Animated.View style={[Styles.semestre3,{transform : [
                    {
                        scale : AnimationVal1.interpolate({
                            inputRange : [0,0.2,0.4,0.6,0.8,1],
                            outputRange : [0.8,0.8,0.8,0.8,1,0.8]   
                         })
                    }
                ]}
                ,{
                    opacity : AnimationVal4.interpolate({
                          inputRange: [0,1],
                            outputRange : [0,1]
                 })}
                ]}>
                <ImageBackground imageStyle={{borderRadius : 30,resizeMode : 'cover'}} source={require('../assets/imageback2.jpg')} style={{width : '100%',height : '100%'}} >
                
                <View style={Styles.CoverModule}></View>

            <TouchableOpacity style={[Styles.Module,{marginTop : 25}]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B-t0McfkEWuWa0Q0eHhwWWVpV00')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Analyse</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B-t0McfkEWuWbDhDdUV5bjZwNGc')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Algebre</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B-t0McfkEWuWQ1VJMndfVGZxaG8')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Anglais</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B-t0McfkEWuWcWUxQ3RuQTB6Y0k')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>ARCHI</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B-t0McfkEWuWVWJMbklBbzBrRUE')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Concours</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B-t0McfkEWuWUEl0NGM2RGFqUFE')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Economie</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.Module]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B-t0McfkEWuWd0xoYmE0dkZabEE')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Electronique</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B-t0McfkEWuWUWluQUlEd0pieDg')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>ESI-BILDER</Text>
            </TouchableOpacity>
            

           </ImageBackground>
                </Animated.View>

                <Animated.View style={[Styles.semestre3,{transform : [
                    {
                        scale : AnimationVal1.interpolate({
                            inputRange : [0,0.2,0.4,0.6,0.8,1],
                            outputRange : [0.8,0.8,0.8,0.8,0.8,1]   
                         })
                    }
                ]}
                ,{
                    opacity : AnimationVal4.interpolate({
                          inputRange: [0,1],
                            outputRange : [0,1]
                 })}
                ]}>
                <ImageBackground imageStyle={{borderRadius : 30,resizeMode : 'cover'}} source={require('../assets/imageback2.jpg')} style={{width : '100%',height : '100%'}} >
                
                <View style={Styles.CoverModule}></View>

            <TouchableOpacity style={[Styles.Module,{marginTop : 25}]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B-t0McfkEWuWU3J5dXNZQXRxRTA')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Examens</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B-t0McfkEWuWdzF4WDRqQU1oamc')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Logique</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B-t0McfkEWuWVkZQSXVUaVJ6b2c')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Optique</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B-t0McfkEWuWdXhCeTVJY1l4QUE')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>POO</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B-t0McfkEWuWamduVWhRZUxxUDA')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>PROBA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B-t0McfkEWuWRWVhU0JZaWRoZGc')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>Projet</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.Module]} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B-t0McfkEWuWeUphTm9LcVVkbU0')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>SFD</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.Module} onPress={()=> {
                Linking.openURL('https://drive.google.com/drive/folders/0B-t0McfkEWuWUjhYUGlnSmFQRmc')
                 }}>
                  <FontAwesome5 name='chevron-right' style={Styles.iconModule} size={14} color='#001C34' />
                   <Text style={Styles.ModuleText}>SYST</Text>
            </TouchableOpacity>

           </ImageBackground>
                </Animated.View>


            </ScrollView>
            </Animated.View>
            <Animated.View style={{flexDirection : 'row' , marginLeft : 110, zIndex : 50
    }}>
                <Animated.View style={[Styles.page,{backgroundColor : color}]}></Animated.View>
                <Animated.View style={[Styles.page,,{backgroundColor : color2}]}></Animated.View>
                <Animated.View style={[Styles.page,,{backgroundColor : color3}]}></Animated.View>
                <Animated.View style={[Styles.page,{backgroundColor : color4}]}></Animated.View>
                <Animated.View style={[Styles.page,,{backgroundColor : color5}]}></Animated.View>
                <Animated.View style={[Styles.page,,{backgroundColor : color6}]}></Animated.View>
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
        marginRight : 65,
        marginLeft : 75,
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
export default DeuxiemeCp