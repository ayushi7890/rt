import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DRClassificationResultsScreen = ({ route }) => {
  const { severityLevel, detectedFaces, additionalInfo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Severity Level: {severityLevel}</Text>
      {/* display detected faces information and additional recommendations here */}
      {/* implement UI components for displaying detected faces and additional info */}
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
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

});

export default styles;

