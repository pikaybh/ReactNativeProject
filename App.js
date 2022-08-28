import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  Linking,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [name, setName] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please srite your name: 
      </Text>
      <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value) => setName(value)}
        maxLength={40}
        keyboardType='phone-pad'
      />
      <Text style={styles.text}>
        Your name is: { name }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  }
});

export default App;