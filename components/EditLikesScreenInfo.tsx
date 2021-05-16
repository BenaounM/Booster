import * as WebBrowser from 'expo-web-browser';
import {WebView} from 'react-native-webview'
import React, {Component} from 'react';
import { Platform, StyleSheet, Button, Alert, Dimensions, ImageBackground } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditLikesScreenInfo({ path }: { path: string }) {

  const runFirst = `

  var followButtClassName = "";
  var followButtons = document.getElementsByTagName("button");
  for (var i = 0; i < followButtons.length; i++) 
  {
  
  if (followButtons[i].innerHTML == "Follow") 
  {
    // found it ...
    followButtClassName = followButtons[i].className;
    break;
  }

  }

var ignoredElems = document.getElementsByTagName("*");
var ignoredTags = ["NAV","ARTICLE","A","UL"];
for (var i = 0; i < ignoredElems.length; i++) 
{
  if (ignoredTags.includes(ignoredElems[i].tagName)) 
  {
     ignoredElems[i].style.display = 'none';
  }
  if (ignoredTags.includes(ignoredElems[i].tagName)) 
  {
     ignoredElems[i].style.display = 'none';
  }
}

var followElems = document.getElementsByClassName(followButtClassName);
alert(followElems.length);
  for (var i = 0; i < followElems.length; i++) {
    followElems[i].onclick = function() 
  {
    window.ReactNativeWebView.postMessage(JSON.stringify({type: "click", message : "ok"}));
  }

}
`;
  return (
    <View
     style={{
      flexDirection: "column",
      padding: 10
     }}>
       <ImageBackground style={{flex: 0}} source={require('../assets/images/insta-bg.jpg')}>
      <View style={{flex: 0.2}}>
        <WebView
        source = {{uri:'www.instagram.com/meme.zone.gl'}}
        style = {{marginTop: 10,height:400, width: Dimensions.get('window').width, flex: 0}}
        scrollEnabled = 'false'
        bounces={false}
        javaScriptEnabled
        scalesPageToFit = { Platform.OS === 'android'}
        injectedJavaScript={runFirst}
        onMessage={
          event =>
           {
          console.log('_onMessage', JSON.parse(event.nativeEvent.data));
          const res = JSON.parse(event.nativeEvent.data);
          if (res.message === 'ok') 
          {
            alert('2 points added to your balance');
          }
        }
      }
        />
      </View>

      <View style={{flex: 0.8}}>
        <Text style = {{flex: 0.8}}>

        </Text>
      <Button
        title="Skip"
        color= "#0000ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>

      </ImageBackground>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
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
