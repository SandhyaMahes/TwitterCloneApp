import React from "react";
import { StyleSheet,Image } from "react-native";
import { Container, Icon,Thumbnail,Fab,Header,Left,Right,Button,Body,Title } from "native-base";
import getTheme from '../../../native-base-theme/variables/material';
import {ScreenFooter} from '../../components/index';
import Hometab from './Hometab';
import HomeScreenTab from './index'

class HomeScreen extends React.Component {
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
    
    tabBarIcon: ({ tintColor }) => (
        <Icon name="home" style={{color: tintColor}} />
   ), })
  
  render() {
    const { navigation } = this.props;  
    return  (
      <Container>    
      <Hometab/>
      <Fab style={{ backgroundColor: '#00aced', marginBottom: 10 }} position="bottomRight" >
  
          <Thumbnail source={require('../../images/tweet.gif')}/>
       </Fab>
    </Container>
    );
}
}
export default HomeScreen;
