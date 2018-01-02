import React from "react";
import { AppRegistry, Alert,StyleSheet } from "react-native";

import {Text,Container,Card,CardItem,Body,Content,Thumbnail,Fab,View, Header,Left,Right,Icon,Title,Button,H1
} from "native-base";

export default class Profile extends React.Component {
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
         <Header  style={{backgroundColor:'#00aced',height:50}}>
          <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
             <Icon name="arrow-back" style={{color: 'white'}} />
            </Button>
          </Left>
          <Body>
           
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
            <View style = {{flex: 1, flexDirection: 'column', padding:10, justifyContent: 'flex-end'}}>
        
            <Thumbnail large source={require('../images/daisyflower.jpg')} />
            <Text style={{fontWeight: 'bold',padding:2}}>Sandhya</Text>
           
        <Text note style={{padding:2}}>@Sandhya-Mahes</Text>   
             
        <View style = {{flexDirection: 'row',padding:5}} >
                <Text style={styles.num}>75</Text>
                <Text style={styles.text}> Following </Text>
                <Text style={styles.num}>50</Text>
                <Text style={styles.text}> Followers</Text>
              </View>
              </View>
              
            </CardItem>
          </Card>
          <Fab style={{ backgroundColor: '#00aced', marginBottom: 10 }} position="bottomRight" >
  
          <Thumbnail source={require('../images/tweet.gif')}/>
       </Fab>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  num:{          
    fontSize:15,
    fontWeight:'bold'
      },
  text: {
     fontSize:15,
     color:'grey',
      }
      });