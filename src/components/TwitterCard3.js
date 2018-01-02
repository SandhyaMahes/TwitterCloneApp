import React from 'react';
import { Image, View } from 'react-native';
import {  Card,CardItem,Left,Right,Thumbnail,Body,  Button, Icon, Text  } from 'native-base';
import UserDetails from './UserDetails';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const TwitterCard3 = () => {  
    return (   
         <Card>
           <CardItem>
             <Left>
               <Thumbnail source={require('../images/nativebase.jpg')} />
            
               <Body style ={{flexDirection: 'row'}}>
                  
                 <UserDetails
                   titleText="NativeBase "
                   bodyText="NativeBase is an open source UI library for developing awesome #ReactNative apps."
                   twitterName='@NativeBaseIO'
                   lastSeenTime='15m'/>
                
                <EvilIcons name='chevron-down' style={{fontSize:25,color:'grey',justifyContent: 'space-around'}}/>  
          </Body>
         </Left>
                         
           </CardItem>
           <CardItem cardBody>
 
           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'flex-end',alignSelf: 'flex-end' }}>
                <Image source={require('../images/nativebase.jpg')} style={{height: 180, width: 280,alignSelf: 'flex-end', }}/>
              </View>
            </CardItem>
           <CardItem style={{justifyContent: 'flex-end'}}>

           <Button small iconLeft transparent>
                <EvilIcons name='comment' style={{fontSize:19,color:'grey'}}/>
                 <Text style={ styles.buttonTextStyle }>78    </Text>
               </Button>
              
             <Button small iconLeft transparent>
                <EvilIcons name="retweet" style={{fontSize:21,color:'grey'}}/>
                <Text style={ styles.buttonTextStyle } >14    </Text>
              </Button>

               <Button small iconLeft transparent>
                 <EvilIcons name="heart" style={{fontSize:20,color:'grey'}} />
                 <Text style={ styles.buttonTextStyle }>134    </Text>
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

export { TwitterCard3 };