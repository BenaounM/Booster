import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditFollowsScreenInfo from '../components/EditFollowsScreenInfo';
import { Text, View } from '../components/Themed';
import * as wb from 'react-native-webbrowser'

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Follows</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditFollowsScreenInfo path="/screens/InstaLoginScreen.tsx" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
