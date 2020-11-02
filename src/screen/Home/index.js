import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

import styles from './style';


const Home = () => {

  const [title, setTitle ] = useState('');
  const [body, setBody ] = useState('');

  
  async function handleSend(){
    if(title != '' && body != '') {

      const req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 345
        }),
        headers:{
          'Content-Type': 'application/json'
        }
      });

      const json = await req.json();

      alert(`Adicionado! ID ${json.id} - ${json.title}`);
    } else {
      alert("Preencha as informações.");
    }
  }


  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInputs}>

        <Text style={styles.titleText}>Título:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.titleText}>Corpo:</Text>
        <TextInput
          style={styles.input}
          value={body}
          onChangeText={setBody}
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
};


export default Home;