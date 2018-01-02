import React, { Component } from 'react';
import { Container, Header, Content, List,View, ListItem,Body,Title,Left,Button,Right,Icon, Text,Fab } from 'native-base';

export default class Lists extends Component {
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
            <Title  style={{color: 'black',fontWeight:'bold',fontSize:16}}>Lists</Title>
          </Body>
          <Right />
        </Header>
      <Body>
         <View style={{flex:1,justifyContent:'center'}}>
           <Text style={{fontSize:19,fontWeight:'bold'}}>                 No Lists</Text>
           <Text  style={{color: 'grey',fontSize:15}}>Please tap the + to add your first list</Text>
           </View>
      </Body>
      <Fab style={{ backgroundColor: '#00aced', marginBottom: 10 }} position="bottomRight" >
  
         <Icon name='list-box' style={{color:'white'}}/>
       </Fab>
       </Container>
    );
  }
}