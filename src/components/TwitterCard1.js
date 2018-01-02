import React from 'react';
import { Image, View } from 'react-native';
import {  Card,CardItem,Left,Right,Thumbnail,Body,  Button, Icon, Text  } from 'native-base';
import UserDetails from './UserDetails';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const TwitterCard1 = () => {  
    return (   
         <Card>
           <CardItem>
             <Left>
               <Thumbnail source={require('../images/react-native.jpg')} />
            
               <Body style ={{flexDirection: 'row'}}>
                 
                 <UserDetails
                   titleText="React Native "
                   bodyText="Learn once, write anywhere: Build mobile apps with React"
                   twitterName='@ReactNative'
                   lastSeenTime='57s'/>
                
                <EvilIcons name='chevron-down' style={{fontSize:25,color:'grey',justifyContent: 'space-around'}}/>
                
          </Body>
          
             </Left>
             
             
             
           </CardItem>
           <CardItem cardBody>
 
           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'flex-end',alignSelf: 'flex-end' }}>
                <Image source={require('../images/react-native.jpg')} style={{height: 180, width: 280,alignSelf: 'flex-end', }}/>
              </View>
            </CardItem>
           <CardItem style={{justifyContent: 'flex-end'}}>

           <Button small iconLeft transparent>
                <EvilIcons name='comment' style={{fontSize:19,color:'grey'}}/>
                 <Text style={ styles.buttonTextStyle }>35    </Text>
               </Button>
              

             <Button small iconLeft transparent>
                <EvilIcons name="retweet" style={{fontSize:21,color:'grey'}}/>
                <Text style={ styles.buttonTextStyle } >10    </Text>
              </Button>

               <Button small iconLeft transparent>
                 <EvilIcons name="heart" style={{fontSize:20,color:'grey'}} />
                 <Text style={ styles.buttonTextStyle }>150    </Text>
               </Button>

               <Button default small transparent>
                 <EvilIcons name="envelope" style={{fontSize:20,color:'grey'}} />
                 <Text>  </Text>
                 </Button>


           </CardItem>
         </Card>
       
     );
   };

     const styles = {
         
          buttonTextStyle: {
            paddingLeft: 5,
            color: 'grey'
          },
     };

export { TwitterCard1 };