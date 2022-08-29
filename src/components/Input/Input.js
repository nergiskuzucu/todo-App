import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import styles from "./Input.style"

const Input = ({setText,text,handleAddTodo}) => {
  const [changeColor,setChangeColor]=useState('#808080')

  return (
    <View style={styles.input_container}>

        <TextInput
          style={styles.input_textInput}
          placeholder="Yapılacak Ekle..."
          placeholderTextColor="#ebf0ef"
          onChangeText={setText}
          value={text}
          onFocus={()=>setChangeColor("#dbd69e")}
          onBlur={()=>setChangeColor("#76dbd0")}
        />

        <TouchableOpacity 
        style={{
        margin: 10,
        padding: 10,
        backgroundColor: `${changeColor}`,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        fontWeight: 'bold',}} 
        onPress={handleAddTodo}
        >
          <Text style={{color: 'white'}}>Ekle</Text>
        </TouchableOpacity>
        
      </View>
  )
}

export default Input