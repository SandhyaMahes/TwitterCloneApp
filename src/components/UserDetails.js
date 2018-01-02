import React from 'react';
import PropTypes from 'prop-types'
import { View, Text, Badge, Icon } from 'native-base';
const UserDetails = (props) => {
  UserDetails.propTypes = {
    titleText: PropTypes.string,
    bodyText: PropTypes.string,
    twitterName: PropTypes.string,
    lastSeenTime: PropTypes.string
};
  const { titleText, bodyText, twitterName, lastSeenTime} = props;
  
return (
<View>
   <View style={{flexDirection: 'row'}}>
      <Text style={styles.titleText} onPress={this.onPressTitle}>
          {titleText}
      </Text>
    <Badge small primary style={{ width: 19,height:19, backgroundColor: '#00aced' }} >
     <Icon name="checkmark" style={{ fontSize: 10, color: '#fff', lineHeight: 15 }}/>
    </Badge>
        <Text note>  {twitterName} </Text>
        <Text note>{lastSeenTime}</Text>
      </View>
      <Text style={styles.baseText}>
        {bodyText}
      </Text>
    </View>
    );

};

const styles = {
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
};

export default UserDetails ;
