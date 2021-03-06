
import React, { Component } from "react";
import Expo from "expo";
import HomeScreen from "./src/screens/HomeScreen/index.js";

import { Container, Content, Picker, Button,Icon, Text } from "native-base";

export default class TwttterCloneApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <HomeScreen />
  }
}
