import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content,View, Button, Text, Right,Icon, Body, Left,  Fab } from "native-base";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

export default class Moments extends Component {
  static navigationOptions =  ({ navigation}) =>({
    
   
      header: (
        <Header hasTabs='true' style={{backgroundColor:'white'}}>
        <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
            <Icon name="menu" style={{color: '#0596CB'}} />
          </Button>
        </Left>
        <Body>
          <Title style={{color: 'black',fontWeight:'bold',fontSize:18}}>Home</Title>
          </Body>
      </Header>
      ),
   })
  render() {
    return (
      <Container>
        <Header  style={{backgroundColor:'white'}}>
          <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
             <Icon name="arrow-back" style={{color: '#00aced'}} />
            </Button>
          </Left>
          <Body>
            <Title  style={{color: 'black',fontWeight:'bold',fontSize:16}}>Moments</Title>
          </Body>
          <Right />
        </Header>
        <Body>
         <View style={{flex:1,justifyContent:'center'}}>
           <Text style={{fontSize:19,fontWeight:'bold'}}>                               No Moments{"\n"}</Text>
           <Text  style={{color: 'grey',fontSize:15}}>   No Moments created yet When you do                               
                   you will find them here.</Text>
           </View>
      </Body>
      <Fab style={{ backgroundColor: '#00aced', marginBottom: 10 }} position="bottomRight" >
  
         <MaterialIcon name='flash-on' style={{color:'#fff'}}/>
       </Fab>
      
      </Container>
    );
  }
}
