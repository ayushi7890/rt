import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ConfirmImageScreen = ({ route, navigation }) => {
  const { pickedImagePath } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: pickedImagePath }} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ImageAdjustment', { pickedImagePath })}
      >
        <Text style={styles.buttonText}>Adjust Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RetakePhoto')}
      >
        <Text style={styles.buttonText}>Retake Photo</Text>
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
