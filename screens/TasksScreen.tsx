import * as React from 'react';
import { StyleSheet, ImageBackground, Dimensions  } from 'react-native';

import EditTasksScreenInfo from '../components/EditTasksScreenInfo';
import { Text, View } from '../components/Themed';

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditTasksScreenInfo path="/screens/TabTwoScreen.tsx" />
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
    alignContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
