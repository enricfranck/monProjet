import React from 'react'
import {View,Image,Text, TouchableOpacity} from 'react-native'
import styles from './styles'

const Header = (props) =>{
    const {navigation} =props
    return(
        <View style={styles.container}>
            <Text style={styles.text}></Text>
            <TouchableOpacity
            onPress={()=>
                navigation.navigate('Sign In')}
            >
            <Image style={styles.logo} source={require('../../assets/image/login.png')}/>
            </TouchableOpacity>
        </View>
    )
}

export default Header