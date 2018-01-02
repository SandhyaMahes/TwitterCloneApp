import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import Profile from "../Profile";
import Lists from '../Lists';
import SearchTab from './SearchTab'
import Notifications from './Notifications';
import Messages from './Messages';
import Moments from '../Moments';
import { TabNavigator, StackNavigator, DrawerNavigator } from "react-navigation";
import SideBar from "../SideBar";
import { ScrollView, Text } from 'react-native';
import { Header, Left, Body, Button, Icon, Title } from 'native-base';

const HomeScreenTab = TabNavigator({

  Home: { 
    screen: HomeScreen,
  },
  Search: {
   screen: SearchTab,
  },
  Notifications: {
    screen: Notifications,
  },
  Messages: {
    screen: Messages },
  },
  {

  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
  activeTintColor: '#00aced',
  inactiveTintColor: 'grey',
  activeBackgroundColor: "#ffffff",
  inactiveBackgroundColor: "#ffffff",
  showIcon: true,
  showLabel: false,
  indicatorStyle:{
    backgroundColor:'#00aced',
  },
  style: {
    backgroundColor: 'white',
  },
  },
  });

const HomeScreenRouter = DrawerNavigator( {
    
    Home: { screen: HomeScreenTab  },
    Profile: { screen: Profile },
    Lists: {screen: Lists} ,
    Moments: { screen: Moments},  
  },
  {   
    contentComponent: props => <SideBar {...props} />,
    drawerToggleRoute: 'DrawerToggle',   
   drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
  } 
);
 
 export default StackNavigator({
  DrawerNav: { screen: HomeScreenRouter }
},);