import React from "react";
import { AppRegistry, Image, StatusBar,StyleSheet } from "react-native";
import { Container,Card,CardItem, Content,Thumbnail ,Text,Button,Icon, View, List, ListItem } from "native-base";
import { Header, Footer, Left, Right, Body} from "native-base";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const routes = [{name: "Profile",icon: 'contact'},{name: "Lists", icon: 'list-box'},{name: "Moments",icon: 'thunderstorm'}];
let userdetails='';
export default class SideBar extends React.Component {
    constructor() {
        super();
        
        userdetails = {
              username: 'Sandhya',
              userid: '@Sandhya_Mahes',
              following: 75,
              followers: 50,
              Profilepic: '../images/daisyflower.jpg',
            };
            console.log(userdetails + 'user');
      }
    render() {
        const {username, userid, Profilepic, following, followers} = userdetails; 
        console.log(username);
      return (
      
        <Container>
        <Content>
        
        <Card>
        
              <CardItem style={{elevation: 2,borderBottomWidth: 1,borderTopWidth: 1}} >
             
        <View style = {{flex: 1, flexDirection: 'column', padding:10, justifyContent: 'flex-end'}}>
           <Thumbnail large source={require('../images/daisyflower.jpg')} />
             
            <Text style={{fontWeight: 'bold',padding:2}}>{username}</Text>
           
        <Text note style={{padding:2}}>{userid}</Text>   
             
        <View style = {{flexDirection: 'row',padding:5}} >
                <Text style={styles.num}>{following}</Text>
                <Text style={styles.text}> Following </Text>
                <Text style={styles.num}>{followers}</Text>
                <Text style={styles.text}> Followers</Text>
              </View>
        </View>
       
       </CardItem>
      
       <CardItem style={{elevation: 2,borderBottomWidth: 4,borderTopWidth: 4}}>

      
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button noborder
                  onPress={() => this.props.navigation.navigate(data.name)}
                  icon >
                <Left>
                <Icon name={data.icon} style={styles.icons}/>
               
              </Left>
              <Body>
              <Text>{data.name}</Text>
              </Body>
              <Right/>
                
                  
                </ListItem>
              );
            }}
          />
          </CardItem>
          <CardItem >
            <List>
                  <Text>{"\n\n"}Settings and Privacy{"\n\n"}</Text>   
                        
                  <Text>Help Center{"\n\n"}</Text>                 
            </List>
          </CardItem>
          </Card>
          </Content>
          <Footer style={{backgroundColor: 'white'}}>
            <Left>
             <FontAwesome style={{ marginLeft: 10 ,color:'#00aced',fontSize:25 }} name='moon-o'/>
           </Left>
            <Right>
            <FontAwesome style={{ marginRight: 10,color:'#00aced',fontSize:25 }} name='qrcode'/>
            </Right>
          </Footer>
       
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
    },
icons:{
   color:'grey'
    }
    });