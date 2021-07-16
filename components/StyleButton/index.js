import React from 'react'
import {ImageBackground,View, Text,TouchableOpacity} from 'react-native'
import styles from './styles'

const StyleButton=(props)=>{
/*
    const type =props.type;
    const content = props.content;
    const onPress= props.onPress;
*/
    const {type,content,onPress}=props;

    const backgroundColor= type=== 'primary'? '#171a20cc':'#FFFFFFA6'
    const textColor= type=== 'primary'? '#FFFFFF':'#171a20'
   
    return(
        <View style={styles.container}>
            <TouchableOpacity 
            style={[styles.button,{backgroundColor:backgroundColor}]}
            onPress={()=>onPress()}
            >
                <Text style={[styles.text,{color:textColor}]} >{content}</Text>
            </TouchableOpacity>
      </View>
    )
}
export default StyleButton