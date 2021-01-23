import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState('');
  
  const add = () =>{
    setResult(parseInt(text1) + parseInt(text2));
  }

  const subtract = () =>{
    setResult(parseInt(text1) - parseInt(text2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result: {result}</Text>
      <TextInput style={styles.textInput}
        onChangeText={text1 => setText1(text1)} 
        value={text1}
        keyboardType={'numeric'}
      />
      <TextInput style={styles.textInput}
        onChangeText={text2 => setText2(text2)} 
        value={text2}
        keyboardType={'numeric'}
      />
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
        <Button color="#000" onPress={add} title="+" />
        <Button color="#000" onPress={subtract} title="-" />
      </View>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',  
  },
  text: {
    fontSize: 18,
  },
  textInput: {
    height: 40, 
    width: "50%", 
    borderColor: '#808080', 
    borderWidth: 2, 
    margin: 5,
    fontSize: 18,    
  },  
});
