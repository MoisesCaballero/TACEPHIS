import React from 'react';
import { Button } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text, View } from 'react-native';
import { iconColor } from '../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Account({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        icon={<FontAwesome5 name="hamburger" color={iconColor} size={20} />}
        title=""
        onPress={() => navigation.openDrawer()}
      />
      <Text>Open up Account to start working on your app!</Text>
    </View>
  );
}
