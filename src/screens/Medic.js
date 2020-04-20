import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Medic() {
  return (
    <View style={styles.container}>
      <Text>Open up Medic to start working on your app!</Text>
    </View>
  );
}
