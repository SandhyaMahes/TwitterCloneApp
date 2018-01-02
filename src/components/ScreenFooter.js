import React from 'react';
import { Footer,FooterTab ,Right, Button, Icon,Text } from 'native-base';
import FeatherIcon from 'react-native-vector-icons/Feather';

const ScreenFooter = () => {
 
    return (
     
        <Footer style={{backgroundColor: 'white'}}>
        <FooterTab style={{backgroundColor: 'white'}}>
        <Button vertical>
        <Text uppercase={false} style={{fontSize: 15, color: '#00aced', fontWeight: 'bold'}}>All</Text>
            </Button>
            
          
          <Button>
            <Text uppercase={false} style={{ fontSize: 15, color:'grey' ,fontWeight: 'bold'}}>Mentions</Text>
          </Button>
          
        </FooterTab>
        <Right>
            <FeatherIcon style={{ fontSize:23,marginRight: 10, color: '#00aced' }} name='settings'></FeatherIcon>
        </Right>
      </Footer>
     
  );
}

export { ScreenFooter };