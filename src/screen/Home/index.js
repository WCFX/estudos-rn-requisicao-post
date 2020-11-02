import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';

import styles from './style';


const Home = () => {

  const [title, setTitle ] = useState('');
  const [body, setBody ] = useState('');


  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInputs}>

        <Text style={styles.titleText}>Título:</Text>
        <TextInput
          style={styles.inputTitle}
          value={title}
          onChangeText={setTitle}
        />
        
        <Text style={styles.titleText}>Corpo:</Text>
        <TextInput
          style={styles.inputBody}
          value={body}
          onChangeText={setBody}
        />

      </View>

    </SafeAreaView>
  )
};


export default Home;