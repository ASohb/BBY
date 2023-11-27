import React,{ Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import LoginScreen from "./screens/Login";
import { createSwitchNavigator, createAppContainer } from "react-navigation";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }



  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <AppContainer />;
    }
    return null;
  }
}

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen:LoginScreen
    },
    BottomTab:{
      screen:BottomTabNavigator
    }
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);
