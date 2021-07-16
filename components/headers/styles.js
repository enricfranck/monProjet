import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
  container:{
    position:'absolute',
    top:30,
    zIndex:100,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal:10
  },
  logo:{
    width:35,
    height:35,
    resizeMode:'contain'
  },
  text:{
    color:'red',
    fontSize:25

  }
});

export default styles