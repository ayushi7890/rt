import React from 'react';
import { View, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

const RetakePhotoScreen = ({ navigation }) => {
  // implement logic to capture a new image and update the 'capturedImage' state

  return (
    <View style={styles.container}>
      {/* display the captured image */}
      {capturedImage && <Image style={styles.image} source={{ uri: capturedImage }} />}
      <Button title="Capture Image" onPress={() => /* Capture logic */ } />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ConfirmImage', { pickedImagePath: capturedImage })}
      >
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default styles;

