import {  Dimensions, StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
const {width}=Dimensions.get('window');
const styles=StyleSheet.create({
    carContainer:{
        width:'100%',
        height:Dimensions.get('window').height,
      },
      titles:{
        marginTop:'30%',
        width:'100%',
        alignItems:'center'
      },
      title:{
       fontSize:40,
       fontWeight:'500'
      },
      subtitle:{
        fontSize:16,
        color:'#ffffff' 
      },
      image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
      },

      buttonsContainer:{
        position:'absolute',
        bottom:10,
        width:'100%'
      },
      viewWrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"rgba(0,0,0,0.2)"
      },
      modalViewC:{
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:'50%',
        left:'50%',
        elevation:5,
        transform:[{translateX:-(width * 0.4)},
                   {translateY:-90}],
        height:200,
        width:width*0.8,
        backgroundColor:'#fff',
        borderRadius:7
      },
       modalViewL:{
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:'50%',
        left:'50%',
        elevation:5,
        transform:[{translateX:-(width * 0.4)},
                   {translateY:-90}],
        height:180,
        width:width*0.8,
        backgroundColor:'#fff',
        borderRadius:7
      },
      textInputC:{
        width:'80%',
        borderRadius:5,
        paddingVertical:8,
        paddingHorizontal:16,
        borderColor:"rgba(0,0,0,0.2)",
        borderWidth:1,
        marginBottom:8,
        height:80
      },
      textInputL:{
        width:'80%',
        borderRadius:5,
        paddingVertical:8,
        paddingHorizontal:16,
        borderColor:"rgba(0,0,0,0.2)",
        borderWidth:1,
        marginBottom:8,
        height:40
      },
      textHead:{
        fontSize:15,
        fontWeight:'bold'
      }, 
      logo:{
        width:100,
        height:50
      },
      buttonLogin:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:"70%"
      }

});

export default styles