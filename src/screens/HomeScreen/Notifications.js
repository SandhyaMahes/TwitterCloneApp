import React from "react";
import { StatusBar,StyleSheet } from "react-native";
import { Container,View, Header,Icon,Title, Left, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import {ScreenFooter} from '../../components/index';

class Notifications extends React.Component {
  static navigationOptions =  ({ navigation}) =>({
      header: (
        <Header hasTabs='true' style={{backgroundColor:'white'}}>
        <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
            <Icon name="menu" style={{color: '#0596CB'}} />
          </Button>
        </Left>
        <Body>
          <Title style={{color: 'black',fontWeight:'bold',fontSize:18}}>Notifications</Title>
          </Body>
      </Header>
      ),
    tabBarIcon: ({ tintColor }) => (
      <Icon ios='ios-notifications' android='md-notifications' style={{color: tintColor}} />
  ),
   })

   render() {
    return (
      <Container>       
       <Body>
          <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{fontSize:18,color:'grey'}}>No Notifications</Text>
       </View></Body>
       <ScreenFooter/>
        </Container>     
    );
}
}

export default Notifications;
