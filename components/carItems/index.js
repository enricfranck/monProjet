import React, { useState } from 'react'
import {ImageBackground,View, Text,Modal,TextInput, Button,AsyncStorage,Image} from 'react-native'
import StyleButton from '../StyleButton'
import styles from './styles'

const carItem=(props)=>{

  const {name,tagLine, image}=props.car;
  const [isVisibleLogin, setVisibleLogin]=useState(false);
  const [isVisibleComment, setVisibleComment]=useState(false);
  const [inputValue,setInputValue]=useState('');
  const [email,setEmail]=useState('');
  const [mdp,setMdp]=useState('');


  const storeData=async ()=>{
    
    if(email!=''){
        if(mdp!=''){
            try {

               await AsyncStorage.setItem('user',email)
               
               setEmail('');
               setMdp('')
               toggleModalVisibilityLogin();
               toggleModalVisibilityComment();
            } catch (error) {
                alert('failed'+error)
            }
        }else{
            alert('Entrer votre mot de passe')
        }
    }else{
        alert('Entrer votre email')
    }

    
}

  const toggleModalVisibilityLogin= ()=>{
    setVisibleLogin(!isVisibleLogin);
  }

  const toggleModalVisibilityComment= ()=>{
    setVisibleComment(!isVisibleComment);
  }

  const getLogin=async()=>{
    try {
      //setLogin();
      //removeLogin();
      let value= await AsyncStorage.getItem('user')
     
      if(value!=null){
        setVisibleComment(true);
        toggleModalVisibilityComment();
      }else{
        toggleModalVisibilityLogin();
      }
    } catch (error) {
      
    }
  }
  
  const setLogin=async()=>{
    try {
     await AsyncStorage.setItem('user','franck')
    } catch (error) {
      
    }
  }
 
  

    return(
        <View style={styles.carContainer}>
        <ImageBackground
          source={image}
          style={styles.image}
        />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagLine}</Text>
      </View>

      <View style={styles.buttonsContainer}>
         
          <StyleButton 
            type='second'
            content={"Commenter..."}
            onPress={getLogin}
          />
      </View>

      <Modal animationType='slide'
      transparent visible={isVisibleComment}
      presentationStyle='overFullScreen'
      onDismiss={toggleModalVisibilityComment}
      >
          <View style={styles.viewWrapper}>
            <View style={styles.modalViewC}>
          <Image style={styles.logo} source={image}/>
              <Text style={styles.textHead}>{name}</Text>
                <TextInput 
                onSubmitEditing={()=> toggleModalVisibilityComment()}
                placeholder='Entrer votre commentaire...'
                value={inputValue}
                style={styles.textInputC}
                onChangeText={(value)=>setInputValue(value)}
                multiline={true}
                numberOfLines={4}
              />
              <View style={styles.buttonLogin}>
             <Button title='Envoyer' onPress={toggleModalVisibilityComment}/>
             <Button title='Annuler' onPress={toggleModalVisibilityComment}/>
             </View>
            </View>
          </View>

      </Modal>
      
      <Modal animationType='slide'
      transparent visible={isVisibleLogin}
      presentationStyle='overFullScreen'
      onDismiss={toggleModalVisibilityLogin}
      >
          <View style={styles.viewWrapper}>
            <View style={styles.modalViewL}>
              <Text style={styles.textHead}>Connectez-vous</Text>
                <TextInput placeholder='Email..'
                value={email}
                style={styles.textInputL}
                onChangeText={(value)=>setEmail(value)}
              />
              <TextInput placeholder='Mot de passe'
                value={mdp}
                secureTextEntry={true}
                style={styles.textInputL}
                onChangeText={(value)=>setMdp(value)}
              />
             <View style={styles.buttonLogin}>
             <Button title='Connecter' onPress={storeData} />
             <Button title='Annuler' onPress={toggleModalVisibilityLogin}/>
             </View>
            </View>
          </View>

      </Modal>
      </View>
    )
}
export default carItem