import React, { Component } from 'react';
import {StyleSheet, Image,} from 'react-native';
import { Container,Content, View, Header,Footer,Item,Icon,Input,Button,Left,Body,Right, Text,Card,CardItem,Title,H1} from 'native-base';
import {ScreenFooter} from '../../components/index';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default class SearchTab extends Component  { 
  static navigationOptions = ({ navigation}) =>({
   
   header: (
    
    <Header style={{backgroundColor:'white'}}>
    <Left>
    <Button transparent onPress={() =>navigation.goBack()} >
        <Icon name="arrow-back" style={{color: '#00aced'}} />
      </Button>
    </Left>
    <Body>
    <Item style={{width: 200}}>
    <Input placeholder="Search Twitter" />
  </Item>
    </Body>
    <Right >
    <FeatherIcon style={{ fontSize:23,marginRight: 10, color: '#00aced' }} name='user-plus'></FeatherIcon>
    </Right>
  </Header> 
    ),
    
    tabBarIcon: ({ tintColor }) => (
          <Icon name="search" style={{color: tintColor}} />
    ),
     })
    
render() {
 
    return (
      <Container>
        <Content padder>
        
       </Content>
       <ScreenFooter />
   </Container>
    );
}
}

