import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Image, TouchableOpacity ,AsyncStorage} from 'react-native';
import CarsList from './components/CarsList';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
const RootStack = createStackNavigator();

export default function App() {
  const removeLogin=async()=>{
    try {
     await AsyncStorage.removeItem('user')
    } catch (error) {
      
    }
  }
React.useEffect(()=>{
  removeLogin();
})
  return (
    <NavigationContainer >
      <RootStack.Navigator>

      
        <RootStack.Screen
          name='Home'
          component={CarsList}
          options={({navigation})=>({
            headerShown:true,
            title:"Ma voiture",
            headerTransparent:true,
            headerRight: ()=>(
              <TouchableOpacity
            onPress={()=>{}}
            >
            <Image style={styles.logo} source={require('./assets/image/login.png')}/>
            </TouchableOpacity>
            )
        })}
        />
      </RootStack.Navigator>
      
    <StatusBar style='auto'/>
    </NavigationContainer>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  logo:{
    width:35,
    height:35,
    resizeMode:'contain'
  },
})