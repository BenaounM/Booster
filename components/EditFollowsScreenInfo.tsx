import * as WebBrowser from 'expo-web-browser';
import {WebView} from 'react-native-webview'
import React, {useState} from 'react';
import { Platform, StyleSheet, Button, Alert, Dimensions, ImageBackground } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditLikesScreenInfo({ credit }: { credit: number }) {

  
  const mainUrl = "https://www.instagram.com/";
  var webview = null;
  var userFollow = 'meme.zone.gl';
  var buttText = "Skip";
  
  var profiles = ["amirachebli", "arbi_mogaadi","nassimbourguiba","nass.mzughi","arabambition_","mahdi.baccouch","motivation_gagnant",
  "nourkamark","rayen_officiel_9","mortadha_benouanes","meriem_ben_moulehem__malika","hassanayari","souhir_sah","zina_gassrinia",
  "chawat____22","djalilpalermo_off","marc.lamti","hamza_lahmar7","maaloul_ali_","_amal_fathi","emna_lotfi"]

  const runFirst = `
  var followButtClassName = "";
  var followButtons = document.getElementsByTagName("button");
  instaLoading = true;
  for (var i = 0; i < followButtons.length; i++) 
  {
    instaLoading = false;
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
  if (followElems.length == 1) 
    {
       alert("Now the user clicks on Follow");
    }
  else if (followElems.length == 0 && !instaLoading) 
    {
      window.ReactNativeWebView.postMessage("Already followed, skip to next follow");
    }

   for (var i = 0; i < followElems.length; i++) 
    {
     followElems[i].onclick = function() 
      {
        window.ReactNativeWebView.postMessage("Follow clicked");
      }
    }
`;
  return (
    <View
     style={{
      flexDirection: "column",
      padding: 10
     }}>

       <View style={{flex: 0.2}}>
        <Text style = {{flex: 0.1}}>

        </Text>
      <Button
        title={"Credit: " + credit + " Points"}
        color= "#DAA520"
        onPress={Skip}
        />
      </View>


      <View style={{flex: 0.5}}>
        <WebView
        ref={r => webview = r}
        source = {{uri:mainUrl + userFollow}}
        style = {{marginTop: 10,height:400, width: Dimensions.get('window').width, flex: 0}}
        scrollEnabled = 'false'
        bounces={false}
        javaScriptEnabled
        scalesPageToFit = { Platform.OS === 'android'}
        injectedJavaScript={runFirst}
        onMessage={Skip}
        />
      </View>

      <View style={{flex: 0.8}}>
        <Text style = {{flex: 0.8}}>

        </Text>
      <Button
        title= {buttText}
        color= "#0000ff"
        onPress={Skip}
        />
      </View>
    </View>
  );
  function Skip() {
    const min = 0;
    const max = profiles.length - 1;
    const rand = parseInt((min + Math.random() * (max - min)).toString());
    userFollow = profiles[rand];
    const redirectTo = 'window.location = "' + mainUrl + userFollow + '"';
    webview.injectedJavaScript =runFirst;
    webview.injectJavaScript(redirectTo);
    buttText = "ee"
  }
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
