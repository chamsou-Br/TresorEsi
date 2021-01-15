import React , {useState , useRef }from 'react';
import {View,Text , TouchableOpacity , Modal ,StyleSheet,Linking } from 'react-native';

const ContribtionScreen = () => {

    return(
        <View style={Styles.ContriptionScreen}>
            <Text style={Styles.title}>Contribution & Feedback</Text>
            <TouchableOpacity onPress={()=> Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSfDcpyG7hsMw-DsyowZhlfbhxgeyeAZzSvrYBfYpoWLSfpzjg/viewform')} style={Styles.ContributionTouchable} >
                <Text style={Styles.ContribtionText}>Contribute</Text>
            </TouchableOpacity>

            <Text style={Styles.Root}>chamsou.Br</Text>
 
                
        </View>
    )
}

const Styles = StyleSheet.create({
    ContriptionScreen : {
        flex : 1,
        alignItems : 'center' ,
        textAlign : 'center' ,
        justifyContent : 'center'
    },
    title : {
        fontSize : 28 ,
        fontWeight :"bold",
        color : '#001C34',
        marginBottom : 20
    },
    ContributionTouchable : {
        backgroundColor : '#001C34',
        width : 250,
        paddingVertical : 20,
         borderRadius : 20
    },
    ContribtionText : {
        fontSize : 22,
        fontWeight :'bold',
        color : '#FFF',
        textAlign : 'center',
    },
    Root : {
        position :"absolute",
        fontSize : 16 ,
        color:'#001C34',
        top : 620,
        left : 300,
        borderBottomWidth : 1
    }
})
export default ContribtionScreen