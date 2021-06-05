import * as WebBrowser from 'expo-web-browser';
import {WebView} from 'react-native-webview'
import React, {useState,Component } from 'react';
import { Platform, StyleSheet,Alert, Button, Dimensions, ImageBackground } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default class EditLikesScreenInfo extends Component {
  constructor(props){
    super(props);
  this.state = {
    credit: 50,
    userFollow: 'meme.zone.gl',
    mainUrl: "https://www.instagram.com/",
    webview: null,
    runFirst: `
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
`
  }
  this.Add = this.Add.bind(this);
  this.Skip = this.Skip.bind(this);
}
  render(){

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
        title={"Credit: " + this.state.credit + " Points"}
        color= "#DAA520"
        />
      </View>


      <View style={{flex: 0.5}}>
        <WebView
        ref={r => this.state.webview = r}
        source = {{uri:this.state.mainUrl + this.state.userFollow}}
        style = {{marginTop: 10,height:400, width: Dimensions.get('window').width, flex: 0}}
        scrollEnabled = 'false'
        bounces={false}
        javaScriptEnabled
        scalesPageToFit = { Platform.OS === 'android'}
        injectedJavaScript={this.state.runFirst}
        onMessage={this.Add}
        />
      </View>

      <View style={{flex: 0.8}}>
        <Text style = {{flex: 0.8}}>

        </Text>
      <Button
        title= "Skip"
        color= "#0000ff"
        onPress={this.Skip}
        />
      </View>
    </View>
  );
  
}

 Skip() {
  var profiles = ["amirachebli", "arbi_mogaadi","nassimbourguiba","nass.mzughi","arabambition_","mahdi.baccouch","motivation_gagnant",
  "nourkamark","rayen_officiel_9","mortadha_benouanes","meriem_ben_moulehem__malika","hassanayari","souhir_sah","zina_gassrinia",
  "chawat____22","djalilpalermo_off","marc.lamti","hamza_lahmar7","maaloul_ali_","_amal_fathi","emna_lotfi"];
  var userFollow = 'meme.zone.gl';
  const min = 0;
  const max = profiles.length - 1;
  const rand = parseInt((min + Math.random() * (max - min)).toString());
  userFollow = profiles[rand];
  const redirectTo = 'window.location = "' + this.state.mainUrl + userFollow + '"';
  this.state.webview.injectedJavaScript =this.state.runFirst;
  this.state.webview.injectJavaScript(redirectTo);
}
 Add(event) {
   if(event.nativeEvent.data == "Follow clicked")
     this.setState( {credit: this.state.credit +2});
  this.Skip();
}

 handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}


}