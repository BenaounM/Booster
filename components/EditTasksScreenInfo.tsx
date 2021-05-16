import * as WebBrowser from 'expo-web-browser';
import {WebView} from 'react-native-webview'
import React, {Component} from 'react';
import { Platform, StyleSheet, Button, Alert, Dimensions, ImageBackground } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditLikesScreenInfo({ path }: { path: string }) {

  return (
    <View>
      <View style={{flex:0.75}}>
      <ImageBackground style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height}} source={require('../assets/images/insta-bg.jpg')}>
      <Text style={{flex:0.4}}></Text>
      <Button
        title="Avaialable?"
        color= "#0000ff"
        onPress={() => Alert.alert('Coming Soon')}
        />
      </ImageBackground>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
