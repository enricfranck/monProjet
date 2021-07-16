import React from 'react'
import {Dimensions, FlatList,View} from 'react-native'
import Cars from './Cars'
import styles from './styles'
import CarItem from '../carItems'

const CarsList=(props)=>{

    return(
        <View style={styles.container}>
            <FlatList
            data={Cars}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item})=><CarItem car={item}/>}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get("window").height}
            />
      </View>
    )
}
export default CarsList